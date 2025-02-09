const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const tasksList = document.querySelector('#tasksList');

btn.addEventListener('click', (e) => {
    if (input.value === '') return
    perform(input.value)
    input.value = ''
})

// some actions
function perform(value) {
    // ==> exit condition
    if (value.length > 60) {
        alert("The line length must not exceed 60 characters!")
        return;
    }


    // ==> creating elements
    const container = document.createElement('div');
    const flag = document.createElement('input');
    flag.className = 'checkbox';
    flag.type = 'checkbox';

    const taskDesc = document.createElement('p');
    taskDesc.className = 'taskDesc';
    taskDesc.textContent = value;

    const delBtn = document.createElement('img');
    delBtn.className = 'delBtn';
    delBtn.src = "img/garbage.png";


    // ==> giving some styles
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.width = "90%";
    container.style.height = "50px";
    container.style.paddingLeft = "20px";
    container.style.backgroundColor = "white";
    container.style.borderRadius = "15px";
    container.style.marginTop = "15px";
    container.style.marginLeft = "auto";
    container.style.marginRight = "auto";

    flag.style.width = "20px";
    flag.style.height = "20px";

    taskDesc.style.width = "90%";
    taskDesc.style.marginLeft = "30px";

    delBtn.style.width = "20px";
    delBtn.style.height = "20px";
    delBtn.style.marginRight = "20px";


    // ==> giving children
    container.appendChild(flag);
    container.appendChild(taskDesc);
    container.appendChild(delBtn);
    tasksList.appendChild(container);


    // ==> removing the task
    delBtn.addEventListener('click', () => {
        tasksList.removeChild(container);
    })
}
