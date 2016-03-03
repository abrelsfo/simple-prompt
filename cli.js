#!/usr/bin/env node
'use strict';
var meow = require('meow');
var pk = require('./');

var cli = meow([
	'Usage',
	'  $ pk [input]',
	'',
	'Options',
	'  --foo  Lorem ipsum. [Default: false]',
	'',
	'Examples',
	'  $ pk',
	'  unicorns & rainbows',
	'  $ pk ponies',
	'  ponies & rainbows'
]);

console.log(pk(cli.input[0] || 'unicorns'));
