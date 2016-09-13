angular.module('app', [
        'ui.router'
    ])
    .config(function($urlRouterProvider, $stateProvider) {
        $stateProvider.state('inicio', {
            url: '/inicio',
            templateUrl: 'inicio.html',
            controller: 'InicioCtrl'
        });
        $stateProvider.state('grupo', {
            url: '/grupo',
            templateUrl: 'grupo.html'
        });
        $stateProvider.state('servicios', {
            url: '/servicios',
            templateUrl: 'servicios.html',
            controller: 'ServiciosCtrl'
        });
        $stateProvider.state('contacto', {
            url: '/contacto',
            templateUrl: 'contacto.html'
        });
        $stateProvider.state('proyectos', {
            url: '/proyectos',
            templateUrl: 'proyectos.html'
        });
        $stateProvider.state('eaton', {
            url: '/eaton',
            templateUrl: 'eaton.html'
        });
        $stateProvider.state('procopal', {
            url: '/proyectos/procopal',
            templateUrl: 'procopal.html'
        });
        $stateProvider.state('plazamayor', {
            url: '/proyectos/plazamayor',
            templateUrl: 'plazamayor.html'
        });
        $stateProvider.state('elcondor', {
            url: '/proyectos/elcondor',
            templateUrl: 'elcondor.html'
        });
        $stateProvider.state('caicsa', {
            url: '/proyectos/caicsa',
            templateUrl: 'caicsa.html'
        });
        $stateProvider.state('conconcreto', {
            url: '/proyectos/conconcreto',
            templateUrl: 'conconcreto.html'
        });
        $stateProvider.state('segmentos', {
           url: '/segmentos',
           templateUrl: 'segmentos.html'
        });
        $stateProvider.state('industrial', {
            url: '/segmentos/industrial',
            templateUrl: 'industrial.html'
        });
         $stateProvider.state('hospitalario', {
            url: '/segmentos/hospitalario',
            templateUrl: 'hospitalario.html'
        });
         $stateProvider.state('infraestructura', {
            url: '/segmentos/infraestructura',
            templateUrl: 'infraestructura.html'
        });
        $stateProvider.state('noticias', {
            url: '/noticias',
            templateUrl: 'noticias.html'
        });
        $urlRouterProvider.otherwise('inicio');
    })
    .controller('InicioCtrl', function() {
        $('#carousel1').carousel({
            interval: 5250,
            cycle: true
        });
        $('#carousel2').carousel();
    })
    .controller('ServiciosCtrl', ['$scope', function($scope) {
        $scope.status = 'diagnostico';
        $scope.change = function(value) {
            $scope.status = value;
        }
    }])
    .run(['$rootScope', function($rootScope) {
        $rootScope.$on('$stateChangeSuccess', function() {
            $("html, body").animate({
                scrollTop: 0
            }, 200);
        });
        var navbar = $("#navbar");
        navbar.on("click", "a", null, function() {
            navbar.collapse('hide');
        });
    }]);