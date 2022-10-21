const quotes = [
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    author: 'Walt Disney',
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: 'John Lennon',
  },
  {
    quote:
      'The world is a book and those who do not travel read only one page.',
    author: 'Saint Augustine',
  },
  {
    quote: 'Life is either a daring adventure or nothing at all.',
    author: 'Helen Keller',
  },
  {
    quote: 'To Travel is to Live',
    author: 'Hans Christian Andersen',
  },
  {
    quote: 'Only a life lived for others is a life worthwhile.',
    author: 'Albert Einstein',
  },
  {
    quote: 'You only live once, but if you do it right, once is enough.',
    author: 'Mae West',
  },
  {
    quote: 'Never go on trips with anyone you do ntot love.',
    author: 'Hemmingway',
  },
  {
    quote: 'We wander for distraction, but we travel for fulfilment.',
    author: 'Hilaire Belloc',
  },
  {
    quote: 'Travel expands the mind and fills the gap.',
    author: 'Sheda Savage',
  },
];

//명언 변수에 저장하기
const quote = document.querySelector('#quote span:first-child');

//저자 변수에 저장하기
const author = document.querySelector('#quote span:last-child');

// 랜덤으로 명언 가져와서 변수에 저장하기
// Math.floor는 소수점을 버리는 것(버림),
// Math.ceil은 소수점을 올리는 것(올림),
// Math.round는 소수점을 반올림 하는 것입니다.
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
