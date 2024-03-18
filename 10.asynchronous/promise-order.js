const takeOrder = (customer) => {
  return new Promise((resolve) => {
    console.log(`take order for ${customer}`);
    return resolve(customer);
  });
};

const processOrder = (customer) => {
  return new Promise((resolve) => {
    console.log(`processing order for ${customer}`);
    setTimeout(() => {
      console.log("cooking completed");
      console.log(`order processed for ${customer}`);
      return resolve(customer);
    }, 3000);
  });
};

const completeOrder = (customer) => {
  console.log(`completed order for ${customer}`);
};

takeOrder("customer 1")
  .then((customer) => processOrder(customer))
  .then((customer) => completeOrder(customer))
  .catch((error) => console.error(error)); // Handle any errors
