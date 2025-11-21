class BankAccount {
  readonly userId: number;
  public userName: string;
  protected userBalance: number;
  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }
  //setter
  set addBalance(amount: number) {
    this.userBalance = this.userBalance + amount;
  }
  //getter
  get getBalance() {
    return this.userBalance;
  }
}

const MuktoAccount = new BankAccount(111, "mezba", 20);
MuktoAccount.addBalance = 100;
MuktoAccount.addBalance = 20;
console.log(MuktoAccount);
