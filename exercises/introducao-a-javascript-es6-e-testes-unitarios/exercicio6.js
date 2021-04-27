const trybeString = x => `Tryber ${x} aqui!`
//console.log(trybeString('Leandro'))

const skills = ['JavaScript', 'HTML', 'CSS', 'IOS', 'Run'];

const trybeSkills = x => `${x} minhas cinco principais habilidades são:
${skills[0]}
${skills[1]}
${skills[2]}
${skills[3]}
${skills[4]}  #goTrybe
`
console.log(trybeSkills(trybeString('Leandro')))