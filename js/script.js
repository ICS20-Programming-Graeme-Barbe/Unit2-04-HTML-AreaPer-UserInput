// Created by Graeme
// Created on: March 24 
// JS functions for index.html


// This function calculates the area and perimeter of the rectangle.
 'use strict'
function calculate () {
  let base = parseInt(document.getElementById('base-of-triangle').value)
  let height = parseInt(document.getElementById('height-of-triangle').value)
  let area = (base / 2) + (height / 2)
  document.getElementById('area').innerHTML = 'The area is ' + area + ' cm²'
}