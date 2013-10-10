function HelloController ($scope) {
  $scope.greeting = {text: "Hello"}
}

function CartController ($scope) {

  $scope.items = [
    {title: "Paint pots", price: 3.95, quantity: 8},
    {title: "Polka dots", price: 12.95, quantity: 17},
    {title: "Pebbles", price: 6.95, quantity: 5}
  ];

  $scope.remove = function (index) {
    $scope.items.splice(index, 1);
  }
}