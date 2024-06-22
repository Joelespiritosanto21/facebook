document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const backToTopButton = document.getElementById('back-to-top');

    if (scrollPosition > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
