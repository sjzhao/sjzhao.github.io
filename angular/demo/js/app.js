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
var webapp = angular.module('zinchapp', ['ng-iscroll']);

webapp.controller('scroll', function ($scope) {

	var schools = [];
	var schoolitem = {
		chinese_name: '普林斯顿大学',
		name: 'Princeton University',
		location: 'Princeton, New Jersey',
		hot: '计算机, 工程'
	}

	for (var i = 1; i <= 50; i++) {
		schools[i] = schoolitem;
	}

	$scope.schools = schools;

//	$scope.$parent.myScrollOptions = {
//		snap: false,
//		onScrollEnd: function ()
//		{
//			alert('finshed scrolling');
//		}
//	};

});