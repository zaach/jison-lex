#!/usr/bin/env node


'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _templateObject = _taggedTemplateLiteral(['\n        var __hacky_counter__ = 0;\n\n        /**\n         * @constructor\n         * @nocollapse\n         */\n        function XRegExp(re, f) {\n            this.re = re;\n            this.flags = f;\n            this._getUnicodeProperty = function (k) {};\n            var fake = /./;    // WARNING: this exact \'fake\' is also depended upon by the xregexp unit test!\n            __hacky_counter__++;\n            fake.__hacky_backy__ = __hacky_counter__;\n            return fake;\n        }\n    '], ['\n        var __hacky_counter__ = 0;\n\n        /**\n         * @constructor\n         * @nocollapse\n         */\n        function XRegExp(re, f) {\n            this.re = re;\n            this.flags = f;\n            this._getUnicodeProperty = function (k) {};\n            var fake = /./;    // WARNING: this exact \'fake\' is also depended upon by the xregexp unit test!\n            __hacky_counter__++;\n            fake.__hacky_backy__ = __hacky_counter__;\n            return fake;\n        }\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    return ', ';\n'], ['\n    return ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n        // Code Generator Information Report\n        // ---------------------------------\n        //\n        // Options:\n        //\n        //   backtracking: .................... ', '\n        //   location.ranges: ................. ', '\n        //   location line+column tracking: ... ', '\n        //\n        //\n        // Forwarded Parser Analysis flags:\n        //\n        //   uses yyleng: ..................... ', '\n        //   uses yylineno: ................... ', '\n        //   uses yytext: ..................... ', '\n        //   uses yylloc: ..................... ', '\n        //   uses lexer values: ............... ', ' / ', '\n        //   location tracking: ............... ', '\n        //   location assignment: ............. ', '\n        //\n        //\n        // Lexer Analysis flags:\n        //\n        //   uses yyleng: ..................... ', '\n        //   uses yylineno: ................... ', '\n        //   uses yytext: ..................... ', '\n        //   uses yylloc: ..................... ', '\n        //   uses ParseError API: ............. ', '\n        //   uses yyerror: .................... ', '\n        //   uses location tracking & editing:  ', '\n        //   uses more() API: ................. ', '\n        //   uses unput() API: ................ ', '\n        //   uses reject() API: ............... ', '\n        //   uses less() API: ................. ', '\n        //   uses display APIs pastInput(), upcomingInput(), showPosition():\n        //        ............................. ', '\n        //   uses describeYYLLOC() API: ....... ', '\n        //\n        // --------- END OF REPORT -----------\n\n    '], ['\n        // Code Generator Information Report\n        // ---------------------------------\n        //\n        // Options:\n        //\n        //   backtracking: .................... ', '\n        //   location.ranges: ................. ', '\n        //   location line+column tracking: ... ', '\n        //\n        //\n        // Forwarded Parser Analysis flags:\n        //\n        //   uses yyleng: ..................... ', '\n        //   uses yylineno: ................... ', '\n        //   uses yytext: ..................... ', '\n        //   uses yylloc: ..................... ', '\n        //   uses lexer values: ............... ', ' / ', '\n        //   location tracking: ............... ', '\n        //   location assignment: ............. ', '\n        //\n        //\n        // Lexer Analysis flags:\n        //\n        //   uses yyleng: ..................... ', '\n        //   uses yylineno: ................... ', '\n        //   uses yytext: ..................... ', '\n        //   uses yylloc: ..................... ', '\n        //   uses ParseError API: ............. ', '\n        //   uses yyerror: .................... ', '\n        //   uses location tracking & editing:  ', '\n        //   uses more() API: ................. ', '\n        //   uses unput() API: ................ ', '\n        //   uses reject() API: ............... ', '\n        //   uses less() API: ................. ', '\n        //   uses display APIs pastInput(), upcomingInput(), showPosition():\n        //        ............................. ', '\n        //   uses describeYYLLOC() API: ....... ', '\n        //\n        // --------- END OF REPORT -----------\n\n    ']),
    _templateObject4 = _taggedTemplateLiteral(['\n            var lexer = {\n            '], ['\n            var lexer = {\n            ']),
    _templateObject5 = _taggedTemplateLiteral([',\n            JisonLexerError: JisonLexerError,\n            performAction: ', ',\n            simpleCaseActionClusters: ', ',\n            rules: [\n                ', '\n            ],\n            conditions: ', '\n        };\n        '], [',\n            JisonLexerError: JisonLexerError,\n            performAction: ', ',\n            simpleCaseActionClusters: ', ',\n            rules: [\n                ', '\n            ],\n            conditions: ', '\n        };\n        ']),
    _templateObject6 = _taggedTemplateLiteral(['\n    /* lexer generated by jison-lex ', ' */\n\n    /*\n     * Returns a Lexer object of the following structure:\n     *\n     *  Lexer: {\n     *    yy: {}     The so-called "shared state" or rather the *source* of it;\n     *               the real "shared state" `yy` passed around to\n     *               the rule actions, etc. is a direct reference!\n     *\n     *               This "shared context" object was passed to the lexer by way of \n     *               the `lexer.setInput(str, yy)` API before you may use it.\n     *\n     *               This "shared context" object is passed to the lexer action code in `performAction()`\n     *               so userland code in the lexer actions may communicate with the outside world \n     *               and/or other lexer rules\' actions in more or less complex ways.\n     *\n     *  }\n     *\n     *  Lexer.prototype: {\n     *    EOF: 1,\n     *    ERROR: 2,\n     *\n     *    yy:        The overall "shared context" object reference.\n     *\n     *    JisonLexerError: function(msg, hash),\n     *\n     *    performAction: function lexer__performAction(yy, yyrulenumber, YY_START),\n     *\n     *               The function parameters and `this` have the following value/meaning:\n     *               - `this`    : reference to the `lexer` instance. \n     *                               `yy_` is an alias for `this` lexer instance reference used internally.\n     *\n     *               - `yy`      : a reference to the `yy` "shared state" object which was passed to the lexer\n     *                             by way of the `lexer.setInput(str, yy)` API before.\n     *\n     *                             Note:\n     *                             The extra arguments you specified in the `%parse-param` statement in your\n     *                             **parser** grammar definition file are passed to the lexer via this object\n     *                             reference as member variables.\n     *\n     *               - `yyrulenumber`   : index of the matched lexer rule (regex), used internally.\n     *\n     *               - `YY_START`: the current lexer "start condition" state.\n     *\n     *    parseError: function(str, hash, ExceptionClass),\n     *\n     *    constructLexErrorInfo: function(error_message, is_recoverable),\n     *               Helper function.\n     *               Produces a new errorInfo \'hash object\' which can be passed into `parseError()`.\n     *               See it\'s use in this lexer kernel in many places; example usage:\n     *\n     *                   var infoObj = lexer.constructParseErrorInfo(\'fail!\', true);\n     *                   var retVal = lexer.parseError(infoObj.errStr, infoObj, lexer.JisonLexerError);\n     *\n     *    options: { ... lexer %options ... },\n     *\n     *    lex: function(),\n     *               Produce one token of lexed input, which was passed in earlier via the `lexer.setInput()` API.\n     *               You MAY use the additional `args...` parameters as per `%parse-param` spec of the **lexer** grammar:\n     *               these extra `args...` are added verbatim to the `yy` object reference as member variables.\n     *\n     *               WARNING:\n     *               Lexer\'s additional `args...` parameters (via lexer\'s `%parse-param`) MAY conflict with\n     *               any attributes already added to `yy` by the **parser** or the jison run-time; \n     *               when such a collision is detected an exception is thrown to prevent the generated run-time \n     *               from silently accepting this confusing and potentially hazardous situation! \n     *\n     *    cleanupAfterLex: function(do_not_nuke_errorinfos),\n     *               Helper function.\n     *\n     *               This helper API is invoked when the **parse process** has completed: it is the responsibility\n     *               of the **parser** (or the calling userland code) to invoke this method once cleanup is desired. \n     *\n     *               This helper may be invoked by user code to ensure the internal lexer gets properly garbage collected.\n     *\n     *    setInput: function(input, [yy]),\n     *\n     *\n     *    input: function(),\n     *\n     *\n     *    unput: function(str),\n     *\n     *\n     *    more: function(),\n     *\n     *\n     *    reject: function(),\n     *\n     *\n     *    less: function(n),\n     *\n     *\n     *    pastInput: function(n),\n     *\n     *\n     *    upcomingInput: function(n),\n     *\n     *\n     *    showPosition: function(),\n     *\n     *\n     *    test_match: function(regex_match_array, rule_index),\n     *\n     *\n     *    next: function(),\n     *\n     *\n     *    begin: function(condition),\n     *\n     *\n     *    pushState: function(condition),\n     *\n     *\n     *    popState: function(),\n     *\n     *\n     *    topState: function(),\n     *\n     *\n     *    _currentRules: function(),\n     *\n     *\n     *    stateStackSize: function(),\n     *\n     *\n     *    performAction: function(yy, yy_, yyrulenumber, YY_START),\n     *\n     *\n     *    rules: [...],\n     *\n     *\n     *    conditions: {associative list: name ==> set},\n     *  }\n     *\n     *\n     *  token location info (`yylloc`): {\n     *    first_line: n,\n     *    last_line: n,\n     *    first_column: n,\n     *    last_column: n,\n     *    range: [start_number, end_number]\n     *               (where the numbers are indexes into the input string, zero-based)\n     *  }\n     *\n     * ---\n     *\n     * The `parseError` function receives a \'hash\' object with these members for lexer errors:\n     *\n     *  {\n     *    text:        (matched text)\n     *    token:       (the produced terminal token, if any)\n     *    token_id:    (the produced terminal token numeric ID, if any)\n     *    line:        (yylineno)\n     *    loc:         (yylloc)\n     *    recoverable: (boolean: TRUE when the parser MAY have an error recovery rule\n     *                  available for this particular error)\n     *    yy:          (object: the current parser internal "shared state" `yy`\n     *                  as is also available in the rule actions; this can be used,\n     *                  for instance, for advanced error analysis and reporting)\n     *    lexer:       (reference to the current lexer instance used by the parser)\n     *  }\n     *\n     * while `this` will reference the current lexer instance.\n     *\n     * When `parseError` is invoked by the lexer, the default implementation will\n     * attempt to invoke `yy.parser.parseError()`; when this callback is not provided\n     * it will try to invoke `yy.parseError()` instead. When that callback is also not\n     * provided, a `JisonLexerError` exception will be thrown containing the error\n     * message and `hash`, as constructed by the `constructLexErrorInfo()` API.\n     *\n     * Note that the lexer\'s `JisonLexerError` error class is passed via the\n     * `ExceptionClass` argument, which is invoked to construct the exception\n     * instance to be thrown, so technically `parseError` will throw the object\n     * produced by the `new ExceptionClass(str, hash)` JavaScript expression.\n     *\n     * ---\n     *\n     * You can specify lexer options by setting / modifying the `.options` object of your Lexer instance.\n     * These options are available:\n     *\n     * (Options are permanent.)\n     *  \n     *  yy: {\n     *      parseError: function(str, hash, ExceptionClass)\n     *                 optional: overrides the default `parseError` function.\n     *  }\n     *\n     *  lexer.options: {\n     *      pre_lex:  function()\n     *                 optional: is invoked before the lexer is invoked to produce another token.\n     *                 `this` refers to the Lexer object.\n     *      post_lex: function(token) { return token; }\n     *                 optional: is invoked when the lexer has produced a token `token`;\n     *                 this function can override the returned token value by returning another.\n     *                 When it does not return any (truthy) value, the lexer will return\n     *                 the original `token`.\n     *                 `this` refers to the Lexer object.\n     *\n     * WARNING: the next set of options are not meant to be changed. They echo the abilities of\n     * the lexer as per when it was compiled!\n     *\n     *      ranges: boolean\n     *                 optional: `true` ==> token location info will include a .range[] member.\n     *      flex: boolean\n     *                 optional: `true` ==> flex-like lexing behaviour where the rules are tested\n     *                 exhaustively to find the longest match.\n     *      backtrack_lexer: boolean\n     *                 optional: `true` ==> lexer regexes are tested in order and for invoked;\n     *                 the lexer terminates the scan when a token is returned by the action code.\n     *      xregexp: boolean\n     *                 optional: `true` ==> lexer rule regexes are "extended regex format" requiring the\n     *                 `XRegExp` library. When this %option has not been specified at compile time, all lexer\n     *                 rule regexes have been written as standard JavaScript RegExp expressions.\n     *  }\n     */\n     '], ['\n    /* lexer generated by jison-lex ', ' */\n\n    /*\n     * Returns a Lexer object of the following structure:\n     *\n     *  Lexer: {\n     *    yy: {}     The so-called "shared state" or rather the *source* of it;\n     *               the real "shared state" \\`yy\\` passed around to\n     *               the rule actions, etc. is a direct reference!\n     *\n     *               This "shared context" object was passed to the lexer by way of \n     *               the \\`lexer.setInput(str, yy)\\` API before you may use it.\n     *\n     *               This "shared context" object is passed to the lexer action code in \\`performAction()\\`\n     *               so userland code in the lexer actions may communicate with the outside world \n     *               and/or other lexer rules\' actions in more or less complex ways.\n     *\n     *  }\n     *\n     *  Lexer.prototype: {\n     *    EOF: 1,\n     *    ERROR: 2,\n     *\n     *    yy:        The overall "shared context" object reference.\n     *\n     *    JisonLexerError: function(msg, hash),\n     *\n     *    performAction: function lexer__performAction(yy, yyrulenumber, YY_START),\n     *\n     *               The function parameters and \\`this\\` have the following value/meaning:\n     *               - \\`this\\`    : reference to the \\`lexer\\` instance. \n     *                               \\`yy_\\` is an alias for \\`this\\` lexer instance reference used internally.\n     *\n     *               - \\`yy\\`      : a reference to the \\`yy\\` "shared state" object which was passed to the lexer\n     *                             by way of the \\`lexer.setInput(str, yy)\\` API before.\n     *\n     *                             Note:\n     *                             The extra arguments you specified in the \\`%parse-param\\` statement in your\n     *                             **parser** grammar definition file are passed to the lexer via this object\n     *                             reference as member variables.\n     *\n     *               - \\`yyrulenumber\\`   : index of the matched lexer rule (regex), used internally.\n     *\n     *               - \\`YY_START\\`: the current lexer "start condition" state.\n     *\n     *    parseError: function(str, hash, ExceptionClass),\n     *\n     *    constructLexErrorInfo: function(error_message, is_recoverable),\n     *               Helper function.\n     *               Produces a new errorInfo \\\'hash object\\\' which can be passed into \\`parseError()\\`.\n     *               See it\\\'s use in this lexer kernel in many places; example usage:\n     *\n     *                   var infoObj = lexer.constructParseErrorInfo(\\\'fail!\\\', true);\n     *                   var retVal = lexer.parseError(infoObj.errStr, infoObj, lexer.JisonLexerError);\n     *\n     *    options: { ... lexer %options ... },\n     *\n     *    lex: function(),\n     *               Produce one token of lexed input, which was passed in earlier via the \\`lexer.setInput()\\` API.\n     *               You MAY use the additional \\`args...\\` parameters as per \\`%parse-param\\` spec of the **lexer** grammar:\n     *               these extra \\`args...\\` are added verbatim to the \\`yy\\` object reference as member variables.\n     *\n     *               WARNING:\n     *               Lexer\'s additional \\`args...\\` parameters (via lexer\'s \\`%parse-param\\`) MAY conflict with\n     *               any attributes already added to \\`yy\\` by the **parser** or the jison run-time; \n     *               when such a collision is detected an exception is thrown to prevent the generated run-time \n     *               from silently accepting this confusing and potentially hazardous situation! \n     *\n     *    cleanupAfterLex: function(do_not_nuke_errorinfos),\n     *               Helper function.\n     *\n     *               This helper API is invoked when the **parse process** has completed: it is the responsibility\n     *               of the **parser** (or the calling userland code) to invoke this method once cleanup is desired. \n     *\n     *               This helper may be invoked by user code to ensure the internal lexer gets properly garbage collected.\n     *\n     *    setInput: function(input, [yy]),\n     *\n     *\n     *    input: function(),\n     *\n     *\n     *    unput: function(str),\n     *\n     *\n     *    more: function(),\n     *\n     *\n     *    reject: function(),\n     *\n     *\n     *    less: function(n),\n     *\n     *\n     *    pastInput: function(n),\n     *\n     *\n     *    upcomingInput: function(n),\n     *\n     *\n     *    showPosition: function(),\n     *\n     *\n     *    test_match: function(regex_match_array, rule_index),\n     *\n     *\n     *    next: function(),\n     *\n     *\n     *    begin: function(condition),\n     *\n     *\n     *    pushState: function(condition),\n     *\n     *\n     *    popState: function(),\n     *\n     *\n     *    topState: function(),\n     *\n     *\n     *    _currentRules: function(),\n     *\n     *\n     *    stateStackSize: function(),\n     *\n     *\n     *    performAction: function(yy, yy_, yyrulenumber, YY_START),\n     *\n     *\n     *    rules: [...],\n     *\n     *\n     *    conditions: {associative list: name ==> set},\n     *  }\n     *\n     *\n     *  token location info (\\`yylloc\\`): {\n     *    first_line: n,\n     *    last_line: n,\n     *    first_column: n,\n     *    last_column: n,\n     *    range: [start_number, end_number]\n     *               (where the numbers are indexes into the input string, zero-based)\n     *  }\n     *\n     * ---\n     *\n     * The \\`parseError\\` function receives a \\\'hash\\\' object with these members for lexer errors:\n     *\n     *  {\n     *    text:        (matched text)\n     *    token:       (the produced terminal token, if any)\n     *    token_id:    (the produced terminal token numeric ID, if any)\n     *    line:        (yylineno)\n     *    loc:         (yylloc)\n     *    recoverable: (boolean: TRUE when the parser MAY have an error recovery rule\n     *                  available for this particular error)\n     *    yy:          (object: the current parser internal "shared state" \\`yy\\`\n     *                  as is also available in the rule actions; this can be used,\n     *                  for instance, for advanced error analysis and reporting)\n     *    lexer:       (reference to the current lexer instance used by the parser)\n     *  }\n     *\n     * while \\`this\\` will reference the current lexer instance.\n     *\n     * When \\`parseError\\` is invoked by the lexer, the default implementation will\n     * attempt to invoke \\`yy.parser.parseError()\\`; when this callback is not provided\n     * it will try to invoke \\`yy.parseError()\\` instead. When that callback is also not\n     * provided, a \\`JisonLexerError\\` exception will be thrown containing the error\n     * message and \\`hash\\`, as constructed by the \\`constructLexErrorInfo()\\` API.\n     *\n     * Note that the lexer\\\'s \\`JisonLexerError\\` error class is passed via the\n     * \\`ExceptionClass\\` argument, which is invoked to construct the exception\n     * instance to be thrown, so technically \\`parseError\\` will throw the object\n     * produced by the \\`new ExceptionClass(str, hash)\\` JavaScript expression.\n     *\n     * ---\n     *\n     * You can specify lexer options by setting / modifying the \\`.options\\` object of your Lexer instance.\n     * These options are available:\n     *\n     * (Options are permanent.)\n     *  \n     *  yy: {\n     *      parseError: function(str, hash, ExceptionClass)\n     *                 optional: overrides the default \\`parseError\\` function.\n     *  }\n     *\n     *  lexer.options: {\n     *      pre_lex:  function()\n     *                 optional: is invoked before the lexer is invoked to produce another token.\n     *                 \\`this\\` refers to the Lexer object.\n     *      post_lex: function(token) { return token; }\n     *                 optional: is invoked when the lexer has produced a token \\`token\\`;\n     *                 this function can override the returned token value by returning another.\n     *                 When it does not return any (truthy) value, the lexer will return\n     *                 the original \\`token\\`.\n     *                 \\`this\\` refers to the Lexer object.\n     *\n     * WARNING: the next set of options are not meant to be changed. They echo the abilities of\n     * the lexer as per when it was compiled!\n     *\n     *      ranges: boolean\n     *                 optional: \\`true\\` ==> token location info will include a .range[] member.\n     *      flex: boolean\n     *                 optional: \\`true\\` ==> flex-like lexing behaviour where the rules are tested\n     *                 exhaustively to find the longest match.\n     *      backtrack_lexer: boolean\n     *                 optional: \\`true\\` ==> lexer regexes are tested in order and for invoked;\n     *                 the lexer terminates the scan when a token is returned by the action code.\n     *      xregexp: boolean\n     *                 optional: \\`true\\` ==> lexer rule regexes are "extended regex format" requiring the\n     *                 \\`XRegExp\\` library. When this %option has not been specified at compile time, all lexer\n     *                 rule regexes have been written as standard JavaScript RegExp expressions.\n     *  }\n     */\n     ']),
    _templateObject7 = _taggedTemplateLiteral(['\n            export {\n                lexer,\n                yylex as lex\n            };\n        '], ['\n            export {\n                lexer,\n                yylex as lex\n            };\n        ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(function (global, factory) {
    (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(require('fs'), require('path'), require('@gerhobbelt/nomnom'), require('@gerhobbelt/xregexp'), require('@gerhobbelt/json5'), require('@gerhobbelt/lex-parser'), require('assert'), require('jison-helpers-lib')) : typeof define === 'function' && define.amd ? define(['fs', 'path', '@gerhobbelt/nomnom', '@gerhobbelt/xregexp', '@gerhobbelt/json5', '@gerhobbelt/lex-parser', 'assert', 'jison-helpers-lib'], factory) : factory(global.fs, global.path, global.nomnom, global.XRegExp, global.json5, global.lexParser, global.assert, global.helpers);
})(undefined, function (fs, path, nomnom, XRegExp, json5, lexParser, assert, helpers) {
    'use strict';

    fs = fs && fs.hasOwnProperty('default') ? fs['default'] : fs;
    path = path && path.hasOwnProperty('default') ? path['default'] : path;
    nomnom = nomnom && nomnom.hasOwnProperty('default') ? nomnom['default'] : nomnom;
    XRegExp = XRegExp && XRegExp.hasOwnProperty('default') ? XRegExp['default'] : XRegExp;
    json5 = json5 && json5.hasOwnProperty('default') ? json5['default'] : json5;
    lexParser = lexParser && lexParser.hasOwnProperty('default') ? lexParser['default'] : lexParser;
    assert = assert && assert.hasOwnProperty('default') ? assert['default'] : assert;
    helpers = helpers && helpers.hasOwnProperty('default') ? helpers['default'] : helpers;

    //
    // Helper library for set definitions
    //
    // MIT Licensed
    //
    //
    // This code is intended to help parse regex set expressions and mix them
    // together, i.e. to answer questions like this:
    // 
    // what is the resulting regex set expression when we mix the regex set
    // `[a-z]` with the regex set `[^\s]` where with 'mix' we mean that any
    // input which matches either input regex should match the resulting
    // regex set. (a.k.a. Full Outer Join, see also http://www.diffen.com/difference/Inner_Join_vs_Outer_Join)
    // 

    'use strict';

    var XREGEXP_UNICODE_ESCAPE_RE$1 = /^\{[A-Za-z0-9 \-\._]+\}/; // Matches the XRegExp Unicode escape braced part, e.g. `{Number}`
    var CHR_RE$1 = /^(?:[^\\]|\\[^cxu0-9]|\\[0-9]{1,3}|\\c[A-Z]|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\u\{[0-9a-fA-F]+\})/;
    var SET_PART_RE$1 = /^(?:[^\\\]]|\\[^cxu0-9]|\\[0-9]{1,3}|\\c[A-Z]|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\u\{[0-9a-fA-F]+\})+/;
    var NOTHING_SPECIAL_RE$1 = /^(?:[^\\\[\]\(\)\|^\{\}]|\\[^cxu0-9]|\\[0-9]{1,3}|\\c[A-Z]|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\u\{[0-9a-fA-F]+\})+/;
    var SET_IS_SINGLE_PCODE_RE = /^\\[dDwWsS]$|^\\p\{[A-Za-z0-9 \-\._]+\}$/;

    var UNICODE_BASE_PLANE_MAX_CP$1 = 65535;

    // The expanded regex sets which are equivalent to the given `\\{c}` escapes:
    //
    // `/\s/`:
    var WHITESPACE_SETSTR$1 = ' \f\n\r\t\x0B\xA0\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF';
    // `/\d/`:
    var DIGIT_SETSTR$1 = '0-9';
    // `/\w/`:
    var WORDCHAR_SETSTR$1 = 'A-Za-z0-9_';

    // Helper for `bitarray2set()`: convert character code to a representation string suitable for use in a regex
    function i2c(i) {
        var c, x;

        switch (i) {
            case 10:
                return '\\n';

            case 13:
                return '\\r';

            case 9:
                return '\\t';

            case 8:
                return '\\b';

            case 12:
                return '\\f';

            case 11:
                return '\\v';

            case 45:
                // ASCII/Unicode for '-' dash
                return '\\-';

            case 91:
                // '['
                return '\\[';

            case 92:
                // '\\'
                return '\\\\';

            case 93:
                // ']'
                return '\\]';

            case 94:
                // ']'
                return '\\^';
        }
        if (i < 32 || i > 0xFFF0 /* Unicode Specials, also in UTF16 */
        || i >= 0xD800 && i <= 0xDFFF /* Unicode Supplementary Planes; we're TOAST in JavaScript as we're NOT UTF-16 but UCS-2! */
        || String.fromCharCode(i).match(/[\u2028\u2029]/) /* Code compilation via `new Function()` does not like to see these, or rather: treats them as just another form of CRLF, which breaks your generated regex code! */
        ) {
                // Detail about a detail:
                // U+2028 and U+2029 are part of the `\s` regex escape code (`\s` and `[\s]` match either of these) and when placed in a JavaScript
                // source file verbatim (without escaping it as a `\uNNNN` item) then JavaScript will interpret it as such and consequently report
                // a b0rked generated parser, as the generated code would include this regex right here.
                // Hence we MUST escape these buggers everywhere we go...
                x = i.toString(16);
                if (x.length >= 1 && i <= 0xFFFF) {
                    c = '0000' + x;
                    return '\\u' + c.substr(c.length - 4);
                } else {
                    return '\\u{' + x + '}';
                }
            }
        return String.fromCharCode(i);
    }

    // Helper collection for `bitarray2set()`: we have expanded all these cached `\\p{NAME}` regex sets when creating
    // this bitarray and now we should look at these expansions again to see if `bitarray2set()` can produce a
    // `\\p{NAME}` shorthand to represent [part of] the bitarray:
    var Pcodes_bitarray_cache = {};
    var Pcodes_bitarray_cache_test_order = [];

    // Helper collection for `bitarray2set()` for minifying special cases of result sets which can be represented by 
    // a single regex 'escape', e.g. `\d` for digits 0-9.
    var EscCode_bitarray_output_refs;

    // now initialize the EscCodes_... table above:
    init_EscCode_lookup_table();

    function init_EscCode_lookup_table() {
        var s,
            bitarr,
            set2esc = {},
            esc2bitarr = {};

        // patch global lookup tables for the time being, while we calculate their *real* content in this function:
        EscCode_bitarray_output_refs = {
            esc2bitarr: {},
            set2esc: {}
        };
        Pcodes_bitarray_cache_test_order = [];

        // `/\S':
        bitarr = [];
        set2bitarray(bitarr, '^' + WHITESPACE_SETSTR$1);
        s = bitarray2set(bitarr);
        esc2bitarr['S'] = bitarr;
        set2esc[s] = 'S';
        // set2esc['^' + s] = 's';
        Pcodes_bitarray_cache['\\S'] = bitarr;

        // `/\s':
        bitarr = [];
        set2bitarray(bitarr, WHITESPACE_SETSTR$1);
        s = bitarray2set(bitarr);
        esc2bitarr['s'] = bitarr;
        set2esc[s] = 's';
        // set2esc['^' + s] = 'S';
        Pcodes_bitarray_cache['\\s'] = bitarr;

        // `/\D':
        bitarr = [];
        set2bitarray(bitarr, '^' + DIGIT_SETSTR$1);
        s = bitarray2set(bitarr);
        esc2bitarr['D'] = bitarr;
        set2esc[s] = 'D';
        // set2esc['^' + s] = 'd';
        Pcodes_bitarray_cache['\\D'] = bitarr;

        // `/\d':
        bitarr = [];
        set2bitarray(bitarr, DIGIT_SETSTR$1);
        s = bitarray2set(bitarr);
        esc2bitarr['d'] = bitarr;
        set2esc[s] = 'd';
        // set2esc['^' + s] = 'D';
        Pcodes_bitarray_cache['\\d'] = bitarr;

        // `/\W':
        bitarr = [];
        set2bitarray(bitarr, '^' + WORDCHAR_SETSTR$1);
        s = bitarray2set(bitarr);
        esc2bitarr['W'] = bitarr;
        set2esc[s] = 'W';
        // set2esc['^' + s] = 'w';
        Pcodes_bitarray_cache['\\W'] = bitarr;

        // `/\w':
        bitarr = [];
        set2bitarray(bitarr, WORDCHAR_SETSTR$1);
        s = bitarray2set(bitarr);
        esc2bitarr['w'] = bitarr;
        set2esc[s] = 'w';
        // set2esc['^' + s] = 'W';
        Pcodes_bitarray_cache['\\w'] = bitarr;

        EscCode_bitarray_output_refs = {
            esc2bitarr: esc2bitarr,
            set2esc: set2esc
        };

        updatePcodesBitarrayCacheTestOrder();
    }

    function updatePcodesBitarrayCacheTestOrder(opts) {
        var t = new Array(UNICODE_BASE_PLANE_MAX_CP$1 + 1);
        var l = {};
        var user_has_xregexp = opts && opts.options && opts.options.xregexp;
        var i, j, k, ba;

        // mark every character with which regex pcodes they are part of:
        for (k in Pcodes_bitarray_cache) {
            ba = Pcodes_bitarray_cache[k];

            if (!user_has_xregexp && k.indexOf('\\p{') >= 0) {
                continue;
            }

            var cnt = 0;
            for (i = 0; i <= UNICODE_BASE_PLANE_MAX_CP$1; i++) {
                if (ba[i]) {
                    cnt++;
                    if (!t[i]) {
                        t[i] = [k];
                    } else {
                        t[i].push(k);
                    }
                }
            }
            l[k] = cnt;
        }

        // now dig out the unique ones: only need one per pcode.
        // 
        // We ASSUME every \\p{NAME} 'pcode' has at least ONE character
        // in it that is ONLY matched by that particular pcode. 
        // If this assumption fails, nothing is lost, but our 'regex set
        // optimized representation' will be sub-optimal as than this pcode
        // won't be tested during optimization. 
        // 
        // Now that would be a pity, so the assumption better holds...
        // Turns out the assumption doesn't hold already for /\S/ + /\D/
        // as the second one (\D) is a pure subset of \S. So we have to
        // look for markers which match multiple escapes/pcodes for those
        // ones where a unique item isn't available...
        var lut = [];
        var done = {};
        var keys = Object.keys(Pcodes_bitarray_cache);

        for (i = 0; i <= UNICODE_BASE_PLANE_MAX_CP$1; i++) {
            k = t[i][0];
            if (t[i].length === 1 && !done[k]) {
                assert(l[k] > 0);
                lut.push([i, k]);
                done[k] = true;
            }
        }

        for (j = 0; keys[j]; j++) {
            k = keys[j];

            if (!user_has_xregexp && k.indexOf('\\p{') >= 0) {
                continue;
            }

            if (!done[k]) {
                assert(l[k] > 0);
                // find a minimum span character to mark this one:
                var w = Infinity;
                var rv;
                ba = Pcodes_bitarray_cache[k];
                for (i = 0; i <= UNICODE_BASE_PLANE_MAX_CP$1; i++) {
                    if (ba[i]) {
                        var tl = t[i].length;
                        if (tl > 1 && tl < w) {
                            assert(l[k] > 0);
                            rv = [i, k];
                            w = tl;
                        }
                    }
                }
                if (rv) {
                    done[k] = true;
                    lut.push(rv);
                }
            }
        }

        // order from large set to small set so that small sets don't gobble
        // characters also represented by overlapping larger set pcodes.
        // 
        // Again we assume something: that finding the large regex pcode sets
        // before the smaller, more specialized ones, will produce a more
        // optimal minification of the regex set expression. 
        // 
        // This is a guestimate/heuristic only!
        lut.sort(function (a, b) {
            var k1 = a[1];
            var k2 = b[1];
            var ld = l[k2] - l[k1];
            if (ld) {
                return ld;
            }
            // and for same-size sets, order from high to low unique identifier.
            return b[0] - a[0];
        });

        Pcodes_bitarray_cache_test_order = lut;
    }

    // 'Join' a regex set `[...]` into a Unicode range spanning logic array, flagging every character in the given set.
    function set2bitarray(bitarr, s, opts) {
        var orig = s;
        var set_is_inverted = false;
        var bitarr_orig;

        function mark(d1, d2) {
            if (d2 == null) d2 = d1;
            for (var i = d1; i <= d2; i++) {
                bitarr[i] = true;
            }
        }

        function add2bitarray(dst, src) {
            for (var i = 0; i <= UNICODE_BASE_PLANE_MAX_CP$1; i++) {
                if (src[i]) {
                    dst[i] = true;
                }
            }
        }

        function eval_escaped_code(s) {
            var c;
            // decode escaped code? If none, just take the character as-is
            if (s.indexOf('\\') === 0) {
                var l = s.substr(0, 2);
                switch (l) {
                    case '\\c':
                        c = s.charCodeAt(2) - 'A'.charCodeAt(0) + 1;
                        return String.fromCharCode(c);

                    case '\\x':
                        s = s.substr(2);
                        c = parseInt(s, 16);
                        return String.fromCharCode(c);

                    case '\\u':
                        s = s.substr(2);
                        if (s[0] === '{') {
                            s = s.substr(1, s.length - 2);
                        }
                        c = parseInt(s, 16);
                        if (c >= 0x10000) {
                            return new Error('We do NOT support Extended Plane Unicode Codepoints (i.e. CodePoints beyond U:FFFF) in regex set expressions, e.g. \\u{' + s + '}');
                        }
                        return String.fromCharCode(c);

                    case '\\0':
                    case '\\1':
                    case '\\2':
                    case '\\3':
                    case '\\4':
                    case '\\5':
                    case '\\6':
                    case '\\7':
                        s = s.substr(1);
                        c = parseInt(s, 8);
                        return String.fromCharCode(c);

                    case '\\r':
                        return '\r';

                    case '\\n':
                        return '\n';

                    case '\\v':
                        return '\v';

                    case '\\f':
                        return '\f';

                    case '\\t':
                        return '\t';

                    case '\\b':
                        return '\b';

                    default:
                        // just the character itself:
                        return s.substr(1);
                }
            } else {
                return s;
            }
        }

        if (s && s.length) {
            var c1, c2;

            // inverted set?
            if (s[0] === '^') {
                set_is_inverted = true;
                s = s.substr(1);
                bitarr_orig = bitarr;
                bitarr = new Array(UNICODE_BASE_PLANE_MAX_CP$1 + 1);
            }

            // BITARR collects flags for characters set. Inversion means the complement set of character is st instead.
            // This results in an OR operations when sets are joined/chained.

            while (s.length) {
                c1 = s.match(CHR_RE$1);
                if (!c1) {
                    // hit an illegal escape sequence? cope anyway!
                    c1 = s[0];
                } else {
                    c1 = c1[0];
                    // Quick hack for XRegExp escapes inside a regex `[...]` set definition: we *could* try to keep those
                    // intact but it's easier to unfold them here; this is not nice for when the grammar specifies explicit
                    // XRegExp support, but alas, we'll get there when we get there... ;-)
                    switch (c1) {
                        case '\\p':
                            s = s.substr(c1.length);
                            c2 = s.match(XREGEXP_UNICODE_ESCAPE_RE$1);
                            if (c2) {
                                c2 = c2[0];
                                s = s.substr(c2.length);
                                // do we have this one cached already?
                                var pex = c1 + c2;
                                var ba4p = Pcodes_bitarray_cache[pex];
                                if (!ba4p) {
                                    // expand escape:
                                    var xr = new XRegExp('[' + pex + ']'); // TODO: case-insensitive grammar???
                                    // rewrite to a standard `[...]` regex set: XRegExp will do this for us via `XRegExp.toString()`:
                                    var xs = '' + xr;
                                    // remove the wrapping `/.../` to get at the (possibly *combined* series of) `[...]` sets inside:
                                    xs = xs.substr(1, xs.length - 2);

                                    ba4p = reduceRegexToSetBitArray(xs, pex, opts);

                                    Pcodes_bitarray_cache[pex] = ba4p;
                                    updatePcodesBitarrayCacheTestOrder(opts);
                                }
                                // merge bitarrays:
                                add2bitarray(bitarr, ba4p);
                                continue;
                            }
                            break;

                        case '\\S':
                        case '\\s':
                        case '\\W':
                        case '\\w':
                        case '\\d':
                        case '\\D':
                            // these can't participate in a range, but need to be treated special:
                            s = s.substr(c1.length);
                            // check for \S, \s, \D, \d, \W, \w and expand them:
                            var ba4e = EscCode_bitarray_output_refs.esc2bitarr[c1[1]];
                            assert(ba4e);
                            add2bitarray(bitarr, ba4e);
                            continue;

                        case '\\b':
                            // matches a backspace: https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#special-backspace
                            c1 = '\b';
                            break;
                    }
                }
                var v1 = eval_escaped_code(c1);
                // propagate deferred exceptions = error reports.
                if (v1 instanceof Error) {
                    return v1;
                }
                v1 = v1.charCodeAt(0);
                s = s.substr(c1.length);

                if (s[0] === '-' && s.length >= 2) {
                    // we can expect a range like 'a-z':
                    s = s.substr(1);
                    c2 = s.match(CHR_RE$1);
                    if (!c2) {
                        // hit an illegal escape sequence? cope anyway!
                        c2 = s[0];
                    } else {
                        c2 = c2[0];
                    }
                    var v2 = eval_escaped_code(c2);
                    // propagate deferred exceptions = error reports.
                    if (v2 instanceof Error) {
                        return v1;
                    }
                    v2 = v2.charCodeAt(0);
                    s = s.substr(c2.length);

                    // legal ranges go UP, not /DOWN!
                    if (v1 <= v2) {
                        mark(v1, v2);
                    } else {
                        console.warn('INVALID CHARACTER RANGE found in regex: ', { re: orig, start: c1, start_n: v1, end: c2, end_n: v2 });
                        mark(v1);
                        mark('-'.charCodeAt(0));
                        mark(v2);
                    }
                    continue;
                }
                mark(v1);
            }

            // When we have marked all slots, '^' NEGATES the set, hence we flip all slots.
            // 
            // Since a regex like `[^]` should match everything(?really?), we don't need to check if the MARK
            // phase actually marked anything at all: the `^` negation will correctly flip=mark the entire
            // range then.
            if (set_is_inverted) {
                for (var i = 0; i <= UNICODE_BASE_PLANE_MAX_CP$1; i++) {
                    if (!bitarr[i]) {
                        bitarr_orig[i] = true;
                    }
                }
            }
        }
        return false;
    }

    // convert a simple bitarray back into a regex set `[...]` content:
    function bitarray2set(l, output_inverted_variant, output_minimized) {
        // construct the inverse(?) set from the mark-set:
        //
        // Before we do that, we inject a sentinel so that our inner loops
        // below can be simple and fast:
        l[UNICODE_BASE_PLANE_MAX_CP$1 + 1] = 1;
        // now reconstruct the regex set:
        var rv = [];
        var i, j, cnt, lut, tn, tspec, match, pcode, ba4pcode, l2;
        var bitarr_is_cloned = false;
        var l_orig = l;

        if (output_inverted_variant) {
            // generate the inverted set, hence all unmarked slots are part of the output range:
            cnt = 0;
            for (i = 0; i <= UNICODE_BASE_PLANE_MAX_CP$1; i++) {
                if (!l[i]) {
                    cnt++;
                }
            }
            if (cnt === UNICODE_BASE_PLANE_MAX_CP$1 + 1) {
                // When there's nothing in the output we output a special 'match-nothing' regex: `[^\S\s]`.
                // BUT... since we output the INVERTED set, we output the match-all set instead:
                return '\\S\\s';
            } else if (cnt === 0) {
                // When we find the entire Unicode range is in the output match set, we replace this with
                // a shorthand regex: `[\S\s]`
                // BUT... since we output the INVERTED set, we output the match-nothing set instead:
                return '^\\S\\s';
            }

            // Now see if we can replace several bits by an escape / pcode:
            if (output_minimized) {
                lut = Pcodes_bitarray_cache_test_order;
                for (tn = 0; lut[tn]; tn++) {
                    tspec = lut[tn];
                    // check if the uniquely identifying char is in the inverted set:
                    if (!l[tspec[0]]) {
                        // check if the pcode is covered by the inverted set:
                        pcode = tspec[1];
                        ba4pcode = Pcodes_bitarray_cache[pcode];
                        match = 0;
                        for (j = 0; j <= UNICODE_BASE_PLANE_MAX_CP$1; j++) {
                            if (ba4pcode[j]) {
                                if (!l[j]) {
                                    // match in current inverted bitset, i.e. there's at
                                    // least one 'new' bit covered by this pcode/escape:
                                    match++;
                                } else if (l_orig[j]) {
                                    // mismatch!
                                    match = false;
                                    break;
                                }
                            }
                        }

                        // We're only interested in matches which actually cover some 
                        // yet uncovered bits: `match !== 0 && match !== false`.
                        // 
                        // Apply the heuristic that the pcode/escape is only going to be used
                        // when it covers *more* characters than its own identifier's length:
                        if (match && match > pcode.length) {
                            rv.push(pcode);

                            // and nuke the bits in the array which match the given pcode:
                            // make sure these edits are visible outside this function as
                            // `l` is an INPUT parameter (~ not modified)!
                            if (!bitarr_is_cloned) {
                                l2 = new Array(UNICODE_BASE_PLANE_MAX_CP$1 + 1);
                                for (j = 0; j <= UNICODE_BASE_PLANE_MAX_CP$1; j++) {
                                    l2[j] = l[j] || ba4pcode[j]; // `!(!l[j] && !ba4pcode[j])`
                                }
                                // recreate sentinel
                                l2[UNICODE_BASE_PLANE_MAX_CP$1 + 1] = 1;
                                l = l2;
                                bitarr_is_cloned = true;
                            } else {
                                for (j = 0; j <= UNICODE_BASE_PLANE_MAX_CP$1; j++) {
                                    l[j] = l[j] || ba4pcode[j];
                                }
                            }
                        }
                    }
                }
            }

            i = 0;
            while (i <= UNICODE_BASE_PLANE_MAX_CP$1) {
                // find first character not in original set:
                while (l[i]) {
                    i++;
                }
                if (i >= UNICODE_BASE_PLANE_MAX_CP$1 + 1) {
                    break;
                }
                // find next character not in original set:
                for (j = i + 1; !l[j]; j++) {} /* empty loop */
                // generate subset:
                rv.push(i2c(i));
                if (j - 1 > i) {
                    rv.push((j - 2 > i ? '-' : '') + i2c(j - 1));
                }
                i = j;
            }
        } else {
            // generate the non-inverted set, hence all logic checks are inverted here...
            cnt = 0;
            for (i = 0; i <= UNICODE_BASE_PLANE_MAX_CP$1; i++) {
                if (l[i]) {
                    cnt++;
                }
            }
            if (cnt === UNICODE_BASE_PLANE_MAX_CP$1 + 1) {
                // When we find the entire Unicode range is in the output match set, we replace this with
                // a shorthand regex: `[\S\s]`
                return '\\S\\s';
            } else if (cnt === 0) {
                // When there's nothing in the output we output a special 'match-nothing' regex: `[^\S\s]`.
                return '^\\S\\s';
            }

            // Now see if we can replace several bits by an escape / pcode:
            if (output_minimized) {
                lut = Pcodes_bitarray_cache_test_order;
                for (tn = 0; lut[tn]; tn++) {
                    tspec = lut[tn];
                    // check if the uniquely identifying char is in the set:
                    if (l[tspec[0]]) {
                        // check if the pcode is covered by the set:
                        pcode = tspec[1];
                        ba4pcode = Pcodes_bitarray_cache[pcode];
                        match = 0;
                        for (j = 0; j <= UNICODE_BASE_PLANE_MAX_CP$1; j++) {
                            if (ba4pcode[j]) {
                                if (l[j]) {
                                    // match in current bitset, i.e. there's at
                                    // least one 'new' bit covered by this pcode/escape:
                                    match++;
                                } else if (!l_orig[j]) {
                                    // mismatch!
                                    match = false;
                                    break;
                                }
                            }
                        }

                        // We're only interested in matches which actually cover some 
                        // yet uncovered bits: `match !== 0 && match !== false`.
                        // 
                        // Apply the heuristic that the pcode/escape is only going to be used
                        // when it covers *more* characters than its own identifier's length:
                        if (match && match > pcode.length) {
                            rv.push(pcode);

                            // and nuke the bits in the array which match the given pcode:
                            // make sure these edits are visible outside this function as
                            // `l` is an INPUT parameter (~ not modified)!
                            if (!bitarr_is_cloned) {
                                l2 = new Array(UNICODE_BASE_PLANE_MAX_CP$1 + 1);
                                for (j = 0; j <= UNICODE_BASE_PLANE_MAX_CP$1; j++) {
                                    l2[j] = l[j] && !ba4pcode[j];
                                }
                                // recreate sentinel
                                l2[UNICODE_BASE_PLANE_MAX_CP$1 + 1] = 1;
                                l = l2;
                                bitarr_is_cloned = true;
                            } else {
                                for (j = 0; j <= UNICODE_BASE_PLANE_MAX_CP$1; j++) {
                                    l[j] = l[j] && !ba4pcode[j];
                                }
                            }
                        }
                    }
                }
            }

            i = 0;
            while (i <= UNICODE_BASE_PLANE_MAX_CP$1) {
                // find first character not in original set:
                while (!l[i]) {
                    i++;
                }
                if (i >= UNICODE_BASE_PLANE_MAX_CP$1 + 1) {
                    break;
                }
                // find next character not in original set:
                for (j = i + 1; l[j]; j++) {} /* empty loop */
                if (j > UNICODE_BASE_PLANE_MAX_CP$1 + 1) {
                    j = UNICODE_BASE_PLANE_MAX_CP$1 + 1;
                }
                // generate subset:
                rv.push(i2c(i));
                if (j - 1 > i) {
                    rv.push((j - 2 > i ? '-' : '') + i2c(j - 1));
                }
                i = j;
            }
        }

        assert(rv.length);
        var s = rv.join('');
        assert(s);

        // Check if the set is better represented by one of the regex escapes:
        var esc4s = EscCode_bitarray_output_refs.set2esc[s];
        if (esc4s) {
            // When we hit a special case like this, it is always the shortest notation, hence wins on the spot!
            return '\\' + esc4s;
        }
        return s;
    }

    // Pretty brutal conversion of 'regex' `s` back to raw regex set content: strip outer [...] when they're there;
    // ditto for inner combos of sets, i.e. `]|[` as in `[0-9]|[a-z]`.
    function reduceRegexToSetBitArray(s, name, opts) {
        var orig = s;

        // propagate deferred exceptions = error reports.
        if (s instanceof Error) {
            return s;
        }

        var l = new Array(UNICODE_BASE_PLANE_MAX_CP$1 + 1);
        var internal_state = 0;
        var derr;

        while (s.length) {
            var c1 = s.match(CHR_RE$1);
            if (!c1) {
                // cope with illegal escape sequences too!
                return new Error('illegal escape sequence at start of regex part: "' + s + '" of regex "' + orig + '"');
            } else {
                c1 = c1[0];
            }
            s = s.substr(c1.length);

            switch (c1) {
                case '[':
                    // this is starting a set within the regex: scan until end of set!
                    var set_content = [];
                    while (s.length) {
                        var inner = s.match(SET_PART_RE$1);
                        if (!inner) {
                            inner = s.match(CHR_RE$1);
                            if (!inner) {
                                // cope with illegal escape sequences too!
                                return new Error('illegal escape sequence at start of regex part: ' + s + '" of regex "' + orig + '"');
                            } else {
                                inner = inner[0];
                            }
                            if (inner === ']') break;
                        } else {
                            inner = inner[0];
                        }
                        set_content.push(inner);
                        s = s.substr(inner.length);
                    }

                    // ensure that we hit the terminating ']':
                    var c2 = s.match(CHR_RE$1);
                    if (!c2) {
                        // cope with illegal escape sequences too!
                        return new Error('regex set expression is broken in regex: "' + orig + '" --> "' + s + '"');
                    } else {
                        c2 = c2[0];
                    }
                    if (c2 !== ']') {
                        return new Error('regex set expression is broken in regex: ' + orig);
                    }
                    s = s.substr(c2.length);

                    var se = set_content.join('');
                    if (!internal_state) {
                        derr = set2bitarray(l, se, opts);
                        // propagate deferred exceptions = error reports.
                        if (derr instanceof Error) {
                            return derr;
                        }

                        // a set is to use like a single character in a longer literal phrase, hence input `[abc]word[def]` would thus produce output `[abc]`:
                        internal_state = 1;
                    }
                    break;

                // Strip unescaped pipes to catch constructs like `\\r|\\n` and turn them into
                // something ready for use inside a regex set, e.g. `\\r\\n`.
                //
                // > Of course, we realize that converting more complex piped constructs this way
                // > will produce something you might not expect, e.g. `A|WORD2` which
                // > would end up as the set `[AW]` which is something else than the input
                // > entirely.
                // >
                // > However, we can only depend on the user (grammar writer) to realize this and
                // > prevent this from happening by not creating such oddities in the input grammar.
                case '|':
                    // a|b --> [ab]
                    internal_state = 0;
                    break;

                case '(':
                    // (a) --> a
                    //
                    // TODO - right now we treat this as 'too complex':

                    // Strip off some possible outer wrappers which we know how to remove.
                    // We don't worry about 'damaging' the regex as any too-complex regex will be caught
                    // in the validation check at the end; our 'strippers' here would not damage useful
                    // regexes anyway and them damaging the unacceptable ones is fine.
                    s = s.replace(/^\((?:\?:)?(.*?)\)$/, '$1'); // (?:...) -> ...  and  (...) -> ...
                    s = s.replace(/^\^?(.*?)\$?$/, '$1'); // ^...$ --> ...  (catch these both inside and outside the outer grouping, hence do the ungrouping twice: one before, once after this)
                    s = s.replace(/^\((?:\?:)?(.*?)\)$/, '$1'); // (?:...) -> ...  and  (...) -> ...

                    return new Error('[macro [' + name + '] is unsuitable for use inside regex set expressions: "[' + orig + ']"]');

                case '.':
                case '*':
                case '+':
                case '?':
                    // wildcard
                    //
                    // TODO - right now we treat this as 'too complex':
                    return new Error('[macro [' + name + '] is unsuitable for use inside regex set expressions: "[' + orig + ']"]');

                case '{':
                    // range, e.g. `x{1,3}`, or macro?
                    // TODO - right now we treat this as 'too complex':
                    return new Error('[macro [' + name + '] is unsuitable for use inside regex set expressions: "[' + orig + ']"]');

                default:
                    // literal character or word: take the first character only and ignore the rest, so that
                    // the constructed set for `word|noun` would be `[wb]`:
                    if (!internal_state) {
                        derr = set2bitarray(l, c1, opts);
                        // propagate deferred exceptions = error reports.
                        if (derr instanceof Error) {
                            return derr;
                        }

                        internal_state = 2;
                    }
                    break;
            }
        }

        s = bitarray2set(l);

        // When this result is suitable for use in a set, than we should be able to compile
        // it in a regex; that way we can easily validate whether macro X is fit to be used
        // inside a regex set:
        try {
            var re;
            assert(s);
            assert(!(s instanceof Error));
            re = new XRegExp('[' + s + ']');
            re.test(s[0]);

            // One thing is apparently *not* caught by the RegExp compile action above: `[a[b]c]`
            // so we check for lingering UNESCAPED brackets in here as those cannot be:
            if (/[^\\][\[\]]/.exec(s)) {
                throw new Error('unescaped brackets in set data');
            }
        } catch (ex) {
            // make sure we produce a set range expression which will fail badly when it is used
            // in actual code:
            s = new Error('[macro [' + name + '] is unsuitable for use inside regex set expressions: "[' + s + ']"]: ' + ex.message);
        }

        assert(s);
        // propagate deferred exceptions = error reports.
        if (s instanceof Error) {
            return s;
        }
        return l;
    }

    // Convert bitarray representing, for example, `'0-9'` to regex string `[0-9]` 
    // -- or in this example it can be further optimized to only `\d`!
    function produceOptimizedRegex4Set(bitarr) {
        // First try to produce a minimum regex from the bitarray directly:
        var s1 = bitarray2set(bitarr, false, true);

        // and when the regex set turns out to match a single pcode/escape, then
        // use that one as-is:
        if (s1.match(SET_IS_SINGLE_PCODE_RE)) {
            // When we hit a special case like this, it is always the shortest notation, hence wins on the spot!
            return s1;
        } else {
            s1 = '[' + s1 + ']';
        }

        // Now try to produce a minimum regex from the *inverted* bitarray via negation:
        // Because we look at a negated bitset, there's no use looking for matches with
        // special cases here.
        var s2 = bitarray2set(bitarr, true, true);

        if (s2[0] === '^') {
            s2 = s2.substr(1);
            if (s2.match(SET_IS_SINGLE_PCODE_RE)) {
                // When we hit a special case like this, it is always the shortest notation, hence wins on the spot!
                return s2;
            }
        } else {
            s2 = '^' + s2;
        }
        s2 = '[' + s2 + ']';

        // Then, as some pcode/escapes still happen to deliver a LARGER regex string in the end,
        // we also check against the plain, unadulterated regex set expressions:
        // 
        // First try to produce a minimum regex from the bitarray directly:
        var s3 = bitarray2set(bitarr, false, false);

        // and when the regex set turns out to match a single pcode/escape, then
        // use that one as-is:
        if (s3.match(SET_IS_SINGLE_PCODE_RE)) {
            // When we hit a special case like this, it is always the shortest notation, hence wins on the spot!
            return s3;
        } else {
            s3 = '[' + s3 + ']';
        }

        // Now try to produce a minimum regex from the *inverted* bitarray via negation:
        // Because we look at a negated bitset, there's no use looking for matches with
        // special cases here.
        var s4 = bitarray2set(bitarr, true, false);

        if (s4[0] === '^') {
            s4 = s4.substr(1);
            if (s4.match(SET_IS_SINGLE_PCODE_RE)) {
                // When we hit a special case like this, it is always the shortest notation, hence wins on the spot!
                return s4;
            }
        } else {
            s4 = '^' + s4;
        }
        s4 = '[' + s4 + ']';

        if (s2.length < s1.length) {
            s1 = s2;
        }
        if (s3.length < s1.length) {
            s1 = s3;
        }
        if (s4.length < s1.length) {
            s1 = s4;
        }

        return s1;
    }

    var setmgmt = {
        XREGEXP_UNICODE_ESCAPE_RE: XREGEXP_UNICODE_ESCAPE_RE$1,
        CHR_RE: CHR_RE$1,
        SET_PART_RE: SET_PART_RE$1,
        NOTHING_SPECIAL_RE: NOTHING_SPECIAL_RE$1,
        SET_IS_SINGLE_PCODE_RE: SET_IS_SINGLE_PCODE_RE,

        UNICODE_BASE_PLANE_MAX_CP: UNICODE_BASE_PLANE_MAX_CP$1,

        WHITESPACE_SETSTR: WHITESPACE_SETSTR$1,
        DIGIT_SETSTR: DIGIT_SETSTR$1,
        WORDCHAR_SETSTR: WORDCHAR_SETSTR$1,

        set2bitarray: set2bitarray,
        bitarray2set: bitarray2set,
        produceOptimizedRegex4Set: produceOptimizedRegex4Set,
        reduceRegexToSetBitArray: reduceRegexToSetBitArray
    };

    // Basic Lexer implemented using JavaScript regular expressions
    // Zachary Carter <zach@carter.name>
    // MIT Licensed

    var rmCommonWS = helpers.rmCommonWS;
    var camelCase = helpers.camelCase;
    var code_exec = helpers.exec;
    // import recast from '@gerhobbelt/recast';
    // import astUtils from '@gerhobbelt/ast-util';
    var version$1 = '0.6.1-202'; // require('./package.json').version;


    var XREGEXP_UNICODE_ESCAPE_RE = setmgmt.XREGEXP_UNICODE_ESCAPE_RE; // Matches the XRegExp Unicode escape braced part, e.g. `{Number}`
    var CHR_RE = setmgmt.CHR_RE;
    var SET_PART_RE = setmgmt.SET_PART_RE;
    var NOTHING_SPECIAL_RE = setmgmt.NOTHING_SPECIAL_RE;
    var UNICODE_BASE_PLANE_MAX_CP = setmgmt.UNICODE_BASE_PLANE_MAX_CP;

    // WARNING: this regex MUST match the regex for `ID` in ebnf-parser::bnf.l jison language lexer spec! (`ID = [{ALPHA}]{ALNUM}*`)
    //
    // This is the base XRegExp ID regex used in many places; this should match the ID macro definition in the EBNF/BNF parser et al as well!
    var ID_REGEX_BASE = '[\\p{Alphabetic}_][\\p{Alphabetic}_\\p{Number}]*';

    // see also ./lib/cli.js
    /**
    @public
    @nocollapse
    */
    var defaultJisonLexOptions = {
        moduleType: 'commonjs',
        debug: false,
        enableDebugLogs: false,
        json: false,
        main: false, // CLI: not:(--main option)
        dumpSourceCodeOnFailure: true,
        throwErrorOnCompileFailure: true,

        moduleName: undefined,
        defaultModuleName: 'lexer',
        file: undefined,
        outfile: undefined,
        inputPath: undefined,
        inputFilename: undefined,
        warn_cb: undefined, // function(msg) | true (= use Jison.Print) | false (= throw Exception)

        xregexp: false,
        lexerErrorsAreRecoverable: false,
        flex: false,
        backtrack_lexer: false,
        ranges: false, // track position range, i.e. start+end indexes in the input string
        trackPosition: true, // track line+column position in the input string
        caseInsensitive: false,
        showSource: false,
        exportSourceCode: false,
        exportAST: false,
        prettyCfg: true,
        pre_lex: undefined,
        post_lex: undefined
    };

    // Merge sets of options.
    //
    // Convert alternative jison option names to their base option.
    //
    // The *last* option set which overrides the default wins, where 'override' is
    // defined as specifying a not-undefined value which is not equal to the
    // default value.
    //
    // When the FIRST argument is STRING "NODEFAULT", then we MUST NOT mix the 
    // default values avialable in Jison.defaultJisonOptions.
    //
    // Return a fresh set of options.
    /** @public */
    function mkStdOptions() /*...args*/{
        var h = Object.prototype.hasOwnProperty;

        var opts = {};
        var args = [].concat.apply([], arguments);
        // clone defaults, so we do not modify those constants?
        if (args[0] !== "NODEFAULT") {
            args.unshift(defaultJisonLexOptions);
        } else {
            args.shift();
        }

        for (var i = 0, len = args.length; i < len; i++) {
            var o = args[i];
            if (!o) continue;

            // clone input (while camel-casing the options), so we do not modify those either.
            var o2 = {};

            for (var p in o) {
                if (typeof o[p] !== 'undefined' && h.call(o, p)) {
                    o2[camelCase(p)] = o[p];
                }
            }

            // now clean them options up:
            if (typeof o2.main !== 'undefined') {
                o2.noMain = !o2.main;
            }

            delete o2.main;

            // special check for `moduleName` to ensure we detect the 'default' moduleName entering from the CLI
            // NOT overriding the moduleName set in the grammar definition file via an `%options` entry:
            if (o2.moduleName === o2.defaultModuleName) {
                delete o2.moduleName;
            }

            // now see if we have an overriding option here:
            for (var p in o2) {
                if (h.call(o2, p)) {
                    if (typeof o2[p] !== 'undefined') {
                        opts[p] = o2[p];
                    }
                }
            }
        }

        return opts;
    }

    // set up export/output attributes of the `options` object instance
    function prepExportStructures(options) {
        // set up the 'option' `exportSourceCode` as a hash object for returning
        // all generated source code chunks to the caller
        var exportSourceCode = options.exportSourceCode;
        if (!exportSourceCode || (typeof exportSourceCode === 'undefined' ? 'undefined' : _typeof(exportSourceCode)) !== 'object') {
            exportSourceCode = {
                enabled: !!exportSourceCode
            };
        } else if (typeof exportSourceCode.enabled !== 'boolean') {
            exportSourceCode.enabled = true;
        }
        options.exportSourceCode = exportSourceCode;
    }

    // Autodetect if the input lexer spec is in JSON or JISON
    // format when the `options.json` flag is `true`.
    //
    // Produce the JSON lexer spec result when these are JSON formatted already as that
    // would save us the trouble of doing this again, anywhere else in the JISON
    // compiler/generator.
    //
    // Otherwise return the *parsed* lexer spec as it has
    // been processed through LexParser.
    function autodetectAndConvertToJSONformat(lexerSpec, options) {
        var chk_l = null;
        var ex1, err;

        if (typeof lexerSpec === 'string') {
            if (options.json) {
                try {
                    chk_l = json5.parse(lexerSpec);

                    // When JSON5-based parsing of the lexer spec succeeds, this implies the lexer spec is specified in `JSON mode`
                    // *OR* there's a JSON/JSON5 format error in the input:
                } catch (e) {
                    ex1 = e;
                }
            }
            if (!chk_l) {
                // // WARNING: the lexer may receive options specified in the **grammar spec file**,
                // //          hence we should mix the options to ensure the lexParser always
                // //          receives the full set!
                // //
                // // make sure all options are 'standardized' before we go and mix them together:
                // options = mkStdOptions(grammar.options, options);
                try {
                    chk_l = lexParser.parse(lexerSpec, options);
                } catch (e) {
                    if (options.json) {
                        err = new Error('Could not parse lexer spec in JSON AUTODETECT mode\nError: ' + ex1.message + ' (' + e.message + ')');
                        err.secondary_exception = e;
                        err.stack = ex1.stack;
                    } else {
                        err = new Error('Could not parse lexer spec\nError: ' + e.message);
                        err.stack = e.stack;
                    }
                    throw err;
                }
            }
        } else {
            chk_l = lexerSpec;
        }

        // Save time! Don't reparse the entire lexer spec *again* inside the code generators when that's not necessary:

        return chk_l;
    }

    // expand macros and convert matchers to RegExp's
    function prepareRules(dict, actions, caseHelper, tokens, startConditions, opts) {
        var m,
            i,
            k,
            rule,
            action,
            conditions,
            active_conditions,
            rules = dict.rules,
            newRules = [],
            macros = {},
            regular_rule_count = 0,
            simple_rule_count = 0;

        // Assure all options are camelCased:
        assert(typeof opts.options['case-insensitive'] === 'undefined');

        if (!tokens) {
            tokens = {};
        }

        // Depending on the location within the regex we need different expansions of the macros:
        // one expansion for when a macro is *inside* a `[...]` and another expansion when a macro
        // is anywhere else in a regex:
        if (dict.macros) {
            macros = prepareMacros(dict.macros, opts);
        }

        function tokenNumberReplacement(str, token) {
            return 'return ' + (tokens[token] || '\'' + token.replace(/'/g, '\\\'') + '\'');
        }

        // Make sure a comment does not contain any embedded '*/' end-of-comment marker
        // as that would break the generated code
        function postprocessComment(str) {
            if (Array.isArray(str)) {
                str = str.join(' ');
            }
            str = str.replace(/\*\//g, '*\\/'); // destroy any inner `*/` comment terminator sequence.
            return str;
        }

        actions.push('switch(yyrulenumber) {');

        for (i = 0; i < rules.length; i++) {
            rule = rules[i];
            m = rule[0];

            active_conditions = [];
            if (Object.prototype.toString.apply(m) !== '[object Array]') {
                // implicit add to all inclusive start conditions
                for (k in startConditions) {
                    if (startConditions[k].inclusive) {
                        active_conditions.push(k);
                        startConditions[k].rules.push(i);
                    }
                }
            } else if (m[0] === '*') {
                // Add to ALL start conditions
                active_conditions.push('*');
                for (k in startConditions) {
                    startConditions[k].rules.push(i);
                }
                rule.shift();
                m = rule[0];
            } else {
                // Add to explicit start conditions
                conditions = rule.shift();
                m = rule[0];
                for (k = 0; k < conditions.length; k++) {
                    if (!startConditions.hasOwnProperty(conditions[k])) {
                        startConditions[conditions[k]] = {
                            rules: [],
                            inclusive: false
                        };
                        console.warn('Lexer Warning:', '"' + conditions[k] + '" start condition should be defined as %s or %x; assuming %x now.');
                    }
                    active_conditions.push(conditions[k]);
                    startConditions[conditions[k]].rules.push(i);
                }
            }

            if (typeof m === 'string') {
                m = expandMacros(m, macros, opts);
                m = new XRegExp('^(?:' + m + ')', opts.options.caseInsensitive ? 'i' : '');
            }
            newRules.push(m);
            if (typeof rule[1] === 'function') {
                rule[1] = String(rule[1]).replace(/^\s*function \(\)\s?\{/, '').replace(/\}\s*$/, '');
            }
            action = rule[1];
            action = action.replace(/return '((?:\\'|[^']+)+)'/g, tokenNumberReplacement);
            action = action.replace(/return "((?:\\"|[^"]+)+)"/g, tokenNumberReplacement);

            var code = ['\n/*! Conditions::'];
            code.push(postprocessComment(active_conditions));
            code.push('*/', '\n/*! Rule::      ');
            code.push(postprocessComment(rules[i][0]));
            code.push('*/', '\n');

            // When the action is *only* a simple `return TOKEN` statement, then add it to the caseHelpers;
            // otherwise add the additional `break;` at the end.
            //
            // Note: we do NOT analyze the action block any more to see if the *last* line is a simple
            // `return NNN;` statement as there are too many shoddy idioms, e.g.
            //
            // ```
            // %{ if (cond)
            //      return TOKEN;
            // %}
            // ```
            //
            // which would then cause havoc when our action code analysis (using regexes or otherwise) was 'too simple'
            // to catch these culprits; hence we resort and stick with the most fundamental approach here:
            // always append `break;` even when it would be obvious to a human that such would be 'unreachable code'.
            var match_nr = /^return[\s\r\n]+((?:'(?:\\'|[^']+)+')|(?:"(?:\\"|[^"]+)+")|\d+)[\s\r\n]*;?$/.exec(action.trim());
            if (match_nr) {
                simple_rule_count++;
                caseHelper.push([].concat(code, i, ':', match_nr[1]).join(' ').replace(/[\n]/g, '\n  '));
            } else {
                regular_rule_count++;
                actions.push([].concat('case', i, ':', code, action, '\nbreak;').join(' '));
            }
        }
        actions.push('default:');
        actions.push('  return this.simpleCaseActionClusters[yyrulenumber];');
        actions.push('}');

        return {
            rules: newRules,
            macros: macros,

            regular_rule_count: regular_rule_count,
            simple_rule_count: simple_rule_count
        };
    }

    // expand all macros (with maybe one exception) in the given regex: the macros may exist inside `[...]` regex sets or
    // elsewhere, which requires two different treatments to expand these macros.
    function reduceRegex(s, name, opts, expandAllMacrosInSet_cb, expandAllMacrosElsewhere_cb) {
        var orig = s;

        function errinfo() {
            if (name) {
                return 'macro [[' + name + ']]';
            } else {
                return 'regex [[' + orig + ']]';
            }
        }

        // propagate deferred exceptions = error reports.
        if (s instanceof Error) {
            return s;
        }

        var c1, c2;
        var rv = [];
        var derr;
        var se;

        while (s.length) {
            c1 = s.match(CHR_RE);
            if (!c1) {
                // cope with illegal escape sequences too!
                return new Error(errinfo() + ': illegal escape sequence at start of regex part: ' + s);
            } else {
                c1 = c1[0];
            }
            s = s.substr(c1.length);

            switch (c1) {
                case '[':
                    // this is starting a set within the regex: scan until end of set!
                    var set_content = [];
                    var l = new Array(UNICODE_BASE_PLANE_MAX_CP + 1);

                    while (s.length) {
                        var inner = s.match(SET_PART_RE);
                        if (!inner) {
                            inner = s.match(CHR_RE);
                            if (!inner) {
                                // cope with illegal escape sequences too!
                                return new Error(errinfo() + ': illegal escape sequence at start of regex part: ' + s);
                            } else {
                                inner = inner[0];
                            }
                            if (inner === ']') break;
                        } else {
                            inner = inner[0];
                        }
                        set_content.push(inner);
                        s = s.substr(inner.length);
                    }

                    // ensure that we hit the terminating ']':
                    c2 = s.match(CHR_RE);
                    if (!c2) {
                        // cope with illegal escape sequences too!
                        return new Error(errinfo() + ': regex set expression is broken: "' + s + '"');
                    } else {
                        c2 = c2[0];
                    }
                    if (c2 !== ']') {
                        return new Error(errinfo() + ': regex set expression is broken: apparently unterminated');
                    }
                    s = s.substr(c2.length);

                    se = set_content.join('');

                    // expand any macros in here:
                    if (expandAllMacrosInSet_cb) {
                        se = expandAllMacrosInSet_cb(se);
                        assert(se);
                        if (se instanceof Error) {
                            return new Error(errinfo() + ': ' + se.message);
                        }
                    }

                    derr = setmgmt.set2bitarray(l, se, opts);
                    if (derr instanceof Error) {
                        return new Error(errinfo() + ': ' + derr.message);
                    }

                    // find out which set expression is optimal in size:
                    var s1 = setmgmt.produceOptimizedRegex4Set(l);

                    // check if the source regex set potentially has any expansions (guestimate!)
                    //
                    // The indexOf('{') picks both XRegExp Unicode escapes and JISON lexer macros, which is perfect for us here.
                    var has_expansions = se.indexOf('{') >= 0;

                    se = '[' + se + ']';

                    if (!has_expansions && se.length < s1.length) {
                        s1 = se;
                    }
                    rv.push(s1);
                    break;

                // XRegExp Unicode escape, e.g. `\\p{Number}`:
                case '\\p':
                    c2 = s.match(XREGEXP_UNICODE_ESCAPE_RE);
                    if (c2) {
                        c2 = c2[0];
                        s = s.substr(c2.length);

                        // nothing to expand.
                        rv.push(c1 + c2);
                    } else {
                        // nothing to stretch this match, hence nothing to expand.
                        rv.push(c1);
                    }
                    break;

                // Either a range expression or the start of a macro reference: `.{1,3}` or `{NAME}`.
                // Treat it as a macro reference and see if it will expand to anything:
                case '{':
                    c2 = s.match(NOTHING_SPECIAL_RE);
                    if (c2) {
                        c2 = c2[0];
                        s = s.substr(c2.length);

                        var c3 = s[0];
                        s = s.substr(c3.length);
                        if (c3 === '}') {
                            // possibly a macro name in there... Expand if possible:
                            c2 = c1 + c2 + c3;
                            if (expandAllMacrosElsewhere_cb) {
                                c2 = expandAllMacrosElsewhere_cb(c2);
                                assert(c2);
                                if (c2 instanceof Error) {
                                    return new Error(errinfo() + ': ' + c2.message);
                                }
                            }
                        } else {
                            // not a well-terminated macro reference or something completely different:
                            // we do not even attempt to expand this as there's guaranteed nothing to expand
                            // in this bit.
                            c2 = c1 + c2 + c3;
                        }
                        rv.push(c2);
                    } else {
                        // nothing to stretch this match, hence nothing to expand.
                        rv.push(c1);
                    }
                    break;

                // Recognize some other regex elements, but there's no need to understand them all.
                //
                // We are merely interested in any chunks now which do *not* include yet another regex set `[...]`
                // nor any `{MACRO}` reference:
                default:
                    // non-set character or word: see how much of this there is for us and then see if there
                    // are any macros still lurking inside there:
                    c2 = s.match(NOTHING_SPECIAL_RE);
                    if (c2) {
                        c2 = c2[0];
                        s = s.substr(c2.length);

                        // nothing to expand.
                        rv.push(c1 + c2);
                    } else {
                        // nothing to stretch this match, hence nothing to expand.
                        rv.push(c1);
                    }
                    break;
            }
        }

        s = rv.join('');

        // When this result is suitable for use in a set, than we should be able to compile
        // it in a regex; that way we can easily validate whether macro X is fit to be used
        // inside a regex set:
        try {
            var re;
            re = new XRegExp(s);
            re.test(s[0]);
        } catch (ex) {
            // make sure we produce a regex expression which will fail badly when it is used
            // in actual code:
            return new Error(errinfo() + ': expands to an invalid regex: /' + s + '/');
        }

        assert(s);
        return s;
    }

    // expand macros within macros and cache the result
    function prepareMacros(dict_macros, opts) {
        var macros = {};

        // expand a `{NAME}` macro which exists inside a `[...]` set:
        function expandMacroInSet(i) {
            var k, a, m;
            if (!macros[i]) {
                m = dict_macros[i];

                if (m.indexOf('{') >= 0) {
                    // set up our own record so we can detect definition loops:
                    macros[i] = {
                        in_set: false,
                        elsewhere: null,
                        raw: dict_macros[i]
                    };

                    for (k in dict_macros) {
                        if (dict_macros.hasOwnProperty(k) && i !== k) {
                            // it doesn't matter if the lexer recognized that the inner macro(s)
                            // were sitting inside a `[...]` set or not: the fact that they are used
                            // here in macro `i` which itself sits in a set, makes them *all* live in
                            // a set so all of them get the same treatment: set expansion style.
                            //
                            // Note: make sure we don't try to expand any XRegExp `\p{...}` or `\P{...}`
                            // macros here:
                            if (XRegExp._getUnicodeProperty(k)) {
                                // Work-around so that you can use `\p{ascii}` for a XRegExp slug, a.k.a.
                                // Unicode 'General Category' Property cf. http://unicode.org/reports/tr18/#Categories,
                                // while using `\p{ASCII}` as a *macro expansion* of the `ASCII`
                                // macro:
                                if (k.toUpperCase() !== k) {
                                    m = new Error('Cannot use name "' + k + '" as a macro name as it clashes with the same XRegExp "\\p{..}" Unicode \'General Category\' Property name. Use all-uppercase macro names, e.g. name your macro "' + k.toUpperCase() + '" to work around this issue or give your offending macro a different name.');
                                    break;
                                }
                            }

                            a = m.split('{' + k + '}');
                            if (a.length > 1) {
                                var x = expandMacroInSet(k);
                                assert(x);
                                if (x instanceof Error) {
                                    m = x;
                                    break;
                                }
                                m = a.join(x);
                            }
                        }
                    }
                }

                var mba = setmgmt.reduceRegexToSetBitArray(m, i, opts);

                var s1;

                // propagate deferred exceptions = error reports.
                if (mba instanceof Error) {
                    s1 = mba;
                } else {
                    s1 = setmgmt.bitarray2set(mba, false);

                    m = s1;
                }

                macros[i] = {
                    in_set: s1,
                    elsewhere: null,
                    raw: dict_macros[i]
                };
            } else {
                m = macros[i].in_set;

                if (m instanceof Error) {
                    // this turns out to be an macro with 'issues' and it is used, so the 'issues' do matter: bombs away!
                    return new Error(m.message);
                }

                // detect definition loop:
                if (m === false) {
                    return new Error('Macro name "' + i + '" has an illegal, looping, definition, i.e. it\'s definition references itself, either directly or indirectly, via other macros.');
                }
            }

            return m;
        }

        function expandMacroElsewhere(i) {
            var k, a, m;

            if (macros[i].elsewhere == null) {
                m = dict_macros[i];

                // set up our own record so we can detect definition loops:
                macros[i].elsewhere = false;

                // the macro MAY contain other macros which MAY be inside a `[...]` set in this
                // macro or elsewhere, hence we must parse the regex:
                m = reduceRegex(m, i, opts, expandAllMacrosInSet, expandAllMacrosElsewhere);
                // propagate deferred exceptions = error reports.
                if (m instanceof Error) {
                    return m;
                }

                macros[i].elsewhere = m;
            } else {
                m = macros[i].elsewhere;

                if (m instanceof Error) {
                    // this turns out to be an macro with 'issues' and it is used, so the 'issues' do matter: bombs away!
                    return m;
                }

                // detect definition loop:
                if (m === false) {
                    return new Error('Macro name "' + i + '" has an illegal, looping, definition, i.e. it\'s definition references itself, either directly or indirectly, via other macros.');
                }
            }

            return m;
        }

        function expandAllMacrosInSet(s) {
            var i, x;

            // process *all* the macros inside [...] set:
            if (s.indexOf('{') >= 0) {
                for (i in macros) {
                    if (macros.hasOwnProperty(i)) {
                        var a = s.split('{' + i + '}');
                        if (a.length > 1) {
                            x = expandMacroInSet(i);
                            assert(x);
                            if (x instanceof Error) {
                                return new Error('failure to expand the macro [' + i + '] in set [' + s + ']: ' + x.message);
                            }
                            s = a.join(x);
                        }

                        // stop the brute-force expansion attempt when we done 'em all:
                        if (s.indexOf('{') === -1) {
                            break;
                        }
                    }
                }
            }

            return s;
        }

        function expandAllMacrosElsewhere(s) {
            var i, x;

            // When we process the remaining macro occurrences in the regex
            // every macro used in a lexer rule will become its own capture group.
            //
            // Meanwhile the cached expansion will expand any submacros into
            // *NON*-capturing groups so that the backreference indexes remain as you'ld
            // expect and using macros doesn't require you to know exactly what your
            // used macro will expand into, i.e. which and how many submacros it has.
            //
            // This is a BREAKING CHANGE from vanilla jison 0.4.15!
            if (s.indexOf('{') >= 0) {
                for (i in macros) {
                    if (macros.hasOwnProperty(i)) {
                        // These are all submacro expansions, hence non-capturing grouping is applied:
                        var a = s.split('{' + i + '}');
                        if (a.length > 1) {
                            x = expandMacroElsewhere(i);
                            assert(x);
                            if (x instanceof Error) {
                                return new Error('failure to expand the macro [' + i + '] in regex /' + s + '/: ' + x.message);
                            }
                            s = a.join('(?:' + x + ')');
                        }

                        // stop the brute-force expansion attempt when we done 'em all:
                        if (s.indexOf('{') === -1) {
                            break;
                        }
                    }
                }
            }

            return s;
        }

        var m, i;

        if (opts.debug) console.log('\n############## RAW macros: ', dict_macros);

        // first we create the part of the dictionary which is targeting the use of macros
        // *inside* `[...]` sets; once we have completed that half of the expansions work,
        // we then go and expand the macros for when they are used elsewhere in a regex:
        // iff we encounter submacros then which are used *inside* a set, we can use that
        // first half dictionary to speed things up a bit as we can use those expansions
        // straight away!
        for (i in dict_macros) {
            if (dict_macros.hasOwnProperty(i)) {
                expandMacroInSet(i);
            }
        }

        for (i in dict_macros) {
            if (dict_macros.hasOwnProperty(i)) {
                expandMacroElsewhere(i);
            }
        }

        if (opts.debug) console.log('\n############### expanded macros: ', macros);

        return macros;
    }

    // expand macros in a regex; expands them recursively
    function expandMacros(src, macros, opts) {
        var expansion_count = 0;

        // By the time we call this function `expandMacros` we MUST have expanded and cached all macros already!
        // Hence things should be easy in there:

        function expandAllMacrosInSet(s) {
            var i, m, x;

            // process *all* the macros inside [...] set:
            if (s.indexOf('{') >= 0) {
                for (i in macros) {
                    if (macros.hasOwnProperty(i)) {
                        m = macros[i];

                        var a = s.split('{' + i + '}');
                        if (a.length > 1) {
                            x = m.in_set;

                            assert(x);
                            if (x instanceof Error) {
                                // this turns out to be an macro with 'issues' and it is used, so the 'issues' do matter: bombs away!
                                throw x;
                            }

                            // detect definition loop:
                            if (x === false) {
                                return new Error('Macro name "' + i + '" has an illegal, looping, definition, i.e. it\'s definition references itself, either directly or indirectly, via other macros.');
                            }

                            s = a.join(x);
                            expansion_count++;
                        }

                        // stop the brute-force expansion attempt when we done 'em all:
                        if (s.indexOf('{') === -1) {
                            break;
                        }
                    }
                }
            }

            return s;
        }

        function expandAllMacrosElsewhere(s) {
            var i, m, x;

            // When we process the main macro occurrences in the regex
            // every macro used in a lexer rule will become its own capture group.
            //
            // Meanwhile the cached expansion will expand any submacros into
            // *NON*-capturing groups so that the backreference indexes remain as you'ld
            // expect and using macros doesn't require you to know exactly what your
            // used macro will expand into, i.e. which and how many submacros it has.
            //
            // This is a BREAKING CHANGE from vanilla jison 0.4.15!
            if (s.indexOf('{') >= 0) {
                for (i in macros) {
                    if (macros.hasOwnProperty(i)) {
                        m = macros[i];

                        var a = s.split('{' + i + '}');
                        if (a.length > 1) {
                            // These are all main macro expansions, hence CAPTURING grouping is applied:
                            x = m.elsewhere;
                            assert(x);

                            // detect definition loop:
                            if (x === false) {
                                return new Error('Macro name "' + i + '" has an illegal, looping, definition, i.e. it\'s definition references itself, either directly or indirectly, via other macros.');
                            }

                            s = a.join('(' + x + ')');
                            expansion_count++;
                        }

                        // stop the brute-force expansion attempt when we done 'em all:
                        if (s.indexOf('{') === -1) {
                            break;
                        }
                    }
                }
            }

            return s;
        }

        // When we process the macro occurrences in the regex
        // every macro used in a lexer rule will become its own capture group.
        //
        // Meanwhile the cached expansion will have expanded any submacros into
        // *NON*-capturing groups so that the backreference indexes remain as you'ld
        // expect and using macros doesn't require you to know exactly what your
        // used macro will expand into, i.e. which and how many submacros it has.
        //
        // This is a BREAKING CHANGE from vanilla jison 0.4.15!
        var s2 = reduceRegex(src, null, opts, expandAllMacrosInSet, expandAllMacrosElsewhere);
        // propagate deferred exceptions = error reports.
        if (s2 instanceof Error) {
            throw s2;
        }

        // only when we did expand some actual macros do we take the re-interpreted/optimized/regenerated regex from reduceRegex()
        // in order to keep our test cases simple and rules recognizable. This assumes the user can code good regexes on his own,
        // as long as no macros are involved...
        //
        // Also pick the reduced regex when there (potentially) are XRegExp extensions in the original, e.g. `\\p{Number}`,
        // unless the `xregexp` output option has been enabled.
        if (expansion_count > 0 || src.indexOf('\\p{') >= 0 && !opts.options.xregexp) {
            src = s2;
        } else {
            // Check if the reduced regex is smaller in size; when it is, we still go with the new one!
            if (s2.length < src.length) {
                src = s2;
            }
        }

        return src;
    }

    function prepareStartConditions(conditions) {
        var sc,
            hash = {};
        for (sc in conditions) {
            if (conditions.hasOwnProperty(sc)) {
                hash[sc] = { rules: [], inclusive: !conditions[sc] };
            }
        }
        return hash;
    }

    function buildActions(dict, tokens, opts) {
        var actions = [dict.actionInclude || '', 'var YYSTATE = YY_START;'];
        var tok;
        var toks = {};
        var caseHelper = [];

        // tokens: map/array of token numbers to token names
        for (tok in tokens) {
            var idx = parseInt(tok);
            if (idx && idx > 0) {
                toks[tokens[tok]] = idx;
            }
        }

        if (opts.options.flex) {
            dict.rules.push(['.', 'console.log("", yytext); /* `flex` lexing mode: the last resort rule! */']);
        }

        var gen = prepareRules(dict, actions, caseHelper, tokens && toks, opts.conditions, opts);

        var fun = actions.join('\n');
        'yytext yyleng yylineno yylloc yyerror'.split(' ').forEach(function (yy) {
            fun = fun.replace(new RegExp('\\b(' + yy + ')\\b', 'g'), 'yy_.$1');
        });

        return {
            caseHelperInclude: '{\n' + caseHelper.join(',') + '\n}',

            actions: 'function lexer__performAction(yy, yyrulenumber, YY_START) {\n            var yy_ = this;\n\n            ' + fun + '\n        }',

            rules: gen.rules,
            macros: gen.macros, // propagate these for debugging/diagnostic purposes

            regular_rule_count: gen.regular_rule_count,
            simple_rule_count: gen.simple_rule_count
        };
    }

    //
    // NOTE: this is *almost* a copy of the JisonParserError producing code in
    //       jison/lib/jison.js @ line 2304:lrGeneratorMixin.generateErrorClass
    //
    function generateErrorClass() {
        // --- START lexer error class ---

        var prelude = '/**\n * See also:\n * http://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript/#35881508\n * but we keep the prototype.constructor and prototype.name assignment lines too for compatibility\n * with userland code which might access the derived class in a \'classic\' way.\n *\n * @public\n * @constructor\n * @nocollapse\n */\nfunction JisonLexerError(msg, hash) {\n    Object.defineProperty(this, \'name\', {\n        enumerable: false,\n        writable: false,\n        value: \'JisonLexerError\'\n    });\n\n    if (msg == null) msg = \'???\';\n\n    Object.defineProperty(this, \'message\', {\n        enumerable: false,\n        writable: true,\n        value: msg\n    });\n\n    this.hash = hash;\n\n    var stacktrace;\n    if (hash && hash.exception instanceof Error) {\n        var ex2 = hash.exception;\n        this.message = ex2.message || msg;\n        stacktrace = ex2.stack;\n    }\n    if (!stacktrace) {\n        if (Error.hasOwnProperty(\'captureStackTrace\')) { // V8\n            Error.captureStackTrace(this, this.constructor);\n        } else {\n            stacktrace = (new Error(msg)).stack;\n        }\n    }\n    if (stacktrace) {\n        Object.defineProperty(this, \'stack\', {\n            enumerable: false,\n            writable: false,\n            value: stacktrace\n        });\n    }\n}\n\nif (typeof Object.setPrototypeOf === \'function\') {\n    Object.setPrototypeOf(JisonLexerError.prototype, Error.prototype);\n} else {\n    JisonLexerError.prototype = Object.create(Error.prototype);\n}\nJisonLexerError.prototype.constructor = JisonLexerError;\nJisonLexerError.prototype.name = \'JisonLexerError\';';

        // --- END lexer error class ---

        return prelude;
    }

    var jisonLexerErrorDefinition = generateErrorClass();

    function generateFakeXRegExpClassSrcCode() {
        return rmCommonWS(_templateObject);
    }

    /** @constructor */
    function RegExpLexer(dict, input, tokens, build_options) {
        var opts;
        var dump = false;

        function test_me(tweak_cb, description, src_exception, ex_callback) {
            opts = processGrammar(dict, tokens, build_options);
            opts.__in_rules_failure_analysis_mode__ = false;
            prepExportStructures(opts);
            assert(opts.options);
            if (tweak_cb) {
                tweak_cb();
            }
            var source = generateModuleBody(opts);
            try {
                // The generated code will always have the `lexer` variable declared at local scope
                // as `eval()` will use the local scope.
                //
                // The compiled code will look something like this:
                //
                // ```
                // var lexer;
                // bla bla...
                // ```
                //
                // or
                //
                // ```
                // var lexer = { bla... };
                // ```
                var testcode = ['// provide a local version for test purposes:', jisonLexerErrorDefinition, '', generateFakeXRegExpClassSrcCode(), '', source, '', 'return lexer;'].join('\n');
                var lexer = code_exec(testcode, function generated_code_exec_wrapper_regexp_lexer(sourcecode) {
                    //console.log("===============================LEXER TEST CODE\n", sourcecode, "\n=====================END====================\n");
                    var lexer_f = new Function('', sourcecode);
                    return lexer_f();
                }, opts.options, "lexer");

                if (!lexer) {
                    throw new Error('no lexer defined *at all*?!');
                }
                if (_typeof(lexer.options) !== 'object' || lexer.options == null) {
                    throw new Error('your lexer class MUST have an .options member object or it won\'t fly!');
                }
                if (typeof lexer.setInput !== 'function') {
                    throw new Error('your lexer class MUST have a .setInput function member or it won\'t fly!');
                }
                if (lexer.EOF !== 1 && lexer.ERROR !== 2) {
                    throw new Error('your lexer class MUST have these constants defined: lexer.EOF = 1 and lexer.ERROR = 2 or it won\'t fly!');
                }

                // When we do NOT crash, we found/killed the problem area just before this call!
                if (src_exception && description) {
                    src_exception.message += '\n        (' + description + ')';
                }

                // patch the pre and post handlers in there, now that we have some live code to work with:
                if (opts.options) {
                    var pre = opts.options.pre_lex;
                    var post = opts.options.post_lex;
                    // since JSON cannot encode functions, we'll have to do it manually now:
                    if (typeof pre === 'function') {
                        lexer.options.pre_lex = pre;
                    }
                    if (typeof post === 'function') {
                        lexer.options.post_lex = post;
                    }
                }

                if (opts.options.showSource) {
                    if (typeof opts.options.showSource === 'function') {
                        opts.options.showSource(lexer, source, opts);
                    } else {
                        console.log("\nGenerated lexer sourcecode:\n----------------------------------------\n", source, "\n----------------------------------------\n");
                    }
                }
                return lexer;
            } catch (ex) {
                // if (src_exception) {
                //     src_exception.message += '\n        (' + description + ': ' + ex.message + ')';
                // }

                if (ex_callback) {
                    ex_callback(ex);
                } else if (dump) {
                    console.log('source code:\n', source);
                }
                return false;
            }
        }

        /** @constructor */
        var lexer = test_me(null, null, null, function (ex) {
            // When we get an exception here, it means some part of the user-specified lexer is botched.
            //
            // Now we go and try to narrow down the problem area/category:
            assert(opts.options);
            assert(opts.options.xregexp !== undefined);
            var orig_xregexp_opt = !!opts.options.xregexp;
            if (!test_me(function () {
                assert(opts.options.xregexp !== undefined);
                opts.options.xregexp = false;
                opts.showSource = false;
            }, 'When you have specified %option xregexp, you must also properly IMPORT the XRegExp library in the generated lexer.', ex, null)) {
                if (!test_me(function () {
                    // restore xregexp option setting: the trouble wasn't caused by the xregexp flag i.c.w. incorrect XRegExp library importing!
                    opts.options.xregexp = orig_xregexp_opt;

                    opts.conditions = [];
                    opts.showSource = false;
                }, dict.rules.length > 0 ? 'One or more of your lexer state names are possibly botched?' : 'Your custom lexer is somehow botched.', ex, null)) {
                    if (!test_me(function () {
                        // opts.conditions = [];
                        opts.rules = [];
                        opts.showSource = false;
                        opts.__in_rules_failure_analysis_mode__ = true;
                    }, 'One or more of your lexer rules are possibly botched?', ex, null)) {
                        // kill each rule action block, one at a time and test again after each 'edit':
                        var rv = false;
                        for (var i = 0, len = dict.rules.length; i < len; i++) {
                            dict.rules[i][1] = '{ /* nada */ }';
                            rv = test_me(function () {
                                // opts.conditions = [];
                                // opts.rules = [];
                                // opts.__in_rules_failure_analysis_mode__ = true;
                            }, 'Your lexer rule "' + dict.rules[i][0] + '" action code block is botched?', ex, null);
                            if (rv) {
                                break;
                            }
                        }
                        if (!rv) {
                            test_me(function () {
                                opts.conditions = [];
                                opts.rules = [];
                                opts.performAction = 'null';
                                // opts.options = {};
                                // opts.caseHelperInclude = '{}';
                                opts.showSource = false;
                                opts.__in_rules_failure_analysis_mode__ = true;

                                dump = false;
                            }, 'One or more of your lexer rule action code block(s) are possibly botched?', ex, null);
                        }
                    }
                }
            }
            throw ex;
        });

        lexer.setInput(input);

        /** @public */
        lexer.generate = function () {
            return generateFromOpts(opts);
        };
        /** @public */
        lexer.generateModule = function () {
            return generateModule(opts);
        };
        /** @public */
        lexer.generateCommonJSModule = function () {
            return generateCommonJSModule(opts);
        };
        /** @public */
        lexer.generateESModule = function () {
            return generateESModule(opts);
        };
        /** @public */
        lexer.generateAMDModule = function () {
            return generateAMDModule(opts);
        };

        // internal APIs to aid testing:
        /** @public */
        lexer.getExpandedMacros = function () {
            return opts.macros;
        };

        return lexer;
    }

    // code stripping performance test for very simple grammar:
    //
    // - removing backtracking parser code branches:                    730K -> 750K rounds
    // - removing all location info tracking: yylineno, yylloc, etc.:   750K -> 900K rounds
    // - no `yyleng`:                                                   900K -> 905K rounds
    // - no `this.done` as we cannot have a NULL `_input` anymore:      905K -> 930K rounds
    // - `simpleCaseActionClusters` as array instead of hash object:    930K -> 940K rounds
    // - lexers which have only return stmts, i.e. only a
    //   `simpleCaseActionClusters` lookup table to produce
    //   lexer tokens: *inline* the `performAction` call:               940K -> 950K rounds
    // - given all the above, you can *inline* what's left of
    //   `lexer_next()`:                                                950K -> 955K rounds (? this stuff becomes hard to measure; inaccuracy abounds!)
    //
    // Total gain when we forget about very minor (and tough to nail) *inlining* `lexer_next()` gains:
    //
    //     730 -> 950  ~ 30% performance gain.
    //

    // As a function can be reproduced in source-code form by any JavaScript engine, we're going to wrap this chunk
    // of code in a function so that we can easily get it including it comments, etc.:
    /**
    @public
    @nocollapse
    */
    function getRegExpLexerPrototype() {
        // --- START lexer kernel ---
        return '{\n    EOF: 1,\n    ERROR: 2,\n\n    // JisonLexerError: JisonLexerError,        /// <-- injected by the code generator\n\n    // options: {},                             /// <-- injected by the code generator\n\n    // yy: ...,                                 /// <-- injected by setInput()\n\n    __currentRuleSet__: null,                   /// INTERNAL USE ONLY: internal rule set cache for the current lexer state\n\n    __error_infos: [],                          /// INTERNAL USE ONLY: the set of lexErrorInfo objects created since the last cleanup\n\n    __decompressed: false,                      /// INTERNAL USE ONLY: mark whether the lexer instance has been \'unfolded\' completely and is now ready for use\n\n    done: false,                                /// INTERNAL USE ONLY\n    _backtrack: false,                          /// INTERNAL USE ONLY\n    _input: \'\',                                 /// INTERNAL USE ONLY\n    _more: false,                               /// INTERNAL USE ONLY\n    _signaled_error_token: false,               /// INTERNAL USE ONLY\n\n    conditionStack: [],                         /// INTERNAL USE ONLY; managed via `pushState()`, `popState()`, `topState()` and `stateStackSize()`\n\n    match: \'\',                                  /// READ-ONLY EXTERNAL ACCESS - ADVANCED USE ONLY: tracks input which has been matched so far for the lexer token under construction. `match` is identical to `yytext` except that this one still contains the matched input string after `lexer.performAction()` has been invoked, where userland code MAY have changed/replaced the `yytext` value entirely!\n    matched: \'\',                                /// READ-ONLY EXTERNAL ACCESS - ADVANCED USE ONLY: tracks entire input which has been matched so far\n    matches: false,                             /// READ-ONLY EXTERNAL ACCESS - ADVANCED USE ONLY: tracks RE match result for last (successful) match attempt\n    yytext: \'\',                                 /// ADVANCED USE ONLY: tracks input which has been matched so far for the lexer token under construction; this value is transferred to the parser as the \'token value\' when the parser consumes the lexer token produced through a call to the `lex()` API.\n    offset: 0,                                  /// READ-ONLY EXTERNAL ACCESS - ADVANCED USE ONLY: tracks the \'cursor position\' in the input string, i.e. the number of characters matched so far\n    yyleng: 0,                                  /// READ-ONLY EXTERNAL ACCESS - ADVANCED USE ONLY: length of matched input for the token under construction (`yytext`)\n    yylineno: 0,                                /// READ-ONLY EXTERNAL ACCESS - ADVANCED USE ONLY: \'line number\' at which the token under construction is located\n    yylloc: null,                               /// READ-ONLY EXTERNAL ACCESS - ADVANCED USE ONLY: tracks location info (lines + columns) for the token under construction\n\n    /**\n     * INTERNAL USE: construct a suitable error info hash object instance for `parseError`.\n     * \n     * @public\n     * @this {RegExpLexer}\n     */\n    constructLexErrorInfo: function lexer_constructLexErrorInfo(msg, recoverable) {\n        /** @constructor */\n        var pei = {\n            errStr: msg,\n            recoverable: !!recoverable,\n            text: this.match,           // This one MAY be empty; userland code should use the `upcomingInput` API to obtain more text which follows the \'lexer cursor position\'...\n            token: null,\n            line: this.yylineno,\n            loc: this.yylloc,\n            yy: this.yy,\n            lexer: this,\n\n            /**\n             * and make sure the error info doesn\'t stay due to potential\n             * ref cycle via userland code manipulations.\n             * These would otherwise all be memory leak opportunities!\n             * \n             * Note that only array and object references are nuked as those\n             * constitute the set of elements which can produce a cyclic ref.\n             * The rest of the members is kept intact as they are harmless.\n             * \n             * @public\n             * @this {LexErrorInfo}\n             */\n            destroy: function destructLexErrorInfo() {\n                // remove cyclic references added to error info:\n                // info.yy = null;\n                // info.lexer = null;\n                // ...\n                var rec = !!this.recoverable;\n                for (var key in this) {\n                    if (this.hasOwnProperty(key) && typeof key === \'object\') {\n                        this[key] = undefined;\n                    }\n                }\n                this.recoverable = rec;\n            }\n        };\n        // track this instance so we can `destroy()` it once we deem it superfluous and ready for garbage collection!\n        this.__error_infos.push(pei);\n        return pei;\n    },\n\n    /**\n     * handler which is invoked when a lexer error occurs.\n     * \n     * @public\n     * @this {RegExpLexer}\n     */\n    parseError: function lexer_parseError(str, hash, ExceptionClass) {\n        if (!ExceptionClass) {\n            ExceptionClass = this.JisonLexerError;\n        }\n        if (this.yy) {\n            if (this.yy.parser && typeof this.yy.parser.parseError === \'function\') {\n                return this.yy.parser.parseError.call(this, str, hash, ExceptionClass) || this.ERROR;\n            } else if (typeof this.yy.parseError === \'function\') {\n                return this.yy.parseError.call(this, str, hash, ExceptionClass) || this.ERROR;\n            } \n        }\n        throw new ExceptionClass(str, hash);\n    },\n\n    /**\n     * method which implements `yyerror(str, ...args)` functionality for use inside lexer actions.\n     * \n     * @public\n     * @this {RegExpLexer}\n     */\n    yyerror: function yyError(str /*, ...args */) {\n        var lineno_msg = \'\';\n        if (this.options.trackPosition) {\n            lineno_msg = \' on line \' + (this.yylineno + 1);\n        }\n        var p = this.constructLexErrorInfo(\'Lexical error\' + lineno_msg + \': \' + str, this.options.lexerErrorsAreRecoverable);\n\n        // Add any extra args to the hash under the name `extra_error_attributes`:\n        var args = Array.prototype.slice.call(arguments, 1);\n        if (args.length) {\n            p.extra_error_attributes = args;\n        }\n\n        return (this.parseError(p.errStr, p, this.JisonLexerError) || this.ERROR);\n    },\n\n    /**\n     * final cleanup function for when we have completed lexing the input;\n     * make it an API so that external code can use this one once userland\n     * code has decided it\'s time to destroy any lingering lexer error\n     * hash object instances and the like: this function helps to clean\n     * up these constructs, which *may* carry cyclic references which would\n     * otherwise prevent the instances from being properly and timely\n     * garbage-collected, i.e. this function helps prevent memory leaks!\n     * \n     * @public\n     * @this {RegExpLexer}\n     */\n    cleanupAfterLex: function lexer_cleanupAfterLex(do_not_nuke_errorinfos) {\n        // prevent lingering circular references from causing memory leaks:\n        this.setInput(\'\', {});\n\n        // nuke the error hash info instances created during this run.\n        // Userland code must COPY any data/references\n        // in the error hash instance(s) it is more permanently interested in.\n        if (!do_not_nuke_errorinfos) {\n            for (var i = this.__error_infos.length - 1; i >= 0; i--) {\n                var el = this.__error_infos[i];\n                if (el && typeof el.destroy === \'function\') {\n                    el.destroy();\n                }\n            }\n            this.__error_infos.length = 0;\n        }\n\n        return this;\n    },\n\n    /**\n     * clear the lexer token context; intended for internal use only\n     * \n     * @public\n     * @this {RegExpLexer}\n     */\n    clear: function lexer_clear() {\n        this.yytext = \'\';\n        this.yyleng = 0;\n        this.match = \'\';\n        // - DO NOT reset `this.matched`\n        this.matches = false;\n        this._more = false;\n        this._backtrack = false;\n\n        var col = this.yylloc ? this.yylloc.last_column : 0;\n        this.yylloc = {\n            first_line: this.yylineno + 1,\n            first_column: col,\n            last_line: this.yylineno + 1,\n            last_column: col,\n\n            range: [this.offset, this.offset]\n        };\n    },\n\n    /**\n     * resets the lexer, sets new input\n     * \n     * @public\n     * @this {RegExpLexer}\n     */\n    setInput: function lexer_setInput(input, yy) {\n        this.yy = yy || this.yy || {};\n\n        // also check if we\'ve fully initialized the lexer instance,\n        // including expansion work to be done to go from a loaded\n        // lexer to a usable lexer:\n        if (!this.__decompressed) {\n          // step 1: decompress the regex list:\n          var rules = this.rules;\n          for (var i = 0, len = rules.length; i < len; i++) {\n            var rule_re = rules[i];\n\n            // compression: is the RE an xref to another RE slot in the rules[] table?\n            if (typeof rule_re === \'number\') {\n              rules[i] = rules[rule_re];\n            }\n          }\n\n          // step 2: unfold the conditions[] set to make these ready for use:\n          var conditions = this.conditions;\n          for (var k in conditions) {\n            var spec = conditions[k];\n\n            var rule_ids = spec.rules;\n\n            var len = rule_ids.length;\n            var rule_regexes = new Array(len + 1);            // slot 0 is unused; we use a 1-based index approach here to keep the hottest code in `lexer_next()` fast and simple!\n            var rule_new_ids = new Array(len + 1);\n\n            for (var i = 0; i < len; i++) {\n              var idx = rule_ids[i];\n              var rule_re = rules[idx];\n              rule_regexes[i + 1] = rule_re;\n              rule_new_ids[i + 1] = idx;\n            }\n\n            spec.rules = rule_new_ids;\n            spec.__rule_regexes = rule_regexes;\n            spec.__rule_count = len;\n          }\n\n          this.__decompressed = true;\n        }\n\n        this._input = input || \'\';\n        this.clear();\n        this._signaled_error_token = false;\n        this.done = false;\n        this.yylineno = 0;\n        this.matched = \'\';\n        this.conditionStack = [\'INITIAL\'];\n        this.__currentRuleSet__ = null;\n        this.yylloc = {\n            first_line: 1,\n            first_column: 0,\n            last_line: 1,\n            last_column: 0,\n\n            range: [0, 0]\n        };\n        this.offset = 0;\n        return this;\n    },\n\n    /**\n     * edit the remaining input via user-specified callback.\n     * This can be used to forward-adjust the input-to-parse, \n     * e.g. inserting macro expansions and alike in the\n     * input which has yet to be lexed.\n     * The behaviour of this API contrasts the `unput()` et al\n     * APIs as those act on the *consumed* input, while this\n     * one allows one to manipulate the future, without impacting\n     * the current `yyloc` cursor location or any history. \n     * \n     * Use this API to help implement C-preprocessor-like\n     * `#include` statements, etc.\n     * \n     * The provided callback must be synchronous and is\n     * expected to return the edited input (string).\n     *\n     * The `cpsArg` argument value is passed to the callback\n     * as-is.\n     *\n     * `callback` interface: \n     * `function callback(input, cpsArg)`\n     * \n     * - `input` will carry the remaining-input-to-lex string\n     *   from the lexer.\n     * - `cpsArg` is `cpsArg` passed into this API.\n     * \n     * The `this` reference for the callback will be set to\n     * reference this lexer instance so that userland code\n     * in the callback can easily and quickly access any lexer\n     * API. \n     *\n     * When the callback returns a non-string-type falsey value,\n     * we assume the callback did not edit the input and we\n     * will using the input as-is.\n     *\n     * When the callback returns a non-string-type value, it\n     * is converted to a string for lexing via the `"" + retval`\n     * operation. (See also why: http://2ality.com/2012/03/converting-to-string.html \n     * -- that way any returned object\'s `toValue()` and `toString()`\n     * methods will be invoked in a proper/desirable order.)\n     * \n     * @public\n     * @this {RegExpLexer}\n     */\n    editRemainingInput: function lexer_editRemainingInput(callback, cpsArg) {\n        var rv = callback.call(this, this._input, cpsArg);\n        if (typeof rv !== \'string\') {\n            if (rv) {\n                this._input = \'\' + rv; \n            }\n            // else: keep `this._input` as is. \n        } else {\n            this._input = rv; \n        }\n        return this;\n    },\n\n    /**\n     * consumes and returns one char from the input\n     * \n     * @public\n     * @this {RegExpLexer}\n     */\n    input: function lexer_input() {\n        if (!this._input) {\n            //this.done = true;    -- don\'t set `done` as we want the lex()/next() API to be able to produce one custom EOF token match after this anyhow. (lexer can match special <<EOF>> tokens and perform user action code for a <<EOF>> match, but only does so *once*)\n            return null;\n        }\n        var ch = this._input[0];\n        this.yytext += ch;\n        this.yyleng++;\n        this.offset++;\n        this.match += ch;\n        this.matched += ch;\n        // Count the linenumber up when we hit the LF (or a stand-alone CR).\n        // On CRLF, the linenumber is incremented when you fetch the CR or the CRLF combo\n        // and we advance immediately past the LF as well, returning both together as if\n        // it was all a single \'character\' only.\n        var slice_len = 1;\n        var lines = false;\n        if (ch === \'\\n\') {\n            lines = true;\n        } else if (ch === \'\\r\') {\n            lines = true;\n            var ch2 = this._input[1];\n            if (ch2 === \'\\n\') {\n                slice_len++;\n                ch += ch2;\n                this.yytext += ch2;\n                this.yyleng++;\n                this.offset++;\n                this.match += ch2;\n                this.matched += ch2;\n                this.yylloc.range[1]++;\n            }\n        }\n        if (lines) {\n            this.yylineno++;\n            this.yylloc.last_line++;\n            this.yylloc.last_column = 0;\n        } else {\n            this.yylloc.last_column++;\n        }\n        this.yylloc.range[1]++;\n\n        this._input = this._input.slice(slice_len);\n        return ch;\n    },\n\n    /**\n     * unshifts one char (or an entire string) into the input\n     * \n     * @public\n     * @this {RegExpLexer}\n     */\n    unput: function lexer_unput(ch) {\n        var len = ch.length;\n        var lines = ch.split(/(?:\\r\\n?|\\n)/g);\n\n        this._input = ch + this._input;\n        this.yytext = this.yytext.substr(0, this.yytext.length - len);\n        this.yyleng = this.yytext.length;\n        this.offset -= len;\n        this.match = this.match.substr(0, this.match.length - len);\n        this.matched = this.matched.substr(0, this.matched.length - len);\n\n        if (lines.length > 1) {\n            this.yylineno -= lines.length - 1;\n\n            this.yylloc.last_line = this.yylineno + 1;\n            var pre = this.match;\n            var pre_lines = pre.split(/(?:\\r\\n?|\\n)/g);\n            if (pre_lines.length === 1) {\n                pre = this.matched;\n                pre_lines = pre.split(/(?:\\r\\n?|\\n)/g);\n            }\n            this.yylloc.last_column = pre_lines[pre_lines.length - 1].length;\n        } else {\n            this.yylloc.last_column -= len;\n        }\n\n        this.yylloc.range[1] = this.yylloc.range[0] + this.yyleng;\n\n        this.done = false;\n        return this;\n    },\n\n    /**\n     * cache matched text and append it on next action\n     * \n     * @public\n     * @this {RegExpLexer}\n     */\n    more: function lexer_more() {\n        this._more = true;\n        return this;\n    },\n\n    /**\n     * signal the lexer that this rule fails to match the input, so the\n     * next matching rule (regex) should be tested instead.\n     * \n     * @public\n     * @this {RegExpLexer}\n     */\n    reject: function lexer_reject() {\n        if (this.options.backtrack_lexer) {\n            this._backtrack = true;\n        } else {\n            // when the `parseError()` call returns, we MUST ensure that the error is registered.\n            // We accomplish this by signaling an \'error\' token to be produced for the current\n            // `.lex()` run.\n            var lineno_msg = \'\';\n            if (this.options.trackPosition) {\n                lineno_msg = \' on line \' + (this.yylineno + 1);\n            }\n            var pos_str = \'\';\n            if (typeof this.showPosition === \'function\') {\n                pos_str = this.showPosition();\n                if (pos_str && pos_str[0] !== \'\\n\') {\n                    pos_str = \'\\n\' + pos_str;\n                }\n            }\n            var p = this.constructLexErrorInfo(\'Lexical error\' + lineno_msg + \': You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\' + pos_str, false);\n            this._signaled_error_token = (this.parseError(p.errStr, p, this.JisonLexerError) || this.ERROR);\n        }\n        return this;\n    },\n\n    /**\n     * retain first n characters of the match\n     * \n     * @public\n     * @this {RegExpLexer}\n     */\n    less: function lexer_less(n) {\n        return this.unput(this.match.slice(n));\n    },\n\n    /**\n     * return (part of the) already matched input, i.e. for error\n     * messages.\n     * \n     * Limit the returned string length to `maxSize` (default: 20).\n     * \n     * Limit the returned string to the `maxLines` number of lines of\n     * input (default: 1).\n     * \n     * Negative limit values equal *unlimited*.\n     * \n     * @public\n     * @this {RegExpLexer}\n     */\n    pastInput: function lexer_pastInput(maxSize, maxLines) {\n        var past = this.matched.substring(0, this.matched.length - this.match.length);\n        if (maxSize < 0)\n            maxSize = past.length;\n        else if (!maxSize)\n            maxSize = 20;\n        if (maxLines < 0)\n            maxLines = past.length;         // can\'t ever have more input lines than this!\n        else if (!maxLines)\n            maxLines = 1;\n        // `substr` anticipation: treat \\r\\n as a single character and take a little\n        // more than necessary so that we can still properly check against maxSize\n        // after we\'ve transformed and limited the newLines in here:\n        past = past.substr(-maxSize * 2 - 2);\n        // now that we have a significantly reduced string to process, transform the newlines\n        // and chop them, then limit them:\n        var a = past.replace(/\\r\\n|\\r/g, \'\\n\').split(\'\\n\');\n        a = a.slice(-maxLines);\n        past = a.join(\'\\n\');\n        // When, after limiting to maxLines, we still have too much to return,\n        // do add an ellipsis prefix...\n        if (past.length > maxSize) {\n            past = \'...\' + past.substr(-maxSize);\n        }\n        return past;\n    },\n\n    /**\n     * return (part of the) upcoming input, i.e. for error messages.\n     * \n     * Limit the returned string length to `maxSize` (default: 20).\n     * \n     * Limit the returned string to the `maxLines` number of lines of input (default: 1).\n     * \n     * Negative limit values equal *unlimited*.\n     *\n     * > ### NOTE ###\n     * >\n     * > *"upcoming input"* is defined as the whole of the both\n     * > the *currently lexed* input, together with any remaining input\n     * > following that. *"currently lexed"* input is the input \n     * > already recognized by the lexer but not yet returned with\n     * > the lexer token. This happens when you are invoking this API\n     * > from inside any lexer rule action code block. \n     * >\n     * \n     * @public\n     * @this {RegExpLexer}\n     */\n    upcomingInput: function lexer_upcomingInput(maxSize, maxLines) {\n        var next = this.match;\n        if (maxSize < 0)\n            maxSize = next.length + this._input.length;\n        else if (!maxSize)\n            maxSize = 20;\n        if (maxLines < 0)\n            maxLines = maxSize;         // can\'t ever have more input lines than this!\n        else if (!maxLines)\n            maxLines = 1;\n        // `substring` anticipation: treat \\r\\n as a single character and take a little\n        // more than necessary so that we can still properly check against maxSize\n        // after we\'ve transformed and limited the newLines in here:\n        if (next.length < maxSize * 2 + 2) {\n            next += this._input.substring(0, maxSize * 2 + 2);  // substring is faster on Chrome/V8\n        }\n        // now that we have a significantly reduced string to process, transform the newlines\n        // and chop them, then limit them:\n        var a = next.replace(/\\r\\n|\\r/g, \'\\n\').split(\'\\n\');\n        a = a.slice(0, maxLines);\n        next = a.join(\'\\n\');\n        // When, after limiting to maxLines, we still have too much to return,\n        // do add an ellipsis postfix...\n        if (next.length > maxSize) {\n            next = next.substring(0, maxSize) + \'...\';\n        }\n        return next;\n    },\n\n    /**\n     * return a string which displays the character position where the\n     * lexing error occurred, i.e. for error messages\n     * \n     * @public\n     * @this {RegExpLexer}\n     */\n    showPosition: function lexer_showPosition(maxPrefix, maxPostfix) {\n        var pre = this.pastInput(maxPrefix).replace(/\\s/g, \' \');\n        var c = new Array(pre.length + 1).join(\'-\');\n        return pre + this.upcomingInput(maxPostfix).replace(/\\s/g, \' \') + \'\\n\' + c + \'^\';\n    },\n\n    /**\n     * return a string which displays the lines & columns of input which are referenced \n     * by the given location info range, plus a few lines of context.\n     * \n     * This function pretty-prints the indicated section of the input, with line numbers \n     * and everything!\n     * \n     * This function is very useful to provide highly readable error reports, while\n     * the location range may be specified in various flexible ways:\n     * \n     * - `loc` is the location info object which references the area which should be\n     *   displayed and \'marked up\': these lines & columns of text are marked up by `^`\n     *   characters below each character in the entire input range.\n     * \n     * - `context_loc` is the *optional* location info object which instructs this\n     *   pretty-printer how much *leading* context should be displayed alongside\n     *   the area referenced by `loc`. This can help provide context for the displayed\n     *   error, etc.\n     * \n     *   When this location info is not provided, a default context of 3 lines is\n     *   used.\n     * \n     * - `context_loc2` is another *optional* location info object, which serves\n     *   a similar purpose to `context_loc`: it specifies the amount of *trailing*\n     *   context lines to display in the pretty-print output.\n     * \n     *   When this location info is not provided, a default context of 1 line only is\n     *   used.\n     * \n     * Special Notes:\n     * \n     * - when the `loc`-indicated range is very large (about 5 lines or more), then\n     *   only the first and last few lines of this block are printed while a\n     *   `...continued...` message will be printed between them.\n     * \n     *   This serves the purpose of not printing a huge amount of text when the `loc`\n     *   range happens to be huge: this way a manageable & readable output results\n     *   for arbitrary large ranges.\n     * \n     * - this function can display lines of input which whave not yet been lexed.\n     *   `prettyPrintRange()` can access the entire input!\n     * \n     * @public\n     * @this {RegExpLexer}\n     */\n    prettyPrintRange: function lexer_prettyPrintRange(loc, context_loc, context_loc2) {\n        var error_size = loc.last_line - loc.first_line;\n        const CONTEXT = 3;\n        const CONTEXT_TAIL = 1;\n        const MINIMUM_VISIBLE_NONEMPTY_LINE_COUNT = 2;\n        var input = this.matched + this._input;\n        var lines = input.split(\'\\n\');\n        //var show_context = (error_size < 5 || context_loc);\n        var l0 = Math.max(1, (context_loc ? context_loc.first_line : loc.first_line - CONTEXT));\n        var l1 = Math.max(1, (context_loc2 ? context_loc2.last_line : loc.last_line + CONTEXT_TAIL));\n        var lineno_display_width = (1 + Math.log10(l1 | 1) | 0);\n        var ws_prefix = new Array(lineno_display_width).join(\' \');\n        var nonempty_line_indexes = [];\n        var rv = lines.slice(l0 - 1, l1 + 1).map(function injectLineNumber(line, index) {\n            var lno = index + l0;\n            var lno_pfx = (ws_prefix + lno).substr(-lineno_display_width);\n            var rv = lno_pfx + \': \' + line;\n            var errpfx = (new Array(lineno_display_width + 1)).join(\'^\');\n            if (lno === loc.first_line) {\n                var offset = loc.first_column + 2;\n                var len = Math.max(2, (lno === loc.last_line ? loc.last_column : line.length) - loc.first_column + 1);\n                var lead = (new Array(offset)).join(\'.\');\n                var mark = (new Array(len)).join(\'^\');\n                rv += \'\\n\' + errpfx + lead + mark;\n                if (line.trim().length > 0) {\n                    nonempty_line_indexes.push(index);\n                }\n            } else if (lno === loc.last_line) {\n                var offset = 2 + 1;\n                var len = Math.max(2, loc.last_column + 1);\n                var lead = (new Array(offset)).join(\'.\');\n                var mark = (new Array(len)).join(\'^\');\n                rv += \'\\n\' + errpfx + lead + mark;\n                if (line.trim().length > 0) {\n                    nonempty_line_indexes.push(index);\n                }\n            } else if (lno > loc.first_line && lno < loc.last_line) {\n                var offset = 2 + 1;\n                var len = Math.max(2, line.length + 1);\n                var lead = (new Array(offset)).join(\'.\');\n                var mark = (new Array(len)).join(\'^\');\n                rv += \'\\n\' + errpfx + lead + mark;\n                if (line.trim().length > 0) {\n                    nonempty_line_indexes.push(index);\n                }\n            }\n            rv = rv.replace(/\\t/g, \' \');\n            return rv;\n        });\n        // now make sure we don\'t print an overly large amount of error area: limit it \n        // to the top and bottom line count:\n        if (nonempty_line_indexes.length > 2 * MINIMUM_VISIBLE_NONEMPTY_LINE_COUNT) {\n            var clip_start = nonempty_line_indexes[MINIMUM_VISIBLE_NONEMPTY_LINE_COUNT - 1] + 1;\n            var clip_end = nonempty_line_indexes[nonempty_line_indexes.length - MINIMUM_VISIBLE_NONEMPTY_LINE_COUNT] - 1;\n            console.log("clip off: ", {\n                start: clip_start, \n                end: clip_end,\n                len: clip_end - clip_start + 1,\n                arr: nonempty_line_indexes,\n                rv\n            });\n            var intermediate_line = (new Array(lineno_display_width + 1)).join(\' \') +     \'  (...continued...)\';\n            intermediate_line += \'\\n\' + (new Array(lineno_display_width + 1)).join(\'-\') + \'  (---------------)\';\n            rv.splice(clip_start, clip_end - clip_start + 1, intermediate_line);\n        }\n        return rv.join(\'\\n\');\n    },\n\n    /**\n     * helper function, used to produce a human readable description as a string, given\n     * the input `yylloc` location object.\n     * \n     * Set `display_range_too` to TRUE to include the string character index position(s)\n     * in the description if the `yylloc.range` is available.\n     * \n     * @public\n     * @this {RegExpLexer}\n     */\n    describeYYLLOC: function lexer_describe_yylloc(yylloc, display_range_too) {\n        var l1 = yylloc.first_line;\n        var l2 = yylloc.last_line;\n        var c1 = yylloc.first_column;\n        var c2 = yylloc.last_column;\n        var dl = l2 - l1;\n        var dc = c2 - c1;\n        var rv;\n        if (dl === 0) {\n            rv = \'line \' + l1 + \', \';\n            if (dc <= 1) {\n                rv += \'column \' + c1;\n            } else {\n                rv += \'columns \' + c1 + \' .. \' + c2;\n            }\n        } else {\n            rv = \'lines \' + l1 + \'(column \' + c1 + \') .. \' + l2 + \'(column \' + c2 + \')\';\n        }\n        if (yylloc.range && display_range_too) {\n            var r1 = yylloc.range[0];\n            var r2 = yylloc.range[1] - 1;\n            if (r2 <= r1) {\n                rv += \' {String Offset: \' + r1 + \'}\';\n            } else {\n                rv += \' {String Offset range: \' + r1 + \' .. \' + r2 + \'}\';\n            }\n        }\n        return rv;\n    },\n\n    /**\n     * test the lexed token: return FALSE when not a match, otherwise return token.\n     * \n     * `match` is supposed to be an array coming out of a regex match, i.e. `match[0]`\n     * contains the actually matched text string.\n     * \n     * Also move the input cursor forward and update the match collectors:\n     * \n     * - `yytext`\n     * - `yyleng`\n     * - `match`\n     * - `matches`\n     * - `yylloc`\n     * - `offset`\n     * \n     * @public\n     * @this {RegExpLexer}\n     */\n    test_match: function lexer_test_match(match, indexed_rule) {\n        var token,\n            lines,\n            backup,\n            match_str,\n            match_str_len;\n\n        if (this.options.backtrack_lexer) {\n            // save context\n            backup = {\n                yylineno: this.yylineno,\n                yylloc: {\n                    first_line: this.yylloc.first_line,\n                    last_line: this.yylloc.last_line,\n                    first_column: this.yylloc.first_column,\n                    last_column: this.yylloc.last_column,\n\n                    range: this.yylloc.range.slice(0)\n                },\n                yytext: this.yytext,\n                match: this.match,\n                matches: this.matches,\n                matched: this.matched,\n                yyleng: this.yyleng,\n                offset: this.offset,\n                _more: this._more,\n                _input: this._input,\n                //_signaled_error_token: this._signaled_error_token,\n                yy: this.yy,\n                conditionStack: this.conditionStack.slice(0),\n                done: this.done\n            };\n        }\n\n        match_str = match[0];\n        match_str_len = match_str.length;\n        // if (match_str.indexOf(\'\\n\') !== -1 || match_str.indexOf(\'\\r\') !== -1) {\n            lines = match_str.split(/(?:\\r\\n?|\\n)/g);\n            if (lines.length > 1) {\n                this.yylineno += lines.length - 1;\n\n                this.yylloc.last_line = this.yylineno + 1;\n                this.yylloc.last_column = lines[lines.length - 1].length;\n            } else {\n                this.yylloc.last_column += match_str_len;\n            }\n        // }\n        this.yytext += match_str;\n        this.match += match_str;\n        this.matched += match_str;\n        this.matches = match;\n        this.yyleng = this.yytext.length;\n        this.yylloc.range[1] += match_str_len;\n\n        // previous lex rules MAY have invoked the `more()` API rather than producing a token:\n        // those rules will already have moved this `offset` forward matching their match lengths,\n        // hence we must only add our own match length now:\n        this.offset += match_str_len;\n        this._more = false;\n        this._backtrack = false;\n        this._input = this._input.slice(match_str_len);\n\n        // calling this method:\n        //\n        //   function lexer__performAction(yy, yyrulenumber, YY_START) {...}\n        token = this.performAction.call(this, this.yy, indexed_rule, this.conditionStack[this.conditionStack.length - 1] /* = YY_START */);\n        // otherwise, when the action codes are all simple return token statements:\n        //token = this.simpleCaseActionClusters[indexed_rule];\n\n        if (this.done && this._input) {\n            this.done = false;\n        }\n        if (token) {\n            return token;\n        } else if (this._backtrack) {\n            // recover context\n            for (var k in backup) {\n                this[k] = backup[k];\n            }\n            this.__currentRuleSet__ = null;\n            return false; // rule action called reject() implying the next rule should be tested instead.\n        } else if (this._signaled_error_token) {\n            // produce one \'error\' token as `.parseError()` in `reject()`\n            // did not guarantee a failure signal by throwing an exception!\n            token = this._signaled_error_token;\n            this._signaled_error_token = false;\n            return token;\n        }\n        return false;\n    },\n\n    /**\n     * return next match in input\n     * \n     * @public\n     * @this {RegExpLexer}\n     */\n    next: function lexer_next() {\n        if (this.done) {\n            this.clear();\n            return this.EOF;\n        }\n        if (!this._input) {\n            this.done = true;\n        }\n\n        var token,\n            match,\n            tempMatch,\n            index;\n        if (!this._more) {\n            this.clear();\n        }\n        var spec = this.__currentRuleSet__;\n        if (!spec) {\n            // Update the ruleset cache as we apparently encountered a state change or just started lexing.\n            // The cache is set up for fast lookup -- we assume a lexer will switch states much less often than it will\n            // invoke the `lex()` token-producing API and related APIs, hence caching the set for direct access helps\n            // speed up those activities a tiny bit.\n            spec = this.__currentRuleSet__ = this._currentRules();\n            // Check whether a *sane* condition has been pushed before: this makes the lexer robust against\n            // user-programmer bugs such as https://github.com/zaach/jison-lex/issues/19\n            if (!spec || !spec.rules) {\n                var lineno_msg = \'\';\n                if (this.options.trackPosition) {\n                    lineno_msg = \' on line \' + (this.yylineno + 1);\n                }\n                var pos_str = \'\';\n                if (typeof this.showPosition === \'function\') {\n                    pos_str = this.showPosition();\n                    if (pos_str && pos_str[0] !== \'\\n\') {\n                        pos_str = \'\\n\' + pos_str;\n                    }\n                }\n                var p = this.constructLexErrorInfo(\'Internal lexer engine error\' + lineno_msg + \': The lex grammar programmer pushed a non-existing condition name "\' + this.topState() + \'"; this is a fatal error and should be reported to the application programmer team!\' + pos_str, false);\n                // produce one \'error\' token until this situation has been resolved, most probably by parse termination!\n                return (this.parseError(p.errStr, p, this.JisonLexerError) || this.ERROR);\n            }\n        }\n\n        var rule_ids = spec.rules;\n        var regexes = spec.__rule_regexes;\n        var len = spec.__rule_count;\n\n        // Note: the arrays are 1-based, while `len` itself is a valid index,\n        // hence the non-standard less-or-equal check in the next loop condition!\n        for (var i = 1; i <= len; i++) {\n            tempMatch = this._input.match(regexes[i]);\n            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {\n                match = tempMatch;\n                index = i;\n                if (this.options.backtrack_lexer) {\n                    token = this.test_match(tempMatch, rule_ids[i]);\n                    if (token !== false) {\n                        return token;\n                    } else if (this._backtrack) {\n                        match = undefined;\n                        continue; // rule action called reject() implying a rule MISmatch.\n                    } else {\n                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)\n                        return false;\n                    }\n                } else if (!this.options.flex) {\n                    break;\n                }\n            }\n        }\n        if (match) {\n            token = this.test_match(match, rule_ids[index]);\n            if (token !== false) {\n                return token;\n            }\n            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)\n            return false;\n        }\n        if (!this._input) {\n            this.done = true;\n            this.clear();\n            return this.EOF;\n        } else {\n            var lineno_msg = \'\';\n            if (this.options.trackPosition) {\n                lineno_msg = \' on line \' + (this.yylineno + 1);\n            }\n            var pos_str = \'\';\n            if (typeof this.showPosition === \'function\') {\n                pos_str = this.showPosition();\n                if (pos_str && pos_str[0] !== \'\\n\') {\n                    pos_str = \'\\n\' + pos_str;\n                }\n            }\n            var p = this.constructLexErrorInfo(\'Lexical error\' + lineno_msg + \': Unrecognized text.\' + pos_str, this.options.lexerErrorsAreRecoverable);\n            token = (this.parseError(p.errStr, p, this.JisonLexerError) || this.ERROR);\n            if (token === this.ERROR) {\n                // we can try to recover from a lexer error that `parseError()` did not \'recover\' for us\n                // by moving forward at least one character at a time:\n                if (!this.match.length) {\n                    this.input();\n                }\n            }\n            return token;\n        }\n    },\n\n    /**\n     * return next match that has a token\n     * \n     * @public\n     * @this {RegExpLexer}\n     */\n    lex: function lexer_lex() {\n        var r;\n        // allow the PRE/POST handlers set/modify the return token for maximum flexibility of the generated lexer:\n        if (typeof this.options.pre_lex === \'function\') {\n            r = this.options.pre_lex.call(this);\n        }\n\n        while (!r) {\n            r = this.next();\n        }\n\n        if (typeof this.options.post_lex === \'function\') {\n            // (also account for a userdef function which does not return any value: keep the token as is)\n            r = this.options.post_lex.call(this, r) || r;\n        }\n        return r;\n    },\n\n    /**\n     * backwards compatible alias for `pushState()`;\n     * the latter is symmetrical with `popState()` and we advise to use\n     * those APIs in any modern lexer code, rather than `begin()`.\n     * \n     * @public\n     * @this {RegExpLexer}\n     */\n    begin: function lexer_begin(condition) {\n        return this.pushState(condition);\n    },\n\n    /**\n     * activates a new lexer condition state (pushes the new lexer\n     * condition state onto the condition stack)\n     * \n     * @public\n     * @this {RegExpLexer}\n     */\n    pushState: function lexer_pushState(condition) {\n        this.conditionStack.push(condition);\n        this.__currentRuleSet__ = null;\n        return this;\n    },\n\n    /**\n     * pop the previously active lexer condition state off the condition\n     * stack\n     * \n     * @public\n     * @this {RegExpLexer}\n     */\n    popState: function lexer_popState() {\n        var n = this.conditionStack.length - 1;\n        if (n > 0) {\n            this.__currentRuleSet__ = null; \n            return this.conditionStack.pop();\n        } else {\n            return this.conditionStack[0];\n        }\n    },\n\n    /**\n     * return the currently active lexer condition state; when an index\n     * argument is provided it produces the N-th previous condition state,\n     * if available\n     * \n     * @public\n     * @this {RegExpLexer}\n     */\n    topState: function lexer_topState(n) {\n        n = this.conditionStack.length - 1 - Math.abs(n || 0);\n        if (n >= 0) {\n            return this.conditionStack[n];\n        } else {\n            return \'INITIAL\';\n        }\n    },\n\n    /**\n     * (internal) determine the lexer rule set which is active for the\n     * currently active lexer condition state\n     * \n     * @public\n     * @this {RegExpLexer}\n     */\n    _currentRules: function lexer__currentRules() {\n        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {\n            return this.conditions[this.conditionStack[this.conditionStack.length - 1]];\n        } else {\n            return this.conditions[\'INITIAL\'];\n        }\n    },\n\n    /**\n     * return the number of states currently on the stack\n     * \n     * @public\n     * @this {RegExpLexer}\n     */\n    stateStackSize: function lexer_stateStackSize() {\n        return this.conditionStack.length;\n    }\n}';
        // --- END lexer kernel ---
    }

    RegExpLexer.prototype = new Function(rmCommonWS(_templateObject2, getRegExpLexerPrototype()))();

    // The lexer code stripper, driven by optimization analysis settings and
    // lexer options, which cannot be changed at run-time.
    function stripUnusedLexerCode(src, opt) {
        //   uses yyleng: ..................... ${opt.lexerActionsUseYYLENG}
        //   uses yylineno: ................... ${opt.lexerActionsUseYYLINENO}
        //   uses yytext: ..................... ${opt.lexerActionsUseYYTEXT}
        //   uses yylloc: ..................... ${opt.lexerActionsUseYYLOC}
        //   uses ParseError API: ............. ${opt.lexerActionsUseParseError}
        //   uses location tracking & editing:  ${opt.lexerActionsUseLocationTracking}
        //   uses more() API: ................. ${opt.lexerActionsUseMore}
        //   uses unput() API: ................ ${opt.lexerActionsUseUnput}
        //   uses reject() API: ............... ${opt.lexerActionsUseReject}
        //   uses less() API: ................. ${opt.lexerActionsUseLess}
        //   uses display APIs pastInput(), upcomingInput(), showPosition():
        //        ............................. ${opt.lexerActionsUseDisplayAPIs}
        //   uses describeYYLLOC() API: ....... ${opt.lexerActionsUseDescribeYYLOC}

        var ast = helpers.parseCodeChunkToAST(src, opt);
        var new_src = helpers.prettyPrintAST(ast, opt);

        new_src = new_src.replace(/\/\*\s*JISON-LEX-ANALYTICS-REPORT\s*\*\//g, rmCommonWS(_templateObject3, opt.options.backtrack_lexer, opt.options.ranges, opt.options.trackPosition, opt.parseActionsUseYYLENG, opt.parseActionsUseYYLINENO, opt.parseActionsUseYYTEXT, opt.parseActionsUseYYLOC, opt.parseActionsUseValueTracking, opt.parseActionsUseValueAssignment, opt.parseActionsUseLocationTracking, opt.parseActionsUseLocationAssignment, opt.lexerActionsUseYYLENG, opt.lexerActionsUseYYLINENO, opt.lexerActionsUseYYTEXT, opt.lexerActionsUseYYLOC, opt.lexerActionsUseParseError, opt.lexerActionsUseYYERROR, opt.lexerActionsUseLocationTracking, opt.lexerActionsUseMore, opt.lexerActionsUseUnput, opt.lexerActionsUseReject, opt.lexerActionsUseLess, opt.lexerActionsUseDisplayAPIs, opt.lexerActionsUseDescribeYYLOC));

        return new_src;
    }

    // generate lexer source from a grammar
    /**  @public */
    function generate(dict, tokens, build_options) {
        var opt = processGrammar(dict, tokens, build_options);

        return generateFromOpts(opt);
    }

    // process the grammar and build final data structures and functions
    /**  @public */
    function processGrammar(dict, tokens, build_options) {
        build_options = build_options || {};
        var opts = {
            // include the knowledge passed through `build_options` about which lexer
            // features will actually be *used* by the environment (which in 99.9%
            // of cases is a jison *parser*):
            //
            // (this stuff comes straight from the jison Optimization Analysis.)
            //
            parseActionsUseYYLENG: build_options.parseActionsUseYYLENG,
            parseActionsUseYYLINENO: build_options.parseActionsUseYYLINENO,
            parseActionsUseYYTEXT: build_options.parseActionsUseYYTEXT,
            parseActionsUseYYLOC: build_options.parseActionsUseYYLOC,
            parseActionsUseParseError: build_options.parseActionsUseParseError,
            parseActionsUseYYERROR: build_options.parseActionsUseYYERROR,
            parseActionsUseYYERROK: build_options.parseActionsUseYYERROK,
            parseActionsUseYYRECOVERING: build_options.parseActionsUseYYRECOVERING,
            parseActionsUseYYCLEARIN: build_options.parseActionsUseYYCLEARIN,
            parseActionsUseValueTracking: build_options.parseActionsUseValueTracking,
            parseActionsUseValueAssignment: build_options.parseActionsUseValueAssignment,
            parseActionsUseLocationTracking: build_options.parseActionsUseLocationTracking,
            parseActionsUseLocationAssignment: build_options.parseActionsUseLocationAssignment,
            parseActionsUseYYSTACK: build_options.parseActionsUseYYSTACK,
            parseActionsUseYYSSTACK: build_options.parseActionsUseYYSSTACK,
            parseActionsUseYYSTACKPOINTER: build_options.parseActionsUseYYSTACKPOINTER,
            parseActionsUseYYRULELENGTH: build_options.parseActionsUseYYRULELENGTH,
            parserHasErrorRecovery: build_options.parserHasErrorRecovery,
            parserHasErrorReporting: build_options.parserHasErrorReporting,

            lexerActionsUseYYLENG: '???',
            lexerActionsUseYYLINENO: '???',
            lexerActionsUseYYTEXT: '???',
            lexerActionsUseYYLOC: '???',
            lexerActionsUseParseError: '???',
            lexerActionsUseYYERROR: '???',
            lexerActionsUseLocationTracking: '???',
            lexerActionsUseMore: '???',
            lexerActionsUseUnput: '???',
            lexerActionsUseReject: '???',
            lexerActionsUseLess: '???',
            lexerActionsUseDisplayAPIs: '???',
            lexerActionsUseDescribeYYLOC: '???'
        };

        dict = autodetectAndConvertToJSONformat(dict, build_options) || {};

        // Feed the possibly reprocessed 'dictionary' above back to the caller
        // (for use by our error diagnostic assistance code)
        opts.lex_rule_dictionary = dict;

        // Always provide the lexer with an options object, even if it's empty!
        // Make sure to camelCase all options:
        opts.options = mkStdOptions(build_options, dict.options);

        opts.moduleType = opts.options.moduleType;
        opts.moduleName = opts.options.moduleName;

        opts.conditions = prepareStartConditions(dict.startConditions);
        opts.conditions.INITIAL = {
            rules: [],
            inclusive: true
        };

        var code = buildActions(dict, tokens, opts);
        opts.performAction = code.actions;
        opts.caseHelperInclude = code.caseHelperInclude;
        opts.rules = code.rules;
        opts.macros = code.macros;

        opts.regular_rule_count = code.regular_rule_count;
        opts.simple_rule_count = code.simple_rule_count;

        opts.conditionStack = ['INITIAL'];

        opts.actionInclude = dict.actionInclude || '';
        opts.moduleInclude = (opts.moduleInclude || '') + (dict.moduleInclude || '').trim();

        return opts;
    }

    // Assemble the final source from the processed grammar
    /**  @public */
    function generateFromOpts(opt) {
        var code = '';

        switch (opt.moduleType) {
            case 'js':
                code = generateModule(opt);
                break;
            case 'amd':
                code = generateAMDModule(opt);
                break;
            case 'es':
                code = generateESModule(opt);
                break;
            case 'commonjs':
            default:
                code = generateCommonJSModule(opt);
                break;
        }

        return code;
    }

    function generateRegexesInitTableCode(opt) {
        var a = opt.rules;
        var print_xregexp = opt.options && opt.options.xregexp;
        var id_display_width = 1 + Math.log10(a.length | 1) | 0;
        var ws_prefix = new Array(id_display_width).join(' ');
        var b = a.map(function generateXRegExpInitCode(re, idx) {
            var idx_str = (ws_prefix + idx).substr(-id_display_width);

            if (re instanceof XRegExp) {
                // When we don't need the special XRegExp sauce at run-time, we do with the original
                // JavaScript RegExp instance a.k.a. 'native regex':
                if (re.xregexp.isNative || !print_xregexp) {
                    return '/* ' + idx_str + ': */  ' + re;
                }
                // And make sure to escape the regex to make it suitable for placement inside a *string*
                // as it is passed as a string argument to the XRegExp constructor here.
                var re_src = re.xregexp.source.replace(/[\\"]/g, '\\$&');
                return '/* ' + idx_str + ': */  new XRegExp("' + re_src + '", "' + re.xregexp.flags + '")';
            } else {
                return '/* ' + idx_str + ': */  ' + re;
            }
        });
        return b.join(',\n');
    }

    function generateModuleBody(opt) {
        // make the JSON output look more like JavaScript:
        function cleanupJSON(str) {
            str = str.replace(/  "rules": \[/g, '  rules: [');
            str = str.replace(/  "inclusive": /g, '  inclusive: ');
            return str;
        }

        function produceOptions(opts) {
            var obj = {};
            var do_not_pass = {
                debug: !opts.debug, // do not include this item when it is FALSE as there's no debug tracing built into the generated grammar anyway!
                enableDebugLogs: 1,
                json: 1,
                _: 1,
                noMain: 1,
                dumpSourceCodeOnFailure: 1,
                throwErrorOnCompileFailure: 1,
                reportStats: 1,
                file: 1,
                outfile: 1,
                inputPath: 1,
                inputFilename: 1,
                defaultModuleName: 1,
                moduleName: 1,
                moduleType: 1,
                lexerErrorsAreRecoverable: 0,
                flex: 0,
                backtrack_lexer: 0,
                caseInsensitive: 0,
                showSource: 1,
                exportAST: 1,
                exportAllTables: 1,
                exportSourceCode: 1,
                prettyCfg: 1,
                parseActionsUseYYLENG: 1,
                parseActionsUseYYLINENO: 1,
                parseActionsUseYYTEXT: 1,
                parseActionsUseYYLOC: 1,
                parseActionsUseParseError: 1,
                parseActionsUseYYERROR: 1,
                parseActionsUseYYRECOVERING: 1,
                parseActionsUseYYERROK: 1,
                parseActionsUseYYCLEARIN: 1,
                parseActionsUseValueTracking: 1,
                parseActionsUseValueAssignment: 1,
                parseActionsUseLocationTracking: 1,
                parseActionsUseLocationAssignment: 1,
                parseActionsUseYYSTACK: 1,
                parseActionsUseYYSSTACK: 1,
                parseActionsUseYYSTACKPOINTER: 1,
                parseActionsUseYYRULELENGTH: 1,
                parserHasErrorRecovery: 1,
                parserHasErrorReporting: 1,
                lexerActionsUseYYLENG: 1,
                lexerActionsUseYYLINENO: 1,
                lexerActionsUseYYTEXT: 1,
                lexerActionsUseYYLOC: 1,
                lexerActionsUseParseError: 1,
                lexerActionsUseYYERROR: 1,
                lexerActionsUseLocationTracking: 1,
                lexerActionsUseMore: 1,
                lexerActionsUseUnput: 1,
                lexerActionsUseReject: 1,
                lexerActionsUseLess: 1,
                lexerActionsUseDisplayAPIs: 1,
                lexerActionsUseDescribeYYLOC: 1
            };
            for (var k in opts) {
                if (!do_not_pass[k] && opts[k] != null && opts[k] !== false) {
                    // make sure numeric values are encoded as numeric, the rest as boolean/string.
                    if (typeof opts[k] === 'string') {
                        var f = parseFloat(opts[k]);
                        if (f == opts[k]) {
                            obj[k] = f;
                            continue;
                        }
                    }
                    obj[k] = opts[k];
                }
            }

            // And now some options which should receive some special processing:
            var pre = obj.pre_lex;
            var post = obj.post_lex;
            // since JSON cannot encode functions, we'll have to do it manually at run-time, i.e. later on:
            if (pre) {
                obj.pre_lex = true;
            }
            if (post) {
                obj.post_lex = true;
            }

            var js = JSON.stringify(obj, null, 2);

            js = js.replace(new XRegExp('  "(' + ID_REGEX_BASE + ')": ', 'g'), '  $1: ');
            js = js.replace(/^( +)pre_lex: true(,)?$/gm, function (m, ls, tc) {
                return ls + 'pre_lex: ' + String(pre) + (tc || '');
            });
            js = js.replace(/^( +)post_lex: true(,)?$/gm, function (m, ls, tc) {
                return ls + 'post_lex: ' + String(post) + (tc || '');
            });
            return js;
        }

        var out;
        if (opt.rules.length > 0 || opt.__in_rules_failure_analysis_mode__) {
            // we don't mind that the `test_me()` code above will have this `lexer` variable re-defined:
            // JavaScript is fine with that.
            var code = [rmCommonWS(_templateObject4), '/*JISON-LEX-ANALYTICS-REPORT*/' /* slot #1: placeholder for analysis report further below */
            ];

            // get the RegExpLexer.prototype in source code form:
            var protosrc = getRegExpLexerPrototype();
            // and strip off the surrounding bits we don't want:
            protosrc = protosrc.replace(/^[\s\r\n]*\{/, '').replace(/\s*\}[\s\r\n]*$/, '').trim();
            code.push(protosrc + ',\n');

            assert(opt.options);
            // Assure all options are camelCased:
            assert(typeof opt.options['case-insensitive'] === 'undefined');

            code.push('    options: ' + produceOptions(opt.options));

            var performActionCode = String(opt.performAction);
            var simpleCaseActionClustersCode = String(opt.caseHelperInclude);
            var rulesCode = generateRegexesInitTableCode(opt);
            var conditionsCode = cleanupJSON(JSON.stringify(opt.conditions, null, 2));
            code.push(rmCommonWS(_templateObject5, performActionCode, simpleCaseActionClustersCode, rulesCode, conditionsCode));

            opt.is_custom_lexer = false;

            out = code.join('');
        } else {
            // We're clearly looking at a custom lexer here as there's no lexer rules at all.
            //
            // We are re-purposing the `%{...%}` `actionInclude` code block here as it serves no purpose otherwise.
            //
            // Meanwhile we make sure we have the `lexer` variable declared in *local scope* no matter
            // what crazy stuff (or lack thereof) the userland code is pulling in the `actionInclude` chunk.
            out = 'var lexer;\n';

            assert(opt.regular_rule_count === 0);
            assert(opt.simple_rule_count === 0);
            opt.is_custom_lexer = true;

            if (opt.actionInclude) {
                out += opt.actionInclude + (!opt.actionInclude.match(/;[\s\r\n]*$/) ? ';' : '') + '\n';
            }
        }

        // The output of this function is guaranteed to read something like this:
        //
        // ```
        // var lexer;
        //
        // bla bla bla bla ... lotsa bla bla;
        // ```
        //
        // and that should work nicely as an `eval()`-able piece of source code.
        return out;
    }

    function generateGenericHeaderComment() {
        var out = rmCommonWS(_templateObject6, version$1);

        return out;
    }

    function prepareOptions(opt) {
        opt = opt || {};

        // check for illegal identifier
        if (!opt.moduleName || !opt.moduleName.match(/^[a-zA-Z_$][a-zA-Z0-9_$\.]*$/)) {
            if (opt.moduleName) {
                var msg = 'WARNING: The specified moduleName "' + opt.moduleName + '" is illegal (only characters [a-zA-Z0-9_$] and "." dot are accepted); using the default moduleName "lexer" instead.';
                if (typeof opt.warn_cb === 'function') {
                    opt.warn_cb(msg);
                } else {
                    // do not treat as warning; barf hairball instead so that this oddity gets noticed right away!
                    throw new Error(msg);
                }
            }
            opt.moduleName = 'lexer';
        }

        prepExportStructures(opt);

        return opt;
    }

    function generateModule(opt) {
        opt = prepareOptions(opt);

        var out = [generateGenericHeaderComment(), '', 'var ' + opt.moduleName + ' = (function () {', jisonLexerErrorDefinition, '', generateModuleBody(opt), '', opt.moduleInclude ? opt.moduleInclude + ';' : '', '', 'return lexer;', '})();'];

        var src = out.join('\n') + '\n';
        src = stripUnusedLexerCode(src, opt);
        opt.exportSourceCode.all = src;
        return src;
    }

    function generateAMDModule(opt) {
        opt = prepareOptions(opt);

        var out = [generateGenericHeaderComment(), '', 'define([], function () {', jisonLexerErrorDefinition, '', generateModuleBody(opt), '', opt.moduleInclude ? opt.moduleInclude + ';' : '', '', 'return lexer;', '});'];

        var src = out.join('\n') + '\n';
        src = stripUnusedLexerCode(src, opt);
        opt.exportSourceCode.all = src;
        return src;
    }

    function generateESModule(opt) {
        opt = prepareOptions(opt);

        var out = [generateGenericHeaderComment(), '', 'var lexer = (function () {', jisonLexerErrorDefinition, '', generateModuleBody(opt), '', opt.moduleInclude ? opt.moduleInclude + ';' : '', '', 'return lexer;', '})();', '', 'function yylex() {', '    return lexer.lex.apply(lexer, arguments);', '}', rmCommonWS(_templateObject7)];

        var src = out.join('\n') + '\n';
        src = stripUnusedLexerCode(src, opt);
        opt.exportSourceCode.all = src;
        return src;
    }

    function generateCommonJSModule(opt) {
        opt = prepareOptions(opt);

        var out = [generateGenericHeaderComment(), '', 'var ' + opt.moduleName + ' = (function () {', jisonLexerErrorDefinition, '', generateModuleBody(opt), '', opt.moduleInclude ? opt.moduleInclude + ';' : '', '', 'return lexer;', '})();', '', 'if (typeof require !== \'undefined\' && typeof exports !== \'undefined\') {', '  exports.lexer = ' + opt.moduleName + ';', '  exports.lex = function () {', '    return ' + opt.moduleName + '.lex.apply(lexer, arguments);', '  };', '}'];

        var src = out.join('\n') + '\n';
        src = stripUnusedLexerCode(src, opt);
        opt.exportSourceCode.all = src;
        return src;
    }

    RegExpLexer.generate = generate;

    RegExpLexer.version = version$1;
    RegExpLexer.defaultJisonLexOptions = defaultJisonLexOptions;
    RegExpLexer.mkStdOptions = mkStdOptions;
    RegExpLexer.camelCase = camelCase;
    RegExpLexer.autodetectAndConvertToJSONformat = autodetectAndConvertToJSONformat;

    var version = '0.6.1-202'; // require('./package.json').version;


    function getCommandlineOptions() {
        'use strict';

        var opts = nomnom.script('jison-lex').unknownOptionTreatment(false) // do not accept unknown options!
        .options({
            file: {
                flag: true,
                position: 0,
                help: 'file containing a lexical grammar'
            },
            json: {
                abbr: 'j',
                flag: true,
                default: false,
                help: 'jison will expect a grammar in either JSON/JSON5 or JISON format: the precise format is autodetected'
            },
            outfile: {
                abbr: 'o',
                metavar: 'FILE',
                help: 'Filepath and base module name of the generated parser;\nwhen terminated with a / (dir separator) it is treated as the destination directory where the generated output will be stored'
            },
            debug: {
                abbr: 'd',
                flag: true,
                default: false,
                help: 'Debug mode'
            },
            dumpSourceCodeOnFailure: {
                full: 'dump-sourcecode-on-failure',
                flag: true,
                default: true,
                help: 'Dump the generated source code to a special named file when the internal generator tests fail, i.e. when the generated source code does not compile in the JavaScript engine. Enabling this option helps you to diagnose/debug crashes (thrown exceptions) in the code generator due to various reasons: you can, for example, load the dumped sourcecode in another environment (e.g. NodeJS) to get more info on the precise location and cause of the compile failure.'
            },
            throwErrorOnCompileFailure: {
                full: 'throw-on-compile-failure',
                flag: true,
                default: true,
                help: 'Throw an exception when the generated source code fails to compile in the JavaScript engine. **WARNING**: Turning this feature OFF permits the code generator to produce non-working source code and treat that as SUCCESS. This MAY be desirable code generator behaviour, but only rarely.'
            },
            reportStats: {
                full: 'info',
                abbr: 'I',
                flag: true,
                default: false,
                help: 'Report some statistics about the generated parser'
            },
            moduleType: {
                full: 'module-type',
                abbr: 't',
                default: 'commonjs',
                metavar: 'TYPE',
                choices: ['commonjs', 'amd', 'js', 'es'],
                help: 'The type of module to generate (commonjs, amd, es, js)'
            },
            moduleName: {
                full: 'module-name',
                abbr: 'n',
                metavar: 'NAME',
                help: 'The name of the generated parser object, namespace supported'
            },
            main: {
                full: 'main',
                abbr: 'x',
                flag: true,
                default: false,
                help: 'Include .main() entry point in generated commonjs module'
            },
            moduleMain: {
                full: 'module-main',
                abbr: 'y',
                metavar: 'NAME',
                help: 'The main module function definition'
            },
            version: {
                abbr: 'V',
                flag: true,
                help: 'print version and exit',
                callback: function callback() {
                    return version;
                }
            }
        }).parse();

        return opts;
    }

    var cli = module.exports;

    cli.main = function cliMain(opts) {
        'use strict';

        opts = RegExpLexer.mkStdOptions(opts);

        function isDirectory(fp) {
            try {
                return fs.lstatSync(fp).isDirectory();
            } catch (e) {
                return false;
            }
        }

        function mkdirp(fp) {
            if (!fp || fp === '.' || fp.length === 0) {
                return false;
            }
            try {
                fs.mkdirSync(fp);
                return true;
            } catch (e) {
                if (e.code === 'ENOENT') {
                    var parent = path.dirname(fp);
                    // Did we hit the root directory by now? If so, abort!
                    // Else, create the parent; iff that fails, we fail too...
                    if (parent !== fp && mkdirp(parent)) {
                        try {
                            // Retry creating the original directory: it should succeed now
                            fs.mkdirSync(fp);
                            return true;
                        } catch (e) {
                            return false;
                        }
                    }
                }
            }
            return false;
        }

        function processInputFile() {
            // getting raw files
            var original_cwd = process.cwd();

            var raw = fs.readFileSync(path.normalize(opts.file), 'utf8');

            // making best guess at json mode
            opts.json = path.extname(opts.file) === '.json' || opts.json;

            // When only the directory part of the output path was specified, then we
            // do NOT have the target module name in there as well!
            var outpath = opts.outfile;
            if (/[\\\/]$/.test(outpath) || isDirectory(outpath)) {
                opts.outfile = null;
                outpath = outpath.replace(/[\\\/]$/, '');
            }
            if (outpath && outpath.length > 0) {
                outpath += '/';
            } else {
                outpath = '';
            }

            // setting output file name and module name based on input file name
            // if they aren't specified.
            var name = path.basename(opts.outfile || opts.file);

            // get the base name (i.e. the file name without extension)
            // i.e. strip off only the extension and keep any other dots in the filename
            name = path.basename(name, path.extname(name));

            opts.outfile = opts.outfile || outpath + name + '.js';
            if (!opts.moduleName && name) {
                opts.moduleName = opts.defaultModuleName = name.replace(/-\w/g, function (match) {
                    return match.charAt(1).toUpperCase();
                });
            }

            // Change CWD to the directory where the source grammar resides: this helps us properly
            // %include any files mentioned in the grammar with relative paths:
            var new_cwd = path.dirname(path.normalize(opts.file));
            process.chdir(new_cwd);

            var lexer = cli.generateLexerString(raw, opts);

            // and change back to the CWD we started out with:
            process.chdir(original_cwd);

            mkdirp(path.dirname(opts.outfile));
            fs.writeFileSync(opts.outfile, lexer);
            console.log('JISON-LEX output for module [' + opts.moduleName + '] has been written to file:', opts.outfile);
        }

        function readin(cb) {
            var stdin = process.openStdin(),
                data = '';

            stdin.setEncoding('utf8');
            stdin.addListener('data', function (chunk) {
                data += chunk;
            });
            stdin.addListener('end', function () {
                cb(data);
            });
        }

        function processStdin() {
            readin(function processStdinReadInCallback(raw) {
                console.log(cli.generateLexerString(raw, opts));
            });
        }

        // if an input file wasn't given, assume input on stdin
        if (opts.file) {
            processInputFile();
        } else {
            processStdin();
        }
    };

    cli.generateLexerString = function generateLexerString(lexerSpec, opts) {
        'use strict';

        // var settings = RegExpLexer.mkStdOptions(opts);

        var predefined_tokens = null;

        return RegExpLexer.generate(lexerSpec, predefined_tokens, opts);
    };

    if (require.main === module) {
        var opts = getCommandlineOptions();
        cli.main(opts);
    }
});
