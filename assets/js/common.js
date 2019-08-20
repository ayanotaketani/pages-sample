$(function() {
  // ----------------------------------------
    // ウィンドウサイズ取得
  // ----------------------------------------
  // 幅
  var windowWidth = $(window).width();
  // 高さ
  var windowHeight = $(window).height();
  // ----------------------------------------

  // ----------------------------------------
    // flexboxの制御
  // ----------------------------------------
  if (window.innerWidth >= 768) {
    // 小要素が.l-flex-col-3の場合、親要素にclassを追加する
    $('.l-flex-col-3').parent().addClass('l-flex-parent-3');
    // 小要素が.l-flex-col-4の場合、親要素にclassを追加する
    $('.l-flex-col-4').parent().addClass('l-flex-parent-4');
  }
  // ----------------------------------------

  // ----------------------------------------
    // トップに戻るボタン
  // ----------------------------------------
  var pagetop = $('#page_top');
  pagetop.hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) { //100pxスクロールしたら表示
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  // ----------------------------------------

  // ----------------------------------------
  // スムーススクロール
  // ----------------------------------------
  $('a[href^="#"]').click(function() {
    var time = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" ? 'html' : href);
    var distance = target.offset().top;
    $("html, body").animate({
      scrollTop: distance
    }, time, "swing");
    return false;
  });
  // ----------------------------------------

// jqueryはここから記述を足す
var titleHeight = $('.animation-title').innerHeight();
$('.hexa-box01').css('margin-bottom',-titleHeight / 2);
$('.hexa-box02').css('margin-top',-titleHeight / 2);
});

// jsはここから記述を足す
