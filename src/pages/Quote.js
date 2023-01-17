import React, { useState } from 'react';

const quotesDb = [
  'Pure mathematics is, in its way, the poetry of logical ideas.\n— Albert Einstein, German theoretical physicist',
  'Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers.\n— Shakuntala Devi, Indian writer and mental calculator',
  'Mathematics is the most beautiful and most powerful creation of the human spirit.\n— Stefan Banach, Polish mathematician',
  'We will always have STEM with us. Some things will drop out of the public eye and go away, but there will always be science, engineering, and technology. And there will always, always be mathematics.\n— Katherine Johnson, African-American mathematician',
  'Mathematics as an expression of the human mind reflects the active will, the contemplative reason, and the desire for aesthetic perfection. Its basic elements are logic and intuition, analysis and construction, generality and individuality.\n— Richard Courant, German-American mathematician',
  'As far as the laws of mathematics refer to reality, they are not certain, and as far as they are certain, they do not refer to reality.\n— Albert Einstein',
  'What is mathematics? It is only a systematic effort of solving puzzles posed by nature.\n— Shakuntala Devi',
  'Mathematics is the music of reason.\n— James Joseph Sylvester, English mathematician',
  'Mathematics knows no races or geographic boundaries; for mathematics, the cultural world is one country.\n— David Hilbert, German mathematician',
  'There should be no such thing as boring mathematics.\n— Edsger W. Dijkstra, Dutch systems scientist',
  'A mathematician who is not also something of a poet will never be a complete mathematician.\n— Karl Weierstrass, German mathematician',
];
const randomQuote = () => {
  const newQuote = quotesDb[Math.floor(Math.random() * (quotesDb.length - 1 - 0 + 1) + 0)];
  return newQuote;
};

const Quote = () => {
  const [quote, setQuote] = useState(randomQuote);
  return (
    <div className="page-container">
      <button className="new-quote" type="submit" onClick={() => setQuote(randomQuote)}>
        Random Quote
      </button>
      <p className="quote">{quote}</p>
    </div>
  );
};

export default Quote;
