const {makeAutoObservable} = require("mobx");

class MainStore {
    constructor() {
        makeAutoObservable(this)
    }
    cart = [
        {
            id :1,
            title: 'watermelon',
            price: 3.49,
            image_url: '',
            quantity: 1
        },
        {
            id :2,
            title: 'strawberry',
            price: 4.99,
            image_url: '',
            quantity: 1
        },
        {
            id :3,
            title: 'grapes',
            price: 2.99,
            image_url: '',
            quantity: 1
        },
        {
            id :4,
            title: 'orange',
            price: 1.49,
            image_url: '',
            quantity: 1
        }
    ]
}
export const main_store = window.main_store = new MainStore()
