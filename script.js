const faqs = document.querySelectorAll('.faqbox');
faqs.forEach(faqbox => {
    const icons = faqbox.querySelector('.icons');


    const answer = faqbox.querySelector('.answer');


    faqbox.addEventListener('click', () => {

        if (icons.classList.contains('active')) {
            icons.classList.remove('active');
            answer.style.maxHeight = null;
            answer.style.padding = "0px 30px";
        } else {
            icons.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
            answer.style.borderTop = '2px solid black';
            answer.style.padding = "30px";
        }
    })
})

const footerLinks = document.querySelectorAll('.footer-items a')
footerLinks.forEach(element => {
    element.addEventListener('click', function (event) {
        event.preventDefault();
    });
});

const transBtn = document.getElementsByClassName('transBtn')[0];

transBtn.addEventListener('click', () => {
    const currentBorder = transBtn.style.border;

    if (currentBorder === "2px solid white") {
        transBtn.style.border = "1px solid white";
        transBtn.style.position = "";
    } else {
        transBtn.style.border = "2px solid white";
        transBtn.style.position = "relative";
    }
});

const footerBTN = document.getElementsByClassName('footer-BTN')[0];

footerBTN.addEventListener('click', () => {
    const currentBorder = footerBTN.style.border;

    if (currentBorder === "2px solid white") {
        footerBTN.style.border = "1px solid white";
    } else {
        footerBTN.style.border = "2px solid white";
    }
});