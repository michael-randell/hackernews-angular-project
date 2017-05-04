function NewsIdsService($http){
  this.getIds = function(){
    return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json')
                .then(getIdsCallBk)

    function getIdsCallBk(response){
      return response.data;
    }
  };

  this.getId = function(id){
    return $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json') //might need id.toString()
                .then(getIdCallBk)

    function getIdCallBk(response){
      return response.data;
    }
  };
}

angular
  .module('app')
  .service('NewsIdsService', NewsIdsService)
