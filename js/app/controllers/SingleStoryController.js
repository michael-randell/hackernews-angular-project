angular
  .module('app')
  .controller('SingleStoryController', ['singleId', 'NewsIdsService', function SingleStoryController(singleId, NewsIdsService) {
    ctrl = this;
    ctrl.singleStory = singleId;

    ctrl.commentsArr = [];

    ctrl.getComments = function(){
      for(i = 0; i < ctrl.singleStory.kids.length; i++){
        NewsIdsService
          .getId(ctrl.singleStory.kids[i])
          .then(function(res){
            ctrl.commentsArr.push(res)
          })
      };
    };
    ctrl.getComments();
  }])
