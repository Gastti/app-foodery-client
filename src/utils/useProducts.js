import React from "react";
import BurgerIcon from "../assets/images/category-icons/burgericon.png";
import ChickenIcon from "../assets/images/category-icons/chickenicon.png";
import PizzaIcon from "../assets/images/category-icons/pizzaicon.png";
import SaladIcon from "../assets/images/category-icons/saladicon.png";

let totalCategories = [
    { id: 1, name: 'Burger', icon: BurgerIcon },
    { id: 2, name: 'Pizza', icon: PizzaIcon },
    { id: 3, name: 'Chicken', icon: ChickenIcon },
    { id: 4, name: 'Salad', icon: SaladIcon },

]

function useProducts() {
    const [categories, setCategories] = React.useState(totalCategories);

    const nextPage = (p, sp) => {
        sp(p + 1);
    }

    const prevPage = (p, sp) => {
        sp(p - 1);
    }

    const restorePagesTo = (p, sp) => {
        sp(1);
    }

    return {
        categories,
        setCategories,
        nextPage,
        prevPage,
        restorePagesTo,
    }
}

export { useProducts };