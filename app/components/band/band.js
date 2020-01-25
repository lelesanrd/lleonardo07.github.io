import angular from "angular";

// Styles
import styles from "./band.scss";

export default angular.module("lleonardo07.band", [])
    .component("band", {
        template: require("./band.html"),
        bindings: {
          anchor: "=",
          background: "=",
          layout: "="
        }
    });
