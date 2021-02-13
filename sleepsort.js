"use strict";

var arr = [2, 5, 1, 6, 3, 4, 9 ];
console.log(arr);

sleepsort(arr);

function sleepsort(arr) {


    arr.forEach( function(element) {
        setTimeout( function() {
            console.log(element); }, element * 500);
    });
}
