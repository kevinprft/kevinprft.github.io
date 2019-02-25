  var eventLog = document.getElementById('myEventLog');
  var searchBox = document.getElementById('search');
  var customSearchBox = document.getElementById('customSearchBox');
  var customSearchButton =document.getElementById('customSearchButton');

  function logEvent(message){
    var dt = new Date();
    var utcDate = dt.toUTCString();
    console.log(("Debug [" + utcDate + "] ") + message);
  }
  
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
  