// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"
import "turbolinks"
import "jquery"
import Clipboard from "clipboard";
// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"


// NOTE: do not bind on event ready events since turbolinks now handles pages ready states
$(document).on("turbolinks:load", () => {
  // register sideNav listener
  $('.button-collapse').sideNav();

  var clipboard = new Clipboard('.copyable');

  clipboard.on('success', (e) => {
    Materialize.toast('Key copied to clipboard !', 4000);
    e.clearSelection();
  });
});
