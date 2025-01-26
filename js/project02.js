const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const filterButtons = document.querySelectorAll('.filter-btn');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Render tasks
function renderTasks(filter = 'all') {
    taskList.innerHTML = '';
    tasks
        .filter(task => {
            if (filter === 'all') return true;
            if (filter === 'completed') return task.completed;
            if (filter === 'pending') return !task.completed;
        })
        .forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.className = task.completed ? 'completed' : '';
            taskItem.draggable = true;
            taskItem.innerHTML = `
                <span>${task.text}</span>
                <div class="actions">
                    <button class="edit-btn" data-index="${index}">Edit</button>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                </div>
            `;
            taskList.appendChild(taskItem);

            // Drag and drop functionality
            taskItem.addEventListener('dragstart', () => taskItem.classList.add('dragging'));
            taskItem.addEventListener('dragend', () => taskItem.classList.remove('dragging'));
        });

    saveTasks();
}

// Add task
addTaskButton.addEventListener('click', () => {
    const text = newTaskInput.value.trim();
    if (text) {
        tasks.push({ text, completed: false });
        newTaskInput.value = '';
        renderTasks();
    }
});

// Mark task as completed or pending
taskList.addEventListener('click', e => {
    if (e.target.tagName === 'SPAN') {
        const index = Array.from(taskList.children).indexOf(e.target.parentElement);
        tasks[index].completed = !tasks[index].completed;
        renderTasks();
    }
});

// Edit task
taskList.addEventListener('click', e => {
    if (e.target.classList.contains('edit-btn')) {
        const index = e.target.dataset.index;
        const newText = prompt('Edit task:', tasks[index].text);
        if (newText) {
            tasks[index].text = newText;
            renderTasks();
        }
    }
});

// Delete task
taskList.addEventListener('click', e => {
    if (e.target.classList.contains('delete-btn')) {
        const index = e.target.dataset.index;
        tasks.splice(index, 1);
        renderTasks();
    }
});

// Filter tasks
filterButtons.forEach(button =>
    button.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        button.classList.add('active');
        renderTasks(button.dataset.filter);
    })
);

// Drag and drop reordering
taskList.addEventListener('dragover', e => {
    e.preventDefault();
    const draggingTask = document.querySelector('.dragging');
    const afterElement = Array.from(taskList.children).find(child => child.offsetTop > e.clientY);
    if (afterElement) {
        taskList.insertBefore(draggingTask, afterElement);
    } else {
        taskList.appendChild(draggingTask);
    }
});

// Initial render
renderTasks();
