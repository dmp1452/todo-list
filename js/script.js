let tasks = [];
function add_to(){
    tasks.push(document.getElementById('task_input').value)
    document.getElementById('task_input').value = '';
    display_tasks()
}
function remove(name){
    tasks.splice(tasks.indexOf(name),1)
    display_tasks()
}

function display_tasks(){
    let task_list =document.getElementById('task_list')
    task_list.innerHTML=''
    for(const task of tasks){
        let li = document.createElement('li');
        li.style.display = 'flex';

        let checkbox = document.createElement('input'); // Create checkbox
        checkbox.type = 'checkbox';

        let p = document.createElement('p')
        p.textContent=task

        let button = document.createElement('input');
        button.type ='button'
        button.onclick = function() { remove(task); }

        li.appendChild(button)
        li.appendChild(p)
        li.appendChild(checkbox)
        task_list.appendChild(li)
    }
}