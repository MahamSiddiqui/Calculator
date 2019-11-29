$(document).ready (function (e){
    $('.btn').click(function(e) {
      $("#result-disply").val($("#result-disply").val() + $(this).val())
   
    });

    $('#Remove').click(function(e) {
        $('#result-disply').val('') ;
     
    });
    $('#equal').click(function(e){
        $('#result-disply').val(eval($('#result-disply').val()));
    });

});
