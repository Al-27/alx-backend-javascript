/**
@students_list: [{id, firstName, location}]
@city         : ""
@new_grades   : [{studentId, grade}...]

RETURN: { id, firstName, location, grade }
*/
export function updateStudentGradeByCity(students_list, city, new_grades)
{
  let students_map = students_list.map(s => {id: s.id, firstName: s.firstName, location: s.location, grade: 'N/A'});

  students_map.forEach( st => {
    st.grade = new_grades.filter(gr => gr.studentId == st.id).grade;
  });

  return students_map;
}
