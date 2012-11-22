var buster   = require('buster'),
    argToReq = require(__dirname + '/../');

buster.testCase('argToReq convert', {
	'single arg': function () {
		assert.equals(
			argToReq(['hoge']).path,
			'/hoge'
		);
	},

	'multi arg': function () {
		assert.equals(
			argToReq(['hoge', 'moge', 'fuga']).path,
			'/hoge/moge/fuga'
		);
	}

});