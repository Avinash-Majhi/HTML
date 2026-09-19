import './App.css'

function App() {

  const handleClick = (e, name) => {
    // console.log('paragraph Clicked!!!', e);
    console.log('paragraph Clicked!!!', name, e);
  }

  return (
    <>
     {/* <p onClick={() => console.log('p Clicked!!!')}>Click Here...</p>
     <p onClick={(e) => console.log('p Clicked!!!', e)}>Click Here...</p> */}
     
   {/* <p onClick={handleClick()}>Click Here...</p> */}
      {/* <p onClick={handleClick}>Click here...</p>
      <p onDoubleClick={handleClick}>Double Click here...</p> */}

      <p onClick={(e) => handleClick(e, "React")}>Click here...</p>

    </>
  )
}

export default App
