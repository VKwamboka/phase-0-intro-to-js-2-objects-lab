// Write your solution in this file!
const employee ={
    name: "Sam",
    address: "11 Broadway",
};
function   updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, employee, {[key]: value});
}

function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign(employee, {[key]: value});
}

function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {};
    Object.assign(newEmployee, employee);
    delete newEmployee [key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee [key];   
    return employee;
}

// function destructivelyDeleteFromEmployeeByKey(employee, key){
//     const newEmploy = 
// }