var app = angular.module('myApp', []);



app.controller('myCtrl', function($scope, $http) {
$scope.reportes = "Cargando...";
$scope.recomendaciones = "Cargando...";
    var minutes = 0.1, the_interval = minutes * 60 * 1000;
    setInterval(function() {


      $http({
          method: 'GET',
          url: 'http://localhost:3000/api/data'
        }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      console.log(response);

          $scope.primeraLinea = response.data.sensor1;
          $scope.segundaLinea = response.data.sensor2;

          var reportes = "";
          var recomendaciones = "";


        if (response.data.sensor2 < 10) {
          $(".h4").css("background-color", "red");

        } else {
          $(".h4").css("background-color", "green");
        }
        if (response.data.sensor1 < 10) {
          $(".v2").css("background-color", "red");

        } else {
          $(".v2").css("background-color", "green");
        }

/* Reportes */
        if($(".v1").css("background-color") === "rgb(255, 0, 0)")  {
            reportes ="Calle1-Avenida(2-1) esta llena" + '\n';
        }
        if($(".v4").css("background-color") === "rgb(255, 0, 0)")  {
            reportes =reportes + "Calle1-Avenida(3-2) esta llena" + '\n';
        }
        if($(".v2").css("background-color") === "rgb(255, 0, 0)")  {
            reportes =reportes + "Calle2-Avenida(1-2) esta llena"  + '\n';
        }
        if($(".v5").css("background-color") === "rgb(255, 0, 0)")  {
            reportes =reportes + "Calle2-Avenida(2-3) esta llena" + '\n';
        }
        if($(".v3").css("background-color") === "rgb(255, 0, 0)")  {
            reportes =reportes + "Calle3-Avenida(2-1) esta llena"  + '\n';
        }
        if($(".v6").css("background-color") === "rgb(255, 0, 0)")  {
            reportes =reportes + "Calle3-Avenida(3-2) esta llena" + '\n';
        }

        if($(".h1").css("background-color") === "rgb(255, 0, 0)")  {
            reportes =reportes + "Avenida1-Calle(1-2) esta llena" + '\n';
        }
        if($(".h2").css("background-color") === "rgb(255, 0, 0)")  {
            reportes =reportes + "Avenida1-Calle(2-3) esta llena" + '\n';
        }
        if($(".h3").css("background-color") === "rgb(255, 0, 0)")  {
            reportes =reportes + "Avenida2-Calle(2-1) esta llena" + '\n';
        }
        if($(".h4").css("background-color") === "rgb(255, 0, 0)")  {
            reportes =reportes + "Avenida2-Calle(3-2) esta llena" + '\n';
        }
        if($(".h5").css("background-color") === "rgb(255, 0, 0)")  {
            reportes =reportes + "Avenida3-Calle(1-2) esta llena" + '\n';
        }
        if($(".h6").css("background-color") === "rgb(255, 0, 0)")  {
            reportes =reportes + "Avenida3-Calle(2-3) esta llena" + '\n';
        }
/* recomendaciones */
        if($(".v4").css("background-color") === "rgb(255, 0, 0)" && $(".v1").css("background-color") === "rgb(0, 128, 0)")  {
            recomendaciones =recomendaciones + "Dar paso a Calle1-Avenida(3-2)" + '\n';
        }
        if($(".v2").css("background-color") === "rgb(255, 0, 0)" && $(".v5").css("background-color") === "rgb(0, 128, 0)")  {
            recomendaciones =recomendaciones + "Dar paso a Calle2-Avenida(1-2)" + '\n';
        }
        if($(".v6").css("background-color") === "rgb(255, 0, 0)" && $(".v3").css("background-color") === "rgb(0, 128, 0)")  {
            recomendaciones =recomendaciones + "Dar paso a Calle3-Avenida(3-2)" + '\n';
        }
        if($(".h1").css("background-color") === "rgb(255, 0, 0)" && $(".h2").css("background-color") === "rgb(0, 128, 0)")  {
            recomendaciones =recomendaciones + "Dar paso a Avenida1-Calle(1-2)" + '\n';
        }
        if($(".v5").css("background-color") === "rgb(255, 0, 0)" && $(".h3").css("background-color") === "rgb(0, 128, 0)" )  {
            recomendaciones ="Dar paso a Avenida2-Calle(3-2)" + '\n';
        }
        if($(".h4").css("background-color") === "rgb(255, 0, 0)" && $(".h3").css("background-color") === "rgb(0, 128, 0)")  {
            recomendaciones =recomendaciones + "Dar paso a Avenida2-Calle(3-2)" + '\n';
        }


        if($(".h5+").css("background-color") === "rgb(255, 0, 0)" && $(".h6").css("background-color") === "rgb(0, 128, 0)")  {
            recomendaciones =recomendaciones + "Dar paso a Avenida3-Calle(2-3)" + '\n';
        }






        $scope.recomendaciones = recomendaciones;
        $scope.reportes = reportes;


      }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.

      });
    }, the_interval);
});
