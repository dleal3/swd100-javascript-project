// [x] - Add onload event to specify that we want the window page to load first before we run our JS code. 
// [x] - Create a variable that calls an input element by id.
// [x] - Create variables that will keep track of the data we are intersted in.
// [x] - Add eventListener to the calculate button so when user clicks on the button it will run a function.

window.onload = function() {

    // Declare <textarea> and <button> variables
    var input = document.getElementById('input');
    var calculate = document.getElementById('calculate');

    // Declare <span> variables
    var totalWords = 0;
    var totalSentences = 0;
    var avWordsPerSent = 0;
    var totalSpaces = 0;

    // Create EventListener to check for button click
    calculate.addEventListener('click', function() {

        // variable created for text inside <textarea>
        var textToAnalyze = input.value;
        
        // Iterates through strings to check 
        // for totalWords and totalSentences
        for(var i = 0; i < textToAnalyze.length; i++) {
            if(hasSpaces(textToAnalyze[i])) {
                totalSpaces++;
                hasSpaces(textToAnalyze[i]);
                totalWords = totalSpaces + 1;
                avWordsPerSent = totalWords / totalSentences;
            }
        }

        // Hook up <span> Elements to variables above
        document.getElementById('totalWords').innerHTML = totalWords;
        document.getElementById('totalSentences').innerHTML = totalSentences;
        document.getElementById('avWordsPerSent').innerHTML = avWordsPerSent;
        document.getElementById('totalSpaces').innerHTML = totalSpaces;
    });

    // Checks for spaces in textarea 
    function hasSpaces(s) {
        return s.indexOf(' ') >= 0;
    }
}