let product: any = 250;
console.log(product);

product = "Mouse";
console.log(product);

let userName: unknown = "Lavanya";

if (typeof userName === "string") {
    console.log(userName.toLowerCase());
}

function displayMessage(): void {
    console.log("Learning TypeScript is fun!");
}

displayMessage();
