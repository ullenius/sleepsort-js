"use strict";

var arr = [2, 5, 1, 6, 3, 4, 9 ];
console.log(arr);

sleepsort(arr);

function sleepsort(arr) {

    arr.forEach( function(n) {
        setTimeout( function() {
            console.log(element); }, n * 500);
    });
}
