// slider options
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-slider', {
        type       : 'loop',
        autoplay   : true,
        interval   : 2500,
        pagination: false,
    }).mount();
    new Splide('#flag-slider', {
        type       : 'loop',
        autoplay   : true,
        interval   : 2500,
        pagination : false,
        arrows: false,
        perPage    : 15,  // Görünen eleman sayısı
        perMove    : 1,   // Her hareket ettiğinde kayan eleman sayısı
        gap: "40px"
      }).mount();
});