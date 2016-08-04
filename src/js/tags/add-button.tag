add-button
  button(onclick="{ click }") add

  script(type="es6").
    this.click = function () {
      this.trigger('addClick');
    };
  