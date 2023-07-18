const formAddTodo = document.querySelector('.form-todo')
const todosContainer = document.querySelector('.content-todos')
const searchTodos = document.querySelector('.form-search input')

const showTodo = inputValue => {
    todosContainer.innerHTML += `
        <li class="content-li">
            <span>${inputValue}</span>
            <img class="trash-icon" src="./assets/recycle-bin-icon.png">
        </li>
    `
}

const resetInputValue = event => {
    event.target.reset()
}

const addTodo = event => {
    event.preventDefault()
    const inputValue = event.target.inputTodo.value.trim()
    const isValueValid = inputValue.length 

    if (isValueValid) {
        showTodo(inputValue)
        resetInputValue(event)
        return
    }
    alert('É necessário dar um nome a tarefa!')
}

const convertInArray = domList => Array.from(domList)

const removeTodo = event => {
    const clickedElement = event.target
    const classesOfClickedElement = convertInArray(clickedElement.classList)
    const isATrashIcon = classesOfClickedElement.includes('trash-icon')

    if (isATrashIcon) {
        clickedElement.parentElement.remove()
    }
}

const hideTodos = (todos, value) => {
    todos
        .filter(todo => !todo.textContent.toLowerCase().includes(value))
        .forEach(todo => {
            todo.classList.remove('content-li')
            todo.classList.add('hidden')
    })
}

const showTodos = (todos, value) => {
    todos
        .filter(todo => todo.textContent.toLowerCase().includes(value))
        .forEach(todo => {
            todo.classList.remove('hidden')
            todo.classList.add('content-li')
    })
}


const searchTodo = event => {
    const inputValue = event.target.value.trim().toLowerCase()
    const todos = convertInArray(todosContainer.children)

    hideTodos(todos, inputValue)
    showTodos(todos, inputValue)
        
}



formAddTodo.addEventListener('submit', addTodo)
todosContainer.addEventListener('click', removeTodo)
searchTodos.addEventListener('input', searchTodo)