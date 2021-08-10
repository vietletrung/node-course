const tasks = {
    tasks:[{
        text: 'grocery shooping',
        completed: true   
    },
    {
        text: 'clean house',
        completed: false   
    },
    {
        text: 'cooking',
        completed: false   
    }],
    getTaskTodo() {
        return this.tasks.filter((task)=> !task.completed)
        
    }

}

const tasksTodo = tasks.getTaskTodo()
tasksTodo.forEach(element => {
    console.log(element.text)
});
//return tasksTodo

//console.log(tasks.getTaskTodo())