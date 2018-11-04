var enterButton = document.querySelector('.enter_button');
var input       = document.querySelector('.input');
var list        = document.querySelector('.list');

// нужно для чека, написано что либо или нет
function inputLength() {
	return input.value.length;
}

// создаем новую задачу
function createListElement() {
  var task = document.createElement('div');
  task.className = "task";
  list.appendChild(task); // создаем общий блок задачи
  var p = document.createElement('p');
  p.innerHTML = input.value;
  task.appendChild(p); // в блоке задачи создаем текстовый элемент, в который кладем значение из input
  input.value = "";
  var nav = document.createElement('div');
  nav.className = "nav hidden";
  task.appendChild(nav);
  var nav_done = document.createElement('div');
  nav_done.className = "nav_done";
  nav_done.innerHTML = "Done";
  nav.appendChild(nav_done);
  var nav_cancel = document.createElement('div');
  nav_cancel.className = "nav_cancel";
  nav_cancel.innerHTML = "Cancel";
  nav.appendChild(nav_cancel);
  var nav_edit = document.createElement('div');
  nav_edit.className = "nav_edit";
  nav_edit.innerHTML = "Edit";
  nav.appendChild(nav_edit); // создаем поле навигации с тремя кнопками. По умолчанию скрыто

//функция чека открыто или закрыто поле навигации
  function handler() {
    var isDisactive = nav.classList.contains('hidden');
    if (isDisactive) {
      remove();
    } else {
      add();
    }
  }

//удаляем класс
  function remove() {
    nav.classList.remove('hidden');
  }
//добавляем класс
  function add() {
    nav.classList.add('hidden');
  }

//удаляем задачу
  function deleteTask() {
    list.removeChild(task)
  }

  nav_cancel.addEventListener('click', deleteTask); // при нажатии на кнопку отмены, задача удаляется
  task.addEventListener('click', handler); // при нажатии на блок задачи открывается поле навигации
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

enterButton.addEventListener("click", addListAfterClick); // добавление задачи с клика по кнопке
input.addEventListener("keypress", addListAfterKeypress); // добавление задачи с кнопки на клавиатуре
