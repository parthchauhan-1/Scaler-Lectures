class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sayHello=function(){
        console.log(`Hello from ${this.name}`);
    }
    static staticHello=function(){  // can only access static method through class name

        console.log("Static hello");
    }
}
// Person.staticHello();

class Student extends Person{
    constructor(name,age,section,batch){
        super(name,age);        // we are invoking the constructor method of parents
        this.section=section;
        this.batch=batch;
    }
}
class Teacher extends Student{
    constructor(name,age,section,classStrength){
        super(name,age,section);
        this.classStrength=classStrength;
    }
}
let person1=new Person("Chiku",23);
console.log(person1);

let teacher1=new Teacher("Aman",32,"C","40");
console.log(teacher1);
teacher1.sayHello();