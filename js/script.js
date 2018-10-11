$(document).ready(function() {
  $('#completed').droppable({
    append: ".taskItem",
    revert: "invalid",
    tolerance: "fit",
    drop: function(event, ui) {
      var $item = ui.draggable;
      $item.fadeOut(function() {
        $item.css({
          "left": "",
          "top": "",
          "bottom": "10px",
          "right": "",
          "margin": "10px",
          "padding": "10px"
        }).fadeIn();
      });
      $item.appendTo(this);
      alert("dropped");
    }
  });




});
var count = 1;

$(document).on("click", "#add", function() {
  console.log('clicked');
  var list = '<li class="list-group-item taskItem">' + 'Task# ' + count + '<button type="button" class="btn btn-danger btn-sm remove" >' +
    '<span class="glyphicon glyphicon-remove"></span>' + 'Remove' + '</button>' + '</li>';
  count++;
  $('#task').append(list);
  $('.taskItem').draggable({
    //  accept: '.taskItem',
    activeclass: 'dropactive',
    tolerance: 'intersect',
    hoverClass: 'drophover',
    opacity: 1
  });

  console.log(count);
});
$(document).on("click", ".remove", function() {
  console.log('removed');
  $(this).closest("li").remove();
});
