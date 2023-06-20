//IIFE(즉시실행함수 표현식)
;(function($, window, document, undefined){ //매개변수
   // ECMA Script 5 (이크마 스크립트 5)
   //객체

   const nutri = {
       init:       function(){ //메서드(리터럴함수)

         //  this.parallaxFn();   
           this.headerFn();   
           this.smoothScrollFn();         
           //this.section1Fn();
           this.section2Fn();
          
           //this.footerFn();
         
   
       },
      
       headerFn:   function(){

                    //헤더영역 스크롤 이벤트 (페럴럭스)
                    var $window  = $(window);
                    var $header  = $('#header');
                    var $mainBtn = $('#header .mainbtn');
                    var $top = $('#wrap #header .container .top');
                    var t = 0; // false === 0 같다는 표시   toggle
                    

                       
                       //마우스로 스크롤값이 아래로 30픽셀이상 >= 내려가면 
                       //선택자 헤더영역(#header)에 효과 이벤트가 발생하게 하라 
                       $window.scroll(function(){ //스크롤 이벤트
                          // console.log(  $window.scrollTop() ); //스크롤 탑값 확인
                          if( $window.scrollTop() >= 30 ){  //마우스로 스크롤값이 아래로 30픽셀이상 내려가면
                             $header.addClass('addHeader');  //헤더에 클래스 추가
                           //  $top.addClass('addHeader');  //헤더에 클래스 추가
                          // $appBtn.animate({left :'0px',right: '0px',bottom:'0px',borderRadius: '0px'},.1);
                       }
                       else{
                             $header.removeClass('addHeader'); //추가된 클래스 삭제
                          //   $top.removeClass('addHeader'); //추가된 클래스 삭제
                          // $appBtn.animate({left :'30px',right: '30px',bottom:'54px',borderRadius: '6px'},.1);  
                       }           
                       });


                       //  메뉴버튼 addCLass removeClass            
                       $mainBtn.each(function (idx) {
                          $mainBtn.eq(0).addClass('addClass'); 
                          $(this).on({
                             
                             mouseenter: function () {
                                $mainBtn.removeClass('addClass');  // 클래스 삭제
                                $mainBtn.eq(idx).addClass('addClass'); // 클래스 주입
                                // countFn(idx);
                             }
                          });
                    });


            
          
       },
       smoothScrollFn: function(){ //전체 공용 함수 스무스 스크롤링 이벤트 함수
              var $smoothBtn  = $('.smoothBtn');
              var $htmlBody   = $('html,body');
              

                 $smoothBtn.on({
                       click:  function(event){
                             event.preventDefault();
                          var $this = $(this); //현재 클릭한 이(this) 버튼

                             var url = $this.attr('href'); 
                       if(url !== undefined && url != ''){
                                $htmlBody.stop().animate({scrollTop:$( url ).offset().top-60},800,'easeInOutCirc');
                             
                       }
                    }
                 });

       },
       section2Fn: function(){

                      
           var   heart          = $('#section2 .heart');


           
              // heart 클릭 이벤트
              heart.each(function (idx) {
               $(this).on({
                   click: function () {
                   
                     heart.eq(idx).toggleClass('addHeart'); // 클래스 주입
                      
                   }
               });
           });



       },
       
     
       footerFn:  function(){
          
       

      }
      

   };  //객체 끝


   //객체.메서드 실행
   nutri.init(); //초기실행함수


})(jQuery, window, document); //아규먼트
