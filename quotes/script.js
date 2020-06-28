const quotes = [
    {
        name:'William James',
        quote:'Act as if what you do makes a difference. It does.',
    },
    {
        name:'Winston Churchill',
        quote:'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    },
    {
        name:'Zig Ziglar',
        quote:'What you get by achieving your goals is not as important as what you become by achieving your goals.',
    },
    {
        name:'Theodore Roosevelt',
        quote:"Believe you can and you're halfway there.",
    },
    {
        name:'Maya Angelou',
        quote:'If you don’t like something, change it.  If you can’t change it, change your attitude.',
    },
    {
        name:'Muhammad Ali',
        quote:'What you’re thinking is what you’re becoming.',
    },
    {
        name:'Harriet Tubman',
        quote:'Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.',
    },
    {
        name:'Rosa Parks',
        quote:'I have learned over the years that when one’s mind is made up, this diminishes fear; knowing what must be done does away with fear.',
    },
    {
        name:'Audre Lorde',
        quote:"If I didn’t define myself for myself, I would be crunched into other people’s fantasies for me and eaten alive.",
    },
    {
        name:'Viola Davis',
        quote:"I don’t have any time to stay up all night worrying about what someone who doesn’t love me has to say about me.",
    },
    {
        name:'Serena Williams',
        quote:"I am lucky that whatever fear I have inside me, my desire to win is always stronger.",
    },
]; 

const btn = document.querySelector('#btn');
const quoteSection = document.querySelector('#quoteSection');
const authorQuote = document.querySelector('#authorQuote');

btn.addEventListener('click', displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length);
    quoteSection.innerHTML = quotes[number].quote;
    authorQuote.innerHTML = quotes[number].name;
}