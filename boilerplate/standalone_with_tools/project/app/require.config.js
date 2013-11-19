require({

  // define js scripts dependencies
  shim: {

    //--- 

    'app/main/module': {
      deps: [
        'angular_route', 
        'angular_resource',
        'shared/components/loadingBar/module'
      ]
    },

    //--- @begin app files

    'app/main/controller': {
      deps: ['app/main/module']
    },

    'app/home/controller': {
      deps: ['app/main/module']
    },

    'app/about/controller': {
      deps: ['app/main/module']
    },

    'app/help/controller': {
      deps: ['app/main/module']
    },

    //--- @end app files

    'app/main/routes': {
      deps: [ // TODO: review and add app controllers ref's
        'app/home/controller',
        'app/about/controller',
        'app/help/controller'
      ]
    },

    'app/main/start': {
      deps: [ // TODO: review and add app routes and view componentes ref's
        'app/main/controller',
        'app/main/routes'     
      ]
    }

  }

},

['require'], function(require) {

  console.log('app require.js config');

  require(['app/main/start']);

});