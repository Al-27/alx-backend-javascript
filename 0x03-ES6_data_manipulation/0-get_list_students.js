export function getListStudents()
{
    let list = [];

    list.push( create_student("Guillaume", 1, "San Francisco") );
    list.push( create_student("James", 2, "Columbia") );
    list.push( create_student("Serena", 5, "San Francisco") );
    
    return list;
}

function create_student(nm,id,loc)
{
    return {
        firstName: nm,
        id: id,
        location: loc,        
    };
}
