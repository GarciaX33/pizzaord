// JQuery Front End Logic
$(document).ready(function() {
  $('#orderForm').submit(function(event) {
    event.preventDefault();
    var size = $('input[name=size]:checked').val();
    var crust = $('input[name=crust]:checked').val();
    var cheese = $('input[name=cheese]:checked').val();
    var vegetables = $('input:checkbox[name=vegetables]:checked').map(function() {
        return this.value;
