#!/usr/bin/env node

var lexParser = require('lex-parser');
var RegExpLexer = require('./regexp-lexer.js');


function getCommandlineOptions() {
    'use strict';

    var version = require('./package.json').version;
    var opts = require('nomnom')
        .script('jison-lex')
        .unknownOptionTreatment(false)              // do not accept unknown options!
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
                help : 'Filepath and base module name of the generated parser;\nwhen terminated with a / (dir separator) it is treated as the destination directory where the generated output will be stored'
            },
            debug: {
                abbr: 'd',
                flag: true,
                default: false,
                help: 'Debug mode'
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
                callback: function () {
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

    var fs = require('fs');
    var path = require('path');

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
        var lex;
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

        opts.outfile = opts.outfile || (outpath + name + '.js');
        if (!opts.moduleName && name) {
            opts.moduleName = opts.defaultModuleName = name.replace(/-\w/g,
                function (match) {
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

    return RegExpLexer.generate(lexerSpec, null, opts);
};


if (require.main === module) {
    var opts = getCommandlineOptions();
    cli.main(opts);
}

