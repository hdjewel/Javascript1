```javascript


// Should return in no particular order:
// [true]

function count_votes(votesToGoEatCake)
{
    var count = 0;
    for (item in votesToGoEatCake)
    {
        if (votesToGoEatCake[item] === true)
        {
            count ++;
        }
    }
    return count;
}

console.log(count_votes(votesToGoEatCake));

```

```javascript
var hackbrightStudents = ["katie", "amy", "jenny", "katie", "kelley", "katie", "amy"];

// Should return in no particular order:
// ["katie", "amy"]

function get_duplicate_students(hackbrightStudents)
{
    var dup_list = [];
    hackbrightStudents.sort();
    len = (hackbrightStudents.length - 1);
    for ( i = 0; i < len; i++)
    {
        if (hackbrightStudents[i] == hackbrightStudents[i + 1])
        {
            dup_len = dup_list.length;
            if (hackbrightStudents[i] != dup_list[dup_len - 1])
            {
                dup_list[i] = hackbrightStudents[i];
            }
        }
    }
    return dup_list;
}

console.log(get_duplicate_students(hackbrightStudents));

```javascript

var classroomIds = ["47","12", "19", "22", "26", "99", "30", "50", "324", "003", "44",
    "33", "346", "354", "44", "235", "45", "34", "44", "590", "09", "099", "0", "1", "3", 
    "33", "999", "9"]


// Should return in no particular order:
// ["44", "33"]
```
var classroomIds = ["47","12", "19", "22", "26", "99", "30", "50", "324", "003", "44",
    "33", "346", "354", "44", "235", "45", "34", "44", "590", "09", "099", "0", "1", "3", 
    "33", "999", "9"]


// Should return in no particular order:
// ["44", "33"]

function get_duplicate_classroomIds(classroomIds)
{
    var dup_list = [];
    classroomIds.sort();
    len = (classroomIds.length - 1);
    for ( i = 0; i < len; i++)
    {
        if (classroomIds[i] === classroomIds[i + 1])
        {   
            dup_len = dup_list.length;
            if (classroomIds[i] != dup_list[dup_len - 1])
            {
                dup_list[i] = classroomIds[i];
            }
        }
    }
    return dup_list;
}

console.log(get_duplicate_classroomIds(classroomIds));





```javascript 
var randomJunkIFound = ["katie", "true", true, 19, "gargoyles", "!", 2 + 3, "2 + 3", 
    19, "19", 19 === "19", 6, false, false]

// Should return in no particular order:
// [19, false]

function get_duplicate_classroomIds(randomJunkIFound)
{
    var dup_list = [];
    randomJunkIFound.sort();
    len = (randomJunkIFound.length - 1);
    for ( i = 0; i < len; i++)
    {
        if (randomJunkIFound[i] === randomJunkIFound[i + 1])
        {   
            dup_len = dup_list.length;
            if (randomJunkIFound[i] != dup_list[dup_len - 1])
            {
                dup_list[i] = randomJunkIFound[i];
            }
        }
    }
    return dup_list;
}

console.log(get_duplicate_classroomIds(randomJunkIFound));






