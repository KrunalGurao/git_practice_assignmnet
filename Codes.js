Prime No. :-

 let count =;
 let cot=;
 for (let i=0 ; i<=a; i++)
 {
     if (a%i==0)
     {
         count++;
     }
 }
 for (let j=0; j<=b;j++)
 {
      if (b%j==0)
     {
         cot++;
     }
 }
 if (count==2 && cot==2)
 {
     console.log("True");
 }
 else
 {
 console.log("False");
 }

************************************************************************************************************

Palindrome :-

let bag="";
    for (let i=N-1 ; i>=0;i)
    {
        bag = bag+ str[i];
    }
    if (bag==str)
    {
        console.log("Yes")
    }
    else
    {
        console.log("No")
    }