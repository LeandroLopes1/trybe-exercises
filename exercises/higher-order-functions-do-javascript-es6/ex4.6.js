const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notes = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
    const nameAndAverage = students.map((student, index) => ({
      name: student,
      average: (notes[index].reduce((acc, curr) => acc + curr, 0) / notes[index].length),
    }));
    return nameAndAverage;
  }

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

//const received = studentAverage()
//console.log(received);

assert.deepStrictEqual(studentAverage(), expected);

