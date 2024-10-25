function countVowels(str){
   let n = str.length
   let nvogais = 0
   for(n--; n >= 0; n--){
      a = str[n].tolowercase()
      if(a == "a" || a == "e" || a == "i" || a == "o" || a == "u"){
         nvogais++
      }
   }
   return nvogais
}

console.log(countVowels("OpenAI"))
console.log(countVowels("JavaScript"))