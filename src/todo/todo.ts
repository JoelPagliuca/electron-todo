import { ipcRenderer } from "electron";

function markDone(todoId:string) {
  let todoItem = document.getElementById(todoId);
  todoItem.classList.toggle('todo-done');
  todoItem.classList.toggle('has-text-success');
}

class TodoItem {
  text: string;

  constructor(text: string) {
    this.text = text;
  }

  toNode(): Node {
    let node = document.createElement('div');
    let htmlText = `<a class="panel-block todo-item">
      <span>${this.text}</span>
    </a>`
    node.innerHTML = htmlText.trim();
    return node.firstChild;
  }
}

function setOnClickListeners() {
  const toggleStrikethrough = (event: MouseEvent) => { 
    let target: HTMLLinkElement;
    target = <HTMLLinkElement> event.target;
    target.classList.toggle('todo-done');
   };

  let todoItems = document.getElementsByClassName('todo-item');
  for (let i = 0; i < todoItems.length; i++) {
    const todoItem = todoItems.item(i);
    todoItem.addEventListener("click", toggleStrikethrough);
  }
}

function getInitialList() {
  let todoList: string
  todoList = ipcRenderer.sendSync("load-file");

  let todoItems = todoList.split(',').map((x: string) => {return new TodoItem(x)});
  let todoPanel = document.getElementById('todo-panel');
  todoItems.forEach((item: TodoItem) => {
    todoPanel.appendChild(item.toNode());
  });

  setOnClickListeners();
}

getInitialList();