const path = require('path');
const {injectBabelPlugin,getBabelLoader} = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')
const { getLessVars } = require('antd-theme-generator');


module.exports = function override(config, env) {
	// antd 按需加载
	config = injectBabelPlugin(
		[   'import',
			{
				libraryName: 'antd',
				libraryDirectory: 'es',
				style: true
			},
		],
		config,
	)
	//装饰器
    config = injectBabelPlugin(['@babel/plugin-proposal-decorators', {legacy: true}], config);

    // config = injectBabelPlugin(['babel-plugin-transform-decorators-legacy', {legacy: true}], config);
	//手动修改主题色
	config = rewireLess.withLoaderOptions({
		modifyVars: getLessVars(path.join(__dirname, './src/styles/vars.less')),
		javascriptEnabled: true,
	})(config, env)
	
	return config
};