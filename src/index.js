import React, {useState} from 'react'
import ReactDOM from 'react-dom'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const inputHandle = (e) => {
    setName(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    setList((prev) => {
      return [...prev, name]
    })
    setName('')
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <label for="name" style={{paddingRight: '12px'}}>
          Input
        </label>
        <input id="name" type="text" onChange={inputHandle} value={name} />
      </form>
      <ul
        style={{
          maxHeight: '200px',
          overflowX: 'none',
          maxWidth: '200px',
          overflowY: 'auto',
        }}
      >
        {list.length === 0 && <p>No data available</p>}
        {list?.map((item) => {
          return <li style={{textWrap: 'wrap'}}>{item}</li>
        })}
      </ul>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
