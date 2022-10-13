/*

Algorithms?

Processes or set of steps to accomplish a set of tasks

Here we explore an algorithm for solving problems

1. Understand the Problem

2. Explore Concrete Examples

3. Break it Down

4. Solve/Simplify

5. Look Back and Refactor


*/

// Practice methods from twitter


/*

--- Understanding the Problem

1. Restate the problem using your own words
2. What are the inputs that go into the problem?
3. What are the expected outputs and what types of data should they be?
4. Can the outputs be determined from the inputs? Do you have enough data?
5. How should I label the important pieces of the problem?

*/


/*

--- Concrete examples

1. Start with simple examples

2. Progress to more complex

3.  Try with empty inputs

4.  Then with invalid inputs

5. Try edge cases

Write a function that takes in a string and returns counts of each character in a string

charCount('aaaa') => {a:4}
charCount('hello') => {a:0,b:0,c:0,..}

charCount('my number is 1234588604')

charCount('Hello hi')

we can start asking/answering some questions by looking thru these

do we need to account for special characters,spaces and uppercase? 

should the object returned have counts for characters not present?

--- Break it Down

function charCount(str){

// make object to return at end
let result = {}

// loop over string, for each character
  for(let i = 0; i < str.length; i++)

  var char = str[i]

    // if char is number/letter and  already a key in object then char +1


  if (result[char] > 0){
    result[char]++
   
   //if char is number/letter and not a key add char key with value of 1

  
  } else {     
  result[char] = 1
  }
  } 


 
  // if the character is somethin else do nothing
// return object at the end
}
*/

  // create a function that takes in a string as input

function charCount(str){
  
  //make object to return at end
  
  let result = {}

  // loop over string for each character in the string
  
  for(let i = 0; i < str.length;i++){
  
    let char = str[i].toLowerCase()

  // check to see if the charater is an alphanumeric value
    if(/[a-z0-9]/.test(char)){
  
    
  // if the character in already a key in the result object then char +1
    
      if(result[char] > 0){
        result[char]++
  
    //if the character is not a key in the result object set it to 1
        
      }else {
        result[char] = 1
      }
    }
  }
  console.log(result)
}

charCount('waddup')

charCount('goodness gracious')

charCount("Yerrr it's ya boy!")


// After noticing how our function handles uppercase and special characters, we can then refactor. 

// We use the toLowerCase method on line 112 to better handle uppercase and lowercase letters

// The final step would now be figuring out the check for whether a character is an alphanumeric value

// It's important to try and improve your code, how it looks, how it reads

/*

--- Refactoring your Code

1. Can you check the result?
2. Can you derive the result differently?
3. Can you understand it at a glance
4. Can you use the result or method for some other problem?
5. Can you improve the performance of your solution?
6. Can you think of other ways to refactor?
7. How have other people solved this problem?
  - What solution was most effective? eccentric?


*/


/*

function charCount(str){    
  let obj = {}
  for(var char of str){
    char = char.toLowerCase()
    if(/[a-z0-9]/).test(char){
      if(obj[char] > 0){
        obj[char]++
      } else{
        obj[char] = 1
      }
    }
  }
  console.log(obj)
}

but we can do even better, our if/else is a bit clunky
we can use a ternary operator to shorten that syntax
if the obj[char] value is truthy then we will add 1 to its value, if it is not truthy of undefined, we will then inset it to the object and set its value equal to 1

function charCount(str){
  let obj = {}
  for(var char of str){
    char = char.toLowerCase()
    if(/[a-z0-9]/).test(char){
    obj[char] ? obj[char]++ || 1
    }
  }
  return obj
}

char.charCodeAt()


regex is a regular expression

while our regex works, it is faster to have our function use boolean comparisons of ASCii values to determine if a character is alphanumeric

function isAlphaNumeric(char){
  let code = code.charCodeAt(0)
  if (!(code > 47 && < 58) &&      // numeric(0-9)
      !(code 64 > && < 91) &&      // uppercase(A-Z)
      !(code 96 > && < 123)){      // lowercase(a-z)
      
      return false
      } 
      return true
}

Now we can add this to our function

function charCount(str){
  let obj = {}
  for(let char of str){
    if(isAlphaNumeric(char)) {
      char = char.toLowerCase()
      obj[char] ? obj[char]++ || 1
    }
  }
  return obj
}

*/