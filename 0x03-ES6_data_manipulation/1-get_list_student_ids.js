function getListStudentIds(studentList) {
  let idList = [];
  if (!(studentList instanceof Array)) {
    return [];
  }
  idList = studentList.map((std) => std.id);
  return idList;
}
export default getListStudentIds;
