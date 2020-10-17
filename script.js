document.getElementById("allciv").addEventListener("click",function(event){
  event.preventDefault();
  let proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations";
  fetch(proxyurl + url)
    .then(function(response){
      return response.json();
    }).then(function(json){
      console.log(json);
      let results = "";
      //Build AllCiv Response
    })
});

document.getElementById("allunit").addEventListener("click",function(event){
  event.preventDefault();
  let proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = "https://age-of-empires-2-api.herokuapp.com/api/v1/units";
  fetch(proxyurl+url)
    .then(function(response){
      return response.json();
    }).then(function(json){
      console.log(json);
      let results = "";
      //Build AllUnit Response
    })
});

document.getElementById("alltech").addEventListener("click",function(event){
  event.preventDefault();
  let proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = "https://age-of-empires-2-api.herokuapp.com/api/v1/technologies";
  fetch(proxyurl+url)
    .then(function(response){
      return response.json();
    }).then(function(json){
      console.log(json);
      let results = "";
      //Build AllTech Response
    })
});

document.getElementById("allbuil").addEventListener("click",function(event){
  event.preventDefault();
  let proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = "https://age-of-empires-2-api.herokuapp.com/api/v1/structures";
  fetch(proxyurl+url)
    .then(function(response){
      return response.json();
    }).then(function(json){
      console.log(json);
      let results = "";
      //Build AllBuil Response
    })
});

document.getElementById("civbtn").addEventListener("click",function(event){
  event.preventDefault();
  const value = document.getElementById("civ").value;
  if(value === "")
    return;
  let proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = "https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/" + value;
  fetch(proxyurl+url)
    .then(function(response){
      return response.json();
    }).then(function(json){
      console.log(json);
      let results = "";
      //Build CivBtn Response
    })
});

document.getElementById("unitbtn").addEventListener("click",function(event){
  event.preventDefault();
  const value = document.getElementById("unit").value;
  if(value === "")
    return;
  let proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/" + value;
  fetch(proxyurl+url)
    .then(function(response){
      return response.json();
    }).then(function(json){
      console.log(json);
      let results = "";
      //Build UnitBtn Response
    })
});

document.getElementById("techbtn").addEventListener("click",function(event){
  event.preventDefault();
  const value = document.getElementById("tech").value;
  if(value === "")
    return;
  let proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/" + value;
  fetch(proxyurl+url)
    .then(function(response){
      return response.json();
    }).then(function(json){
      console.log(json);
      let results = "";
      //Build TechBtn Response
    })
});

document.getElementById("builbtn").addEventListener("click",function(event){
  event.preventDefault();
  const value = document.getElementById("buil").value;
  if(value === "")
    return;
  let proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/" + value;
  fetch(proxyurl + url)
    .then(function(response){
      return response.json();
    }).then(function(json){
      console.log(json);
      let results = "";
      //Build BuilBtn Response
    })
});
