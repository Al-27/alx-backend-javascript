export default function createIteratorObject(report) {
    let Emps = [];
    let dapartments = report.allEmployees;
    
    for(let department in dapartments)
    {
        for(let employee of department)
        {
            Emps.push(employee);
        }
    }
    
    return Emps;
}
