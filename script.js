"use strict";

let n = prompt();
for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) break;
        alert(i);
        break;
    }
}