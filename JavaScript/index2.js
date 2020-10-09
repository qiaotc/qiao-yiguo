


$.ajax({
  url: "../json/data.json",
  success: function (arr) {
    //水果
    var str = ` `;
    for (var i = 0; i < 6; i++) {
      str += `<li> <a href="${arr[i].src}">
      <img src="${arr[i].img}" alt="">
      <a>
      </li>`
    }
   
    $(".right-1").find('ul').html(str);
    $(".right-4").find('ul').html(str);
//海鲜
    var str = ` `;
    for (var j = 6; j < 12; j++) {
      str += `<li><a href="">
      <img src="${arr[j].img}" alt=""><a>
      </li>`
    }
    $(".right-2  ul").html(str);
    $(".right-5  ul").html(str);
    $(".right-7  ul").html(str);
  

   



//肉诶
    var str = `<a href="">
    <img src="${arr[12].img}" alt=""><a> `;
    $(".right-3 .col1").html(str);
    $(".right-6 .col1").html(str);
    $(".right-8 .col1").html(str);

    var str = ` `;
    for (var j = 13; j < 17; j++) {
      str += `<li><a href="">
      <img src="${arr[j].img}" alt=""><a>
      </li>`
    }
    $(".right-3  .col2  ul").html(str);
    $(".right-6  .col2  ul").html(str);
    $(".right-8  .col2  ul").html(str);

    
    var str = `<a href="">
    <img src="${arr[17].img}" alt=""><a> `;
    $(".right-3 .col3").html(str);
    $(".right-6 .col3").html(str);
    $(".right-8 .col3").html(str);

    var str = ` `;
    for (var j = 18; j < 20; j++) {
      str += `<li><a href="">
      <img src="${arr[j].img}" alt=""><a>
      </li>`
    }
    $(".right-3  .logo-list ul").html(str);
    $(".right-6  .logo-list ul").html(str);
    $(".right-8  .logo-list ul").html(str);

    
  },




  
  error: function (msg) {
    console.log(msg);}
  })
