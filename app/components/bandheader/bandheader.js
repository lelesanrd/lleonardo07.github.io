import angular from "angular";

// Styles
import styles from "./bandheader.scss";

export default angular.module("lleonardo07.bandheader", [])
  .component("bandheader", {
    template: require("./bandheader.html"),
    bindings: {
      title: "=",
      heading: "=",
      summary: "="
    }
  });
