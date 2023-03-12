import StepOneIcon from "../../assets/images/step-one.png"
import StepTwoIcon from "../../assets/images/step-two.png"
import StepThreeIcon from "../../assets/images/step-three.png"
import CustomerImage from "../../assets/images/customer_image.png";
import PlaceholderImage from "../../assets/images/placeholder.png";

export const headboardContent = {
    title: 'The most delicious <span>Food</span> and the fastest <span>Delivery</span>.',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    discount: 'Get 20% discount.'
}

export const stepsContent = {
    title: `<span>Order</span> in three steps`,
    paragraph: "It's simple, just follow these 3 steps.",
    steps: [
        {
            title: 'Order Your Food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            icon: StepOneIcon
        },
        {
            title: 'Delivery & Pickup',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            icon: StepTwoIcon
        },
        {
            title: 'Delicious Recipe',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            icon: StepThreeIcon
        }
    ]
}

export const foodMenuContent = {
    title: 'A <span>Menu</span> That Make You Fall in Love',
    paragraph: 'Lorem ipsum dolor sit amet.'
}

export const CUSTOMERS_CONTENT_EN = {
    title: 'Costumer Testimonial',
    subtitle: 'What <span>Costumer</span> Say About Us',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur.',
    button: 'Read More'
}

export const CUSTOMERS_CONTENT_ES = {
    title: 'Customer Testimonial',
    subtitle: 'What <span>Customers</span> Say About Us',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur.',
    button_placeholder: 'Read More'
}

export const CUSTOMERS_REVIEWS = [
    { name: 'Lionel Messi', message: 'Very fast, Anto loves Foodery!', occupation: 'Father and Footballer', image: CustomerImage },
    { name: 'Julian Alvarez', message: 'It has been easy to buy here', occupation: 'Footballer', image: CustomerImage }
]

export const ARTICLES_CONTENT_EN = {
    title: 'Articles',
    subtitle: 'Recent Post',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
}

export const ARTICLES_CONTENT_ES = {
    title: 'Blog',
    subtitle: 'Articulos Recientes',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
}

export const ARTICLES_PLACEHOLDER = [
    {
        title: 'This is my article',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        date: 'March 3, 2023',
        image: PlaceholderImage,
        button_placeholder: 'Read More'
    },
    {
        title: 'This is my second Article',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        date: 'March 3, 2023',
        image: PlaceholderImage,
        button_placeholder: 'Read More'
    }
]

export const FAQ_CONTENT = [
    {
        query: 'How to order food?',
        reply: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
    },
    {
        query: 'How to track an order?',
        reply: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
    },
    {
        query: 'How to pay?',
        reply: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
    }
]