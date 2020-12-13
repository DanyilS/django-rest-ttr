angular
    .module('snippetApp')
    .component('snippetList', {
        templateUrl: '../static/js/snippet-list.template.html',
        controller: function SnippetListController($http) {
            var self = this;
            $http.get('http://127.0.0.1:8000/snippets/?format=json')
                .then(function(response) {
                    self.snippets = response.data;
                    console.log(self.snippets);
                })
        }
    });