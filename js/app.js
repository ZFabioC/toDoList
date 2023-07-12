const formAddTodo = document.querySelector('.form-todo')
const todosContainer = document.querySelector('.content-todos')
const searchTodos = document.querySelector('.form-search input')

formAddTodo.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = event.target.inputTodo.value.trim()
    if (inputValue.length) {
        todosContainer.innerHTML += `
            <li class="content-li">
                <span>${inputValue}</span>
                <img class="trash-icon" src="./assets/recycle-bin-icon.png">
            </li>
        `
        event.target.reset()
        return
    }
    
    alert('É necessário dar um nome a tarefa!')
})

todosContainer.addEventListener('click', event => {
    const clickedElement = event.target
    if (Array.from(clickedElement.classList).includes('trash-icon')) {
        clickedElement.parentElement.remove()
    }
})

searchTodos.addEventListener('input', event => {
    const inputValue = event.target.value.trim().toLowerCase()
    
    Array.from(todosContainer.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
        .forEach(todo => {
            todo.classList.remove('content-li')
            todo.classList.add('hidden')
    })

    Array.from(todosContainer.children)
        .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
        .forEach(todo => {
            todo.classList.remove('hidden')
            todo.classList.add('content-li')
    })
})