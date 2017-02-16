
let getGroceries = () => {
    let groceries = localStorage.getItem('groceries');

    if (groceries === null) {
        return setGroceries();
    }

    return JSON.parse(groceries);
}

let setGroceries = (groceries = []) => {
    localStorage.setItem('groceries', JSON.stringify(groceries));
    return groceries;
}

let addGrocery = grocery => {
    let groceries = getGroceries();
    grocery.id = getNextGroceryId();
    groceries.push(grocery);
    return setGroceries(groceries);
}

let getNextGroceryId = () => {
    let groceries = getGroceries();
    let last = groceries[groceries.length -1];
    return last === undefined ? 1 : last.id + 1;
}

export default {
    getGroceries,
    setGroceries,
    addGrocery
}