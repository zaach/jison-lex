
all: build test

prep: npm-install

npm-install:
	npm install

build:

test:
	node tests/all-tests.js


# increment the XXX <prelease> number in the package.json file: version <major>.<minor>.<patch>-<prelease>
bump:
	npm version --no-git-tag-version prerelease

git-tag:
	node -e 'var pkg = require("./package.json"); console.log(pkg.version);' | xargs git tag





clean:
	-rm -rf node_modules/

superclean: clean
	-find . -type d -name 'node_modules' -exec rm -rf "{}" \;





.PHONY: all prep npm-install build test clean superclean bump git-tag
