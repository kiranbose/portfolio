/**
 * Created by kiran on 1/17/2016.
 */
(function(window, angular, undefined) {
    "use strict";

    var app = angular.module("main", ['ui.router','ngAnimate','ngMaterial','main.controllers']);

    app.config(['$stateProvider','$urlRouterProvider', '$locationProvider' ,function($stateProvider,$urlRouterProvider, $locationProvider) {
        // For any unmatched url, redirect to /state1
  //       $locationProvider.html5Mode({
		//   enabled: true,
		//   requireBase: false
		// });
        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "src/home/home.html",
                controller: 'mainController',
                onEnter: function() {
                	console.log("main");
                },
                onExit: function() {
                }
            })

    }]);

})(window, window.angular);


/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

/**
 * @author mrdoob / http://mrdoob.com/
 */

var Stats = function () {

  var startTime = Date.now(), prevTime = startTime;
  var ms = 0, msMin = Infinity, msMax = 0;
  var fps = 0, fpsMin = Infinity, fpsMax = 0;
  var frames = 0, mode = 0;

  var container = document.createElement( 'div' );
  container.id = 'stats';
  container.addEventListener( 'mousedown', function ( event ) { event.preventDefault(); setMode( ++ mode % 2 ) }, false );
  container.style.cssText = 'width:80px;opacity:0.9;cursor:pointer';

  var fpsDiv = document.createElement( 'div' );
  fpsDiv.id = 'fps';
  fpsDiv.style.cssText = 'padding:0 0 3px 3px;text-align:left;background-color:#002';
  container.appendChild( fpsDiv );

  var fpsText = document.createElement( 'div' );
  fpsText.id = 'fpsText';
  fpsText.style.cssText = 'color:#0ff;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px';
  fpsText.innerHTML = 'FPS';
  fpsDiv.appendChild( fpsText );

  var fpsGraph = document.createElement( 'div' );
  fpsGraph.id = 'fpsGraph';
  fpsGraph.style.cssText = 'position:relative;width:74px;height:30px;background-color:#0ff';
  fpsDiv.appendChild( fpsGraph );

  while ( fpsGraph.children.length < 74 ) {

    var bar = document.createElement( 'span' );
    bar.style.cssText = 'width:1px;height:30px;float:left;background-color:#113';
    fpsGraph.appendChild( bar );

  }

  var msDiv = document.createElement( 'div' );
  msDiv.id = 'ms';
  msDiv.style.cssText = 'padding:0 0 3px 3px;text-align:left;background-color:#020;display:none';
  container.appendChild( msDiv );

  var msText = document.createElement( 'div' );
  msText.id = 'msText';
  msText.style.cssText = 'color:#0f0;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px';
  msText.innerHTML = 'MS';
  msDiv.appendChild( msText );

  var msGraph = document.createElement( 'div' );
  msGraph.id = 'msGraph';
  msGraph.style.cssText = 'position:relative;width:74px;height:30px;background-color:#0f0';
  msDiv.appendChild( msGraph );

  while ( msGraph.children.length < 74 ) {

    var bar = document.createElement( 'span' );
    bar.style.cssText = 'width:1px;height:30px;float:left;background-color:#131';
    msGraph.appendChild( bar );

  }

  var setMode = function ( value ) {

    mode = value;

    switch ( mode ) {

      case 0:
        fpsDiv.style.display = 'block';
        msDiv.style.display = 'none';
        break;
      case 1:
        fpsDiv.style.display = 'none';
        msDiv.style.display = 'block';
        break;
    }

  };

  var updateGraph = function ( dom, value ) {

    var child = dom.appendChild( dom.firstChild );
    child.style.height = value + 'px';

  };

  return {

    REVISION: 12,

    domElement: container,

    setMode: setMode,

    begin: function () {

      startTime = Date.now();

    },

    end: function () {

      var time = Date.now();

      ms = time - startTime;
      msMin = Math.min( msMin, ms );
      msMax = Math.max( msMax, ms );

      msText.textContent = ms + ' MS (' + msMin + '-' + msMax + ')';
      updateGraph( msGraph, Math.min( 30, 30 - ( ms / 200 ) * 30 ) );

      frames ++;

      if ( time > prevTime + 1000 ) {

        fps = Math.round( ( frames * 1000 ) / ( time - prevTime ) );
        fpsMin = Math.min( fpsMin, fps );
        fpsMax = Math.max( fpsMax, fps );

        fpsText.textContent = fps + ' FPS (' + fpsMin + '-' + fpsMax + ')';
        updateGraph( fpsGraph, Math.min( 30, 30 - ( fps / 100 ) * 30 ) );

        prevTime = time;
        frames = 0;

      }

      return time;

    },

    update: function () {

      startTime = this.end();

    }

  }

};

if ( typeof module === 'object' ) {

  module.exports = Stats;

}

 var count_particles, stats, update;
  stats = new Stats;
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector('.js-count-particles');
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);

//   particlesJS.load('particles-js', 'assets/particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });

(function (window, angular, undefined) {
    "use strict";
    var mainController = angular.module('main.controllers', []);

    mainController.controller('mainController', ['$scope','$window',function ($scope,$window) {
        console.log("in Main Controller");
        $scope.interests= [
        	{
        		name: 'Painting',
        		icon: 'https://material.angularjs.org/latest/img/icons/angular-logo.svg'
        	},
        	{
        		name: 'Photoshop',
        		icon: 'https://material.angularjs.org/latest/img/icons/angular-logo.svg'
        	},
        	{
        		name: 'Illustrator',
        		icon: 'https://material.angularjs.org/latest/img/icons/angular-logo.svg'
        	},
        ];
    }]);
})(window, window.angular);