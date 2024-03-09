// 1 . write an arrow function that will take 3 parameters,
//  will multiply the parameters and will return the result.

const multiply = (a, b, c) => a * b * c;


// 2. write the following sentence in three lines and print the result : I am a web developer . I love to code . I love to eat biriyani .


const randomstring = `
I am a web developer 
I love to code 
I love to eat biriyani 
` ;

// console.log(randomstring)

const add = ( a , b= 20 ) => a+ b ;
// console.log(add(6,5))




/* 4. write a arrow function where it will do the following : 

a) it will take an array where the array elements will be the name of your friends 

b) check if the length of each element is even , push elements with even length to a new array and return the result .


print the result 
 */
const Sort =  (friends) => {
    
const evennamed = [] ;

for (let i = 0; i <friends.length; i++) {
    const element =friends[i];


    if (element.length % 2 === 0 ) {
        evennamed.push(element) ;
    }
    
}
 return evennamed ;

} ;


 let friends = ['anna','harry','mike','jason','alice','nick'] ;

   console.log( Sort (friends)) ;
