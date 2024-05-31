$ ( function () {

  // 네비게이션
  $( '.gnb > li' ).hover(function(){
    $( this ).find( '.sub' ).stop().slideDown();
  },
  function() {
    $( this ).find( '.sub' ).stop().slideUp();
  } );

  
  //모바일 네비게이션
  $( '.op' ).click( function (){
    $( '.m-nav' ).show();
    $( '.op' ).hide();
    $( '.cls' ).show();
  } );

  $( '.cls' ).click( function (){
    $( '.m-nav' ).hide();
    $( '.cls' ).hide();
    $( '.op' ).show();
  } );


  //페이드슬라이드
  // 슬라이드(페이드)
  var item = $ ( '.main-slide ul li' );
  var c = item.length;

  item.css( { display: 'none'} );
  item.eq(0).css( { display: 'block' } );

  var i = 0;
  function fade () {
    n = ( i + 1 ) % 2;
    item.eq(i).fadeOut();
    item.eq(n).fadeIn();
    i = n;
  }
    setInterval( fade, 3000 );


  // 롤링슬라이드
  var $slide = $('.slide').find('ul');
  var $slideWidth = $slide.children().outerWidth(); //배너 이미지의 폭
  var $slideLength = $slide.children().length; //배너 이미지의 갯수
  var rollingId;
  rollingId = setInterval( function() { rollingStart(); }, 2500); //다음 이미지로 롤링 애니메이션 할 시간차

  
  function rollingStart() {
    $slide.css('width', $slideWidth * $slideLength + 'px');
    $slide.animate( { left: -$slideWidth + 'px' }, 0, function() {
      //첫번째 이미지를 마지막 끝에 복사(이동이 아니라 복사)해서 추가
      $(this).append('<li>' + $(this).find('li:first').html() + '</li>');

      //뒤로 복사된 첫번째 이미즌 필요없으니 삭제
      $(this).find('li:first').remove();
      //다음 움직임을 위해서 배너 좌측의 위치값을 초기화
      $(this).css('left', 0);
    });
  }
  
} );