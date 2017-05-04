var Comments = {
  template: [
    "<div ng-repeat='comment in ctrl.commentsArr'>",
      "<comment id='comment'></comment>",
    "</div>"
  ].join(''),
  bindings: {
    ids: "="
  },
  controller: function(NewsIdsService){
    var ctrl = this;

    ctrl.commentsArr = [];

    ctrl.getComments = function(){
      for(i = 0; i < ctrl.ids.length; i++){
        NewsIdsService
          .getId(ctrl.ids[i])
          .then(function(res){
            debugger;
          })
      }
    }
    ctrl.getComments()
  },
  controllerAs: 'comments'
}

angular
  .module('app')
  .component('comments', Comments)
