angular.module('theApp').service('theService', function($http) {
   
     this.postIt = function(data) {
       
        return $http({
            method: "POST",
            url: '/analyzeEP',
            data: {text:data}
        }).then(function(res) {
            var filteredRes = res.data.docSentiment;
            return filteredRes;
        })
    };

}
);

