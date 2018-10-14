$(document).ready(function() {


  //Use the id of the form instead of #change
  $('#selectType').change(function() {
    //this is just getting the value that is selected
    var title = $(this).val();
    $('.modal-title').html(title);
    $('.modal').modal('show');
    $('.lime').hide();
    $(".amber").hide();
    $('.orange').show();

    $('#priority').click(function() {
      var priority = $(this).val();
      switch (priority) {
        case 'hi':
          $('.orange').show();
          $('.lime').hide();
          $(".amber").hide();
          break;
        case 'med':
          $('.amber').show();
          $('.lime').hide();
          $('.orange').hide();
          break;
        case 'low':
          $('.lime').show();
          $(".amber").hide();
          $('.orange').hide();
          break;
      }
    })
    $(function() {
      $("#datepicker").datepicker({
        format: "mm-dd-yyyy",
        autoclose: true,
        todayHighlight: true,
        startDate: '0'
      }).datepicker('update', new Date());
    });


//     $('form').submit(function(){
//       var fields = $(":input").serializeArray(event);
//       event.preventDefault();
//     var form = $('form').serializeArray();
// $('#results').append(form);
//
//     });

    })

});
