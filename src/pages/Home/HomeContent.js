import StepOneIcon from "../../assets/images/step-one.png"
import StepTwoIcon from "../../assets/images/step-two.png"
import StepThreeIcon from "../../assets/images/step-three.png"
import CustomerImage from "../../assets/images/customer_image.png";

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