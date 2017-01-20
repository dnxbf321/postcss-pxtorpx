'use strict';

var fs = require('fs');
var postcss = require('postcss');
var pxtorem = require('..');
var css = fs.readFileSync('main.css', 'utf8');
var options = {
  multiplier: 2
};
var processedCss = postcss(pxtorem(options)).process(css).css;

fs.writeFile('main-rpx.css', processedCss, function(err) {
  if (err) {
    throw err;
  }
  console.log('rpx file written.');
});