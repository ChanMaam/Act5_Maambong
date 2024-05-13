document.addEventListener('DOMContentLoaded', function () {
    const emailIcon = document.querySelector('.contact-item:nth-child(1)');
    const phoneIcon = document.querySelector('.contact-item:nth-child(2)');
    const telephoneIcon = document.querySelector('.contact-item:nth-child(3)');

    emailIcon.addEventListener('click', function () {
        window.location.href = 'mailto:christian09134maambong@gmail.com';
    });

    phoneIcon.addEventListener('click', function () {
        window.location.href = 'tel:+639559276928';
    });

    telephoneIcon.addEventListener('click', function () {
        window.location.href = 'tel:0888805431';
    });
});
