import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
       <h1>$400<span>,00</span></h1>
       <form>
        <div className='basic'>
          <input type="text" placeholder = {'+200 new computer'}></input>
          <input type="datetime-local"></input>
        </div>
        <div className='description' placeholder={'description'}>
         <input type="text"></input>
        </div>
        <button type='submit'>Add new transaction</button>
       </form>
       
       <div className='transactions'>
          <div className='transaction'>
            <div className='left'>
              <div className='name'>New Samsung TV</div>
              <div className='description'>it was time for new tv.</div>
            </div>
            <div className='right'>
              <div className='price red'>-$500</div>
              <div className='datetime'>2022-12-18 15:45</div>
            </div>
          </div>
          <div className='transaction'>
            <div className='left'>
              <div className='name'>New Samsung TV</div>
              <div className='description'>it was time for new tv.</div>
            </div>
            <div className='right'>
              <div className='price green'>$500</div>
              <div className='datetime'>2022-12-18 15:45</div>
            </div>
          </div>
          <div className='transaction'>
            <div className='left'>
              <div className='name'>New Samsung TV</div>
              <div className='description'>it was time for new tv.</div>
            </div>
            <div className='right'>
              <div className='price red'>-$500</div>
              <div className='datetime'>2022-12-18 15:45</div>
            </div>
          </div>
          <div className='transaction'>
            <div className='left'>
              <div className='name'>New Samsung TV</div>
              <div className='description'>it was time for new tv.</div>
            </div>
            <div className='right'>
              <div className='price green'>$500</div>
              <div className='datetime'>2022-12-18 15:45</div>
            </div>
          </div>
       </div>
    </main>

  );
}

export default App;
