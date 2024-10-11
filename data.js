var studentScore = [{
        name: 'Andi',
        score: 90
    },
    {
        name: 'Rudi',
        score: 80
    },
    {
        name: 'Dira',
        score: 100
    },
];
var HighestStudentScore = studentScore[0];

studentScore.forEach(student => {
    if (student.score > HighestStudentScore.score) {
        HighestStudentScore = student;
    }
});