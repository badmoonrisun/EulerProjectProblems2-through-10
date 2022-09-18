/*
Euler Project Problem 007
Coded in Javascript

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

let finalNumber = 2000000;
let sum = 2 + 3 + 5 + 7;
let mod = 1;


function isprime(val) {
    for (let k = 3; k*k <= val; k += 2) {
        mod = val % k;
        if (mod == 0) {
            return false;
        }
    }
    return true;
}

for (let n = 9; n < finalNumber; n += 2) {
    if (isprime(n)) {
        sum = sum + n;
    }
}

console.log(sum);