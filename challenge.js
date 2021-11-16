function gradingStudents(grades) {
    let newGrades = [];
    for(let i = 0; i < grades.length; i++) {
        if(grades[i] >= 40 ){ 
           if(grades[i]%5 === 1) {
            grades[i] += 1;
            newGrades.push(grades[i])
        } else if(grades[i]%5 === 2) {
            grades[i] += 2;
            newGrades.push(grades[i])
        }else if(grades[i]%5==0){
            newGrades.push(grades[i])
        }
      }
    }
    return newGrades;
}
