$(function() {
	$('.Toggle').click(function() {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
     $('.NavMenu').addClass('active'); //クラスを付与
     } else {
          $('.NavMenu').removeClass('active'); //クラスを外す
     }
	});
});









jQuery(function($) {
    $('.mainimg_w').bgSwitcher({
        images: ['images/mainimg1.jpg','images/mainimg2.jpg','images/mainimg3.jpg'], // 切り替える背景画像を指定
        interval: 6000, // 背景画像を切り替える間隔を指定 3000=3秒
        loop: true, // 切り替えを繰り返すか指定 true=繰り返す false=繰り返さない
        shuffle: false, // 背景画像の順番をシャッフルするか指定 true=する false=しない
        effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
        duration: 1600, // エフェクトの時間を指定します。
        easing: "linear" // エフェクトのイージングをlinear,swingから指定
    });
});








(function($){
	$(function(){

		$('.loopslide ul').simplyScroll({
			autoMode: 'loop',
			speed: 1,
			frameRate: 60,
			horizontal: true,
			pauseOnHover:	false,
			pauseOnTouch: false
		});
		
	});	
})(jQuery);







// .s_01 .accordion_one
$(function(){
  //.accordion_oneの中の.accordion_headerがクリックされたら
  $('.s_01 .accordion_one .accordion_header').click(function(){
    //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
    $(this).next('.accordion_inner').slideToggle();
    $(this).toggleClass("open");
  });
});


$(function(){
  $('.slider').slick({
    autoplay: true, //自動でスクロール
    autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
    speed: 5000, //スライドが流れる速度を設定
    cssEase: "linear", //スライドの流れ方を等速に設定
    slidesToShow: 5, //表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, //矢印非表示
    pauseOnFocus: false, //スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, //スライダーにマウスホバーした時にスライドを停止させるか
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3, //画面幅750px以下でスライド3枚表示
        }
      }
    ]
  });
});






$(function () {
  $(".js-title").on("click", function() {
    $(this).next().slideToggle(200);
    $(this).toggleClass("open",200);
  });
});






// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

//ふわっと動くきっかけのクラス名と動きのクラス名の設定
$('.fadeUpTrigger').each(function(){ //fadeInUpTriggerというクラス名が
  var elemPos = $(this).offset().top-50; //要素より、50px上の
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');
    // 画面内に入ったらfadeInというクラス名を追記
  }else{
    $(this).removeClass('fadeUp');
    // 画面外に出たらfadeInというクラス名を外す
  }
});

//関数でまとめることでこの後に違う動きを追加することが出来ます
$('.fadeDownTrigger').each(function(){ //fadeInDownTriggerというクラス名が
  var elemPos = $(this).offset().top-50; //要素より、50px上の
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeDown');
    // 画面内に入ったらfadeDownというクラス名を追記
  }else{
    $(this).removeClass('fadeDown');
    // 画面外に出たらfadeDownというクラス名を外す
  }
});


}//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


// アコーディオン：みんなのSDGs連携賞応募一覧
$(function(){
  $('.accordion-title').on('click', function(){
    $(this).toggleClass('active');
    $(this).next('.accordion-content').slideToggle(300);
  });
});