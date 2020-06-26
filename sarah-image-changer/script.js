const pics = ['url("https://imgur.com/PJxmtfl.jpg")', 'url("https://imgur.com/ZHbHKib.jpg")', 'url("https://imgur.com/1TTDuH1.jpg")','url("https://imgur.com/bWYi85z.jpg")', 'url("https://imgur.com/Y7REuTt.jpg")', 'url("https://imgur.com/tUBYqIN.jpg")', 'url("https://imgur.com/J3GmNnV.jpg")', 'url("https://imgur.com/hSEF5hs.jpg")', 'url("https://imgur.com/pAO2q94.jpg)','url("https://imgur.com/8fcM7Er.jpg")'];
const words =["Amazing", "Kind", "Nice", "Hardworking", "The coolest", "Great Friend", "Smart", "fabulous"];
const body = document.querySelector('body');
const text = document.querySelector('.text');
const btn = document.querySelector('.btn');

btn.addEventListener('click', imageChanger)

function imageChanger(){
    const imageIdx = Math.floor(Math.random()*pics.length)
    const textIdx = Math.floor(Math.random()*words.length)

    body.style.backgroundImage = pics[imageIdx]
    text.innerHTML = words[textIdx]
}