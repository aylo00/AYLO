//  ページめくりアニメーション

// 画面が読み込まれた時、is-slideを外し、アニメーションさせる
$(window).on('load', function(){
  $('body').removeClass('is-slide');
 });
 
$(function() {
  // ハッシュリンク(#)と別ウィンドウでページを開く場合は実行しない
 
  $('a:not([href^="#"]):not([target])').on('click', function(e){
    e.preventDefault();         // ページ遷移を一旦キャンセル
    url = $(this).attr('href'); // 遷移先のURLを取得
 
    if (url !== '') {
      $('body').addClass('is-slide-in'); // 画面遷移前のアニメーション is-slide-in
      $('.current').addClass('blue-to-black'); // 現在ページリンクの青を黒にフェード
 
      setTimeout(function () {
        window.location = url;  // 0.6秒後に取得したURLに遷移
      }, 600);
    }
    return false;
  }); 
});


//  ブックマーククリックアニメーション
$(function(){
  $('.bookmark').on('click', function(event){
    event.preventDefault();
    $(this).toggleClass('active');
  });
});

// モーダルウィンドウ
$(function(){
  $('.js-modal-open').each(function(){
    $(this).on('click',function(){
      var target = $(this).data('target');
      var modal = document.getElementById(target);
      $(modal).fadeIn();
      return false;
    });
  });
  $('.js-modal-close').on('click',function(){
    $('.js-modal').fadeOut();
    return false;
  }); 
});