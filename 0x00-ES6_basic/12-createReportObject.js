export default function createReportObject(employeesList) {
    let allEmps = {
        allEmpolyees: {
            ...employeesList
        }
    };
    
    return allEmps;
}
