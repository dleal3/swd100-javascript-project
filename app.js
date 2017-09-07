// [x] - Add onload event to specify that we want the window page to load first before we run our JS code. 
// [x] - Create a variable that calls an input element by id.
// [x] - Create variables that will keep track of the data we are intersted in.
// [x] - Add eventListener to the calculate button so when user clicks on the button it will run a function.
 window.onload = function (){
    
    
     var input = document.getElementById('input');
     var calculate = document.getElementById('calculate');
     
     
     var totalWords = 0;
     var totalSentences = 0;
     var totalSpaces = 0;
     var averageWords = 0;
     
     calculate.addEventListener('click', function(){
      var textToAnalyze = input.value;
      for(var i = 0; i < textToAnalyze.length; i++){
       if (isWord(textToAnalyze[i])){
        totalWords++;
        incrementWordCount(textToAnalyze[i]);
       };
      };
      
      document.getElementById(totalWords).innerHTML = totalWords;
     });
     
     
     function isWord(letter){
      
       return letter == 'a' || letter== 'b' || letter == 'c'|| letter == 'd'||  letter == 'e'|| letter == 'f' ||  letter == 'g'||  letter == 'h'||  letter == 'i'||  letter == 'j'||  letter == 'k'||  letter == 'l'||  letter == 'm'||  letter == 'n'||  letter == 'o'||  letter == 'p'||  letter == 'q'||  letter == 'r'||  letter == 's'||  letter == 't'||  letter == 'u'||  letter == 'v'||  letter == 'w'||  letter == 'x'||  letter == 'y'||  letter == 'z';
      
     };
     
     function incrementWordCount(letter){
      if (letter == 'a' || letter == 'b' || letter == 'c' || letter == 'd' || letter == 'e' || letter == 'f' || letter == 'g' || letter == 'h' || letter == 'i' || letter == 'j' ||letter == 'k' || letter == 'l' || letter == 'm' || letter == 'n' || letter == 'o' || letter == 'p' || letter == 'q' || letter == 'r' || letter == 's' || letter == 't' || letter == 'u' || letter == 'v' || letter == 'w' || letter == 'x' || letter == 'y' || letter == 'z') {
       totalWords++;
      };
      
      
     };
     
 };