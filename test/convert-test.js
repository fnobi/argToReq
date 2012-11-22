var buster   = require('buster'),
    argToReq = require(__dirname + '/../');

// ArgToReqにするのも手かも。けっこう設定多い。

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
	},

	'arg with flag': function () {
		argToReq.flags = ['moge'];

		var req = argToReq(['hoge', '--moge', 'fuga']);
		assert.equals(req.path, '/hoge/fuga');
		assert(req.params.moge);
	},

	'arg with option': function () {
		argToReq.options = ['moge'];

		var req = argToReq(['hoge', '--moge', 'fuga']);
		assert.equals(req.path, '/hoge');
		assert.equals(req.params.moge, 'fuga');
	},

	'arg with method': function () {
		argToReq.methodFlags = { 'POST': ['p', 'post'] };

		var req = argToReq(['hoge', '--post', 'fuga']);
		assert.equals(req.path, '/hoge/fuga');
		assert.equals(req.method, 'POST');
	}

});