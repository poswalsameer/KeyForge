import './App.css';

function App() {
  return (
    <>

      {/* DIV FOR THE HEADING OF THE WEBSITE */}
      <div className=' m-12 flex flex-row justify-center'>

          <div className='text-8xl font-extrabold'>
              KEY
          </div>

          <div className=' text-orange-400 text-8xl font-extrabold' >
              FORGE
          </div>

      </div>

      <div className='flex justify-center text-2xl text-blue-400 font-bold'>Your GO-TO Password Generator</div>
      
      <div className=' mt-32 flex flex-row justify-center' >

        <input type="text" name="password" id="password" readOnly className=' h-10 w-2/6 rounded-lg border-4 border-orange-400 ' />

        <button className=' mx-5 font-bold bg-blue-600 h-10 w-20 rounded-lg' >COPY</button>

      </div>

      
          <div className='mt-20 flex flex-row justify-center'>

              <label htmlFor="length" className='mx-6 font-extrabold text-xl text-orange-400 ' >Length of your password</label>
              <input type="range" name="length" id="length" className='h-5 w-60 mx-6 mt-[6px]' />

          </div>

          <div className='flex flex-row justify-center' >

              <div className=' m-10 mt-20 flex flex-row justify-center' >

                <label htmlFor="numbers" className=' mx-6 font-extrabold text-xl text-orange-400' >NUMBERS?</label>
                <input type="checkbox" name="numbers" className='h-6 w-6 mt-[3.5px] '/>

              </div>

              <div className=' m-10 mt-20 flex flex-row justify-center' >

                <label htmlFor="numbers" className=' mx-6 font-extrabold text-xl text-orange-400' >CHARACTERS?</label>
                <input type="checkbox" name="numbers" className='h-6 w-6 mt-[3.5px] border-2 border-blue-600'/>

              </div>

          </div>
      
      
    </>
  );
}

export default App;
