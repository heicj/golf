export function getCourseNamesFromArrayOfRounds(arr) {
  let courseList = {};
  for(let i = 0; i < arr.length; i++){
    let name = arr[i].course.toUpperCase();
    if(!courseList[name]){
      courseList[name] = name;
    }
  }
  return courseList;
}