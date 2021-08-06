const topBtn = document.getElementById('top')
const bottomBtn = document.getElementById('bottom')

bottomBtn.addEventListener('click', function(e) {
    document.body.scrollTop += 600
    console.log("masuk")
})


function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}


const box = document.querySelector('#about');

document.addEventListener('scroll', function () {
    const messageText = isInViewport(box) ?
        'The box is visible in the viewport' :
        'The box is not visible in the viewport';

    console.log(messageText);

}, {
    passive: true
});