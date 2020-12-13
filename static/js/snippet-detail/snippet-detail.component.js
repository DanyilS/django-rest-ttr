angular
    .module('snippetDetail')
    .component('snippetDetail', {
        templateUrl: '../static/js/snippet-detail/snippet-detail.template.html',
        controller: ['$routeParams', '$http',
            function SnippetDetailController($routeParams, $http) {
                this.snippetId = $routeParams.snippetId;
                console.log('click')

                var self = this;

                //TODO изменить запрос на http://127.0.0.1:8000/snippets/1.json!!! и в шаблоне обращаться по нормальному
                $http.get('http://127.0.0.1:8000/snippets-api.json/?id=' + $routeParams.snippetId)
                    .then(function (response) {
                        self.snippet = response.data;
                        console.log(self.snippet);
                    });

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

                self.changeSnippet = function () {
                    $http.put('http://127.0.0.1:8000/snippets/' + self.snippet.id, {params: self.snippetNew})
                        .then(function (response) {
                            self.snippet = response.data;
                            console.log(self.snippets);

                        });
                }


            }
        ]
    });