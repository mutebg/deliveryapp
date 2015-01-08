function box() {
    return {
        restrict: 'EA',
        transclude: true,
        scope: {
            boxtitle: '=',
            show: '='
        },
        template: '<div class="box">' +
            '<div class="box__title" ng-click=" show = ! show ">{{ boxtitle }}</div>' +
            '<div class="box__content" ng-show="show" ng-transclude></div>' +
            '</div>'
    };
}

function tabs() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            selected: '@?'
        },
        controller: ["$scope", function($scope) {
            var panes = $scope.panes = [];

            $scope.select = function(pane) {
                angular.forEach(panes, function(pane) {
                    pane.selected = false;
                });
                pane.selected = true;
            }

            this.addPane = function(pane) {
                if (panes.length == $scope.selected) {
                    pane.selected = true;
                }
                panes.push(pane);
            }

        }],
        link: function(scope, element, attrs) {
            attrs.selected = attrs.selected || 0;
            attrs.$observe('selected', function(index) {
                if (scope.panes[index]) {
                    scope.select(scope.panes[index]);
                }
            });
        },
        template: '<div class="tabs">' +
            '<a href="" ng-repeat="pane in panes" ng-click="select(pane)" class="tabs__link" ng-class="{\'tabs__link--active\':pane.selected}" id="tab-btn-{{$index}}">' +
            '<i class="tabs__icon fa fa-{{pane.icon}}"></i>' +
            '<span class="tabs__text">{{pane.title}}</span>' +
            '</a>' +
            '</div>' +
            '<div class="tab-content" ng-transclude></div>'
    };
};


function pane() {
    return {
        require: '^tabs',
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: {
            title: '@',
            icon: '@'
        },
        link: function(scope, element, attrs, tabsCtrl) {
            tabsCtrl.addPane(scope);
        },
        template: '<div class="tab-pane" ng-class="{\'tab-pane__active\': selected}" ng-transclude></div>'
    };
};


angular
    .module('delivery')
    .directive('box', box)
    .directive('pane', pane)
    .directive('tabs', tabs)
