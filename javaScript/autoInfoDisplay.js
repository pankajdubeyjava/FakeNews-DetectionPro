
  let mystring = "you are under control so, don't try to do anything wrong though our website thank you!";
  let myarray= mystring.split("");
  let looptimer;

  function framelooper(){
      if(myarray.length>0){
          document.getElementById("mytypingtext").innerHTML +=myarray.shift();
      }else{
          clearTimeout(looptimer);
      }
      
      looptimer=setTimeout('framelooper()',121);

  }