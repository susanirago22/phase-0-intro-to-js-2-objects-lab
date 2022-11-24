/var employee = {
    name:"sam",
    streetAddress:"11 Broadway"
}
function updateEmployeeWithKeyAndValue(employee,key,value)
{
    return {...employee,[key]:value,}
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value)
{
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key)
{
     const another = Object.assign({},employee)
    delete another[key]  
    return another;
}
function destructivelyDeleteFromEmployeeByKey(employee, key)
{
delete employee[key]
return employee
}
