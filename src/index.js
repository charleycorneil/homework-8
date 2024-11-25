import * as $ from "jquery";

function initListeners() {
  $("#submit").on("click", () => {
    console.log("Button clicked");
  });
}

$(document).ready(function () {
  initListeners();
});
