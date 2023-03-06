// Write your solution in this file!
const employee = {
    name: "Michael",
    streetAddress : "11 Broadway"
};

function updateEmployeeWithKeyAndValue(obj, key, value){
    const copyOfEmployee = {...obj};

    copyOfEmployee[key] = value;

    return copyOfEmployee;

}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;

}

function deleteFromEmployeeByKey(obj, key){
    const copyOfEmployee = {...obj};

    delete copyOfEmployee[key];

    return copyOfEmployee

}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
}