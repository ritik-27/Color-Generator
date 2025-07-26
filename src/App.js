import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [value, setValue] = useState(10)
  const [color, setColor] = useState('');
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#00CED1').all(value))

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
    more.style.display = 'inline'
    setValue(value - 1)
  }

  const handleLess = () => {
    let less = document.getElementById('less');
    less.style.display = 'inline'
    setValue(value + 5)
  }

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text"
            className={`${error ? 'error' : null}`}
            placeholder='#00FFFF'
            value={color}
            onChange={(e) => setColor(e.target.value) && setError(false)} />

          <button className='btn' type="submit">submit</button>
          <button id='more' disabled={value < 2} className="otherbtn" onClick={handleMore} >More Shades</button>
          <button id='less' disabled={value > 50} className="otherbtn" onClick={handleLess}>Less Shades</button>

        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} hex={color.hex} index={index} />
        })}
      </section>
    </>
  )
}

export default App
