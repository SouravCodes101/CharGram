import './styles.css';
const App = () => {
  function copyText () {

  }
  return (
   <div className="container">
    <h2>Char Gram - Grammer checker</h2>
    <input type="text" classname="input"  maxLength={150} placeholder="Please Type Here" className='textarea'/>
    {/* <textarea  id="textarea" className="textarea" maxLength={150} placeholder="Please Type Here" ></textarea> */}
    <button onClick={copyText()}> Copy Text</button>
    <div className="counter-container">
      <p>Total Character: <span id="total-counter">0</span></p>
      <p>Remaining Char: <span id="total-counter">150</span></p>
    </div>
   </div>
  );
}

export default App;
