var apiKey = require("./../.env").apiKey;
import { nameSearch } from "./backend.js";

$(document).ready(function() {
  $('#nameSearch').click(function() {
    let name = $('#docName').val();
    $('#docName').val("");
    $('.showDoctors').empty();
    let response = nameSearch(name);


  });
});
