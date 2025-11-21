// access >> modifier

class BankAccount {
  readonly userId: number;
  public userName: string;
  // private userBalance: number;
  protected userBalance: number;
  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }
  addBalance(newBalance: number) {
    this.userBalance = this.userBalance + newBalance;
  }
}

class StudentAccout extends BankAccount {
  test() {
    this.addBalance;
  }
}




const MuktoAccount = new BankAccount(111, "mezba", 20);
MuktoAccount.addBalance(100);
MuktoAccount.addBalance(40);

console.log(MuktoAccount);
