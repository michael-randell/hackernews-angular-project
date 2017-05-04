angular
  .module('app')
  .controller('TopStoriesController', ['topIds',
  function TopStoriesController(topIds){
    ctrl = this;
    ctrl.topIdsArr = topIds;

    ctrl.maxPage = 99;
    ctrl.page = 1;
    ctrl.perPage = 29;

    ctrl.cutIdsArr = [];

    this.nextPage = function(endIdx){
      ctrl.page++
      ctrl.cutIdsArr = ctrl.topIdsArr.slice(endIdx, ((ctrl.page*ctrl.perPage)+29))
    };

    this.prevPage = function(endIdx){
      ctrl.page--
      ctrl.cutIdsArr = ctrl.topIdsArr.slice(((ctrl.page*ctrl.perPage)-29), endIdx)
    };

    this.initCut = function(startIdx, endIdx){
      ctrl.cutIdsArr = ctrl.topIdsArr.slice(startIdx, endIdx);
      ctrl.maxPage = Math.floor(ctrl.topIdsArr.length / 30) ;
    };

    this.initCut(ctrl.page-1, (ctrl.page * ctrl.perPage))
  }]);
