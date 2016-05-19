angular.module("theApp").directive("oneDir",  function(theService) {
	  return {
    restrict: 'E',
    templateUrl: '../views/view.html',
    link: function(scope){
            scope.sendInput = function (myInput) {
            theService.postIt(myInput)
            .then(function(res) {
                console.log(res);
                scope.results = res.type;
             if(scope.results === "positive") {
            $("#sky").css({"background-color": "blue"})
        }
        
            });
    
        }
    }
  }
});

