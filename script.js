//your JS code here. If required.
// Create the student object
const student = {
  name: "John Doe"
};

// Add getKeys() method to the Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Test the getKeys() method
console.log(student.getKeys());