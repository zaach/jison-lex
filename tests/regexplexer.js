var RegExpLexer = require("../regexp-lexer"),
    assert = require("assert");

exports["test basic matchers"] = function() {
    var dict = {
        rules: [
           ["x", "return 'X';" ],
           ["y", "return 'Y';" ],
           ["$", "return 'EOF';" ]
       ]
    };

    var input = "xxyx";

    var lexer = new RegExpLexer(dict, input);
    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "Y");
    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "EOF");
};

exports["test set yy"] = function() {
    var dict = {
        rules: [
           ["x", "return yy.x;" ],
           ["y", "return 'Y';" ],
           ["$", "return 'EOF';" ]
       ]
    };

    var input = "xxyx";

    var lexer = new RegExpLexer(dict);
    lexer.setInput(input, { x: 'EX' });
    assert.equal(lexer.lex(), "EX");
};

exports["test set input after"] = function() {
    var dict = {
        rules: [
           ["x", "return 'X';" ],
           ["y", "return 'Y';" ],
           ["$", "return 'EOF';" ]
       ]
    };

    var input = "xxyx";

    var lexer = new RegExpLexer(dict);
    lexer.setInput(input);

    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "Y");
    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "EOF");
};

exports["test unrecognized char"] = function() {
    var dict = {
        rules: [
           ["x", "return 'X';" ],
           ["y", "return 'Y';" ],
           ["$", "return 'EOF';" ]
       ]
    };

    var input = "xa";

    var lexer = new RegExpLexer(dict, input);
    assert.equal(lexer.lex(), "X");
    assert.throws(function(){lexer.lex()}, "bad char");
};

exports["test macro"] = function() {
    var dict = {
        macros: {
            "digit": "[0-9]"
        },
        rules: [
           ["x", "return 'X';" ],
           ["y", "return 'Y';" ],
           ["{digit}+", "return 'NAT';" ],
           ["$", "return 'EOF';" ]
       ]
    };

    var input = "x12234y42";

    var lexer = new RegExpLexer(dict, input);
    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "NAT");
    assert.equal(lexer.lex(), "Y");
    assert.equal(lexer.lex(), "NAT");
    assert.equal(lexer.lex(), "EOF");
};

exports["test macro precedence"] = function() {
    var dict = {
        macros: {
            "hex": "[0-9]|[a-f]"
        },
        rules: [
           ["-", "return '-';" ],
           ["{hex}+", "return 'HEX';" ],
           ["$", "return 'EOF';" ]
       ]
    };

    var input = "129-abfe-42dc-ea12";

    var lexer = new RegExpLexer(dict, input);
    assert.equal(lexer.lex(), "HEX");
    assert.equal(lexer.lex(), "-");
    assert.equal(lexer.lex(), "HEX");
    assert.equal(lexer.lex(), "-");
    assert.equal(lexer.lex(), "HEX");
    assert.equal(lexer.lex(), "-");
    assert.equal(lexer.lex(), "HEX");
    assert.equal(lexer.lex(), "EOF");
};

exports["test nested macros"] = function () {
    var dict = {
        macros: {
            "digit": "[0-9]",
            "2digit": "{digit}{digit}",
            "3digit": "{2digit}{digit}"
        },
        rules: [
           ["x", "return 'X';" ],
           ["y", "return 'Y';" ],
           ["{3digit}", "return 'NNN';" ],
           ["{2digit}", "return 'NN';" ],
           ["{digit}", "return 'N';" ],
           ["$", "return 'EOF';" ]
       ]
    };

    var input = "x1y42y123";

    var lexer = new RegExpLexer(dict, input);
    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "N");
    assert.equal(lexer.lex(), "Y");
    assert.equal(lexer.lex(), "NN");
    assert.equal(lexer.lex(), "Y");
    assert.equal(lexer.lex(), "NNN");
    assert.equal(lexer.lex(), "EOF");
};

exports["test nested macro precedence"] = function() {
    var dict = {
        macros: {
            "hex": "[0-9]|[a-f]",
            "col": "#{hex}+"
        },
        rules: [
           ["-", "return '-';" ],
           ["{col}", "return 'HEX';" ],
           ["$", "return 'EOF';" ]
       ]
    };

    var input = "#129-#abfe-#42dc-#ea12";

    var lexer = new RegExpLexer(dict, input);
    assert.equal(lexer.lex(), "HEX");
    assert.equal(lexer.lex(), "-");
    assert.equal(lexer.lex(), "HEX");
    assert.equal(lexer.lex(), "-");
    assert.equal(lexer.lex(), "HEX");
    assert.equal(lexer.lex(), "-");
    assert.equal(lexer.lex(), "HEX");
    assert.equal(lexer.lex(), "EOF");
};

exports["test action include"] = function() {
    var dict = {
        rules: [
           ["x", "return included ? 'Y' : 'N';" ],
           ["$", "return 'EOF';" ]
       ],
       actionInclude: "var included = true;"
    };

    var input = "x";

    var lexer = new RegExpLexer(dict, input);
    assert.equal(lexer.lex(), "Y");
    assert.equal(lexer.lex(), "EOF");
};

exports["test ignored"] = function() {
    var dict = {
        rules: [
           ["x", "return 'X';" ],
           ["y", "return 'Y';" ],
           ["\\s+", "/* skip whitespace */" ],
           ["$", "return 'EOF';" ]
       ]
    };

    var input = "x x   y x";

    var lexer = new RegExpLexer(dict, input);
    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "Y");
    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "EOF");
};

exports["test disambiguate"] = function() {
    var dict = {
        rules: [
           ["for\\b", "return 'FOR';" ],
           ["if\\b", "return 'IF';" ],
           ["[a-z]+", "return 'IDENTIFIER';" ],
           ["\\s+", "/* skip whitespace */" ],
           ["$", "return 'EOF';" ]
       ]
    };

    var input = "if forever for for";

    var lexer = new RegExpLexer(dict, input);
    assert.equal(lexer.lex(), "IF");
    assert.equal(lexer.lex(), "IDENTIFIER");
    assert.equal(lexer.lex(), "FOR");
    assert.equal(lexer.lex(), "FOR");
    assert.equal(lexer.lex(), "EOF");
};

exports["test yytext overwrite"] = function() {
    var dict = {
        rules: [
           ["x", "yytext = 'hi der'; return 'X';" ]
       ]
    };

    var input = "x";

    var lexer = new RegExpLexer(dict, input);
    lexer.lex();
    assert.equal(lexer.yytext, "hi der");
};

exports["test yylineno with test_match"] = function() {
    var dict = {
        rules: [
           ["\\s+", "/* skip whitespace */" ],
           ["x", "return 'x';" ],
           ["y", "return 'y';" ]
       ]
    };

    var input = "x\nxy\n\n\nx";
    var lexer = new RegExpLexer(dict, input);
    assert.equal(lexer.yylineno, 0);
    assert.equal(lexer.lex(), "x");
    assert.equal(lexer.lex(), "x");
    assert.equal(lexer.yylineno, 1);
    assert.equal(lexer.lex(), "y");
    assert.equal(lexer.yylineno, 1);
    assert.equal(lexer.lex(), "x");
    assert.equal(lexer.yylineno, 4);
};

exports["test yylineno with input"] = function() {
    var dict = {
        rules: [
           ["\\s+", "/* skip whitespace */" ],
           ["x", "return 'x';" ],
           ["y", "return 'y';" ]
       ]
    };

    // windows style
    var input = "a\r\nb";
    var lexer = new RegExpLexer(dict, input);
    assert.equal(lexer.yylineno, 0);
    assert.equal(lexer.input(), "a");
    assert.equal(lexer.input(), "\r\n");
    assert.equal(lexer.yylineno, 1);
    assert.equal(lexer.input(), "b");
    assert.equal(lexer.yylineno, 1);

    // linux style
    var input = "a\nb";
    var lexer = new RegExpLexer(dict, input);
    assert.equal(lexer.yylineno, 0);
    assert.equal(lexer.input(), "a");
    assert.equal(lexer.input(), "\n");
    assert.equal(lexer.yylineno, 1);
    assert.equal(lexer.input(), "b");
    assert.equal(lexer.yylineno, 1);

    // mac style
    var input = "a\rb";
    var lexer = new RegExpLexer(dict, input);
    assert.equal(lexer.yylineno, 0);
    assert.equal(lexer.input(), "a");
    assert.equal(lexer.input(), "\r");
    assert.equal(lexer.yylineno, 1);
    assert.equal(lexer.input(), "b");
    assert.equal(lexer.yylineno, 1);
};


exports["test yylloc, yyleng, and other lexer token parameters"] = function() {
    var dict = {
        rules: [
           ["\\s+", "/* skip whitespace */" ],
           ["x+", "return 'x';" ],
           ["y+", "return 'y';" ]
       ]
    };

    var input = "x\nxy\n\n\nx\nyyyy";

    var lexer = new RegExpLexer(dict, input);
    assert.equal(lexer.lex(), "x");
    assert.equal(lexer.yytext, "x", "yytext");
    assert.equal(lexer.yyleng, 1, "yyleng");
    assert.equal(lexer.offset, 1, "offset");
    assert.equal(lexer.match, "x", "match");
    assert.equal(lexer.matched, "x", "matched");
    assert.equal(lexer.yylloc.first_line, 1);
    assert.equal(lexer.yylloc.last_line, 1);
    assert.equal(lexer.yylloc.first_column, 0);
    assert.equal(lexer.yylloc.last_column, 1);
    assert.ok(lexer.yylloc.range === undefined);
    assert.equal(lexer.lex(), "x");
    assert.equal(lexer.yytext, "x", "yytext");
    assert.equal(lexer.yyleng, 1, "yyleng");
    assert.equal(lexer.offset, 3, "offset");
    assert.equal(lexer.match, "x", "match");
    assert.equal(lexer.matched, "x\nx", "matched");
    assert.equal(lexer.yylloc.first_line, 2);
    assert.equal(lexer.yylloc.last_line, 2);
    assert.equal(lexer.yylloc.first_column, 0);
    assert.equal(lexer.yylloc.last_column, 1);
    assert.equal(lexer.lex(), "y");
    assert.equal(lexer.yytext, "y", "yytext");
    assert.equal(lexer.yyleng, 1, "yyleng");
    assert.equal(lexer.offset, 4, "offset");
    assert.equal(lexer.match, "y", "match");
    assert.equal(lexer.matched, "x\nxy", "matched");
    assert.equal(lexer.yylloc.first_line, 2);
    assert.equal(lexer.yylloc.last_line, 2);
    assert.equal(lexer.yylloc.first_column, 1);
    assert.equal(lexer.yylloc.last_column, 2);
    assert.equal(lexer.lex(), "x");
    assert.equal(lexer.yytext, "x", "yytext");
    assert.equal(lexer.yyleng, 1, "yyleng");
    assert.equal(lexer.offset, 8, "offset");
    assert.equal(lexer.match, "x", "match");
    assert.equal(lexer.matched, "x\nxy\n\n\nx", "matched");
    assert.equal(lexer.yylloc.first_line, 5);
    assert.equal(lexer.yylloc.last_line, 5);
    assert.equal(lexer.yylloc.first_column, 0);
    assert.equal(lexer.yylloc.last_column, 1);
    assert.equal(lexer.lex(), "y");
    assert.equal(lexer.yytext, "yyyy", "yytext");
    assert.equal(lexer.yyleng, 4, "yyleng");
    assert.equal(lexer.offset, 13, "offset");
    assert.equal(lexer.match, "yyyy", "match");
    assert.equal(lexer.matched, "x\nxy\n\n\nx\nyyyy", "matched");
    assert.equal(lexer.yylloc.first_line, 6);
    assert.equal(lexer.yylloc.last_line, 6);
    assert.equal(lexer.yylloc.first_column, 0);
    assert.equal(lexer.yylloc.last_column, 4);
};


exports["test yylloc with %options ranges"] = function() {
    var dict = {
        options: {
          ranges: true
        },
        rules: [
           ["\\s+", "/* skip whitespace */" ],
           ["x+", "return 'x';" ],
           ["y+", "return 'y';" ]
       ]
    };

    var input = "x\nxy\n\n\nx\nyyyy";

    var lexer = new RegExpLexer(dict, input);
    assert.equal(lexer.lex(), "x");
    assert.equal(lexer.yytext, "x", "yytext");
    assert.equal(lexer.yyleng, 1, "yyleng");
    assert.equal(lexer.offset, 1, "offset");
    assert.equal(lexer.match, "x", "match");
    assert.equal(lexer.matched, "x", "matched");
    assert.equal(lexer.yylloc.first_line, 1);
    assert.equal(lexer.yylloc.last_line, 1);
    assert.equal(lexer.yylloc.first_column, 0);
    assert.equal(lexer.yylloc.last_column, 1);
    assert.ok(lexer.yylloc.range != null);
    assert.equal(lexer.yylloc.range[0], 0);
    assert.equal(lexer.yylloc.range[1], 1);
    assert.equal(lexer.lex(), "x");
    assert.equal(lexer.yytext, "x", "yytext");
    assert.equal(lexer.yyleng, 1, "yyleng");
    assert.equal(lexer.offset, 3, "offset");
    assert.equal(lexer.match, "x", "match");
    assert.equal(lexer.matched, "x\nx", "matched");
    assert.equal(lexer.yylloc.first_line, 2);
    assert.equal(lexer.yylloc.last_line, 2);
    assert.equal(lexer.yylloc.first_column, 0);
    assert.equal(lexer.yylloc.last_column, 1);
    assert.equal(lexer.yylloc.range[0], 2);
    assert.equal(lexer.yylloc.range[1], 3);
    assert.equal(lexer.lex(), "y");
    assert.equal(lexer.yytext, "y", "yytext");
    assert.equal(lexer.yyleng, 1, "yyleng");
    assert.equal(lexer.offset, 4, "offset");
    assert.equal(lexer.match, "y", "match");
    assert.equal(lexer.matched, "x\nxy", "matched");
    assert.equal(lexer.yylloc.first_line, 2);
    assert.equal(lexer.yylloc.last_line, 2);
    assert.equal(lexer.yylloc.first_column, 1);
    assert.equal(lexer.yylloc.last_column, 2);
    assert.equal(lexer.yylloc.range[0], 3);
    assert.equal(lexer.yylloc.range[1], 4);
    assert.equal(lexer.lex(), "x");
    assert.equal(lexer.yytext, "x", "yytext");
    assert.equal(lexer.yyleng, 1, "yyleng");
    assert.equal(lexer.offset, 8, "offset");
    assert.equal(lexer.match, "x", "match");
    assert.equal(lexer.matched, "x\nxy\n\n\nx", "matched");
    assert.equal(lexer.yylloc.first_line, 5);
    assert.equal(lexer.yylloc.last_line, 5);
    assert.equal(lexer.yylloc.first_column, 0);
    assert.equal(lexer.yylloc.last_column, 1);
    assert.equal(lexer.yylloc.range[0], 7);
    assert.equal(lexer.yylloc.range[1], 8);
    assert.equal(lexer.lex(), "y");
    assert.equal(lexer.yytext, "yyyy", "yytext");
    assert.equal(lexer.yyleng, 4, "yyleng");
    assert.equal(lexer.offset, 13, "offset");
    assert.equal(lexer.match, "yyyy", "match");
    assert.equal(lexer.matched, "x\nxy\n\n\nx\nyyyy", "matched");
    assert.equal(lexer.yylloc.first_line, 6);
    assert.equal(lexer.yylloc.last_line, 6);
    assert.equal(lexer.yylloc.first_column, 0);
    assert.equal(lexer.yylloc.last_column, 4);
    assert.equal(lexer.yylloc.range[0], 9);
    assert.equal(lexer.yylloc.range[1], 13);
};

exports["test more()"] = function() {
    var dict = {
        rules: [
           ["x", "return 'X';" ],
           ['"[^"]*', function(){
               if(yytext.charAt(yyleng-1) == '\\') {
                   this.more();
               } else {
                   yytext += this.input(); // swallow end quote
                   return "STRING";
               }
            } ],
           ["$", "return 'EOF';" ]
       ]
    };

    var input = 'x"fgjdrtj\\"sdfsdf"x';

    var lexer = new RegExpLexer(dict, input);
    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "STRING");
    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "EOF");
};

exports["test defined token returns"] = function() {
    var tokens = {"2":"X", "3":"Y", "4":"EOF"};
    var dict = {
        rules: [
           ["x", "return 'X';" ],
           ["y", "return 'Y';" ],
           ["$", "return 'EOF';" ]
       ]
    };

    var input = "xxyx";

    var lexer = new RegExpLexer(dict, input, tokens);

    assert.equal(lexer.lex(), 2);
    assert.equal(lexer.lex(), 2);
    assert.equal(lexer.lex(), 3);
    assert.equal(lexer.lex(), 2);
    assert.equal(lexer.lex(), 4);
};

exports["test module generator from constructor"] = function() {
    var dict = {
        rules: [
           ["x", "return 'X';" ],
           ["y", "return 'Y';" ],
           ["$", "return 'EOF';" ]
       ]
    };

    var input = "xxyx";

    var lexerSource = RegExpLexer.generate(dict);
    eval(lexerSource);
    lexer.setInput(input);

    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "Y");
    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "EOF");
};

exports["test module generator"] = function() {
    var dict = {
        rules: [
           ["x", "return 'X';" ],
           ["y", "return 'Y';" ],
           ["$", "return 'EOF';" ]
       ]
    };

    var input = "xxyx";

    var lexer_ = new RegExpLexer(dict);
    var lexerSource = lexer_.generateModule();
    eval(lexerSource);
    lexer.setInput(input);

    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "Y");
    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "EOF");
};

exports["test generator with more complex lexer"] = function() {
    var dict = {
        rules: [
           ["x", "return 'X';" ],
           ['"[^"]*', function(){
               if(yytext.charAt(yyleng-1) == '\\') {
                   this.more();
               } else {
                   yytext += this.input(); // swallow end quote
                   return "STRING";
               }
            } ],
           ["$", "return 'EOF';" ]
       ]
    };

    var input = 'x"fgjdrtj\\"sdfsdf"x';

    var lexer_ = new RegExpLexer(dict);
    var lexerSource = lexer_.generateModule();
    eval(lexerSource);
    lexer.setInput(input);

    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "STRING");
    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "EOF");
};

exports["test commonjs module generator"] = function() {
    var dict = {
        rules: [
           ["x", "return 'X';" ],
           ["y", "return 'Y';" ],
           ["$", "return 'EOF';" ]
       ]
    };

    var input = "xxyx";

    var lexer_ = new RegExpLexer(dict);
    var lexerSource = lexer_.generateCommonJSModule();
    var exports = {};
    eval(lexerSource);
    exports.lexer.setInput(input);

    assert.equal(exports.lex(), "X");
    assert.equal(exports.lex(), "X");
    assert.equal(exports.lex(), "Y");
    assert.equal(exports.lex(), "X");
    assert.equal(exports.lex(), "EOF");
};

exports["test amd module generator"] = function() {
    var dict = {
        rules: [
           ["x", "return 'X';" ],
           ["y", "return 'Y';" ],
           ["$", "return 'EOF';" ]
       ]
    };

    var input = "xxyx";

    var lexer_ = new RegExpLexer(dict);
    var lexerSource = lexer_.generateAMDModule();

    var lexer;
    var define = function (_, fn) {
      lexer = fn();
    };

    eval(lexerSource);
    lexer.setInput(input);

    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "Y");
    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "EOF");
};

exports["test DJ lexer"] = function() {
    var dict = {
    "lex": {
        "macros": {
            "digit": "[0-9]",
            "id": "[a-zA-Z_][a-zA-Z0-9_]*"
        },

        "rules": [
            ["\\/\\/.*",       "/* ignore comment */"],
            ["main\\b",     "return 'MAIN';"],
            ["class\\b",    "return 'CLASS';"],
            ["extends\\b",  "return 'EXTENDS';"],
            ["nat\\b",      "return 'NATTYPE';"],
            ["if\\b",       "return 'IF';"],
            ["else\\b",     "return 'ELSE';"],
            ["for\\b",      "return 'FOR';"],
            ["printNat\\b", "return 'PRINTNAT';"],
            ["readNat\\b",  "return 'READNAT';"],
            ["this\\b",     "return 'THIS';"],
            ["new\\b",      "return 'NEW';"],
            ["var\\b",      "return 'VAR';"],
            ["null\\b",     "return 'NUL';"],
            ["{digit}+",   "return 'NATLITERAL';"],
            ["{id}",       "return 'ID';"],
            ["==",         "return 'EQUALITY';"],
            ["=",          "return 'ASSIGN';"],
            ["\\+",        "return 'PLUS';"],
            ["-",          "return 'MINUS';"],
            ["\\*",        "return 'TIMES';"],
            [">",          "return 'GREATER';"],
            ["\\|\\|",     "return 'OR';"],
            ["!",          "return 'NOT';"],
            ["\\.",        "return 'DOT';"],
            ["\\{",        "return 'LBRACE';"],
            ["\\}",        "return 'RBRACE';"],
            ["\\(",        "return 'LPAREN';"],
            ["\\)",        "return 'RPAREN';"],
            [";",          "return 'SEMICOLON';"],
            ["\\s+",       "/* skip whitespace */"],
            [".",          "print('Illegal character'); throw 'Illegal character';"],
            ["$",          "return 'ENDOFFILE';"]
        ]
    }
};

    var input = "class Node extends Object { \
                      var nat value    var nat value;\
                      var Node next;\
                      var nat index;\
                    }\
\
                    class List extends Object {\
                      var Node start;\
\
                      Node prepend(Node startNode) {\
                        startNode.next = start;\
                        start = startNode;\
                      }\
\
                      nat find(nat index) {\
                        var nat value;\
                        var Node node;\
\
                        for(node = start;!(node == null);node = node.next){\
                          if(node.index == index){\
                            value = node.value;\
                          } else { 0; };\
                        };\
\
                        value;\
                      }\
                    }\
\
                    main {\
                      var nat index;\
                      var nat value;\
                      var List list;\
                      var Node startNode;\
\
                      index = readNat();\
                      list = new List;\
\
                      for(0;!(index==0);0){\
                        value = readNat();\
                        startNode = new Node;\
                        startNode.index = index;\
                        startNode.value = value;\
                        list.prepend(startNode);\
                        index = readNat();\
                      };\
\
                      index = readNat();\
\
                      for(0;!(index==0);0){\
                        printNat(list.find(index));\
                        index = readNat();\
                      };\
                    }";

    var lexer = new RegExpLexer(dict.lex);
    lexer.setInput(input);
    var tok;
    while (tok = lexer.lex(), tok !== 1) {
        assert.equal(typeof tok, "string");
    }
};

exports["test instantiation from string"] = function() {
    var dict = "%%\n'x' {return 'X';}\n'y' {return 'Y';}\n<<EOF>> {return 'EOF';}";

    var input = "x";

    var lexer = new RegExpLexer(dict);
    lexer.setInput(input);

    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "EOF");
};

exports["test inclusive start conditions"] = function() {
    var dict = {
        startConditions: {
            "TEST": 0,
        },
        rules: [
            ["enter-test", "this.begin('TEST');" ],
            [["TEST"], "x", "return 'T';" ],
            [["TEST"], "y", "this.begin('INITIAL'); return 'TY';" ],
            ["x", "return 'X';" ],
            ["y", "return 'Y';" ],
            ["$", "return 'EOF';" ]
        ]
    };
    var input = "xenter-testxyy";

    var lexer = new RegExpLexer(dict);
    lexer.setInput(input);

    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "T");
    assert.equal(lexer.lex(), "TY");
    assert.equal(lexer.lex(), "Y");
    assert.equal(lexer.lex(), "EOF");
};

exports["test exclusive start conditions"] = function() {
    var dict = {
        startConditions: {
            "EAT": 1,
        },
        rules: [
            ["\\/\\/", "this.begin('EAT');" ],
            [["EAT"], ".", "" ],
            [["EAT"], "\\n", "this.begin('INITIAL');" ],
            ["x", "return 'X';" ],
            ["y", "return 'Y';" ],
            ["$", "return 'EOF';" ]
        ]
    };
    var input = "xy//yxteadh//ste\ny";

    var lexer = new RegExpLexer(dict);
    lexer.setInput(input);

    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "Y");
    assert.equal(lexer.lex(), "Y");
    assert.equal(lexer.lex(), "EOF");
};

exports["test pop start condition stack"] = function() {
    var dict = {
        startConditions: {
            "EAT": 1,
        },
        rules: [
            ["\\/\\/", "this.begin('EAT');" ],
            [["EAT"], ".", "" ],
            [["EAT"], "\\n", "this.popState();" ],
            ["x", "return 'X';" ],
            ["y", "return 'Y';" ],
            ["$", "return 'EOF';" ]
        ]
    };
    var input = "xy//yxteadh//ste\ny";

    var lexer = new RegExpLexer(dict);
    lexer.setInput(input);

    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "Y");
    assert.equal(lexer.lex(), "Y");
    assert.equal(lexer.lex(), "EOF");
};


exports["test star start condition"] = function() {
    var dict = {
        startConditions: {
            "EAT": 1,
        },
        rules: [
            ["\\/\\/", "this.begin('EAT');" ],
            [["EAT"], ".", "" ],
            ["x", "return 'X';" ],
            ["y", "return 'Y';" ],
            [["*"],"$", "return 'EOF';" ]
        ]
    };
    var input = "xy//yxteadh//stey";

    var lexer = new RegExpLexer(dict);
    lexer.setInput(input);

    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "Y");
    assert.equal(lexer.lex(), "EOF");
};

exports["test start condition constants"] = function() {
    var dict = {
        startConditions: {
            "EAT": 1,
        },
        rules: [
            ["\\/\\/", "this.begin('EAT');" ],
            [["EAT"], ".", "if (YYSTATE==='EAT') return 'E';" ],
            ["x", "if (YY_START==='INITIAL') return 'X';" ],
            ["y", "return 'Y';" ],
            [["*"],"$", "return 'EOF';" ]
        ]
    };
    var input = "xy//y";

    var lexer = new RegExpLexer(dict);
    lexer.setInput(input);

    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "Y");
    assert.equal(lexer.lex(), "E");
    assert.equal(lexer.lex(), "EOF");
};

exports["test start condition & warning"] = function() {
    var dict = {
        startConditions: {
            "INITIAL": 0,
        },
        rules: [
            ["\\/\\/", "this.begin('EAT');" ],
            [["EAT"], ".", "if (YYSTATE==='EAT') return 'E';" ],
            ["x", "if (YY_START==='INITIAL') return 'X';" ],
            ["y", "return 'Y';" ],
            [["*"],"$", "return 'EOF';" ]
        ]
    };
    var input = "xy//y";

    var lexer = new RegExpLexer(dict);
    lexer.setInput(input);

    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "Y");
    assert.equal(lexer.lex(), "E");
    assert.equal(lexer.lex(), "EOF");
};

exports["test unicode encoding"] = function() {
    var dict = {
        rules: [
            ["\\u2713", "return 'CHECK';" ],
            ["\\u03c0", "return 'PI';" ],
            ["y", "return 'Y';" ]
        ]
    };
    var input = "\u2713\u03c0y";

    var lexer = new RegExpLexer(dict);
    lexer.setInput(input);

    assert.equal(lexer.lex(), "CHECK");
    assert.equal(lexer.lex(), "PI");
    assert.equal(lexer.lex(), "Y");
};

exports["test unicode"] = function() {
    var dict = {
        rules: [
            ["π", "return 'PI';" ],
            ["y", "return 'Y';" ]
        ]
    };
    var input = "πy";

    var lexer = new RegExpLexer(dict);
    lexer.setInput(input);

    assert.equal(lexer.lex(), "PI");
    assert.equal(lexer.lex(), "Y");
};

exports["test longest match returns"] = function() {
    var dict = {
        rules: [
            [".", "return 'DOT';" ],
            ["cat", "return 'CAT';" ]
        ],
        options: {flex: true}
    };
    var input = "cat!";

    var lexer = new RegExpLexer(dict);
    lexer.setInput(input);

    assert.equal(lexer.lex(), "CAT");
    assert.equal(lexer.lex(), "DOT");
};

exports["test case insensitivity"] = function() {
    var dict = {
        rules: [
            ["cat", "return 'CAT';" ]
        ],
        options: {'case-insensitive': true}
    };
    var input = "Cat";

    var lexer = new RegExpLexer(dict);
    lexer.setInput(input);

    assert.equal(lexer.lex(), "CAT");
};

exports["test less"] = function() {
    var dict = {
        rules: [
            ["cat", "this.less(2); return 'CAT';" ],
            ["t", "return 'T';" ]
        ],
    };
    var input = "cat";

    var lexer = new RegExpLexer(dict);
    lexer.setInput(input);

    assert.equal(lexer.lex(), "CAT");
    assert.equal(lexer.lex(), "T");
};

exports["test EOF unput"] = function() {
    var dict = {
        startConditions: {
            "UN": 1,
        },
        rules: [
            ["U", "this.begin('UN');return 'U';" ],
            [["UN"],"$", "this.unput('X')" ],
            [["UN"],"X", "this.popState();return 'X';" ],
            ["$", "return 'EOF'" ]
        ]
    };
    var input = "U";

    var lexer = new RegExpLexer(dict);
    lexer.setInput(input);

    assert.equal(lexer.lex(), "U");
    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "EOF");
};

exports["test flex mode default rule"] = function() {
    var dict = {
        rules: [
            ["x", "return 'X';" ]
        ],
        options: {flex: true}
    };
    var input = "xyx";

    var lexer = new RegExpLexer(dict);
    lexer.setInput(input);

    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), "X");
};

exports["test pipe precedence"] = function() {
    var dict = {
        rules: [
            ["x|y", "return 'X_Y';" ],
            [".",   "return 'N';"]
        ]
    };
    var input = "xny";

    var lexer = new RegExpLexer(dict);
    lexer.setInput(input);

    assert.equal(lexer.lex(), "X_Y");
    assert.equal(lexer.lex(), "N");
    assert.equal(lexer.lex(), "X_Y");
};

exports["test ranges"] = function() {
    var dict = {
        rules: [
            ["x+", "return 'X';" ],
            [".",   "return 'N';"]
        ],
        options: {ranges: true}
    };
    var input = "xxxyy";

    var lexer = new RegExpLexer(dict);
    lexer.setInput(input);

    assert.equal(lexer.lex(), "X");
    assert.deepEqual(lexer.yylloc.range, [0, 3]);
};

exports["test unput location"] = function() {
    var dict = {
        rules: [
            ["x+", "return 'X';" ],
            ["y\\n", "this.unput('\\n'); return 'Y';" ],
            ["\\ny", "this.unput('y'); return 'BR';" ],
            ["y", "return 'Y';" ],
            [".",   "return 'N';"]
        ],
        options: {ranges: true}
    };
    var input = "xxxy\ny";

    var lexer = new RegExpLexer(dict);
    lexer.setInput(input);
    console.log(lexer.rules);

    assert.equal(lexer.next(), "X");
    assert.deepEqual(lexer.yylloc, {first_line: 1,
                                    first_column: 0,
                                    last_line: 1,
                                    last_column: 3,
                                    range: [0, 3]});
    assert.equal(lexer.next(), "Y");
    assert.deepEqual(lexer.yylloc, {first_line: 1,
                                    first_column: 3,
                                    last_line: 1,
                                    last_column: 4,
                                    range: [3, 4]});
    assert.equal(lexer.next(), "BR");
    assert.deepEqual(lexer.yylloc, {first_line: 1,
                                    first_column: 4,
                                    last_line: 2,
                                    last_column: 0,
                                    range: [4, 5]});
    assert.equal(lexer.next(), "Y");
    assert.deepEqual(lexer.yylloc, {first_line: 2,
                                    first_column: 0,
                                    last_line: 2,
                                    last_column: 1,
                                    range: [5, 6]});

};

exports["test unput location again"] = function() {
    var dict = {
        rules: [
            ["x+", "return 'X';" ],
            ["y\\ny\\n", "this.unput('\\n'); return 'YY';" ],
            ["\\ny", "this.unput('y'); return 'BR';" ],
            ["y", "return 'Y';" ],
            [".",   "return 'N';"]
        ],
        options: {ranges: true}
    };
    var input = "xxxy\ny\ny";

    var lexer = new RegExpLexer(dict);
    lexer.setInput(input);
    console.log(lexer.rules);

    assert.equal(lexer.next(), "X");
    assert.deepEqual(lexer.yylloc, {first_line: 1,
                                    first_column: 0,
                                    last_line: 1,
                                    last_column: 3,
                                    range: [0, 3]});
    assert.equal(lexer.next(), "YY");
    assert.deepEqual(lexer.yylloc, {first_line: 1,
                                    first_column: 3,
                                    last_line: 2,
                                    last_column: 1,
                                    range: [3, 6]});
    assert.equal(lexer.next(), "BR");
    assert.deepEqual(lexer.yylloc, {first_line: 2,
                                    first_column: 1,
                                    last_line: 3,
                                    last_column: 0,
                                    range: [6, 7]});
    assert.equal(lexer.next(), "Y");
    assert.deepEqual(lexer.yylloc, {first_line: 3,
                                    first_column: 0,
                                    last_line: 3,
                                    last_column: 1,
                                    range: [7, 8]});

};

exports["test backtracking lexer reject() method"] = function() {
    var dict = {
        rules: [
            ["[A-Z]+([0-9]+)", "if (this.matches[1].length) this.reject(); else return 'ID';" ],
            ["[A-Z]+", "return 'WORD';" ],
            ["[0-9]+", "return 'NUM';" ]
        ],
        options: {backtrack_lexer: true}
    };
    var input = "A5";

    var lexer = new RegExpLexer(dict);
    lexer.setInput(input);

    assert.equal(lexer.lex(), "WORD");
    assert.equal(lexer.lex(), "NUM");
};

exports["test lexer reject() exception when not in backtracking mode"] = function() {
    var dict = {
        rules: [
            ["[A-Z]+([0-9]+)", "if (this.matches[1].length) this.reject(); else return 'ID';" ],
            ["[A-Z]+", "return 'WORD';" ],
            ["[0-9]+", "return 'NUM';" ]
        ],
        options: {backtrack_lexer: false}
    };
    var input = "A5";

    var lexer = new RegExpLexer(dict);
    lexer.setInput(input);

    assert.throws(function() {
      lexer.lex();
    },
    function(err) {
      return (err instanceof Error) && /You can only invoke reject/.test(err);
    });
};

exports["test yytext state after unput"] = function() {
    var dict = {
        rules: [
            ["cat4", "this.unput('4'); return 'CAT';" ],
            ["4", "return 'NUMBER';" ],
            ["$", "return 'EOF';"]
        ]
    };

    var input = "cat4";

    var lexer = new RegExpLexer(dict);
    lexer.setInput(input);
    assert.equal(lexer.lex(), "CAT");
    /*the yytext should be 'cat' since we unput '4' from 'cat4' */
    assert.equal(lexer.yytext, "cat");
    assert.equal(lexer.lex(), "NUMBER");
    assert.equal(lexer.lex(), "EOF");
};

exports["test custom parseError handler"] = function() {
    var dict = {
        rules: [
           ["x", "return 't';" ]
       ]
    };

    var input = "xyz ?";

    var counter = 0;

    var lexer = new RegExpLexer(dict);
    lexer.setInput(input, {
      parser: {
        parseError: function (str, hash) {
          counter++;
        }
      }
    });
    assert.equal(lexer.lex(), "t");
    assert.equal(lexer.yytext, "x");
    assert.equal(lexer.lex(), lexer.ERROR);
    assert.equal(counter, 1);
    assert.equal(lexer.yytext, "y");
    assert.equal(lexer.lex(), lexer.ERROR);
    assert.equal(counter, 2);
    assert.equal(lexer.yytext, "z");
    assert.equal(lexer.lex(), lexer.ERROR);
    assert.equal(counter, 3);
    assert.equal(lexer.yytext, " ");
    assert.equal(lexer.lex(), lexer.ERROR);
    assert.equal(counter, 4);
    assert.equal(lexer.yytext, "?");
    assert.equal(lexer.lex(), lexer.EOF);
    assert.equal(lexer.yytext, "");
    // and then the lexer keeps on spitting out EOF tokens ad nauseam:
    assert.equal(lexer.lex(), lexer.EOF);
    assert.equal(lexer.yytext, "");
    assert.equal(lexer.lex(), lexer.EOF);
    assert.equal(lexer.yytext, "");
};

exports["test custom parseError handler which produces a replacement token"] = function() {
    var dict = {
        rules: [
           ["x", "return 't';" ]
       ]
    };

    var input = "xyz ?";

    var counter = 0;
    var c1, c2;

    var lexer = new RegExpLexer(dict);
    lexer.setInput(input, {
      parser: {
        parseError: function (str, hash) {
          counter++;
          assert.ok(hash.lexer);
          // eat two more characters
          c1 = hash.lexer.input();
          c2 = hash.lexer.input();
          return 'alt';
        }
      }
    });
    assert.equal(lexer.lex(), "t");
    assert.equal(lexer.yytext, "x");
    assert.equal(lexer.lex(), 'alt');
    assert.equal(counter, 1);
    assert.equal(c1, "y");
    assert.equal(c2, "z");
    assert.equal(lexer.yytext, "yz");
    assert.equal(lexer.lex(), 'alt');
    assert.equal(counter, 2);
    assert.equal(c1, " ");
    assert.equal(c2, "?");
    assert.equal(lexer.yytext, " ?");
    assert.equal(lexer.lex(), lexer.EOF);
    assert.equal(lexer.yytext, "");
    // and then the lexer keeps on spitting out EOF tokens ad nauseam:
    assert.equal(lexer.lex(), lexer.EOF);
    assert.equal(lexer.yytext, "");
    assert.equal(lexer.lex(), lexer.EOF);
    assert.equal(lexer.yytext, "");
};

exports["test custom pre and post handlers"] = function() {
    var dict = {
        options: {
          pre_lex: function () {
            counter += 1;
            if (counter % 2 === 1) {
              return 'PRE';
            }
          },
          post_lex: function (tok) {
            counter += 2;
            return 'a:' + tok;
          }
        },
        rules: [
           ["[a-z]", "return 't';" ]
       ]
    };

    var input = "xyz";

    var counter = 0;

    var lexer = new RegExpLexer(dict);
    lexer.setInput(input);
    assert.equal(lexer.lex(), "a:PRE");
    assert.equal(lexer.yytext, "");
    assert.equal(counter, 3);
    assert.equal(lexer.lex(), "a:t");
    assert.equal(lexer.yytext, "x");
    assert.equal(counter, 6);
    assert.equal(lexer.lex(), "a:PRE");
    // as our PRE handler causes the lexer to produce another token immediately
    // without entering the lexer proper, `yytext` et al are NOT RESET:
    assert.equal(lexer.yytext, "x");
    assert.equal(counter, 9);
    assert.equal(lexer.lex(), "a:t");
    assert.equal(lexer.yytext, "y");
    assert.equal(counter, 12);
    assert.equal(lexer.lex(), "a:PRE");
    assert.equal(lexer.yytext, "y");
    assert.equal(counter, 15);
    assert.equal(lexer.lex(), "a:t");
    assert.equal(lexer.yytext, "z");
    assert.equal(counter, 18);
    assert.equal(lexer.lex(), "a:PRE");
    assert.equal(lexer.yytext, "z");
    assert.equal(counter, 21);
    assert.equal(lexer.EOF, 1);
    assert.equal(lexer.lex(), "a:1");
    assert.equal(lexer.yytext, "");
    assert.equal(counter, 24);
    // and then the lexer keeps on spitting out post-processed EOF tokens ad nauseam
    // interleaved with PRE tokens produced by the PRE handler:
    assert.equal(lexer.lex(), "a:PRE");
    assert.equal(lexer.yytext, "");
    assert.equal(counter, 27);
    assert.equal(lexer.lex(), "a:1"); // EOF
    assert.equal(lexer.yytext, "");
    assert.equal(counter, 30);
    assert.equal(lexer.lex(), "a:PRE");
    assert.equal(lexer.yytext, "");
    assert.equal(counter, 33);
    assert.equal(lexer.lex(), "a:1");
    assert.equal(lexer.yytext, "");
    assert.equal(counter, 36);
};

exports["test live replacement of custom pre and post handlers"] = function() {
    var dict = {
        options: {
          pre_lex: function () {
            counter += 1;
            if (counter % 2 === 1) {
              return 'PRE';
            }
          },
          post_lex: function (tok) {
            counter += 2;
            return 'a:' + tok;
          }
        },
        rules: [
           ["[a-z]", "return 't';" ]
       ]
    };

    var input = "xyz";

    var counter = 0;

    var lexer = new RegExpLexer(dict);
    lexer.setInput(input);
    assert.equal(lexer.lex(), "a:PRE");
    assert.equal(lexer.yytext, "");
    assert.equal(counter, 3);
    assert.equal(lexer.lex(), "a:t");
    assert.equal(lexer.yytext, "x");
    assert.equal(counter, 6);
    assert.equal(lexer.lex(), "a:PRE");
    // as our PRE handler causes the lexer to produce another token immediately
    // without entering the lexer proper, `yytext` et al are NOT RESET:
    assert.equal(lexer.yytext, "x");
    assert.equal(counter, 9);

    lexer.options.pre_lex = null;
    lexer.options.post_lex = function (tok) {
      counter--;
      if (tok !== lexer.EOF) {
        return 'V2:' + tok;
      }
      // default return of undefined/false/0 will have the lexer produce the raw token
    };

    assert.equal(lexer.lex(), "V2:t");
    assert.equal(lexer.yytext, "y");
    assert.equal(counter, 8);
    assert.equal(lexer.lex(), "V2:t");
    assert.equal(lexer.yytext, "z");
    assert.equal(counter, 7);
    assert.equal(lexer.EOF, 1);
    assert.equal(lexer.lex(), lexer.EOF);
    assert.equal(lexer.yytext, "");
    assert.equal(counter, 6);
    // and then the lexer keeps on spitting out post-processed EOF tokens ad nauseam
    // interleaved with PRE tokens produced by the PRE handler:
    assert.equal(lexer.lex(), lexer.EOF);
    assert.equal(lexer.yytext, "");
    assert.equal(counter, 5);
    assert.equal(lexer.lex(), lexer.EOF);
    assert.equal(lexer.yytext, "");
    assert.equal(counter, 4);
    assert.equal(lexer.lex(), lexer.EOF);
    assert.equal(lexer.yytext, "");
    assert.equal(counter, 3);
};

exports["test edge case which could break documentation comments in the generated lexer"] = function() {
    var dict = {
        rules: [
           ["\\*\\/", "return 'X';" ],
           ["\"*/\"", "return 'Y';" ],
           ["'*/'", "return 'Z';" ]
       ]
    };

    var input = "*/";

    var lexer = new RegExpLexer(dict, input);
    assert.equal(lexer.lex(), "X");
    assert.equal(lexer.lex(), lexer.EOF);
};

exports["test yylloc info object must be unique for each token"] = function() {
    var dict = {
        rules: [
            ["[a-z]", "return 'X';" ]
        ],
        options: {ranges: true}
    };

    var input = "xyz";
    var prevloc = null;

    var lexer = new RegExpLexer(dict, input);
    assert.equal(lexer.lex(), "X");
    assert.deepEqual(lexer.yylloc, {first_line: 1,
                                    first_column: 0,
                                    last_line: 1,
                                    last_column: 1,
                                    range: [0, 1]});
    prevloc = lexer.yylloc;
    assert.equal(lexer.lex(), "X");
    assert.notStrictEqual(prevloc, lexer.yylloc);
    assert.deepEqual(lexer.yylloc, {first_line: 1,
                                    first_column: 1,
                                    last_line: 1,
                                    last_column: 2,
                                    range: [1, 2]});
    prevloc = lexer.yylloc;
    assert.equal(lexer.lex(), "X");
    assert.notStrictEqual(prevloc, lexer.yylloc);
    assert.deepEqual(lexer.yylloc, {first_line: 1,
                                    first_column: 2,
                                    last_line: 1,
                                    last_column: 3,
                                    range: [2, 3]});
    prevloc = lexer.yylloc;
    assert.equal(lexer.lex(), lexer.EOF);
    // not so for EOF:
    if (0) {
      assert.notStrictEqual(prevloc, lexer.yylloc);
      assert.deepEqual(lexer.yylloc, {first_line: 1,
                                      first_column: 3,
                                      last_line: 1,
                                      last_column: 3,
                                      range: [3, 3]});
    }
};

exports["test yylloc info object is not modified by subsequent lex() activity"] = function() {
    var dict = {
        rules: [
            ["[a-z]", "return 'X';" ]
        ],
        options: {ranges: true}
    };

    var input = "xyz";
    var prevloc = null;

    var lexer = new RegExpLexer(dict, input);
    assert.equal(lexer.lex(), "X");
    assert.deepEqual(lexer.yylloc, {first_line: 1,
                                    first_column: 0,
                                    last_line: 1,
                                    last_column: 1,
                                    range: [0, 1]});
    prevloc = lexer.yylloc;
    assert.equal(lexer.lex(), "X");
    assert.notStrictEqual(prevloc, lexer.yylloc);
    assert.deepEqual(prevloc, {first_line: 1,
                                    first_column: 0,
                                    last_line: 1,
                                    last_column: 1,
                                    range: [0, 1]});
    assert.deepEqual(lexer.yylloc, {first_line: 1,
                                    first_column: 1,
                                    last_line: 1,
                                    last_column: 2,
                                    range: [1, 2]});
    prevloc = lexer.yylloc;
    assert.equal(lexer.lex(), "X");
    assert.notStrictEqual(prevloc, lexer.yylloc);
    assert.deepEqual(prevloc, {first_line: 1,
                                    first_column: 1,
                                    last_line: 1,
                                    last_column: 2,
                                    range: [1, 2]});
    assert.deepEqual(lexer.yylloc, {first_line: 1,
                                    first_column: 2,
                                    last_line: 1,
                                    last_column: 3,
                                    range: [2, 3]});
    prevloc = lexer.yylloc;
    assert.equal(lexer.lex(), lexer.EOF);
    // not so for EOF:
    if (0) {
      assert.notStrictEqual(prevloc, lexer.yylloc);
      assert.deepEqual(prevloc, {first_line: 1,
                                      first_column: 2,
                                      last_line: 1,
                                      last_column: 3,
                                      range: [2, 3]});
      assert.deepEqual(lexer.yylloc, {first_line: 1,
                                      first_column: 3,
                                      last_line: 1,
                                      last_column: 3,
                                      range: [3, 3]});
    }
};

exports["test yylloc info object CAN be modified by subsequent input() activity"] = function() {
    var dict = {
        rules: [
            ["[a-z]", "return 'X';" ]
        ],
        options: {ranges: true}
    };

    var input = "xyz";
    var prevloc = null;

    var lexer = new RegExpLexer(dict, input);
    assert.equal(lexer.lex(), "X");
    assert.deepEqual(lexer.yylloc, {first_line: 1,
                                    first_column: 0,
                                    last_line: 1,
                                    last_column: 1,
                                    range: [0, 1]});
    prevloc = lexer.yylloc;
    assert.equal(lexer.lex(), "X");
    assert.notStrictEqual(prevloc, lexer.yylloc);
    assert.deepEqual(prevloc, {first_line: 1,
                                    first_column: 0,
                                    last_line: 1,
                                    last_column: 1,
                                    range: [0, 1]});
    assert.deepEqual(lexer.yylloc, {first_line: 1,
                                    first_column: 1,
                                    last_line: 1,
                                    last_column: 2,
                                    range: [1, 2]});
    prevloc = lexer.yylloc;
    assert.equal(lexer.input(), "z");
    // this will modify the existing yylloc:
    assert.strictEqual(prevloc, lexer.yylloc);
    assert.deepEqual(prevloc, {first_line: 1,
                                    first_column: 1,
                                    last_line: 1,
                                    last_column: 3,
                                    range: [1, 3]});
    assert.deepEqual(lexer.yylloc, {first_line: 1,
                                    first_column: 1,
                                    last_line: 1,
                                    last_column: 3,
                                    range: [1, 3]});
    prevloc = lexer.yylloc;
    assert.equal(lexer.lex(), lexer.EOF);
    // forget about yylloc on EOF: its the same object as before...
    assert.strictEqual(prevloc, lexer.yylloc);
    // and this yylloc value set is counter-intuitive because EOF doesn't update yylloc at all:
    assert.deepEqual(lexer.yylloc, {first_line: 1,
                                    first_column: 1,
                                    last_line: 1,
                                    last_column: 3,
                                    range: [1, 3]});
};

exports["test empty rule set with custom lexer"] = function() {
    var src = null;

    var dict = {
        rules: [],
        actionInclude: 'var input = ""; var input_offset = 0; var lexer = { EOF: 1, ERROR: 2, options: {}, lex: function () { if (input.length > input_offset) { return "a" + input[input_offset++]; } else { return this.EOF; } }, setInput: function(inp) { input = inp; input_offset = 0; } };',
        moduleInclude: 'console.log("moduleInclude");',
        options: {
          foo: 'bar',
          showSource: function (lexer, source, opts) {
            src = source;
          }
        }
    };

    var input = "xxyx";

    var lexer = new RegExpLexer(dict, input);
    assert.equal(lexer.lex(), "ax");
    assert.equal(lexer.lex(), "ax");
    assert.equal(lexer.lex(), "ay");
    assert.equal(lexer.lex(), "ax");
    assert.equal(lexer.lex(), lexer.EOF);
};



