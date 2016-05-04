# Excellence Students Grades - API

This web service created to provide numerous ways to retrieve information about the excellence students.

The data return in JSON format. It's containing an array of students or a single object in one of the cases.

####All the requests must be in GET method.

_For more information about the Methods:_

[Get All Excellence Student](#all)

[Get Student By ID](#byID)

[Get Student By Year](#byYear)


---
<a name="all">
###Get All Excellence Student
In order to get all the students, you should use:
```
http://excellence-students.herokuapp.com/getAllExcellenceStudent
```
**Parameters**: none

**Response**: JSON object, contains array of students
```javascript
{
    "students":[
        {
            "name": "Denis",
            "id": "123123",
            "year": "2016",
            "grade": "90"
        },
        {
            "name": "David",
            "id": "989898",
            "year": "2016",
            "grade": "92"
        }
    ]
}
```
---
<a name="byID">
###Get Student By ID
In order to get a specifically student, you should use:
```
http://excellence-students.herokuapp.com/getStudentByID/<ID_number>
```
**Parameters**: ID number (int)

**Response**: JSON object of student
```javascript
{
  "name": "Ofir",
  "id": "55555",
  "year": "2000",
  "grade": "99"
}
```

---
<a name="byYear">
###Get Student By Year
In order to find information about students depending on the year of study, you should use:
```
http://excellence-students.herokuapp.com/getStudentByYear//<Year>
```
**Parameters**: Year of study (int)

**Response**: JSON object, contains array of students
```javascript
{
    "students":[
        {
            "name": "Adi",
            "id": "11111",
            "year": "1991",
            "grade": "90"
        },
        {
            "name": "Romi",
            "id": "22222",
            "year": "1991",
            "grade": "100"
        }
    ]
}
```

---


| Request       | Data          | Empty  |
| ------------- |:-------------:| -----:|
| Get all students| { "students" : [ { }, { }... ] } - array of objects  | { "students" : [ ] } - empty array |
| Get student by ID | { } - object      |  null |
| Get students by year | { "students" : [ { }, { }... ] } - array of objects       |    { "students" : [ ] } - empty array |
