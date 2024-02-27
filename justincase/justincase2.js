        //query select all the buttons
        var deleteButtons = document.querySelectorAll('.deleteButton');
        deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            fetch("http://localhost:80/jeep", {
                method: "DELETE",
                body: JSON.stringify({index: i}),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            load()
        })
        })
        //add event listeners to each button
            //send the index number of the button you selected to the `delete` route
            //the object you send could look like this {index:/*correct index number goes here*/}
            //call the load function to update the page

    }