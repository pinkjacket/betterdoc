var apiKey = require("./../.env").apiKey;

export function nameSearch(name) {
  $.ajax({
    url: `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&skip=0&limit=10&user_key=${apiKey}`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      if(response.data.length === 0){
        $(".noDoctors").text("No doctors found, sorry.")
      }
      for(let i = 0; i < response.data.length; i++) {
        let name = response.data[i].profile.first_name + " " + response.data[i].profile.last_name;
        let address1 = response.data[i].practices[0].visit_address.street;
        let address2 = response.data[i].practices[0].visit_address.zip;
        let phone = response.data[i].practices[0].phones[0].number;
        let newpatients = response.data[i].practices[0].accepts_new_patients;
        $(".showDoctors").append("<ul>" + "<li>Name: " + name + "</li>" + "<p></p>" + "Address: " + address1 + "<p></p>" + address2 + "<p></p>" + "Phone#: " + phone + "<p></p>" + "Open for new patients? " + newpatients + "</ul>");
      }
    },
    error:function() {
      $('.showErrors').text("Error!")
    }
  });
}

export function conditionSearch(cond) {
  $.ajax({
    url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${cond}&location=or-portland&skip=0&limit=10&user_key=${apiKey}`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      if(response.data.length === 0){
        $(".noDoctors").text("No doctors found, sorry.")
      }
      for(let i = 0; i < response.data.length; i++) {
        let name = response.data[i].profile.first_name + " " + response.data[i].profile.last_name;
        let address1 = response.data[i].practices[0].visit_address.street;
        let address2 = response.data[i].practices[0].visit_address.zip;
        let phone = response.data[i].practices[0].phones[0].number;
        let newpatients = response.data[i].practices[0].accepts_new_patients;
        $(".showDoctors").append("<ul>" + "<li>Name: " + name + "</li>" + "<p></p>" + "Address: " + address1 + "<p></p>" + address2 + "<p></p>" + "Phone#: " + phone + "<p></p>" + "Open for new patients? " + newpatients + "</ul>");
      }
    },
    error:function() {
      $('.showErrors').text("Error!")
    }
  });
}
