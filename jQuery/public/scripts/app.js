jQuery(document).ready(function () {
    App.init();
});
var App = {
    BaseUrl: '',
    init: function () {
        Reviews.init();
    }
};
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