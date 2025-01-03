const students = [
    {id:1,firstName :"John",lastName:"Doe",age:20,grade:'A'},
    {id:2,firstName :"Jane",lastName:"Smith",age:22,grade:'B'},
    {id:3,firstName :"Jim",lastName:"Bean",age:22,grade:'c'},
    {id:4,firstName :"King",lastName:"Sen",age:22,grade:'A+'},

];
console.log(students);


// a. Add a Student: Create a function to add a new student to the array.
function addStudent(id,firstName,lastName,age,grade){
    students.push({id,firstName,lastName,age,grade});
    console.log(`Student ${firstName} ${lastName} added successfully`);
}

// b. Update Student Information: Create a function to update a student's information based on their id.
function updateStudent(id,updateInfo){
    let studentInfo=students.find(student=>student.id===id);
    if(studentInfo){
        Object.assign(studentInfo,updateInfo);
        console.log(`Student with Id ${id} Updated successfully`);
    }
    else{
        console.log(`Student with Id ${id} not found`);
    }
}

// c. Delete a Student: Create a function to delete a student based on their id.
function deleteStudent(id){
    let StudentIndex=students.findIndex(student=>student.id===id);
    if(StudentIndex!==-1){
        students.splice(StudentIndex,1);
        console.log(`Student with Id ${id} deleted successfully`);
    }
    else{
        console.log(`Student with Id ${id} not found`);
    }
}

// d. List All Students: Create a function to display a list of all students.

function listStudents(){
    if(students.length===0){
        console.log(`No students available`);
    }
    else{
        console.log("List of Students");
        students.forEach(function(index){
            console.log(`Id:${index.id} FirstName:${index.firstName} LastName:${index.lastName} Age:${index.age} Grade:${index.grade}`);
        });
    }
}

// e. Find Students by Grade: Create a function to find all students who have a specific grade.
function findStudentByGrade(grade){
    let filteredStudents=students.filter(function(student){
        if(student.grade===grade){
            return student;
        }
    })
    if(filteredStudents.length>0){
        console.log(`Students with grade ${grade} :`);
        filteredStudents.forEach(function(index){
            console.log(`ID:${index.id} FirstName:${index.firstName} LastName:${index.lastName} Age:${index.age} Grade:${index.grade}`)
        })
    }
    else{
        console.log(`No students found with grade ${grade}`);
    }
}

// f.Calculate Average Age: Create a function to calculate the average age of all students using array method
function calculateAverageAge(){
    if(students.length===0){
        console.log(`No students available`);
    }
    else{
        let totalSum=students.reduce((sum,student)=>sum+student.age,0);
        let averageAge=totalSum/students.length;
        console.log(`Average age of students is ${Math.floor(averageAge)}`);

    }
}

addStudent(4,"Bob","Johnson",21,"B");
console.log(students)
updateStudent(2,{firstName:"Jenny",lastName:"changes",grade:"C"});
console.log(students)
deleteStudent(3);   
console.log(students); 
listStudents();
findStudentByGrade("A");
calculateAverageAge()
