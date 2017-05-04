angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config(function($stateProvider){
    $stateProvider
      .state('top', {
        url: '/top',
        templateUrl: 'js/app/views/top_stories.html',
        controller: 'TopStoriesController as ctrl',
        resolve: {
          topIds: function(NewsIdsService){
            return NewsIdsService.getIds().then(function(response){return response})
          }
        }
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: 'js/app/views/single_story.html',
        controller: 'SingleStoryController as ctrl',
        resolve: {
          singleId: function(NewsIdsService, $stateParams) {
            return NewsIdsService.getId($stateParams.id).then(function(response){return response})
          }
        }
      })
  })
