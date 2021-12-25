
$(document).ready(function(){
  $("#showing-design").click(function(){
      $("#hidden-design").toggle()
      $("#showing-design").toggle()
  });
  $("#hidden-design").click(function(){
      $("#showing-design").toggle()
      $("#hidden-design").toggle()
  })
  $("#showing-development").click(function(){
      $("#hidden-development").toggle()
      $("#showing-development").toggle()
  });
  $("#hidden-development").click(function(){
      $("#showing-development").toggle()
      $("#hidden-development").toggle()
  })
  $("#showing-product").click(function(){
      $("#hidden-product").toggle()
      $("#showing-product").toggle()
  });
  $("#hidden-product").click(function(){
      $("#showing-product").toggle()
      $("#hidden-product").toggle()
  })

});


$("#work4").mouseover(function(){
    $("#blank").show()
})
$("#work4").mouseout(function(){
   $("#blank").hide()
})
$("#work3").mouseover(function(){
    $("#hidden1").show()
})
$("#work3").mouseout(function(){
   $("#hidden1").hide()
})
$("#work2").mouseover(function(){
    $("#hidden2").show()
})
$("#work2").mouseout(function(){
   $("#hidden2").hide()
})
$("#delaniportfolio1").mouseover(function(){
    $("#hidden3").show()
})
$("#delaniportfolio1").mouseout(function(){
   $("#hidden3").hide()
})
$("#delani5").mouseover(function(){
    $("#hidden4").show()
})
$("#delani5").mouseout(function(){
   $("#hidden4").hide()
})
$("#work6").mouseover(function(){
    $("#hidden5").show()
})
$("#work6").mouseout(function(){
   $("#hidden5").hide()
})
$("#delani7").mouseover(function(){
    $("#hidden6").show()
})
$("#delani7").mouseout(function(){
   $("#hidden6").hide()
})
$("#work8").mouseover(function(){
    $("#hidden7").show()
})
$("#work8").mouseout(function(){
   $("#hidden7").hide()
})   

function ValidateEmail(mail)
{
    var name=document.getElementById("Fname").value;
     var email=document.getElementById("email").value;
     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.match(mailformat))
{
alert(name +"  we have received your email. Thank you for contacting us. ");
return true;
}
else
{
alert("You have entered an invalid email address!");
return false;
}
}





