detail
  page-title(title="todo detail: { item.name }")
  
  section
    h3 件名:
    p: input(type="text" value="{ item.name }" onchange="{ saveName }")
  
  section
    h3 作成日:
    p { item.date }
  
  section
    h3 詳細:
    textarea(rows=10 cols=100 onchange="{ saveDescription }") { item.description }
  
  script(type="es6").
    const TodoList = require('../TodoList').default;

    const id = opts.id;
    const todoList = new TodoList();
    
    this.item = todoList.find(id) || {};
    this.item.date = this.item.date || "（不明）";
    
    this.saveName = (e) => {
      this.item.name = e.target.value;
      todoList.saveItem(id, this.item);
    };
    
    this.saveDescription = (e) => {
      this.item.description = e.target.value;
      todoList.saveItem(id, this.item);
    };
    
  style(type="text/scoped-css").
    :scope {
      padding: 1em;
    }
  
    :scope section {
      margin: 1em 0em;
    }    