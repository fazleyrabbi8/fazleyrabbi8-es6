//  task 1 : Console log the secondary school location of sophia 

let data = { 

    Sophia : { 
        id : 33 ,

        study : [
             { primary: 
                [
                    { school_name :  " ABC primary school "} ,
                    { location : " PetersBurg"} 

                ]
            
            }
            ,
            { 
                secondary : 
                [

{ school_name : " ABC secondary School "} ,

{ location : " St Lawrence "} 

                ]
            }
        ]
    }
} ;



// console.log(data.Sophia.study[1].secondary[1]) 
 




// Console log Petersburg , Herry 
let students = { 

     2222 :  { 
        name : ' jack ' ,
        section : "C" ,
        class : "Ix " ,
        adress : {
            "Building No" : 12 ,
            "Street" : " St. Johnson " ,
            "City" : "PetersBurgh" ,
            "Country" : 'Uk ' 

        }
     } ,
     3333 :  { 
        name : 'Herry  ' ,
        section : "D" ,
        class : "X " ,
        adress : {
            "Building No " : 85 ,
            "Street " : " DC Road " ,
            " City " : "Kachukhet" ,
            " Country " : 'Bangladesh  ' 

        }
     } ,



}


// console.log(students[2222].adress["City"] , students [3333].name)


//  task 3 : access and then show habluder adda .
//  show output of beginer 




/*
1. let const
2. template string
2.a: use variable
2.b: use object  property
3. arrow function
3.a. with one parameter. will return the number after dividing by 5
3.b. with two parameters. will add two to each number and then multiply the result.
3.c. three parameters. will multiply all three parameters
3.d. with two parameters but it will be a multi line arrow function. will add two to each number and then multiply the result.
make sure you return the result
4. [home work]: javascript function declaration vs arrow function
5. array of numbers. and then map to get each elements multiplied by 5. must use arrow function
6. [challenging] numbers of array. get odd numbers by using filter with arrow function
7. [challenging] array of objects (e.g. products). use find to get the object with price 5000.
8. You have an object. Now use destructing to create a simple variable of any property of the object.
9. [challenging] You have an array. Now use destructing to create a simple (or more) variable to get the third element of the array in a variable called 'three'.
10. [optional] just a write a function with three parameters. and the last parameter will have a default parameter with value 7.
this function will take three parameters and will return the sum of all the three parameters.
*/



/* 1) You have an odd array (array with odd numbers). [1, 3, 5, 7, 9]. Now convert this array into an even array (array with even numbers). [ 2, 4, 6, 8, 10].
Do this using for loop & array.map() method. Hints: add one to any odd number and it will become an even number. */
 
const odd = [ 1,3,5,7,9] ;
const even = [] ;

for (let i = 0; i < odd.length; i++) {
    const element = odd[i] *2;

    even.push(element) ;
} ;

// console.log(even) ;



/* 2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ].
Now return/get all the elements which are divisible by 10 using array.filter() method. */




const randomarray =[33, 50, 79, 78, 90, 101, 30 ] ;

const divisible  = (array) => {
  let even = array %10 === 0 ;

  return even ;

} ;
https://github.com/fazleyrabbi8/es6-Practice

//  console.log(randomarray.filter(divisible) ) ;
 










/*


Now do the same task of question 2. But do this using array.fir method. Then compare the output of question 2 & question 3

3) You have an array of objects:
const instructor = [
{name: 'Nodi', age:28, position: Senior),
{name: 'Akil', age:26, position: Junior),
{name: 'Shobuj', age:30, position: 'Senior)
]
Your task is to display the instructor names that has the posit senior using filter
*/




const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];
// console.log(friends.find(friend =>friend.length==5))