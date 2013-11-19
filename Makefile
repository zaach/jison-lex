
all: install build test

install:
	npm install

build:

test:
	node tests/all-tests.js




clean:

superclean: clean
	-find . -type d -name 'node_modules' -exec rm -rf "{}" \;





.PHONY: all install build test clean superclean
