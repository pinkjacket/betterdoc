var apiKey = require("./../.env").apiKey;
import { nameSearch } from "./backend.js";

$(document).ready(function() {
  $('#nameSearch').click(function() {
    let name = $('#docName').val();
    $('#docName').val("");
    let response = nameSearch(name);


  });
});
