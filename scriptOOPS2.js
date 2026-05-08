// ============================================
// Q2. Inheritance - Employee and Manager
// ============================================

console.log("Q2. Inheritance - Employee and Manager");

class Employee {
    constructor(empId, empName, empSalary){
        this.empId=empId;
        this.empName=empName;
        this.empSalary=empSalary;
    }

    get EmpId()
    {
        return this.empId
    }
    set EmpId(value)
    {
        this.empId=value
    }   

    get EmpName()
    {
        return this.empName
    }   
    set EmpName(value)
    {
        this.empName=value
    }   

    get EmpSalary()
    {
        return this.empSalary
    }   
    set EmpSalary(value)
    {
        this.empSalary=value
    }   

    displayEmployee(){
        console.log("Employee ID: " + this.empId);
        console.log("Employee Name: " + this.empName);
        console.log("Employee Salary: " + this.empSalary);
    }
}

class Manager extends Employee{
    constructor(empId, empName, empSalary, department){
        super(empId, empName, empSalary);
        this.department=department;
    }

    get Department()
    {
        return this.department
    }
    set Department(value)
    {
        this.department=value
    }

    displayManager(){
        super.displayEmployee();
        console.log("Department: " + this.department);
    }
}

const employee1 = new Employee(101, "Sahil Garg", 50000);
const manager1 = new Manager(201, "Vishal Kumar", 100000, "IT");
employee1.displayEmployee()
console.log(".............................................");
manager1.displayManager()


console.log("============================================");