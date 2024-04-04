function getStudentIdsSum(stdList) {
  return stdList.reduce((acc, curr) => acc + curr.id, 0);
}
export default getStudentIdsSum;
