import product1 from '../../images/product-1.jpg';
import product2 from '../../images/product-2.jpg';
import product3 from '../../images/product-3.jpg';
import sweet1 from '../../images/sweet3.jpg';
import sweet2 from '../../images/sweet-2.jpg';
import sweet3 from '../../images/sweet-3.jpg';
import { makeAutoObservable } from 'mobx';

class MainData {
  constructor() {
    makeAutoObservable(this);
  }
  productData = [
    {
      heading: "Extremely Cheesy Pizzas",
      details: [
        {
          img: product1,
          alt: "Pizza",
          name: "Cheeseburger Pizza",
          desc: "Ketchup-mustard sauce, beef crumble, fresh onions, and fresh tomatoes and cheese",
          price: 16.79,
          quantity: 0,
          button: "Add to Cart",
        },

        {
          img: product2,
          alt: "Pizza",
          name: "Chicken Taco Pizza",
          desc: " Taco, grilled chicken,onions, fresh green peppers, tomatoes and cheese.",
          price: 13.99,
          quantity: 0,
          button: "Add to Cart",
        },
        {
          img: product3,
          alt: "Pizza",
          name: "Veggie Pizza",
          desc: " A medley of fresh green peppers, onion, tomatoes, mushrooms, and olives.",
          price: 11.49,
          quantity: 0,
          button: "Add to Cart",
        },
      ],
    },
    {
      heading: "Sweet Desserts",
      details: [
        {
          img: sweet2,
          alt: "Cake",
          name: "Tiramisu",
          desc: "Traditional Italian cake with cocoa flavour",
          price: 10.89,
          quantity: 0,
          button: "Add to Cart",
        },
        {
          img: sweet3,
          alt: "Ice Cream",
          name: "Peanut Butter Pie Cake",
          desc: "Very soft cake with melted chocolate inside",
          price: 9.49,
          quantity: 0,
          button: "Add to Cart",
        },
        {
          img: sweet1,
          alt: "Brownie",
          name: "Strawberry-Rhubarb Buckle",
          desc: "Delicious watery sweet brownie with vanilla ice-cream on the top ",
          price: 8.29,
          quantity: 0,
          button: "Add to Cart",
        },
      ],
    },
  ];
}


export const products_data = new MainData()
window.products_data = products_data
