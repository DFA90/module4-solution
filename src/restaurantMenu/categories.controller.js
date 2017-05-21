(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['items', 'CategoriesService'];
function CategoriesController(items, CategoriesService) {
  var categories = this;
  categories.items = CategoriesService.getCategories(items);
}

})();
