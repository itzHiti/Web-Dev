document.getElementById('add-todo').addEventListener('click', function() {
    var input = document.getElementById('new-todo');
    if(input.value.trim() === '') {
        return;
    }
    addTodo(input.value);
    input.value = '';
});

function addTodo(text) {
    var li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox" class="toggle-todo">
        <label>${text}</label>
        <i class="fas fa-trash delete-todo"></i>
    `;
    li.classList.add('todo-item');
    document.getElementById('todo-list').appendChild(li);

    li.querySelector('.toggle-todo').addEventListener('change', function() {
        li.classList.toggle('done');
    });

    li.querySelector('.delete-todo').addEventListener('click', function() {
        document.getElementById('todo-list').removeChild(li);
    });
}