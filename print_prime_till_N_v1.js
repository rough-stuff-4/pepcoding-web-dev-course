// PRINT ALL PRIMES TILL N
function solve(l, h) {
  for (let i = l; i <= h; i++) {
    if (i == 2 || i == 3) console.log(i);
    if (i == -2 || i == -3) console.log(i);
    if (i % 6 == 1 || i % 6 == 5 || i % 6 == -1 || i % 6 == -5) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }
}
function isPrime(n) {
  if (n == 0 || n == 1 || n == -1) return false;
  else if (n == 2 || n == 3) return true;
  else if (n == -2 || n == -3) return true;
  for (let i = 2; i * i <= n; i++) {
    if (i % 6 == 1 || i % 6 == 5) {
      if (n % i == 0) {
        return false;
      }
    }
  }
  return true;
}

solve(-0, 5);