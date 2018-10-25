var app = new Vue({
    el: '#app',
    data: {
      message: '안녕하세요 Vue!',
      show : true
    }
  })

  var app2 = new Vue({
    el: '.button1',
    methods :{
        showText: function(){
            let boolCheck = bool => bool == true;
            let reverseBool = target => boolCheck(target) ? false : true
            app.show = reverseBool(app.show);
            
        }
    }
  })
  
  
  