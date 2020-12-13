angular
.module('snippetApp')
.config(['$routeProvider',
function config($routeProvider) {
    $routeProvider.when('/snippets', {
        template: '<snippet-list></snippet-list>'
    }).when('/snippets/:snippetId', {
        template: '<snippet-detail></snippet-detail>'
    }).otherwise('/snippets');
}])