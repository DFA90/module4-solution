(function () {
  'use strict';

  angular.module('MenuApp')
  .service('CategoriesService', CategoriesService);


  CategoriesService.$inject = [];
  function CategoriesService(){
    var service = this;

    service.getCategories = function(items){
      var categories = [];
      var tmp;
      items.forEach(function(item){
        categories.push(item.short_name.match(/(\D+)/)[0]); // extract only letters
      });

      categories.sort();
      
      for(var i=1; i < categories.length; i++){
        if(categories[i] ===  categories[i-1]){
          categories.splice(i-1, 1)
          i = i-1;
        }
      }
      return(categories);
    }

  }
})();
