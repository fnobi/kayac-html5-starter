page-title
  h2 { title }
  
  style(type="text/scoped-css").
    :scope h2 {
      font-weight: bold;
      margin-bottom: 0.5em;
    }
  
  script(type="es6").
    this.title = opts.title