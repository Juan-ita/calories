const totalDisplay = document.getElementById('total-display')
const foodForm = document.getElementById('food-form')
const foodName = document.getElementById('food-name')
const foodCalories = document.getElementById('food-calories')
const resetButton = document.getElementById('reset-button')
const foodList = document.getElementById('food-list')

let saved_data = localStorage.getItem('my_calories')
let foods_array = [];// array

if (saved_data !==null){
    foods_array = JSON.parse(saved_data);
}

//Page update
function update_page(){
    //Clear out list
    foodList.innerHTML = '';

    let current_total = 0;

    //List Building
    foods_array.forEach(function (item, index){
        //Combine the item's calories and the running total
        current_total = current_total + item.calories;

        //New food item
        const li = document.createElement('li');
        li.className = 'flex justify-between items-center py-2 text-sm';

        //text and a simple delete button
        li.innerHTML = `
          <span class="text-sm "><strong class="text-sm text-black">${item.name}</strong> - ${item.calories} kcal</span>
          <button onclick="removeItem(${index})" class="text-red-500 hover:text-red-600 font-bold">Delete</button>
        `;

        //Add new item into the list
        foodList.appendChild(li);
    });

    //Update the total number
    totalDisplay.textContent = current_total;

    //Save updated array to localstorage
    localStorage.setItem('my_calories', JSON.stringify(foods_array));
}

//Function to add a new food name
foodForm.addEventListener('submit', function(event){
    //Stop the page from refreshing when the form submits
    event.preventDefault();

    //Get values from the input boxes
    const input_name = foodName.value;
    const input_calories = parseInt(foodCalories.value);

    // display all food items
    const new_food_item = {
        name: input_name,
        calories: input_calories
    };

//Push the new food item object to the array
foods_array.push(new_food_item);

// Refresh the page
update_page();

// Reset the form input boxes so they are blank again
foodForm.reset();

});

//Remove food items
window.removeItem = function(position){
    
    foods_array.splice(position, 1)
    
    // Refresh the page
    update_page();
};

//Reset calorie count
resetButton.addEventListener('click', function(){
    foods_array = [];
    update_page();
})

update_page();
