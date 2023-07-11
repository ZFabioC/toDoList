const formAddTodo = document.querySelector('.form-todo')
const todosContainer = document.querySelector('.content-todos')


formAddTodo.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = event.target.inputTodo.value.trim()
    if (inputValue.length) {
        todosContainer.innerHTML += `
            <li>
                <span>${inputValue}</span>
                <i>
                    <img class="trash-icon" src="./assets/recycle-bin-icon.png">
                </i>
            </li>
        `

        event.target.reset()
        return
    }
    
    alert('É necessário dar um nome a tarefa!')
})
