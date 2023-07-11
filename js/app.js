const formAddTodo = document.querySelector('.form-todo')
const todosContainer = document.querySelector('.content-todos')


formAddTodo.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = event.target.inputTodo.value.trim()
    if (inputValue.length) {
        todosContainer.innerHTML += `
            <li>
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