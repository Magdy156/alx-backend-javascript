function getStudentsByLocation(stdList, city) {
  const stds = stdList.filter((std) => std.location === city);
  return stds;
}
export default getStudentsByLocation;
