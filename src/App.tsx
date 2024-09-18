import { useState } from 'react';
import './App.css'

import QUOTES from './json/quotes.json'

import QuoteText from './components/QuoteText/QuoteText';
import NextButton from './components/NextButton/NextButton';

const App = () => {
  let [index, setIndex] = useState(Math.floor(Math.random() * 43890))

  return (
    <div id='quote-box' className='container w-50 p-4 bg-light-subtle rounded-3'>
      <QuoteText text={(QUOTES as any)[index].Author}>
        {(QUOTES as any)[index].Quote}
      </QuoteText>
      <NextButton
        setQuote={() => {
          setIndex(Math.floor(Math.random() * 43890))
        }}
      >
        Next
      </NextButton>
    </div>
  );
}

export default App
