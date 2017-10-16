require.config({
    baseUrl: '../js/',
    paths: {
        jquery: 'lib/jquery',
        main: 'user/main'
    }
}),
require(['jquery',  'main'], function ($,App) {
	App.init();
});
