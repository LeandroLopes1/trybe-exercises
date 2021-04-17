function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

// exercicio - 1

/*  O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e
  os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
  Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
  Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
  Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
*/

let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let getDaysList = document.querySelector('#days');                        // recupera a id days

  for (let index = 0; index < dezDaysList.length; index += 1) {             // loop para percorrer array 
    let day = dezDaysList[index];
    let dayItem = document.createElement('li');                             // variavel para criar a tag li   

    if (day === 24 | day === 31) {                                          // condição para feriado     
      dayItem.className = 'day holiday';                                    // coloca a class day holiday em li
      dayItem.innerHTML = day;                                              // coloca a li no contador 
      getDaysList.appendChild(dayItem);                                     // adiciona a li na id days
    } else if (day === 4 | day === 11 | day === 18) {                       // condiçao para sexta feira  
      dayItem.className = 'day friday';                                     // coloca a class day friday em li
      dayItem.innerHTML = day;                                              // coloca a li no contador 
      getDaysList.appendChild(dayItem);                                     // adiciona a li na id days
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.innerHTML = day;                                              // condiçaõ que os outros dia são normais                 
      dayItem.className = 'day';                                            // coloca a class day em li   
      getDaysList.appendChild(dayItem);                                     // adiciona a li na id days       
    }
  };
};
createDaysOfTheMonth();

// exercicio - 2

/*
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/

function createButton(buttonName) {                                   // funçao para criar botao
let ButtonContainer = document.querySelector('.buttons-container');   // selecionar o elemento no qual vamos adicionar o botao
let newButton = document.createElement('button');                     // criar o botão e passa tipo button
let newButtonId = 'btn-holiday';                                      // criar uma variavel que  vai guardar a string com a id desse nosso botão 
newButton.innerHTML = buttonName;                                     // adicionar o nome do nosso botão que recebemos por parametro na nossa funçao a propriedade innerHtml desse elemento que acabamos de criar
newButton.id = newButtonId;                                           // adicionar o id ao botão
ButtonContainer.appendChild(newButton);                               // adiciona o botão como filho da div que selecionamos no incio da nossa função
}

createButton('Feriados');

// exercicio - 3

/*
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
*/

function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');             // seleciona a Id do botão
  let getHolidays = document.querySelectorAll('.holiday')                    // seleciona a classe .holiday 
  let backgroundColor = 'rgb(238,238,238)';                                  // cria uma variavel para voltar a cor inicial 
  let setNewColor = 'white'                                                  // cria uma variavel para a mudança cor de fundo 

getHolidayButton.addEventListener('click', function() {                      // cria uma função para um click mudar e voltar a cor no botão feriado
  for (let index = 0; index < getHolidays.length; index +=1) {               // percorre o loop para os dias de feriado
  if (getHolidays[index].style.backgroundColor === setNewColor) {            // iguala a cor do fundo para branco
    getHolidays[index].style.backgroundColor = backgroundColor;              // quando clica no botão volta para sua cor original de fundo
  } else {
    getHolidays[index].style.backgroundColor = setNewColor;                  // quando clicar no botão pinta o fundo dos feriados de branco
 
  }
}
})
}

displayHolidays()

// exercicio - 4

/*
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/

function createButtonFriday(buttonName) {                                   // funçao para criar botao
  let buttonContainer = document.querySelector('.buttons-container');   // selecionar o elemento no qual vamos adicionar o botao
  let newButton = document.createElement('button');                     // criar o botão e passa tipo button
  let newButtonId = 'btn-friday';                                      // criar uma variavel que  vai guardar a string com a id desse nosso botão 

  newButton.innerHTML = buttonName;                                     // adicionar o nome do nosso botão que recebemos por parametro na nossa funçao a propriedade innerHtml desse elemento que acabamos de criar
  newButton.id = newButtonId;                                           // adicionar o id ao botão
  buttonContainer.appendChild(newButton);                               // adiciona o botão como filho da div que selecionamos no incio da nossa função
  }
  
  createButtonFriday('Sexta-Feira');

// exercicio - 5

/*
  Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/

function displayFridays(fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('day friday');
  let newFridayText = 'SEXTOU o/';

  getFridayButton.addEventListener('click', function() {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
    } else {
        fridays[index].innerHTML = fridaysArray[index];
      }
    }
  })
};

let dezFridays = [ 4, 11, 18, 25 ];
displayFridays(dezFridays);

// Exercicio 6

/*
Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, 
o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
*/

function dayMouseOver() {
let days = document.querySelector('#days');
days.addEventListener('mouseover', function(event) {
  event.target.style.fontSize = '30px';
  event.target.style.fontWeight = '600';   
  })
};

function dayMouseOut() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function(event) {
  event.target.style.fontSize = '20px'
  event.target.style.fontWeight = '200'
  })
}

dayMouseOver();
dayMouseOut()

//Exercicio - 7 

/*
Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" 
*/

function newTaskSpan(task) {
  let taskContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  taskContainer.appendChild(taskName);
}
newTaskSpan('Jogar: Fifa')

//Exercício - 8

/*
Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/

function newTaskDiv(color) {
  let taskContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');
  
  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  taskContainer.appendChild(newTask);
}
newTaskDiv('green')

// Exercício - 9

/*
Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
*/

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');
   
myTasks.addEventListener('click', function(event) {
  if(selectedTask.length === 0 ) {
    event.target.className = 'task selected';
  }else{
    event.target.className = 'task';
   }
 })  
};
setTaskClass();

// Exercício - 10

/*
Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
*/

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();

/*
Bônus
Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
Ao pressionar a tecla "enter" o evento também deverá ser disparado.
*/

function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};

addNewTask();