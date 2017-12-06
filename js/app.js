angular.module('myApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('home', {
        url: '/',
        templateUrl: './js/home/homeTmpl.html'
    })
    .state('products', {
        url: '/products/:id',
        templateUrl: './js/products/productsTmpl.html',
        controller: 'productsCtrl',
        resolve: {
            products: function(productsSrvc, $stateParams){
                return productsSrvc
                .getProducts($stateParams.id)
                .then(res=> res.data)
            }
        }
    })
    .state('settings', {
        url: '/settings',
        templateUrl: './js/settings/settingsTmpl.html'
    })
    $urlRouterProvider.otherwise('/')
});
