'use strict';
module.exports = function (config) {
	var readline = require('readline-sync');
	var keypress = require('keypress');
	var chalk = require('chalk');
	//var config = require(json);
	var answers = initAnswers();
	var keys = Object.keys(answers);

	pk();

//==============================================================================

	function initAnswers(){
		var keys = {}
		for (var key in config){
			keys[key] = [];
		}
		return keys;
	};

//==============================================================================

	function pk() {
		var key = keys.slice(0,1)[0];
		keys = keys.slice(1);
		if (key !== undefined) {
			if (!checkAttribute(key, 'Ignore')) repeat(key, 0, getRepeat(key)); //if key should not be ignored
			else pk();

		} else{
		 for (var ans in answers){
			 if (answers[ans].length > 0) console.log(answers[ans]);
		 };
		
		 return answers;
		}
	};

//==============================================================================

	function checkAttribute(key, attr){
		var attr = config[key][attr];
		if (attr === undefined) attr = false;
		return attr;
	};

//==============================================================================

	function getRepeat(key){
		var attr = config[key]['Repeat'];
		if (attr === undefined) attr = 0;
		return attr;
	};

//==============================================================================

	function repeat(key, rep, totalRep){
		process.stdout.write(chalk.gray.dim.bold(key) + chalk.gray.bold('--> '));	//readline-sync won't display chalk colors for some reason
		var response = readline.question('', {
			hideEchoBack: checkAttribute(key, 'Display'),
			mask: '',
			keepWhitespace: checkAttribute(key, 'Whitespace')
		});

		if (response !== '') answers[key].push(response);

		var val = config[key]
		if (val['Method'] !== undefined) meth(val);

		if (totalRep === false || rep === totalRep || response === '') pk();
		else repeat(key, rep+1, totalRep);
	};

//==============================================================================

	function meth(val){
		eval(val['Fn']);	//place holder for more robust function handler
	};

//==============================================================================
};
