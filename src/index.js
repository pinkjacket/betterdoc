var apiKey = require("./../.env").apiKey;
import "bootstrap/dist/css/bootstrap.min.css";
import "./templates/styles.css";
import { nameSearch } from "./backend.js";
import { conditionSearch } from "./backend.js"

$(document).ready(function() {
  $('#nameSearch').click(function() {
    let name = $('#docName').val();
    $('#docName').val("");
    $('.showDoctors').empty();
    $('.noDoctors').empty();
    $('.showErrors').empty();
    let response = nameSearch(name);
  });
  $('#conditionSearch').click(function() {
    let cond = $('#condition').val();
    $('#condition').val("");
    $('.showDoctors').empty();
    $('.noDoctors').empty();
    $('.showErrors').empty();
    let response = conditionSearch(cond);
  });

});
