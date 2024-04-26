export default function iterateThroughObject(reportWithIterator) {
    let Emps = "";
    let dapartments = report.allEmployees;
    
    for(let department in dapartments)
    {
        for(let employee of department)
        {
            Emps =  `${Emps} ${employee} |`;
        }
    }
    
    return Emps.replace(/ \|$/g,"");
}
