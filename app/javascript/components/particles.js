require("particles.js")

const particleJS = () => {
  particlesJS('particles-js',
  {
    "particles":{

      "number":{
        "value":100,
        "density":{
          "enable": true,
          "value_area":800
        }
      },
  
      "color":{
        "value":"#D1B000"
      },
  
      "shape":{
        "type":"circle",
        "stroke":{
          "width":0,
          "color":"#ccc"
        },
        "polygon":{
          "nb_sides":5
        }
      },
  
      "opacity":{
        "value":0.5,
        "random":false,
        "anim":{
          "enable":false,
          "speed":1
        }
      },
  
      "size":{
        "value": 2
      },
  
      "line_linked": {
        "enable":true,
        "distance": 600,
        "color":"D1B000",
        "opacity": 0.4,
        "width":0.5
      },
  
      "move": {
        "enable":true,
        "speed":1,
        "direction": "top",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
  
      "interactivity": {

        "detect_on": "window",

        "events": {
          "onhover": {
            "enable":true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize":true
        },

        "modes": {
          "grab": {
            "distance":800,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 800,
            "size": 40,
            "duration":1,
            "opacity": 0.8,
            "speed": 3
          },
          "repulse": {
            "distance": 100,
            "duration": 0.4
          },
          "push": {
            "particles_nb":4
          },
          "remove": {
            "particles_nb":2
          }
        }
      },
      "retina_detect": true
    })
}
export { particleJS };