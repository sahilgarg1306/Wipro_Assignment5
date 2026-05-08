// ============================================
// Q1. Create a Student Class
// ============================================

console.log("Q1. Create a Student Class");

class Student {
    constructor(rollNo, name, marks){
        this.rollNo=rollNo;
        this.name=name;
        this.marks=marks;

    }

    get RollNo()
    {
        return this.rollNo
    }
    set RollNo(value)
    {
        this.rollNo=value
    }

    get Name()
    {
        return this.name
    }
    set Name(value)
    {
        this.name=value
    }

    get Marks()
    {
        return this.marks
    }
    set Marks(value)
    {
        this.marks=value
    }

    DisplayDetails()
    {
    console.log("Roll No " + this.rollNo);
    console.log("Name " + this.name)
    console.log("Marks " + this.marks)
    }

    checkResult(){
        if(this.marks>=40)
        {
            console.log("Result: Pass")
        }
        else{
            console.log("Result: Fail")
        }
    }
}

const student1 = new Student(1,"Sahil",35);
student1.DisplayDetails()
student1.checkResult()

console.log("============================================");