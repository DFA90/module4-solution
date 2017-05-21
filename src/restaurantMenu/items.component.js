angular.module('MenuApp').component('itemDetails', {
  templateUrl: 'src/restaurantMenu/templates/item-detail.template.html',
  bindings: {
    items: '<'
  }
});
