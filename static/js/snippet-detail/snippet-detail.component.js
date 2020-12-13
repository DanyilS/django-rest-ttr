angular
.module('snippetDetail')
.component('snippetDetail', {
    template: 'TBD: Detail view for <span>{{$ctrl.snippetId}}</span>',
    controller: ['$routeParams',
    function SnippetDetailController($routeParams) {
        this.snippetId = $routeParams.snippetId;
        console.log('click')
    }
    ]
});