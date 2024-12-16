// fibonacci series  return 
function fibonacci(n) {
    let fib = [0, 1]; 
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2]; 
    }
    return fib; 
  }
  let n = 3; 
  console.log(fibonacci(n)); 
  