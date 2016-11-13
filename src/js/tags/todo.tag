<todo>
  <header riot-tag="page-title" title="todo" />
  <ul>
    <li each="{ list }" onclick="{ say }">
      <input type="checkbox" onchange="{ checkList }" />
      <a href="#todo/{ id }">{ name }</a>
    </li>
  </ul>

  <div riot-tag="add-button" />

  <script type="es6">
    const TodoList = require('../TodoList').default;
    
    const todoList = new TodoList();
    
    this.list = todoList.list;
    
    todoList.on('change', (list) => {
        this.list = list;
        this.update();
    });
    
    this.tags['add-button'].on('addClick', () => {
        todoList.add({
            name: prompt('タスクの名前を入れましょう')
        });
    });
    
    this.checkList = (e) => {
        todoList.reduce(e.item.id);
    };
  </script>    
    
  <style type="text/scoped-css">
    :scope {
        padding: 1em;
    }
  </style>
</todo>
