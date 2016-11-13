<add-button>
  <button onclick={ click }>add</button>
  <script type="es6">
    this.click = function () {
      this.trigger('addClick');
    };
  </script>
</add-button>
