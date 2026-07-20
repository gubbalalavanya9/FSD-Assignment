function display(name: string, age?: number): void {
    if (age)
        console.log(name + " " + age);
    else
        console.log(name);
}

display("Rekha");
display("Rahul", 21);

function greet(name: string = "Student") {
    console.log("Welcome " + name);
}

greet();
greet("Rekha");

function total(...marks: number[]) {
    let sum = 0;
    for (let m of marks)
        sum += m;

    console.log("Total =", sum);
}

total(70, 80, 90);