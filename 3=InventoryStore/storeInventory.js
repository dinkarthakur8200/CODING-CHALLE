// Sample inventory object with prices in US Dollars
const inventoryUSD = {
    apple: 1.50,
    banana: 0.75,
    orange: 1.25,
    mango: 2.00,
    pineapple: 4
};
  
  // Exchange rate (1 USD to INR)
  const exchangeRate = 83;
  
  // Convert prices to Indian Rupees using map
  const inventoryINR = Object.fromEntries(
    Object.entries(inventoryUSD).map(([item, price]) => [item, price * exchangeRate])
  );
  
  // Display the result
  console.log("Inventory in Indian Rupees:");
  console.log(inventoryINR);