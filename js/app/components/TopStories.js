var Story = {
  template: [
    '<div class="news-data">',
      '<div ng-bind="story.data.id"></div>',
      '<div ng-bind="story.data.title"></div>',
      '<div ng-bind="story.data.by"></div>',
      '<div ng-bind="story.data.url"></div>',
      '<a ng-href="{{getLinkUrl(story.data.id)}}">LINK</a>',
    '</div>',
    '<br><br>'
  ].join(''),
  bindings: {
    id: '='
  },
  controller: function(NewsIdsService, $scope){
    var ctrl = this;

    $scope.getLinkUrl = function(id){
      return $state.href('post', {id: id});
    };

    NewsIdsService
      .getId(ctrl.id)
      .then(function(res){
        ctrl.data = res
      })
  },
  controllerAs: 'story'
}

angular
  .module('app')
  .component('story', Story)
