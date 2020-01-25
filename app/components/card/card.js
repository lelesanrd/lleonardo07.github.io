import angular from "angular";

// Styles
import styles from "./card.scss";

export default angular.module("lleonardo07.card", [])
  .component("card", {
    template: require("./card.html"),
    bindings: {
        feature: "=",
        logos: "="
    }
  });
