import StepOneIcon from "../../assets/images/step-one.png"
import StepTwoIcon from "../../assets/images/step-two.png"
import StepThreeIcon from "../../assets/images/step-three.png"

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