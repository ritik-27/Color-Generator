import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [value, setValue] = useState(10)
  const [color, setColor] = useState('');
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f15796').all(value))

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLess();
    handleMore();
    try {
      let colors = new Values(color).all(value)
      setList(colors);
    } catch (error) {
      console.log(error);
      window.alert('Enter the proper Color Code ( in hex format only )')
      setError(true)
    }
  }

  const handleMore = () => {
    let more = document.getElementById('more')
    more.style.visibility = 'visible';
    setValue(value - 1)
    console.log('more button is cliked');
  }

  const handleLess = () => {
    let less = document.getElementById('less');
    less.style.visibility = 'visible';
    setValue(value + 5)
    console.log('less button is cliked');
  }

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text"
            className={`${error ? 'error' : null}`}
            placeholder='#f15796'
            value={color}
            onChange={(e) => setColor(e.target.value)} />

          <button className='btn' type="submit">submit</button>
          <button id='more' disabled={value < 2} className="otherbtn" onClick={handleMore} >More Shades</button>
          <button id='less' disabled={value > 50} className="otherbtn" onClick={handleLess}>Less Shades</button>

        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} hexColor={color.hex} index={index} />
        })}
      </section>
    </>
  )
}

export default App
