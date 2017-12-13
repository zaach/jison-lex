# jison-lex \[OBSOLETED]


[![Join the chat at https://gitter.im/jison-parsers-lexers/Lobby](https://badges.gitter.im/jison-parsers-lexers/Lobby.svg)](https://gitter.im/jison-parsers-lexers/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) 
[![Build Status](https://travis-ci.org/GerHobbelt/jison-lex.svg?branch=master)](https://travis-ci.org/GerHobbelt/jison-lex)
[![NPM version](https://badge.fury.io/js/jison-gho.svg)](https://badge.fury.io/js/jison-gho)
[![Dependency Status](https://img.shields.io/david/GerHobbelt/jison-lex.svg)](https://david-dm.org/GerHobbelt/jison-lex)
[![npm](https://img.shields.io/npm/dm/@gerhobbelt/jison-lex.svg?maxAge=2592000)]()




A lexical analyzer generator used by [jison](http://jison.org). It takes a lexical grammar definition (either in JSON or Bison's lexical grammar format) and outputs a JavaScript lexer.




> 
> # deprecation notice
>
> From today (2017/oct/15) the jison-lex repository is **obsoleted** 
> for the `jison-lex` package/codebase: the **primary source** is the 
> [jison](https://github.com/GerHobbelt/jison) 
> [monorepo](https://medium.com/netscape/the-case-for-monorepos-907c1361708a)'s `packages/jison-lex/` 
> directory. See also https://github.com/GerHobbelt/jison/issues/16.
>
> (For a comparable argument, see also ["Why is Babel a monorepo?"](https://github.com/babel/babel/blob/master/doc/design/monorepo.md))
>
> Issues, pull requests, etc. for `jison-lex` should be filed there; hence 
> we do not accept issue reports in this secondary repository any more.
>
> This repository will track the primary source for a while still, but be 
> *very aware* that this particular repository will always be lagging behind!
>



## install

npm install @gerhobbelt/jison-lex


## build

To build the parser yourself, follow the install & build directions of the [monorepo](https://github.com/GerHobbelt/jison).

>
> ### Note about ES6/rollup usage vs. ES5
>
> All `dist/` library files are 'self-contained': they include all 'local imports' 
> from within this jison monorepo in order to deliver a choice of source files
> for your perusal where you only need to worry about importing **external dependencies**
> (such as `recast`).
>
> As such, these `dist/` files **should** be easier to minify and/or use in older
> (ES5) environments.
>
> #### rollup
>
> Iff you use `rollup` or similar tools in an ES6/ES2015/ES2017 setting, then the
> [`package.json::module`](https://github.com/rollup/rollup/wiki/pkg.module) has
> already been set up for you to use the *original sources* instead!
> 


## usage

```
Usage: jison-lex [file] [options]

file     file containing a lexical grammar

Options:
   -o FILE, --outfile FILE       Filename and base module name of the generated parser
   -t TYPE, --module-type TYPE   The type of module to generate (commonjs, js)
   --version                     print version and exit
```


## programmatic usage

```
var JisonLex = require('@gerhobbelt/jison-lex');

var grammar = {
  rules: [
    ["x", "return 'X';" ],
    ["y", "return 'Y';" ],
    ["$", "return 'EOF';" ]
  ]
};

// or load from a file
// var grammar = fs.readFileSync('mylexer.l', 'utf8');

// generate source
var lexerSource = JisonLex.generate(grammar);

// or create a parser in memory
var lexer = new JisonLex(grammar);
lexer.setInput('xyxxy');
lexer.lex();
// => 'X'
lexer.lex();
// => 'Y'
```


## license

MIT



## related repositories

- [jison / jison-gho](https://github.com/GerHobbelt/jison) @ [NPM](https://www.npmjs.com/package/jison-gho)
- [jison-lex](https://github.com/GerHobbelt/jison/master/packages/jison-lex) @ [NPM](https://www.npmjs.com/package/@gerhobbelt/jison-lex)
- [lex-parser](https://github.com/GerHobbelt/jison/master/packages/lex-parser) @ [NPM](https://www.npmjs.com/package/@gerhobbelt/lex-parser)
- [ebnf-parser](https://github.com/GerHobbelt/jison/master/packages/ebnf-parser) @ [NPM](https://www.npmjs.com/package/@gerhobbelt/ebnf-parser)
- [jison2json](https://github.com/GerHobbelt/jison/master/packages/jison2json) @ [NPM](https://www.npmjs.com/package/@gerhobbelt/jison2json)
- [json2jison](https://github.com/GerHobbelt/jison/master/packages/json2jison) @ [NPM](https://www.npmjs.com/package/@gerhobbelt/json2jison)
- [jison-helpers-lib](https://github.com/GerHobbelt/jison/master/packages/helpers-lib) @ [NPM](https://www.npmjs.com/package/jison-helpers-lib)
- ### secondary source repositories
  + [jison-lex](https://github.com/GerHobbelt/jison-lex)
  + [lex-parser](https://github.com/GerHobbelt/lex-parser)
  + [ebnf-parser](https://github.com/GerHobbelt/ebnf-parser)
  + [jison2json](https://github.com/GerHobbelt/jison2json)
  + [json2jison](https://github.com/GerHobbelt/json2jison)
  + [jison-helpers-lib](https://github.com/GerHobbelt/jison-helpers-lib)

