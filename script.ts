
class person {
    name: string;
    age: number;
    getInfo(): string {
        return("Age = " + this.age + ", " + "Name: " + this.name )
    }
}

let andrey: person = new person ("Andrey", 20);
