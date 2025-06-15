const descriptor = Object.getOwnPropertyDescriptor(Math,'PI')
console.log(descriptor);
descriptor.value = 3.14; // Attempt to change the value of PI
console.log(Math.PI); // Output: 3.141592653589793
console.log(descriptor.writable); // Output: false, indicating that PI is not writable
console.log(descriptor.configurable); // Output: false, indicating that PI cannot be reconfigured   
console.log(descriptor.enumerable); // Output: false, indicating that PI is not enumerable
// The value of Math.PI cannot be changed because it is a read-only property.   
// This is because Math.PI is a built-in property of the Math object in JavaScript, and it is defined as a read-only property.
// Attempting to change the value of Math.PI will not have any effect, and it will still return the original value of 3.141592653589793.
// This is a fundamental aspect of the Math object in JavaScript, and it is designed to provide a consistent and reliable value for PI.
// In summary, Math.PI is a read-only property that provides the value of PI in JavaScript, and it cannot be changed or reconfigured.


//---------------------------------------------------------------
const chai = {
    name: 'chai',
    price: 250,
    isAvailable: true,
}
console.log(Object.getOwnPropertyDescriptor(chai,'name'))
Object.defineProperty(chai, 'name', {
    value: 'green tea',// Changing the value of the property
    writable: false, // Making the property read-only
    enumerable: true, // Making the property enumerable
    configurable: false // Making the property non-configurable
});
console.log(Object.getOwnPropertyDescriptor(chai,'name'))

// Attempting to change the value of the 'name' property will not have any effect
chai.name = 'black tea'; // This will not change the value of 'name' because it is read-only
// The value of 'name' will still be 'green tea'
console.log(chai.name); // Output: green tea

//----------------------------------------------------------------
