angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.inicio', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('introducciN', {
    url: '/SC_Intro',
    templateUrl: 'templates/introducciN.html',
    controller: 'introducciNCtrl'
  })

  .state('informaciN', {
    url: '/SC_AcercaDe',
    templateUrl: 'templates/informaciN.html',
    controller: 'informaciNCtrl'
  })

  .state('autores', {
    url: '/SC_autores',
    templateUrl: 'templates/autores.html',
    controller: 'autoresCtrl'
  })

  .state('agradecimientos', {
    url: '/SC_agradecimientos',
    templateUrl: 'templates/agradecimientos.html',
    controller: 'agradecimientosCtrl'
  })

  .state('caracterizaciNEdafoclimTica', {
    url: '/SC_Caract_Edafoclimatica',
    templateUrl: 'templates/caracterizaciNEdafoclimTica.html',
    controller: 'caracterizaciNEdafoclimTicaCtrl'
  })

  .state('menu.muestreoYCaracterizaciNEdafoclimTica', {
    url: '/SC_muestreo',
    views: {
      'side-menu21': {
        templateUrl: 'templates/muestreoYCaracterizaciNEdafoclimTica.html',
        controller: 'muestreoYCaracterizaciNEdafoclimTicaCtrl'
      }
    }
  })

  .state('menu.texturaYGranulometrA', {
    url: '/SC_textura',
    views: {
      'side-menu21': {
        templateUrl: 'templates/texturaYGranulometrA.html',
        controller: 'texturaYGranulometrACtrl'
      }
    }
  })

  .state('menu.constantesHDricas', {
    url: '/SC_constanteshidricas',
    views: {
      'side-menu21': {
        templateUrl: 'templates/constantesHDricas.html',
        controller: 'constantesHDricasCtrl'
      }
    }
  })

  .state('menu.pHYConductividadElCtrica', {
    url: '/SC_pHyCE',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pHYConductividadElCtrica.html',
        controller: 'pHYConductividadElCtricaCtrl'
      }
    }
  })

  .state('menu.materiaOrgNicaYNitrGeno', {
    url: '/SC_MOyN',
    views: {
      'side-menu21': {
        templateUrl: 'templates/materiaOrgNicaYNitrGeno.html',
        controller: 'materiaOrgNicaYNitrGenoCtrl'
      }
    }
  })

  .state('menu.capacidadDeIntercambioCatiNico', {
    url: '/SC_CIC',
    views: {
      'side-menu21': {
        templateUrl: 'templates/capacidadDeIntercambioCatiNico.html',
        controller: 'capacidadDeIntercambioCatiNicoCtrl'
      }
    }
  })

  .state('menu.fSforo', {
    url: '/SC_fosforo',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fSforo.html',
        controller: 'fSforoCtrl'
      }
    }
  })

  .state('menu.cationesDeIntercambio', {
    url: '/SC_Cationes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cationesDeIntercambio.html',
        controller: 'cationesDeIntercambioCtrl'
      }
    }
  })

  .state('menu.XidosDeFeYAl', {
    url: '/SC_oxidos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/XidosDeFeYAl.html',
        controller: 'XidosDeFeYAlCtrl'
      }
    }
  })

  .state('menu.micronutrientes', {
    url: '/micronutrientes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/micronutrientes.html',
        controller: 'micronutrientesCtrl'
      }
    }
  })

  .state('menu.calcio', {
    url: '/SC_Calcio',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calcio.html',
        controller: 'calcioCtrl'
      }
    }
  })

  .state('menu.hierroFe', {
    url: '/hierro',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hierroFe.html',
        controller: 'hierroFeCtrl'
      }
    }
  })

  .state('manganesoMn', {
    url: '/SC_manganeso',
    templateUrl: 'templates/manganesoMn.html',
    controller: 'manganesoMnCtrl'
  })

  .state('cobreCu', {
    url: '/SC_cobre',
    templateUrl: 'templates/cobreCu.html',
    controller: 'cobreCuCtrl'
  })

  .state('cincZn', {
    url: '/SC_cinc',
    templateUrl: 'templates/cincZn.html',
    controller: 'cincZnCtrl'
  })

  .state('menu.potasio', {
    url: '/SC_potasio',
    views: {
      'side-menu21': {
        templateUrl: 'templates/potasio.html',
        controller: 'potasioCtrl'
      }
    }
  })

  .state('menu.sodio', {
    url: '/SC_sodio',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sodio.html',
        controller: 'sodioCtrl'
      }
    }
  })

  .state('menu.magnesio', {
    url: '/magnesio',
    views: {
      'side-menu21': {
        templateUrl: 'templates/magnesio.html',
        controller: 'magnesioCtrl'
      }
    }
  })

  .state('menu.XidosDeHierro', {
    url: '/SC_oxidoshierro',
    views: {
      'side-menu21': {
        templateUrl: 'templates/XidosDeHierro.html',
        controller: 'XidosDeHierroCtrl'
      }
    }
  })

  .state('menu.XidosDeAluminio', {
    url: '/SC_oxidosaluminio',
    views: {
      'side-menu21': {
        templateUrl: 'templates/XidosDeAluminio.html',
        controller: 'XidosDeAluminioCtrl'
      }
    }
  })

  .state('menu.mapasCalcio', {
    url: '/SC_mapascalcio',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mapasCalcio.html',
        controller: 'mapasCalcioCtrl'
      }
    }
  })

  .state('menu.mapasPotasio', {
    url: '/SC_mapaspotasio',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mapasPotasio.html',
        controller: 'mapasPotasioCtrl'
      }
    }
  })

  .state('menu.mapasMagnesio', {
    url: '/SC_mapasmagnesio',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mapasMagnesio.html',
        controller: 'mapasMagnesioCtrl'
      }
    }
  })

  .state('menu.mapasSodio', {
    url: '/SC_mapassodio',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mapasSodio.html',
        controller: 'mapasSodioCtrl'
      }
    }
  })

  .state('menu.mapaHierro', {
    url: '/SC_mapahierro',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mapaHierro.html',
        controller: 'mapaHierroCtrl'
      }
    }
  })

  .state('mapaManganeso', {
    url: '/SC_mapamanganeso',
    templateUrl: 'templates/mapaManganeso.html',
    controller: 'mapaManganesoCtrl'
  })

  .state('mapaCobre', {
    url: '/SC_mapacobre',
    templateUrl: 'templates/mapaCobre.html',
    controller: 'mapaCobreCtrl'
  })

  .state('mapaCinc', {
    url: '/SC_mapacinc',
    templateUrl: 'templates/mapaCinc.html',
    controller: 'mapaCincCtrl'
  })

  .state('menu.mapaXidosDeHierro', {
    url: '/SC_mapaFeox',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mapaXidosDeHierro.html',
        controller: 'mapaXidosDeHierroCtrl'
      }
    }
  })

  .state('menu.mapaXidosDeAluminio', {
    url: '/SC_mapaAlox',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mapaXidosDeAluminio.html',
        controller: 'mapaXidosDeAluminioCtrl'
      }
    }
  })

  .state('menu.datosCalcio', {
    url: '/SC_datoscalcio',
    views: {
      'side-menu21': {
        templateUrl: 'templates/datosCalcio.html',
        controller: 'datosCalcioCtrl'
      }
    }
  })

  .state('menu.datosMagnesio', {
    url: '/SC_datosmagnesio',
    views: {
      'side-menu21': {
        templateUrl: 'templates/datosMagnesio.html',
        controller: 'datosMagnesioCtrl'
      }
    }
  })

  .state('menu.datosPotasio', {
    url: '/SC_datospotasio',
    views: {
      'side-menu21': {
        templateUrl: 'templates/datosPotasio.html',
        controller: 'datosPotasioCtrl'
      }
    }
  })

  .state('menu.datosSodio', {
    url: '/SC_datossodio',
    views: {
      'side-menu21': {
        templateUrl: 'templates/datosSodio.html',
        controller: 'datosSodioCtrl'
      }
    }
  })

  .state('menu.datosHierro', {
    url: '/SC_datoshierro',
    views: {
      'side-menu21': {
        templateUrl: 'templates/datosHierro.html',
        controller: 'datosHierroCtrl'
      }
    }
  })

  .state('datosManganeso', {
    url: '/SC_datosmanganes',
    templateUrl: 'templates/datosManganeso.html',
    controller: 'datosManganesoCtrl'
  })

  .state('datosCobre', {
    url: '/SC_datoscobre',
    templateUrl: 'templates/datosCobre.html',
    controller: 'datosCobreCtrl'
  })

  .state('datosCinc', {
    url: '/SC_datoscinc',
    templateUrl: 'templates/datosCinc.html',
    controller: 'datosCincCtrl'
  })

  .state('menu.datosXidosDeHierro', {
    url: '/SC_datosFeox',
    views: {
      'side-menu21': {
        templateUrl: 'templates/datosXidosDeHierro.html',
        controller: 'datosXidosDeHierroCtrl'
      }
    }
  })

  .state('menu.datosXidosDeAluminio', {
    url: '/SC_datosAlox',
    views: {
      'side-menu21': {
        templateUrl: 'templates/datosXidosDeAluminio.html',
        controller: 'datosXidosDeAluminioCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});