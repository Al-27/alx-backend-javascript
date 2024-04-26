export default function createEmployeesObject(departmentName, employees) {
    let employees = {
        [departmentName] : employees
    };
    
    return employees;
}
