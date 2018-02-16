var apiKey = require("./../.env").apiKey;
import { nameSearch } from "./backend.js";

$(document).ready(function() {
  $('#docName').click(function() {
    let name = $('#docName').val();
    $('#docName').val("");

    let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&skip=0&limit=10&user_key=${apiKey}`;
    let response = nameSearch(url);
  });
});
