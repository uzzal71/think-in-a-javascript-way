function bankAccount(initialBalance) {
  var balance = initialBalance;

  return function () {
    return balance;
  };
}

var account = bankAccount(100);

console.dir(account);
