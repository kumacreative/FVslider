const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    effect: 'fade',
    fadeEffect : {
        crossFade: true
    },
    loop: true,
  
    autoplay: {
        delay: '3000',
        disableOnInteraction: false, // ユーザーが操作しても自動再生を継続
    },
    speed: 2000, // 2秒かけてフェード
  });