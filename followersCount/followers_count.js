let count = 0; //initialize count to 0

function increaseCount(){
    count++; //Increment the count by 1
    displayCount(); //Display the count
    checkCountValue(); //Check count value and display message
}

function displayCount(){
    document.getElementById('countDisplay').innerText=count; //display the count in the HTML
}

function checkCountValue(){
    if (count === 10){
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!")
    }
}

function resetCount(){
    if (count >= 1) {
        count = 0;
        document.getElementById('countDisplay').innerText=count;
        alert("Your Instagram post follower count was reset!!");
    }
}


