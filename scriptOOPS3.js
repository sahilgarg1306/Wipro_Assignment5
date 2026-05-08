// ============================================
// Q3. Encapsulation - Bank Account
// ============================================

console.log("Q3. Encapsulation - Bank Account");

class BankAccount{
    #balance; // Private property

    constructor(accountNumber, accountHolderName, currentBalance){
        this.accountNumber=accountNumber;
        this.accountHolderName=accountHolderName;
        this.#balance=currentBalance;
    }

    get AccountNumber()
    {
        return this.accountNumber
    }   
    set AccountNumber(value)
    {
        this.accountNumber=value
    }   

    get AccountHolderName()
    {
        return this.accountHolderName
    }      
    set AccountHolderName(value)
    {
        this.accountHolderName=value
    }   

    get Balance()
    {
        return this.#balance
    }


    Deposit(amount){
        if (amount <= 0) {
            console.log("Invalid amount");
            return;
        }
        this.#balance+=amount;
        console.log("Amount Deposited");
        this.getBalance();
    }


    Withdraw(amount){
        if (amount <= 0) {
            console.log("Invalid withdrawal amount");
            return;
        }

        if(amount>this.#balance)
        {
            console.log("Insufficient Balance");
        }
        else{
            this.#balance-=amount;
            console.log("Amount Withdrawn");
            this.getBalance();
        }
    }


    getBalance(){
        console.log("Balance: " + this.#balance);
    }

    displayDetails(){
        console.log("Account Number: " + this.accountNumber);
        console.log("Account Holder Name: " + this.accountHolderName);
        console.log("Balance: " + this.#balance);
    }
}

const account1 = new BankAccount(123456,"Sahil",1000);
account1.displayDetails();
account1.Deposit(500);
account1.Withdraw(200);



console.log("============================================");