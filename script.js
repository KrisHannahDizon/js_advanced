
let numbers = [];

const numberInput = document.getElementById("numberInput");
const numberList = document.getElementById("numberList");
const result = document.getElementById("result");
const sortSelect = document.getElementById("sortSelect");

const insertButton = document.getElementById("insertButton");
const clearEntryButton = document.getElementById("clearEntryButton");
const clearItemsButton = document.getElementById("clearItemsButton");
const totalButton = document.getElementById("totalButton");
const highestLowestButton =
    document.getElementById("highestLowestButton");

insertButton.addEventListener("click", function () {

    insertNumber();

});

function insertNumber() {

    const input = numberInput.value.trim();

    if (input === "") {

        alert("Please enter a number.");

        numberInput.focus();

        return;
    }

    const number = Number(input);

    if (!Number.isFinite(number)) {

        alert("Please enter a valid number.");

        numberInput.focus();

        return;
    }
    if (number <= 0) {
        alert("Please enter a positive number.");
        numberInput.focus();
        return;
    }

    numbers.push(number);

    
    displayNumbers();

    
    numberInput.value = "";

    numberInput.focus();

    clearResult();
}



function displayNumbers() {

 
    numberList.innerHTML = "";


    numbers.forEach(function (number, index) {

        const row = document.createElement("div");

        row.className = "number-row";


    

        const numberValue = document.createElement("span");

        numberValue.className = "number-value";

        numberValue.textContent = number;



        const numberType = document.createElement("span");

        numberType.className = "number-type";


        if (number % 2 === 0) {

            numberType.textContent = "EVEN";

            numberType.classList.add("even");

        } else {

            numberType.textContent = "ODD";

            numberType.classList.add("odd");
        }


      

        const removeButton = document.createElement("button");

        removeButton.textContent = "Remove";

        removeButton.className = "row-button";


        removeButton.addEventListener("click", function () {

            numbers.splice(index, 1);

            displayNumbers();

            clearResult();
        });


       

        const editButton = document.createElement("button");

        editButton.textContent = "Edit";

        editButton.className = "row-button";


        editButton.addEventListener("click", function () {

            editNumber(index);

        });



        row.appendChild(numberValue);

        row.appendChild(numberType);

        row.appendChild(removeButton);

        row.appendChild(editButton);


        // Add row to page
        numberList.appendChild(row);

    });
}




function editNumber(index) {

    const currentNumber = numbers[index];

    const newValue = prompt(
        "Enter a new positive number:",
        currentNumber
    );


    
    if (newValue === null) {
        return;
    }


    const newNumber = Number(newValue.trim());


    
    if (!Number.isFinite(newNumber) || newNumber <= 0) {

        alert("Please enter a valid positive number.");

        return;
    }


    
    numbers[index] = newNumber;


    
    displayNumbers();

    clearResult();
}




clearEntryButton.addEventListener("click", function () {

    numberInput.value = "";

    numberInput.focus();

});




clearItemsButton.addEventListener("click", function () {

    numbers = [];

    displayNumbers();

    sortSelect.value = "";

    clearResult();

});


totalButton.addEventListener("click", function () {

    if (numbers.length === 0) {

        result.textContent =
            "No numbers have been inserted.";

        return;
    }


    let total = 0;


    numbers.forEach(function (number) {

        total += number;

    });


    result.textContent = "Total: " + total;

});




highestLowestButton.addEventListener("click", function () {

    if (numbers.length === 0) {

        result.textContent =
            "No numbers have been inserted.";

        return;
    }


    let highest = numbers[0];

    let lowest = numbers[0];


    for (let i = 1; i < numbers.length; i++) {

        if (numbers[i] > highest) {

            highest = numbers[i];

        }


        if (numbers[i] < lowest) {

            lowest = numbers[i];

        }

    }


    result.textContent =
        "Highest Number: " +
        highest +
        " | Lowest Number: " +
        lowest;

});




sortSelect.addEventListener("change", function () {

    const sortType = sortSelect.value;


    if (sortType === "ascending") {

        numbers.sort(function (a, b) {

            return a - b;

        });

    }


    if (sortType === "descending") {

        numbers.sort(function (a, b) {

            return b - a;

        });

    }


    displayNumbers();

    clearResult();

});



numberInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        insertNumber();

    }

});




function clearResult() {

    result.textContent = "";

}




displayNumbers();