let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest(){
    //set the test text
    document.getElementById("inputText").value = testText;

    //Reset results and timer
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();

    //Change button text and functionality
    var button = document.getElementById("btn");
    button.innerHTML = "End Test";
    button.onclick = endTest;
}
function endTest() {
    endTime = new Date().getTime();

    //Disable user input
    document.getElementById("userInput").readOnly = true;

    //Calculate time elapsed and words per minute (WPM)
    var timeElapsed = (endTime - startTime) / 1000;       //in seconds
    var userTypedText = document.getElementById("userInput").value;

    //Split the text using regex to count words correctly
    var typeedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    var wpm = 0; //Default value

    if (timeElapsed !== 0 && !isNaN(typeedWords)) {
        wpm = Math.round((typeedWords / timeElapsed) * 60);
        var userTypedTotalText = userTypedText.length;
    }

    //Display the results

    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" + 
        "<p>Total Lenght: " + userTypedTotalText + "</p>" + 
        "<p>Words Typed: " + typeedWords + "</p>" +
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>Words Per Minute (WPM): " + wpm + "</p>";

    //Reset the button
    var button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.onclick = startTest;
}