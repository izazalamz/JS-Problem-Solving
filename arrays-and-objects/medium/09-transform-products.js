/*
Problem: Transform Products

You are given an array of product objects. Each product has a `name` and
`price`.

Return a new array where each product includes a `discountedPrice` property
after applying the given discount percentage.

Input:
products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 50 },
]
discount = 10

Output:
[
  { name: "Laptop", price: 1000, discountedPrice: 900 },
  { name: "Mouse", price: 50, discountedPrice: 45 },
]

Function Signature:
function transformProducts(products, discount) {}

Notes:
- Discount is given as a percentage.
- The original product objects should not be modified.
*/

const discount = 10;
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 50 },
];
function transformProducts(products, discount) {
  const productsWithDiscounts = products.map((product) => {
    const { name, price } = product;
    const discountedPrice = price - price * (discount / 100);
    return { name,price, discountedPrice: discountedPrice };
  });
  return productsWithDiscounts;
}
// function transformProducts(products, discount) {
//   return products.map(({ name, price }) => ({
//     name,
//     price,
//     discountedPrice: price - price * (discount / 100),
//   }));
// }
console.log(transformProducts(products, discount));
