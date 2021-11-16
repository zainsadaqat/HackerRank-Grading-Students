const result = [];
    grades.forEach(element => {
        result.push(
            element < 0? 0 :
            element >100? 100 :
            element >= 38 && element % 5 >= 3 ? element + (5 - element % 5) :
            element
        );
    });
    return result;
