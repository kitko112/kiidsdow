
<script
  src="https://code.jquery.com/jquery-3.6.0.slim.min.js"
  integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI="
  crossorigin="anonymous"></script>



$(document).ready(function () {
  console.log("document ready!");
  var navMap = {
    'Home': 'Kiidsdom金融教育',
    'Our Founders': '創設者',
    'Our Curriculum': 'カリキュラム概要',
    'Become Our Partners': 'Kiidsdomパートナー',
    'Book Online': 'オンライン予約',
    'Book Our Courses': 'オンライン予約',
    'Event': 'イベント予定',
    'Join Our Events': 'イベント予定',
    'Contact Us': 'お問い合わせ',
    'Contact us': 'お問い合わせ',
  };

  var isJp = /ja-jp/.test(window.location.pathname);

  var changeHref = function (index) {
    var aEle = $(this);
    var aText = aEle.text().trim();

    if (aText === 'Eng') {
      $(aEle).attr("href", window.location.pathname.replace(/\/ja-jp/gi, ''));
    } else if (aText === '日語') {
      $(aEle).attr("href", "/ja-jp" + window.location.pathname.replace(/\/ja-jp/gi, ''));
    } else if (isJp) {
      $(aEle).attr("href", "/ja-jp" + $(aEle).attr('href').replace(/\/ja-jp/gi, ''));
      if (navMap[aText]) {
        $(aEle).text(navMap[aText]);
        if (
          $(aEle).attr('href').indexOf(window.location.pathname.replace(/\/ja-jp/gi, '')) > 0 ||
          (aText === 'Home' && window.location.pathname.replace(/\/ja-jp/gi, '') === '/home')
        ) {
          $(aEle).parent().addClass('header-nav-item--active');
        }
      }
    }

  };

  $('.header-nav-list a').each(changeHref);
  $('#footer-sections a').each(changeHref);
  $('.header-title-logo a').each(changeHref);

});
