import { Product, taxCalculation } from "./06-function-destructuring";

const shoppingCart: Product[] = [
    {
        description: "Nokia",
        price: 100,
    },
    {
        description: "iPad",
        price: 150,
    },
];

const shoptax = 0.15;

const [total, tax] = taxCalculation({products:shoppingCart, tax:shoptax});

console.log('Total:', total);
console.log('Tax:', tax);

