// 1. Write a function to reverse a string without using reverse()

/*function reverseString(str){
    let reverse=""
    for(let i=str.length-1; i>=0; i--){
        reverse+=str[i]
    }
    return reverse
}
console.log(reverseString("hello"))*/

//Explanation: we start from word last letter and first letter tak ek ek krke letters ko uthate hai and new string me jodte hai
//Time Complexity: Utna hi time lgega jitna word ki length hai


//2.Write a function to check whether a string is a palindrome.

/*function isPalindrome(str){
let reverse=""
for(let i=str.length-1; i>=0; i--){
    reverse+=str[i]
}
return str===reverse
}
console.log(isPalindrome("madam"))*/

//Explanation: first we reverse the word using loop and then check  the  reverse word is equal to original word
//Time complexity: time taken is depend on the length of the string


//3.Write a function to count vowels and consonants in a string.

/*function countVowelAndConsonant(str){
    let vowel=0
    let consonant=0
    let vowels=['a','e','i','o','u','A','E','I','O','U']
    for(let i=0; i<str.length; i++){
        let ayush=str[i]
        if(vowels.includes(ayush)){
            vowel++
        }else{
            consonant++
        }
    }
    return{vowel,consonant}
}
console.log(countVowelAndConsonant("javascript"))*/

//Explanation: we check every letter of word by loop one by one then we see kya oo letter vowels array ke andar hai ki nhi agar vowel hota hai to vowel ki count badh jati hai nhi to consonant ki count badh jati
//complexity: jitna word ki length hogi utna time lgega because loop ko string ke har ek word ko check krna hota hai


//4.Write a function to find the second-largest distinct number in an array

/*function secondLargest(arr){
    let largest=-Infinity
    let second=-Infinity
    for(let i=0; i<arr.length;i++){
        if(arr[i]>largest){
            second=largest
            largest=arr[i]
        }else if(arr[i]>second && arr[i]!==largest){
            second=arr[i]
        }
    }
    return second;
}
console.log(secondLargest([10,15,25,30,50]))*/

//Explanation: we start loop in array and track largest and second  and jaise hi hume koi largest value milta hai hum value ko update kr dete hai
//Time Complexity: array me jitne numbers honge utni hi baar loop chalega because hum pure array ko sirf ek baar check kr rhe hai


//5.Write a function to remove duplicate elements from an array without using Set.

/*function removeDuplicates(arr){
    let unique=[]
    for(let i=0; i<arr.length; i++){
        if(!unique.includes(arr[i])){
            unique.push(arr[i])
        }
    }
    return unique;
}
console.log(removeDuplicates([1,2,2,3,4,4,5]))*/

//Explanations: we  create a new  empty array and loop through the original array add only those number which are already not present in our new array
//time complexity: it take some time because it checks the new array repetedly for every single item


//6.Write a function to find the sum of all even numbers in an array.

/*function sumEvenNumbers(arr){
let sum=0
for(let i=0; i<arr.length; i++){
    if(arr[i]%2===0){
sum+=arr[i]
    }
}
return sum
}
console.log(sumEvenNumbers([1,2,3,4,5,6,7,11,12]))*/

//Explanation: we check every number in array is it even if it even then we add it to our total sum variable
//time: time depends on the total number of items in array


//7.Write a function to find the frequency of a given element in an array.

/*function findFrequency(arr,target){
    let count=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]===target){
            count++;
        }
    }
    return count;
}
console.log(findFrequency([1,2,3,4,5,7,5,8,5],5))*/

//8.Write a function to check whether two strings are anagrams.

/*function areAnagrams(str1,str2){
    if(str1.length!==str2.length)return false
    let count={}
    for(let i=0; i<str1.length; i++){
        let char=str1[i]
        count[char]=(count[char]||0)+1
    }
    for(let i=0; i<str2.length; i++){
        let char=str2[i]
        if(!count[char]) return false
        count[char]--

    }
    return true
}
console.log(areAnagrams("listen","silent"))*/

//Explantion:first we count word letters then match with other word letters if dono word ke letters and unka count dono equal hoto oo  dono anagram hai
//time: jitna  big word hoga time bhi utna hi lgega


//9.Write a function to move all zeros to the end of an array while maintaining the order of non-zero elements.

/*function moveZeros(arr){
    let index=0
    for(let i=0; i<arr.length; i++){
if(arr[i]!==0){
    arr[index]=arr[i]
    index++
}
    }
    while (index <arr.length){
        arr[index]=0
        index++
    }
    return arr
}
console.log(moveZeros([0,1,0,5,7]))*/

//Explanation:We shift all non-zeros numbers to the front of the array first and then fill all the remaining empty spaces at the end with zeros
//Time: time taken depends on the total length of the array 