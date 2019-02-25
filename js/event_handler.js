  var eventLog = document.getElementById('myEventLog');
  var searchBox = document.getElementById('search');
  var customSearchBox = document.getElementById('customSearchBox');
  var customSearchButton =document.getElementById('customSearchButton');
  var piplineSelector1 = document.getElementById('pipeline-selector1');
  var piplineSelector2 = document.getElementById('pipeline-selector2');

  function logEvent(message){
    var dt = new Date();
    var utcDate = dt.toUTCString();
    console.log(("Debug [" + utcDate + "] ") + message);
  }

  function switch_pipeline(pipeline_name){
    var searchRoot = document.getElementById('search');
    searchRoot.setAttribute("pipeline", pipeline_name);
    logEvent('Pipeline switched: ' + pipeline_name);
    Coveo.init(searchRoot);
  }

  piplineSelector1.addEventListener('click', function(){
    switch_pipeline('kevin_pipeline');
  });

  piplineSelector2.addEventListener('click', function(){
    switch_pipeline('kevin_pipeline_2');
  });
  
  customSearchButton.addEventListener('click', function(event){
    logEvent("Executing: " + customSearchBox.value);
    console.log(args);
  })
  
  Coveo.$$(search).on('doneBuildingQuery', function(event, args){
    logEvent("Query Building Completed");
    console.log(args);
  })
  
  Coveo.$$(search).on('duringQuery', function(event, args){
    logEvent("duringQuery");
    console.log(args);
  })

  Coveo.$$(search).on('querySuccess', function(event, args){
    logEvent("querySuccess");
    console.log(args);
  })
  