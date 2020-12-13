angular.module('snippetApp', [
    'ngRoute',
    'snippetList',
    'snippetDetail'
]);

//
// var app = angular.module('snippetApp', ['ngRoute', 'snippetDetail'])
//     .config(function($httpProvider, $routeProvider) {
//     $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
//
//     $routeProvider.when('/snippets/:snippetId', {
//         template: '<snippet-detail></snippet-detail>'
//     }).otherwise('/home');
// });
//
// app.controller('SnippetController', ['$scope', '$http', function SnippetListController($scope, $http) {
//         $scope.snippet = {};
//         // $scope.snippets = [];
//
//
//
//         $http.get('http://127.0.0.1:8000/snippets/?format=json')
//             .then(function (response) {
//                 $scope.snippets = response.data;
//                 console.log(response.data);
//             })
//
//         $http.get('http://127.0.0.1:8000/get-choices/?choice_option=LANGUAGE_CHOICES&format=json')
//             .then(function (response) {
//
//                 $scope.tariff_choices = response.data;
//                 console.log(response.data);
//             })
//
//         $http.get('http://127.0.0.1:8000/get-choices/?choice_option=STYLE_CHOICES&format=json')
//             .then(function (response) {
//
//                 $scope.style_choices = response.data;
//                 console.log(response.data);
//             })
//
//         $scope.search = function () {
//             console.log($scope.snippet);
//             // document.write(snippet);
//             $http.get('http://127.0.0.1:8000/snippets.json', { params: $scope.snippet })
//                 .then(function (response) {
//
//                 $scope.snippets = response.data;
//                 console.log(response.data);
//             });
//         }
//
//         $scope.getNextLink = function () {
//             console.log($scope.snippets.next)
//             if ($scope.snippets.next !== null) {
//                 $http.get($scope.snippets.next)
//                 .then(function (response) {
//
//                 $scope.snippets = response.data;
//                 console.log(response.data);
//             });
//             }
//         }
//
//         $scope.getPreviousLink = function () {
//             console.log($scope.snippets.previous)
//             if ($scope.snippets.previous !== null) {
//                 $http.get($scope.snippets.previous)
//                 .then(function (response) {
//
//                 $scope.snippets = response.data;
//                 console.log(response.data);
//             });
//             }
//         }
//
//
//
//
//     }]
//
// );