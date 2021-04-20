// let userAge = prompt("Please enter your age");
// //change the string in prompt to integer
// userAge = parseInt(userAge);

// if (userAge >=  18 && userAge < 80) {
//       alert(`you are eligible to drive 😁😁`)
//       console.log(`Here's your driving license`);
// } else if (userAge >= 80) {
//       alert(`You are too old to drive`);
//       console.log("Get a driver");
// } else if(userAge < 0) {
//       alert("Man you some balls to give a negative age")
//       console.log("Enter a valid age");
// } else if (userAge < 18) {
//       alert(`You are too young to drive, you have ${18 - userAge} years left to drive`);
//       console.log(`Wait another ${18 - userAge} years`);
// } else {
//       alert(`Enter a valid age please`);
//       console.log(`Enter a number`);
// // }

// let primeNumberInput = prompt("Enter a number");


// primeNumberInput = Number(primeNumberInput);

// if(primeNumberInput === 1) {
//       console.log(`The number id not prime`);
// } else if (primeNumberInput > 1) {
//       if (primeNumberInput % 2 == 0) {
//             console.log(`${primeNumberInput} is not prime number`);
//       } else if(primeNumberInput % 3 == 0)  {
//             console.log(`${primeNumberInput} is not prime number`);
//       }   else if(primeNumberInput % 5 == 0)  {
//             console.log(`${primeNumberInput} is not prime number`);
//       } else if(primeNumberInput % 7 == 0)  {
//             console.log(`${primeNumberInput} is not prime number`);
//       } else if(primeNumberInput % 8 == 0)  {
//             console.log(`${primeNumberInput} is not prime number`);
//       } else if(primeNumberInput % 9 == 0)  {
//             console.log(`${primeNumberInput} is not prime number`);
//       } else if(primeNumberInput % 10 == 0)  {
//             console.log(`${primeNumberInput} is not prime number`);
//       }
//        else {
//             console.log(`${primeNumberInput} is a prime number`);
//       }
    
// } else {
//       console.log(`Be valid bro`);
// }

// const primeNumber = Number(prompt("Enter a number"));

// if (primeNumber === 1) {
//       console.log(`${primeNumber} is not a prime number`);
// } else if (primeNumber > 1) {
//       for (i = 2; i < primeNumber ; i++) {
//             console.log(i)
//             let myProcess = primeNumber % i;
//             if (myProcess == 1 ) {
//                   console.log(`${primeNumber} is a prime number`);
//                   break;
//             } else {
//                   console.log(`${primeNumber} is not a prime number`);
//                   break
//             }
//       }
// }

const primeNumber = Number(prompt("Enter a number"));

if(primeNumber === 1) {
      console.log(`${primeNumber} is not a prime number`)
} else if(primeNumber === 2) {
      console.log(`${primeNumber} is a prime number`);
} else {
      for(i = 2; i < primeNumber; i++) {
            if (primeNumber % i === 0) {
                  console.log(`${primeNumber} is not a prime Number`);
            }
           
      }
      console.log(`${primeNumber} is a prime number`);
     
}

function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(21));
