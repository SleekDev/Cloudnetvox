"use strict";



/*===============================================================
    Particles
================================================================*/

$(function() {
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'js/assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });
    particlesJS.load('particles-js2', 'js/assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });
});