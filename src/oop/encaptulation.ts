// access >> modifier

class BankAccount {
  readonly userId: number;
  public userName: string;
  // private userBalance: number;
  private userBalance: number;
  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }
  private addBalance(newBalance: number) {
    this.userBalance = this.userBalance + newBalance;
  }
  callHiddenMechod(balance: number) {
    this.addBalance(balance);
  }
}

class StudentAccout extends BankAccount {
  test() {
    this;
  }
}

const MuktoAccount = new BankAccount(111, "mezba", 20);
MuktoAccount.addBalance(100);
MuktoAccount.addBalance(40);

console.log(MuktoAccount);
