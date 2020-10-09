  //手机验证

window.onload = function(){

  var oPhone = document.getElementById("phone")
  var oPhone_span = document.getElementById("pvcc")
  
  oPhone.onclick = function(){
    oPhone_span.style.opacity = "1"
    oPhone_span.innerHTML = '请输入11位纯数字手机号';
    oPhone_span.style.color = 'grey';
 
  
  }
  oPhone.onblur = function(){
    oPhone_span.style.opacity = "0"
  }
  
  oPhone.onblur = function(){
    var oValue = this.value
  
  
    if(!oValue){
      oPhone_span.style.opacity = "0";
    }else{
         if(  !/^1\d{10}$/.test(oValue)){
  
               oPhone_span.style.opacity = "1"
              oPhone_span.style.color = " red"
              oPhone_span.innerHTML = "🙅‍♂️请输入十一位纯数字手机号"
          }else{
            oPhone_span.style.opacity = "1"
            oPhone_span.style.color = 'green';
              oPhone_span.innerHTML = "👀你输入的手机号符合规范"
          }
  
  
  
  }
  
  
  
    }
  

    var oPassword = document.getElementById("password")
    var oPassword_span = document.getElementById("psw")
    var oYesPassword = document.getElementById("yesPassword")
    var oYesPassword_span = document.getElementById("ypsw")
   

//获取焦点出现提示
    oPassword.onfocus = function(){
      oPassword_span.style.opacity = '1';
      oPassword_span.innerHTML = '6～16个字符，区分大小写';
      oPassword_span.style.color = 'grey';
    }

//shiqv   xiaoshi
    oPassword.onblur = function () {
        oPassword_span.style.opacity = '0';
      }
      oPassword.onblur = function () {

        var oValue = this.value;

         
   
    if(!oValue){
      oPassword_span.opacity = "0";
    }else{
         if(  /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])\S*$/.test(oValue)){

          oPassword_span.style.opacity = "1"
          oPassword_span.style.color = 'green';
          oPassword_span.innerHTML = "👀你输入的密码符合规范"
        }else{
         oPassword_span.style.opacity = "1"
        oPassword_span.style.color = " red"
        oPassword_span.innerHTML = "🙅‍♂️请输入符合规范的密码"
        }
  }
      }
      oYesPassword.oninput = function(){
        oYesPassword_span.style.opacity = '1';
        oYesPassword_span.innerHTML = '请再次输入密码';
        oYesPassword_span.style.color = 'grey';
      }

oYesPassword.onfocus = function(){

  if(oPassword.value  == oYesPassword.value){
    oYesPassword_span.style.opacity = '1';
    oYesPassword_span.innerHTML = '👀成功';
    oYesPassword_span.style.color = 'green';
  }else{
    oYesPassword_span.style.opacity = '1';
    oYesPassword_span.innerHTML = '请输出相同密码';
    oYesPassword_span.style.color = 'red';
  }


}



  }
  