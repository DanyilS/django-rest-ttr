angular
    .module('snippetList')
    .component('snippetList', {
        templateUrl: '../static/js/snippet-list/snippet-list.template.html',
        controller: function SnippetListController($http) {
            var self = this;

            $http.get('http://127.0.0.1:8000/snippets-api/?format=json')
                .then(function(response) {
                    self.snippets = response.data;
                    console.log(self.snippets);
                })

            $http.get('http://127.0.0.1:8000/get-choices/?choice_option=LANGUAGE_CHOICES&format=json')
                .then(function (response) {

                    self.tariff_choices = response.data;
                    console.log(response.data);
                })

            $http.get('http://127.0.0.1:8000/get-choices/?choice_option=STYLE_CHOICES&format=json')
                .then(function (response) {

                    self.style_choices = response.data;
                    console.log(response.data);
                })

            self.search = function () {
                $http.get('http://127.0.0.1:8000/snippets-api.json', { params: self.snippet })
                    .then(function (response) {

                        self.snippets = response.data;
                        console.log(self.snippets);
                    });
            }

            self.getNextLink = function () {
                console.log(self.snippets.next)
                if (self.snippets.next !== null) {
                    $http.get(self.snippets.next)
                        .then(function (response) {

                            self.snippets = response.data;
                            console.log(response.data);
                        });
                }
            }

            self.getPreviousLink = function () {
                console.log(self.snippets.previous)
                if (self.snippets.previous !== null) {
                    $http.get(self.snippets.previous)
                        .then(function (response) {

                            self.snippets = response.data;
                            console.log(response.data);
                        });
                }
            }



        }
    });



