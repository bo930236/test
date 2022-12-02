var students = []

var peter = 
{
    name: 'peter',
    score: 40,
    height: "180",
    number: "23",
    parents: {
        name: 'jackson',
        phone: "0905"
    }
}
students.push(peter)

var weight = 'height'

console.log(students[0].name,students[0].score)
console.log(peter.number)
console.log(peter['height'])
console.log(peter.parents.phone)
console.log(peter['parents']['name'])