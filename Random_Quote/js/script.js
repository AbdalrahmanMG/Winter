quotes = [
  {
    qt: "“Be yourself; everyone else is already taken.”",
    writter: "― Oscar Wilde",
  },
  {
    qt: "“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”",
    writter: "― Albert Einstein",
  },
  {
    qt: "“So many books, so little time.”",
    writter: "― Frank Zappa",
  },
  {
    qt: "“You only live once, but if you do it right, once is enough.”",
    writter: "― Mae West",
  },
  {
    qt: "“الثقة بالنفس كلام فارغ ..سوف يدهشك كم الأشياء التي لا تعرفها أو لا تجيدها .. المهم أن تثق بقدرتك على أن تكون أفضل ..”",
    writter: "― أحمد خالد توفيق, قصاصات قابلة للحرق"
  }
];

var lastrandom ;

function getQuote() {
  var quote = document.getElementById("quoteTxt");
  var writer = document.getElementById("writter");
  var random;
  
  do {
    random = Math.floor(Math.random() * quotes.length);
  } while (random === lastrandom);
  lastrandom = random;

  var showQuote = quotes[random];
  console.log(random);

  quote.textContent = showQuote.qt;
  writer.textContent = showQuote.writter;
}
