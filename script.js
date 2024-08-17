function addRecommendation()
{
    // get the message of the new recommendation
    let recommendation = document.getElementById("new_recommendation");
    //if the user has left the recommendation, display a pop up
    if(recommendation.value != null && recommendation.value.trim() != "")
    {
        console.log("New Recommendation added");

        showPopup(true);
        // create a new recommendation value and set its value to the user's message
        var element = document.createElement("div");
        element.setAttribute("class", "recommendation");
        element.innerHTML = "\<span\>&#8220;\</span\>" +recommendation.value;
        // add this element to the end of the list recommendations
        document.getElementById("all_recommendations").appendChild(element);

        // reset the value of the text area

        recommendation.value = "";
    }
}

    function showPopup(bool) 
{
    if(bool)
    {
        document.getElementById('popup').style.visibility = 'visible';
    }
    else
    {
        document.getElementById('popup').style.visibility = 'hidden';
    }
}


