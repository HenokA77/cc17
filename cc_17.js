// Task 1: Create the Customer class
class Customer {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.purchaseHistory = [];
    }
  
    // Add purchase amount to history
    addPurchase(amount) {
      this.purchaseHistory.push(amount);
    }
  
    // Calculate total spent by summing purchases
    getTotalSpent() {
      return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    }
  }
  
  // ✅ Test: Create a customer and log purchases
  const customer1 = new Customer("John Doe", "john@example.com");
  customer1.addPurchase(150);
  customer1.addPurchase(300);
  customer1.addPurchase(75);
  
  console.log(`Customer: ${customer1.name}`);
  console.log(`Total spent: $${customer1.getTotalSpent()}`);
  