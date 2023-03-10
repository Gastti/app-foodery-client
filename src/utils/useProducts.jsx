import React from "react";
import BurgerImage1 from "../assets/images/foods/burger1.png";
import BurgerImage2 from "../assets/images/foods/burger2.png";
import PizzaImage1 from "../assets/images/foods/pizza1.png";
import PizzaImage2 from "../assets/images/foods/pizza2.png";
import BurgerIcon from "../assets/images/foods/burgericon.png";
import PizzaIcon from "../assets/images/foods/pizzaicon.png";
import ChickenIcon from "../assets/images/foods/chickenicon.png";
import SaladIcon from "../assets/images/foods/saladicon.png";

let totalCategories = [
    { id: 1, name: 'Burger', icon: BurgerIcon },
    { id: 2, name: 'Pizza', icon: PizzaIcon },
    { id: 3, name: 'Chicken', icon: ChickenIcon },
    { id: 4, name: 'Salad', icon: SaladIcon }
]

let totalProducts = [
    { name: 'Burger Number 1', price: 13, image: BurgerImage1, categoryId: 1 },
    { name: 'Burger Number 2', price: 15.5, image: BurgerImage2, categoryId: 1 },
    { name: 'Burger Number 3', price: 13, image: BurgerImage1, categoryId: 1 },
    { name: 'Burger Number 4', price: 15.5, image: BurgerImage2, categoryId: 1 },
    { name: 'Pizza Number 1', price: 15, image: PizzaImage1, categoryId: 2 },
    { name: 'Pizza Number 2', price: 22, image: PizzaImage2, categoryId: 2 },
    { name: 'Pizza Number 3', price: 22, image: PizzaImage2, categoryId: 2 },
    { name: 'Pizza Number 4', price: 22, image: PizzaImage2, categoryId: 2 },
    { name: 'Chicken Number 1', price: 15, image: PizzaImage1, categoryId: 3 },
    { name: 'Chicken Number 2', price: 22, image: PizzaImage2, categoryId: 3 },
    { name: 'Chicken Number 3', price: 22, image: PizzaImage2, categoryId: 3 },
    { name: 'Chicken Number 4', price: 22, image: PizzaImage2, categoryId: 3 },
    { name: 'Salad Number 1', price: 15, image: PizzaImage1, categoryId: 4 },
    { name: 'Salad Number 2', price: 22, image: PizzaImage2, categoryId: 4 },
    { name: 'Salad Number 3', price: 22, image: PizzaImage2, categoryId: 4 },
    { name: 'Salad Number 4', price: 22, image: PizzaImage2, categoryId: 4 },
]


function useProducts() {
    const [products, setProducts] = React.useState(totalProducts);
    const [categories, setCategories] = React.useState(totalCategories);
    const [maxPages, setMaxPages] = React.useState()

    const getProductsByCategory = (id, limit, page) => {
        const filteredProducts = products.filter((product) => product.categoryId == id);
        let maxPages = Math.ceil(filteredProducts.length / limit);

        let startIndex = (page - 1) * limit;
        let endIndex = startIndex + limit;
        let paginatedProducts = filteredProducts.slice(startIndex, endIndex)
        return paginatedProducts;
    }

    const nextPage = (p, sp) => {
        sp(p + 1);
    }

    const prevPage = (p, sp) => {
        sp(p - 1);
    }

    return {
        products,
        setProducts,
        categories,
        setCategories,
        getProductsByCategory,
        nextPage,
        prevPage,
        maxPages
    }
}

export { useProducts };