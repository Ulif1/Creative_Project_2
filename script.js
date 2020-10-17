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
      results += "<h3 class='centered col-md-12'>List of Civilizations</h3>";
      for(var i = 0; i < json.civilizations.length; i++){
        results += "<p class='name col-md-3'>" + json.civilizations[i].name + "</p>";
      }
      document.getElementById("layout").innerHTML = results;
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
      results += "<h3 class='centered col-md-12'>List of Units</h3>";
      for(var i = 0; i < json.units.length; i++){
        results += "<p class='name col-md-3'>" + json.units[i].name + "</p>";
      }
      document.getElementById("layout").innerHTML = results;
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
      results += "<h3 class='centered col-md-12'>List of Technologies</h3>";
      for(var i = 0; i < json.technologies.length; i++){
        results += "<p class='name col-md-3'>" + json.technologies[i].name + "</p>";
      }
      document.getElementById("layout").innerHTML = results;
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
      results += "<h3 class='centered col-md-12'>List of Buildings</h3>";
      for(var i = 0; i < json.structures.length; i++){
        results += "<p class='name col-md-3'>" + json.structures[i].name + "</p>";
      }
      document.getElementById("layout").innerHTML = results;
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
      results += "<h3 class='centered col-md-12'>" + value + "</h3>";
      //Build CivBtn Response
      document.getElementById("layout").innerHTML = results;
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
      results += "<h3 class='centered col-md-12'>" + value + "</h3>";
      //Build UnitBtn Response
      if(json.cost.Food > 1){
        results += "<p>" + json.cost.Food + " Wood</p>";
      }
      if(json.cost.Gold > 1){
        results += "<p>" + json.cost.Gold + " Wood</p>";
      }
      document.getElementById("layout").innerHTML = results;
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
      results += "<h3 class='centered col-md-12'>" + value + "</h3>";
      //Build TechBtn Response
      document.getElementById("layout").innerHTML = results;
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
      results += "<h3 class='centered col-md-12'>" + value + "</h3>";
      if(json.length >= 1){
        for(var i = 0; i < json.length; i++){
          results += "<div class='ml-auto mr-auto name'>";
          results += "<p>" + json[i].age + " Age:" + "</p>";
          results += "<p>" + json[i].cost.Wood + " Wood" + "</p>";
          results += "<p>Armor: " + json[i].armor + "</p>";
          results += "<p>Hitpoints: " + json[i].hit_points + "</p>";
          results += "</div>";
        }
      }else{
        results += "<div class='ml-auto mr-auto name'>";
        results += "<p>Available starting in " + json.age + " Age</p>";
        if(json.cost.Wood > 1){
          results += "<p>" + json.cost.Wood + " Wood</p>";
        }
        if(json.cost.Gold > 1){
          results += "<p>" + json.cost.Gold + " Gold</p>";
        }
        if(json.cost.Stone > 1){
          results += "<p>" + json.cost.Stone + " Stone</p>";
        }
        results += "<p>Armor: " + json.armor + "</p>";
        results += "<p>Hitpoints: " + json.hit_points + "</p>";
        results += "</div>";
      }
      document.getElementById("layout").innerHTML = results;
    })
});
