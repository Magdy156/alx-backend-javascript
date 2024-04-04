function updateStudentGradeByCity(stdList, city, newGrades) {
  const students = stdList.filter((std) => std.location === city);
  return students.map((std) => {
    const filteredGrades = newGrades.filter((newStdInfo) => newStdInfo.studentId === std.id);
    if (filteredGrades.length) {
      return {
        ...std,
        grade: filteredGrades[0].grade,
      };
    }
    return {
      ...std,
      grade: 'N/A',
    };
  });
}

export default updateStudentGradeByCity;
