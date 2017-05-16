
$(document).ready(function(){
  
  //鼠標碰觸
  $(".child").hover(function(){
    $( this ).css("background-color","black");
    $( this ).css("color","white");
  },function(){
    
      $( this ).css("background-color","");  
      $( this ).css("color","black");
    
  })
  
  //點擊
  $(".child[name='aboutme']").click(function(){
    alert("gogo");
    $( this ).css("color","red");
    $('html,body').animate({scrollTop:$('#aboutme').offset().top},800);
  });
  $(".child[name='ex']").click(function(){
    $('html,body').animate({scrollTop:$('#ex').offset().top},800);
    alert("ex");
  });
    $(".child[name='works']").click(function(){
    alert("works");
$('html,body').animate({scrollTop:$('#works').offset().top},800);
  });
    $(".child[name='contact']").click(function(){
       $('html,body').animate({scrollTop:$('#contact').offset().top},800);
    alert("contact");
  });
});