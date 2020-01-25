import angular from "angular";

// Styles
import styles from "./navigation.scss";

// Data
//import navigation from "../../data/navigation";

// Images
import logo from "../../public/img/redhat-logo-retina.png";

export default angular.module("lleonardo07.navigation", [])
    .component("navigation", {
        template: require("./navigation.html"),
        bindings: {
            location: "<"
        },
        controller: "navigationCtrl"
    }).controller("navigationCtrl", ["$scope", function($scope) {
        $scope.logo = logo;
        //$scope.navigation = navigation;
    }]);
