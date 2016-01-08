var reviewApp = angular.module('reviewApp', []);

reviewApp.directive('onLastRepeat', function() {
    return function(scope, element, attrs) {
        if (scope.$last) setTimeout(function(){
            scope.$emit('onRepeatLast', element, attrs);
        }, 1);
    };
});

reviewApp.controller('reviewController', function reviewController($scope, $http, $sce) {
    $http.get('public/scripts/reviews.json').success(function (data) {
        $scope.reviews = data;
    });

    $scope.$on('onRepeatLast', function(scope, element, attrs){
        $('.cards').Slider();
    });

    $scope.getStars = function (count) {
        var template = '<i class="{{cls}}"></i>', empty = 'md-star-outline', full = 'md-star', list = '';
        for (var i = 0; i < 5; i++) {
            var cls = (i < count) ? full : empty;
            list += template.replace("{{cls}}", cls);
        }
        return $sce.trustAsHtml(list);
    };
    $scope.getStarsClass = function (rate) {
        return Utils.translateNumToChar(rate);
    };
    $scope.get = function () {
        alert(1);
    };
});

var Utils = {
    translateNumToChar: function (num) {
        switch (num) {
            case '1':
                return "one";
            case '2':
                return "two";
            case '3':
                return "three";
            case '4':
                return "four";
            case '5':
                return "five";
        }
    }
};