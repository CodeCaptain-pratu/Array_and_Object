// a) Use the Object.preventExtensions method to prevent any further additions of properties to the student object.

let Student = {
    name: 'John',
    age: 20,
    grade: 'A',
}
console.log("Before Adding preventExtension");
console.log(Student);
Object.preventExtensions(Student);
console.log("After Adding preventExtension");
Student['class']=9;
console.log(Student);

// b) Use the Object.isExtensible method to check if the student object is extensible. Store the result in a variable
let extensibleStatus=Object.isExtensible(Student);

// c) Create a new object called teacher with a 'subject' property set to 'Math'.
let teacher={
    subject:'Math'
}
console.log("Before sealing");
console.log(teacher);
// d) Use the Object.seal method to seal the teacher object, preventing any additions or deletions of properties.
Object.seal(teacher);
teacher['class']=10;
delete teacher.subject;
console.log("After sealing");
console.log(teacher)

// e) Use the Object.isSealed method to check if the teacher object is sealed. Store the result in a variable called sealedStatus.

let sealedStatus=Object.isSealed(teacher);

// f) Print the extensibleStatus and sealedStatus to the console.
console.log("The extensible status of the Object student is",extensibleStatus);
console.log("The seal status of teacher object is",sealedStatus);
