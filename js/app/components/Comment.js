var Comment = {
  template: [
    "<h5>by: {{ctrl.commentMan}}</h5>",
    "<div ng-bind-html='ctrl.commentText'></div><br>",
    "<div ng-repeat='kidComment in ctrl.commentsArr'>",
      "<ul><li><comment id='kidComment'></comment></li></ul>",
    "</div>"
  ].join(''),
  bindings: {
    id: '='
  },
  controller: function(NewsIdsService){
    var ctrl = this;
    ctrl.commentMan = ctrl.id.by;
    ctrl.commentText = ctrl.id.text;
    ctrl.commentKids = ctrl.id.kids;

    ctrl.commentsArr = [];

    if (ctrl.commentKids) {
      ctrl.getComments = function(){
        for(i = 0; i < ctrl.commentKids.length; i++){
          NewsIdsService
            .getId(ctrl.commentKids[i])
            .then(function(res){
              ctrl.commentsArr.push(res)
            })
        };
      };
      ctrl.getComments()
    }
  },
  controllerAs: 'ctrl'
}

angular
  .module('app')
  .component('comment', Comment)
