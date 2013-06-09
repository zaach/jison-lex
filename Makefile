
all: install build test

install:
	npm install

build:

test:
	node tests/all-tests.js

