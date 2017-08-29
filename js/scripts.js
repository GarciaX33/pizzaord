// JQuery Front End Logic
$(document).ready(function() {
  $('#orderForm').submit(function(event) {
    event.preventDefault();
    var size = $('input[name=size]:checked').val();
    var crust = $('input[name=crust]:checked').val();
    var cheese = $('input[name=cheese]:checked').val();
    var vegetables = $('input:checkbox[name=vegetables1]:checked').map(function() {
      return this.value;
    }).get();
    var meats = $('input:checkbox[name=meats1]:checked').map(function() {
      return this.value;
    }).get();
    var newPizza = new Pizza(size, crust, cheese, vegetables, meats);
    newPizza.calculatePrice();
    $('#pizzaList').append('<li><span class="pizza">The Total: ' + newPizza.shortDescription());
    document.getElementById("orderForm").reset();
    $(".pizza").last().click(function() {
      $('#pizzaDetails').show();
      $('#pizzaDetails h4').text(newPizza.shortDescription());
      $('#vegetables1').text(newPizza.vegetables.join(", "));
      $('#meats1').text(newPizza.meats.join(", "));
    });
  });
});
// Back End Business Logic
function Pizza(size, crust, cheese, vegetables, meats) {
  this.size = size;
  this.crust = crust;
  this.cheese = cheese;
  this.vegetables = vegetables;
  this.meats = meats;
  this.price = 0;
}
Pizza.prototype.calculatePrice = function() {
  this.price = 0;
  if (this.size === 'small') {
    this.price += 5;
  } else if (this.size === 'medium') {
    this.price += 8;
  } else if (this.size === 'large') {
    this.price += 10;
  }
  if (this.crust === 'pan') {
    this.price += 2;
  } else if (this.crust === 'stuffed') {
    this.price += 3;
  }
  if (this.cheese === 'no') {
    this.price -= 1;
  }
  for (var i = 0; i < this.vegetables.length; i++) {
    this.price += 1;
  }
  for (var i = 0; i < this.meats.length; i++) {
    this.price += 2;
  }
};
Pizza.prototype.shortDescription = function() {
  return "A " + this.size + " " + this.crust + " pizza: $" + this.price;
};
