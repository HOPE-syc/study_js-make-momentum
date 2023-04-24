const quotes = [
  {
    quote: "노력은 배신하지 않는다.",
    author: "A.P. J. 압더 칼람",
  },
  {
    quote: "행복은 습관이다, 그것을 몸에 지니라.",
    author: "허버드",
  },
  {
    quote: "자신감 있는 표정을 지으면 자신감이 생긴다.",
    author: "찰스다윈",
  },
  {
    quote: "행동은 결과를 가져온다.",
    author: "콜린 파워",
  },
  {
    quote: "일을 즐기면 평생이 즐거움으로 가득찬다.",
    author: "존 D. 록펠러",
  },
  {
    quote: "어제와 똑같은 삶을 살면서 다른 미래를 기대하는 것은 정신병이다.",
    author: "아인슈타인",
  },
  {
    quote: "언제나 현재에 집중할 수 있다면 행복할 것이다.",
    author: "파울로 코엘료",
  },
  {
    quote: "지식은 힘인데 실천하지 않으면 소용없다.",
    author: "프랭클린",
  },
  {
    quote:
      "위대한 일을 이루기 위해서는 꿈을 꾸고 그 꿈을 실현시키기 위한 열정을 가져야 한다.",
    author: "월트 디즈니",
  },
  {
    quote: "일에 최선을 다하면 결국 보람을 느끼게 된다.",
    author: "루이 파스퇴르",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
