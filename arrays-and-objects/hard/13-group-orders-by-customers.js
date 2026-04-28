/*
Problem: Group Orders By Customer

You are given an array of order objects. Each order has an `orderId`,
`customerId`, and `amount`.

Return a Map where each key is a customer id and each value is an array of
orders belonging to that customer.

Input:
orders = [
  { orderId: 101, customerId: 1, amount: 250 },
  { orderId: 102, customerId: 2, amount: 100 },
  { orderId: 103, customerId: 1, amount: 300 },
]

Output:
Map {
  1 => [
    { orderId: 101, customerId: 1, amount: 250 },
    { orderId: 103, customerId: 1, amount: 300 },
  ],
  2 => [
    { orderId: 102, customerId: 2, amount: 100 },
  ]
}

Function Signature:
function groupOrdersByCustomer(orders) {}

Notes:
- A customer may have multiple orders.
- The array may be empty.
*/
function groupOrdersByCustomer(orders) {
  const groupByCustomers = new Map();
  for (const order of orders) {
    const { customerId } = order;
    if (!groupByCustomers.has(customerId)) groupByCustomers.set(customerId, []);
    groupByCustomers.get(customerId).push(order);
    // groupByCustomers.set(
    //   customerId,
    //   groupByCustomers.get(customerId)
    //     ? groupByCustomers.get(customerId).push(order)
    //     : [order],
    // );
  }
  return groupByCustomers;
}
const orders = [
  { orderId: 101, customerId: 1, amount: 250 },
  { orderId: 102, customerId: 2, amount: 100 },
  { orderId: 103, customerId: 1, amount: 300 },
];
console.log(groupOrdersByCustomer(orders));
