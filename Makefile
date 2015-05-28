
all: build test

prep: npm-install

npm-install:
	npm install

build:

test:
	node tests/all-tests.js




clean:
	-rm -rf node_modules/

superclean: clean
	-find . -type d -name 'node_modules' -exec rm -rf "{}" \;





.PHONY: all prep npm-install build test clean superclean
