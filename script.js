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
      results += "<h3 class='centered col-md-12'>" + json.name + "</h3>";
      //Build CivBtn Response
      results += "<div class='ml-auto mr-auto name'>";
      results += "<p class='centered'>Preferred Army Type: " + json.army_type + "</p>";
      results += "<p class='centered'><strong>Civilization Bonuses:</strong> <br>";
      for(var i = 0; i < json.civilization_bonus.length; i++){
        results += json.civilization_bonus[i];
        if(i < json.civilization_bonus.length-1){
          results += "<br>";
        }
      }
      results += "<p class='centered'><strong>Team Bonus:</strong><br>" + json.team_bonus + "</p>";
      fetch(proxyurl+json.unique_unit[0])
        .then(function(response){
          return response.json();
        }).then(function(json2){
          console.log(json2);
          results += "<p class='centered'><strong>Unique Unit:</strong><br>" + json2.name + "</p>";
          fetch(proxyurl+json.unique_tech[0])
            .then(function(response){
              return response.json();
            }).then(function(json3){
              console.log(json3);
              results += "<p class='centered'><strong>Unique Technology:</strong><br>" + json3.name + "</p>";
              results += "</div>";
              document.getElementById("layout").innerHTML = results;
            })
        })
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
      var building = "";
      results += "<h3 class='centered col-md-12'>" + value + "</h3>";
      results += "<div class='ml-auto mr-auto name centered'>";
      //Build UnitBtn Response
      fetch(proxyurl+json.created_in)
        .then(function(response){
          return response.json();
        }).then(function(json2){
          console.log(json2);
          if(json2.length >= 1){
            building = json2[0].name;
          }else{
            building = json2.name;
          }
        }).then(function(event){
          results += "<div class='container centered'>";
          results += "<p class='centered squish'>" + json.description + ", created at the " + building + "</p>";
          results += "</div>";
          if(json.cost.Food > 1){
            results += "<p class='centered'>" + json.cost.Food + " Food</p>";
          }
          if(json.cost.Gold > 1){
            results += "<p class='centered'>" + json.cost.Gold + " Gold</p>";
          }
          if(json.cost.Wood > 1){
            results += "<p class='centered'>" + json.cost.Wood + " Wood</p>";
          }
          results += "<p class='centered'>Armor: " + json.armor + "</p>";
          results += "<p class='centered'>Hitpoints: " + json.hit_points + "</p>";
          results += "</div>";
          document.getElementById("layout").innerHTML = results;
        })
    })
});

document.getElementById("techbtn").addEventListener("click",function(event){
  event.preventDefault();
  const value = document.getElementById("tech").value;
  if(value === "")
    return;
  let proxyurl = 'https://cors-anywhere.herokuapp.com/';
  const url = "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/" + value;
  var building = "";
  fetch(proxyurl+url)
    .then(function(response){
      return response.json();
    }).then(function(json){
      console.log(json);
      let results = "";
      results += "<h3 class='centered col-md-12'>" + value + "</h3>";
      results += "<div class='ml-auto mr-auto name'>";
      fetch(proxyurl+json.develops_in)
        .then(function(response){
          return response.json();
        }).then(function(json2){
          console.log(json2);
          if(json2.length >= 1){
            building = json2[0].name;
          }else{
            building = json2.name;
          }
        }).then(function(event){
          results += "<p class='centered'>Technology available at " + building + " starting in the " + json.age + " Age.</p>";
          results += "<p class='centered'>Description: " + json.description + "</p>";
          if(json.cost.Food > 1){
            results += "<p class='centered'>" + json.cost.Food + " Wood</p>";
          }
          if(json.cost.Wood > 1){
            results += "<p class='centered'>" + json.cost.Wood + " Wood</p>";
          }
          if(json.cost.Gold > 1){
            results += "<p class='centered'>" + json.cost.Gold + " Gold</p>";
          }
          if(json.cost.Stone > 1){
            results += "<p class='centered'>" + json.cost.Stone + " Stone</p>";
          }
          results += "</div>";
          document.getElementById("layout").innerHTML = results;
        })
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
          results += "<p class='centered'>" + json.cost.Wood + " Wood</p>";
        }
        if(json.cost.Gold > 1){
          results += "<p class='centered'>" + json.cost.Gold + " Gold</p>";
        }
        if(json.cost.Stone > 1){
          results += "<p class='centered'>" + json.cost.Stone + " Stone</p>";
        }
        results += "<p class='centered'>Armor: " + json.armor + "</p>";
        results += "<p class='centered'>Hitpoints: " + json.hit_points + "</p>";
        results += "</div>";
      }
      document.getElementById("layout").innerHTML = results;
    })
});
