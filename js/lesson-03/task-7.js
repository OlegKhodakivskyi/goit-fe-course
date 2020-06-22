const Transaction = {
    DEPOSIT: "deposit",
    WITHDRAW: "withdraw",
  };
  const account = {
    id: 0,
    // Текущий баланс счета
    balance: 0,
    // История транзакций
    transactions: [],
    createTransaction(amount, type) {
      this.id += 1;
      console.log("id:", this.id);
      return {
        id: this.id,
        type,
        amount,
      };
    },
    deposit(amount) {
      this.balance += amount;
      const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
      this.transactions.push(newTransaction);
    },
    withdraw(amount) {
      if (this.balance < amount) {
        console.log("На вашем счету недостаточно средств.");
      } else {
        this.balance -= amount;
        const newTransaction = this.createTransaction(
          amount,
          Transaction.WITHDRAW
        );
        this.transactions.push(newTransaction);
      }
    },
    getBalance() {
      return this.balance;
    },
    getTransactionDetails(id) {
      // for (let i = 0; i < this.transactions.length; i += 1) {
      //   if (this.transactions[i].id === id) {
      //     return this.transactions[i];
      //   }
      // }
      for (const transaction of this.transactions) {
        if (transaction.id === id) {
          return transaction;
        }
      }
    },
    getTransactionTotal(type) {
      let sum = 0;
      for (const transaction of this.transactions) {
        if (transaction.type === type) {
          sum += transaction.amount;
        }
      }
      return sum;
    },
};


  // console.log(account.createTransaction(100, Transaction.DEPOSIT));

account.deposit(200);
account.deposit(300);
account.deposit(400);
account.withdraw(200);
account.withdraw(300);
account.withdraw(400);
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionTotal("withdraw"));
console.log(account);