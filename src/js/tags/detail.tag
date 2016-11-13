<detail>
  <header riot-tag="page-title" title="todo detail: { item.name }" />
  
  <section>
    <h3>件名:</h3>
    <p>
      <input type="text" value="{ item.name }" onchange="{ saveName }"/>
    </p>
  </section>

  <section>
    <h3>作成日:</h3>
    <p>{ item.date }</p>
  </section>
  
  <section></section>
    <h3>詳細:</h3>
    <textarea rows=10 cols=100 onchange="{ saveDescription }">{ item.description }</textarea>

  <script type="es6">
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
  </script>
    
  <style type="text/scoped-css">
    :scope {
      padding: 1em;
    }
  
    :scope section {
      margin: 1em 0em;
    }
  </style>
</detail>
