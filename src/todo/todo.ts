function markDone(todoId:string) {
	let todoItem = document.getElementById(todoId);
	todoItem.classList.toggle('todo-done');
	todoItem.classList.toggle('has-text-success');
}
