document.getElementById('header-container').style.backgroundColor = 'green'

document.querySelector('.emergency-tasks').style.backgroundColor = 'green'
let emergencyCabeçalhos = document.querySelectorAll('.emergency-tasks h3')
for (let emergencyCabeçalho of emergencyCabeçalhos ) {
    emergencyCabeçalho.style.backgroundColor = 'black'
}

document.querySelector('.no-emergency-tasks').style.backgroundColor = 'blue'
let noEmergencyCabeçalhos = document.querySelectorAll('.no-emergency-tasks h3');
for (let noEmergencyCabeçalho of noEmergencyCabeçalhos ) {
    noEmergencyCabeçalho.style.backgroundColor = 'magenta' 
}

document.getElementById('footer-container').style.backgroundColor = 'red'