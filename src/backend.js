var apiKey = require("./../.env").apiKey;

export function nameSearch(term) {
  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = term;
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });

  promise.then(function(response) {
    let body = JSON.parse(response);
    $(".showDoctors").text(`Doctor's name: ${body.data.first_name}`)
});
}
