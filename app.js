// [x] - Need to specify that we want the window page to load first before we run our JS code inside our function.
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
      console.log(textToAnalyze);
      
     });
     
 };