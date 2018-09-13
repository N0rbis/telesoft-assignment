//Once again trying to keep it all simple yet taking some different approaches.. All the Console.logs removed, but there were loads :) 


var insertData = document.getElementById("inputField"),
    idNum = 4,  //Starting at four because we already have 4 pre-defined elements.
    tbody = document.getElementsByTagName("tbody")[0];


//Function that inserts two cells at the end of table after user filled inputField and clicked Add button.
function insertSuggestion() {
    if (insertData.value !== "") {  //Making sure that input field is not empty. (Later edit - Kept it, as I added this because of a habbit :D) 
        var table = document.getElementById("likesTable");
        var row = table.insertRow(-1); //The -1, 0 and 1 is the positions where row and cells are inserted.
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = insertData.value; //Assigning data from inputField to a cell
        cell2.innerHTML = "0";              //Default likes - start at 0. 
        cell2.setAttribute('id', idNum);    //At the same time assigning ID "Dynamicly"..
        insertData.value = "";              //Reseting inputField so it's empty and user does not have to delete the input.
        idNum++;                            //Incrimenting the ID's for next Add click.
    }
    else {
        alert("Suggestion field should not be empty!");     //Popup alert in case user forgets to fill the input field.
    }
}

tbody.onclick = function (e) {
    var clickedItem = e.target.getAttribute('id'),      //Getting the ID of a clicked element.
        addVote = event.target,                         //Getting the structure of clicked element
        toggleLike = event.target.classList.toggle("checked");  // Add the class value of checked on every click for that element (Similar to innerhtml, less typing.)
    if (clickedItem === null) {       //This check is here, because both of table cells are generated dinamicaly, and I only need one to be clickable (This was later accomplished with CSS too.)
        //Doing nothing if target returns null, dirty but can't think of another workaround now for dynamic TD's..
    }
    else {
        if (event.target.classList.value !== "") {  //Simple "Swtich" (As an on/off not Switch statement - I don't mind these either. ) according to CSS class to know if I should add or substract score.
            addVote.innerHTML = parseInt(event.target.innerHTML) + 1;
        }
        else {
            addVote.innerHTML = parseInt(event.target.innerHTML) - 1;
        }
    }
}