var apiKey = require("./../.env").apiKey;



export function nameSearch(name) {
  $.ajax({
    url: `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&skip=0&limit=10&user_key=${apiKey}`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      for(let i = 0; i < response.data.length; i++) {
        console.log(`${response.data[i].profile.first_name}`);
      }
    },

    //   })
    //
    // },
    error:function() {
      $('.showErrors').text("Error!")
    }
  });
}
  // let promise = new Promise(function(resolve, reject) {
    // let request = new XMLHttpRequest();
    // let url = term;
    // request.open("GET", url, true);
    // request.onload = function() {
    //   let data = JSON.parse(this.response);
    //
    //   if (this.status >= 200 && this.status < 400) {
    //     data.forEach()
    //   } else {
    //     reject(Error(request.statusText));
    //   }
    // }
    // request.send();
  // });

//   promise.then(function(response) {
//     let body = JSON.parse(response);
//     $(".showDoctors").text(`Doctor's name: ${body.data.profile.last_name}`);
//   }, function(error) {
//     $(".showErrors").text(`There was an error processing your request: ${error.message}`);
//   });
// };
