
all: build test examples

prep: npm-install

npm-install:
	npm install

build:
	node __patch_version_in_js.js

test:
	node_modules/.bin/mocha tests/

examples:
	node ./cli.js examples/lex.l -o examples/output/ -x


# increment the XXX <prelease> number in the package.json file: version <major>.<minor>.<patch>-<prelease>
bump:
	npm version --no-git-tag-version prerelease

git-tag:
	node -e 'var pkg = require("./package.json"); console.log(pkg.version);' | xargs git tag





clean:
	-rm -rf node_modules/
	-rm -f package-lock.json
	-rm -rf examples/output/

superclean: clean
	-find . -type d -name 'node_modules' -exec rm -rf "{}" \;





.PHONY: all prep npm-install build test examples clean superclean bump git-tag
