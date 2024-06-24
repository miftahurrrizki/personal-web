
// DOWNLOAD MY RESUME
document.querySelector('.btn-resume').addEventListener('click', function() {
    const fileUrl = './assets/CV_Miftahur Rizki.pdf';
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'CV_MIftahur Rizki.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});