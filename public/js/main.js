
$(document).ready(()=>{

    $('#search').on('focus',(e)=>{
        $('#search').parent().attr('style', '-webkit-box-shadow: 2px 2px 91px -2px rgba(85,48,78,1);        -moz-box-shadow: 2px 2px 91px -2px rgba(85,48,78,1);        box-shadow: 2px 2px 91px -2px rgba(85,48,78,1);border-radius: 10px 10px 0px 0px;');
        $('#result').toggle('slow');
    }).on('focusout',()=>{
    $('#search').parent().attr('style', ' box-shadow:0px;border-radius: 10px ;');
 $('#result').toggle('slow');
});



  $(".rounded-search-input").focusin(function(){
      $(".search-results").slideToggle("slow");
      
    }).focusout(function(){
      $(".search-results").slideToggle("slow");
    
  });

});
