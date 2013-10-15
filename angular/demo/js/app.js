//function HelloController ($scope) {
//  $scope.greeting = {text: "Hello"}
//}
//
//function CartController ($scope) {
//
//  $scope.items = [
//    {title: "Paint pots", price: 3.95, quantity: 8},
//    {title: "Polka dots", price: 12.95, quantity: 17},
//    {title: "Pebbles", price: 6.95, quantity: 5}
//  ];
//
//  $scope.remove = function (index) {
//    $scope.items.splice(index, 1);
//  }
//}
var webapp = angular.module('zinchapp', ['ng-iscroll', 'infinite-scroll']);

webapp.controller('scroll', ['$scope', function ($scope) {

	var schools = [];
	var schoolitem = {
		chinese_name: '哈佛大学',
		name: 'Princeto University',
		location: 'Princeto, New Jersey',
		hot: '计算机, 工程, 艺术'
	}

	for (var i = 1; i <= 2; i++) {
		schools[i] = schoolitem;
	}

	$scope.schools = schools;

	$scope.loadMore = function () {
		for (var i=1; i<=2; i++) {
 			$scope.schools.push(schoolitem);
		}
	}

//	$scope.$parent.myScrollOptions = {
//		snap: false,
//		onScrollEnd: function ()
//		{
//			alert('finshed scrolling');
//		}
//	};

}]);