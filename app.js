const faq = document.querySelector('.faq');
const question = document.querySelector('.question');

question.addEventListener('click', () => {
    faq.classList.toggle('active');
});

let links = document.querySelectorAll(".links a");
let bodyId = document.querySelector("body").id;


for(let link of links){
    if(link.dataset.active == bodyId){
        WakeLockSentinel.classList.add("active");
    }
}