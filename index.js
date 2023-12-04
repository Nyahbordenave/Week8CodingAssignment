class Groceries {
    constructor(food) {
        this.food = food;
    } // Create a class for groceries/ individua items to be added so user can use menu app as a grocery list  
}

class FoodItem {
    constructor(name) {
        this.name = name;
        this.items = []; 
    } // class for specific FoodItem that will be input by the user 

}

class Menu {
    constructor() {
        this.foodItems = []; // included the required array from the rubric -- user is able to manage food items inputted
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection !== '0') {
            switch (selection) {
                case '1':
                    this.addFoodItem();
                    break;
                case '2':
                    this.viewList();
                    break;
                case '3':
                    this.deleteFoodItem();
                    break;
            }
            selection = this.showMainMenuOptions();
        }
        alert("Thanks for coming! Goodbye!");
    } // start menu created, and exit alert added here 

    // declare main menu options and get user input
    showMainMenuOptions() {
        return prompt(`
        0) Exit
        1) Add Food Item
        2) View List of Items 
        3) Delete Item from List `);
    }

    addFoodItem() {
        let name = prompt(`Enter the item you'd like to add to your list!`);
        this.foodItems.push(new FoodItem(name));
        alert(`${name} has been added to your list!`); // user is able to add items to their list with this chunk of code
    }

    viewList() {
        let listString = `List of Items:\n`;
        for (let i = 0; i < this.foodItems.length; i++) {
            listString += `  ${i + 1}) ${this.foodItems[i].name}\n`;
        }
        alert(listString);
    } // user is able to view the items they have added this far on their lists 

    deleteFoodItem() {
        let index = prompt(`Enter the index of the item you'd like to delete:`);
        index = parseInt(index) - 1; // Convert index to array index (0-based)

        if (index >= 0 && index < this.foodItems.length) {
            let deletedItemName = this.foodItems[index].name;
            alert(`${deletedItemName} has been deleted from the list.`);
            this.foodItems.splice(index, 1);
        } else {
            alert("Invalid index. No item has been deleted.");
        } // code for deleting an index selected by the user, if invalid input is declared -- invalid alert will appear
    }
}

let menu = new Menu();
menu.start(); // calling menu 
