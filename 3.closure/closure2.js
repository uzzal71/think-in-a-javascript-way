function bankAccount(initialBalance) {
  var balance = initialBalance;

  return function () {
    return balance;
  };
}
