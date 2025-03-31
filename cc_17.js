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

  
// Task 2: Create the SalesRep class
class SalesRep {
    constructor(name) {
      this.name = name;
      this.clients = [];
    }
  
    // Add a customer to the sales rep's client list
    addClient(customer) {
      if (customer instanceof Customer) {
        this.clients.push(customer);
      } else {
        console.log("Invalid client. Must be an instance of Customer.");
      }
    }
  
    // Get total spent by a specific client
    getClientTotal(name) {
      const client = this.clients.find(client => client.name === name);
      return client ? client.getTotalSpent() : `Client ${name} not found.`;
    }
  }
  
  //  Test: Create a sales rep and add clients
  const salesRep1 = new SalesRep("Alice Johnson");
  salesRep1.addClient(customer1); // Adding John Doe from Task 1
  
  // Adding another customer
  const customer2 = new Customer("Jane Smith", "jane@example.com");
  customer2.addPurchase(200);
  customer2.addPurchase(400);
  salesRep1.addClient(customer2);
  
  // Logging client information
  console.log(`Sales Rep: ${salesRep1.name}`);
  console.log(`Clients: ${salesRep1.clients.map(client => client.name).join(", ")}`);
  console.log(`Total spent by John Doe: $${salesRep1.getClientTotal("John Doe")}`);
  console.log(`Total spent by Jane Smith: $${salesRep1.getClientTotal("Jane Smith")}`);
  