const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Input a number= ', (n) => {
  n=parseInt(n);
  console.log(`Your number till which fibonacci sum will be calculated is ${n}`);
  console.log(fibonacci(n));
  rl.close();
});




function fibonacci(n)
{
  if (n === 0) return 0;
  if (n === 1) return 1;

  
  let sum = 1; // fib(0) + fib(1) = 0 + 1
  let a = 0, b = 1;
  while(sum<=n)
        {
        let aux=sum;
        [a, b] = [b, a + b];
        aux=aux+b;
        if(aux>=n) return sum;
        sum += b;
        }
}


