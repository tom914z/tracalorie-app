// Selecting DOM elements
const mealNameInput = document.getElementById('meal-name');
const mealCaloriesInput = document.getElementById('meal-calories');
const addMealButton = document.getElementById('add-meal');
const mealList = document.getElementById('meal-list');
const totalCaloriesDisplay = document.getElementById('total-calories');

let totalCalories = 0;

// Event listener to add a meal
addMealButton.addEventListener('click', () => {
    const mealName = mealNameInput.value;
    const mealCalories = parseInt(mealCaloriesInput.value);

    // Ensure both fields have valid input
    if (mealName === '' || isNaN(mealCalories)) {
        alert('Please enter both a meal name and valid calories');
        return;
    }

    // Create a new list item for the meal
    const mealItem = document.createElement('li');
    mealItem.innerHTML = `
        ${mealName} 
        <span>${mealCalories} kcal</span>
    `;

    // Add the meal to the meal list
    mealList.appendChild(mealItem);

    // Update total calories
    totalCalories += mealCalories;
    totalCaloriesDisplay.textContent = totalCalories;

    // Clear the input fields
    mealNameInput.value = '';
    mealCaloriesInput.value = '';
});
