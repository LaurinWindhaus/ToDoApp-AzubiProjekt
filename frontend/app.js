document.getElementById('add-todo').addEventListener('click', function() {
    const todoText = document.getElementById('new-todo').value;

    if (todoText.trim() !== '') {
        const todoItem = document.createElement('div');
        todoItem.innerText = todoText;
        document.getElementById('todo-list').appendChild(todoItem);

        // Hier könnte ein Aufruf an das Backend gemacht werden, um das To-Do zu speichern

        document.getElementById('new-todo').value = '';
    }
});
