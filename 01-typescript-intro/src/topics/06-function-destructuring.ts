interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: "Nokia N1",
    price: 150.0,
};

const table: Product = {
    description: "Ipad Air",
    price: 250.0,
};

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

function taxCalculation(options: TaxCalculationOptions): [number, number] {
    const {products, tax } = options
    let total = 0;
    products.forEach(({ price }) => {
        total += price;
    });
    return [total, total * tax];
}

const shoppingCart = [phone, table];
const tax = 0.15;

const [total, shopTax] = taxCalculation({
    products: shoppingCart,
    tax,
});

console.log("Total:", total, "", "Precio:", shopTax);
