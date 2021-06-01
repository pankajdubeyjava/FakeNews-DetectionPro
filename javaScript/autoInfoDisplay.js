
  let mystring = "The crisis we face about 'truth' and reliable facts is predicted less on the ability to get people to believe the wrong* thing as it is on the ability to get people to doubt the right thing";
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
