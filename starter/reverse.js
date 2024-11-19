function reverseString (value) {
    let reversedValue = "";
    console.log(`split ${value.split("")}`);
    value.split("").forEach((char) => {
        console.log(`char: ${char}`);
        reversedValue = char + reversedValue
    });
    
    return reversedValue;
}

const value = "Reverse me";

console.log(reverseString(value));