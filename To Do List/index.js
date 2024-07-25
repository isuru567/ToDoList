const inputField = document.getElementById('txt');
const submitButton = document.getElementById('btn');
const taskList = document.querySelector('.ulEl');

function addTask(){
   const taskText = inputField.value.trim();

   if (taskText !== "") {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
      listItem.className = 'taskItem';

      const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteBtn';

        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);

        inputField.value = '';

        deleteButton.addEventListener ('click', () => {
         taskList.removeChild(listItem);
        });
   }
}
submitButton.addEventListener('click', addTask);

inputField.addEventListener('keypress', (e) => {
   if (e.key === 'Enter') {
       addTask();
   }
});

