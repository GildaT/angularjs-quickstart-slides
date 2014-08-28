'use strict';

applause.factory('Appdata', function (config) {

  var slides = [],
      currentSlide = 1;

  return {
    slides: slides,
    currentSlide: currentSlide,
    getConfig: function () {
      return {
        progressBar: config.progressBar,
        slideCount: config.slideCount
      };
    }
  };
});