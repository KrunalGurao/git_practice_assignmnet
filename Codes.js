//Prime No. :-
let a = 17;
let b = 15;
 let count_a =0;
 let count_b=0;
 for (let i=0 ; i<=a; i++)
 {
     if (a%i==0)
     {
         count_a++;
     }
 }
 for (let j=0; j<=b;j++)
 {
      if (b%j==0)
     {
         count_b++;
     }
 }
 if (count_a ==2 && count_b ==2)
 {
     console.log("True");
 }
 else
 {
 console.log("False");
 }
