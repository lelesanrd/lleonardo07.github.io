import angular from "angular";
import ngRoute from "angular-route";
import ngSanitize from "angular-sanitize";

// Styles
import styles from "./public/styles/global.scss";

// Pages
import main from "./pages/main/main.js";

// Components
import navigation from "./components/navigation/navigation";
import universalFooter from "./components/universalfooter/universalfooter";

// Services
angular.module("lleonardo07", [
    "ngRoute",
    "lleonardo07.navigation",
    "lleonardo07.main",
    "lleonardo07.universalfooter"
])
.config(["$locationProvider", "$routeProvider", ($locationProvider, $routeProvider) => {
    $locationProvider.hashPrefix("!");
    $routeProvider.otherwise({redirectTo: "/main"});
}])
.controller("lleonardo07Ctrl", ["$scope", "$location", function($scope, $location) {
    $scope.location = $location.$$path;
}]);
