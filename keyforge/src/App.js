import { useCallback, useState } from 'react';
import './App.css';

function App() {

  //useState hook for the length of the password
  const [passLength, setPassLength] = useState(0);

  //useState hook for if numbers are allowed or not
  const [numbers, setNumbers] = useState(false);

  //useState hook for if characters are allowed or not
  const[char, setChar] = useState(false);

  const [password, setPassword] = useState("");

  //useCallback which stores the previous state in the cache and renders new state with the addition of previous one
  const passwordGenerator = useCallback( () => {

    let pass = "";
    let refString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numberString = "0123456789";
    let charString = "~!@#$%^&*()[]{}+-"

    if( numbers ){
      refString += numberString;
    }
    if( char ){
      refString += charString;
    }

    for(let i=1; i<=passLength; i++){

      //this gives the index of the character generated
      let charIndex = Math.floor( Math.random() * refString.length + 1 );

      //appending the random character to pass
      pass += refString.charAt(charIndex);

    }

    setPassword(pass);

  } , [passLength, numbers, char, setPassword] )

  // this is an onClick function that runs the password Generator method whenever the button is clicked
  const newPass = () => {
    passwordGenerator();
  }

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

      <div className='flex justify-center text-2xl text-blue-400 font-bold'>
        Your GO-TO Password Generator
      </div>
      
      <div className=' mt-20 flex flex-row justify-center' >

        <input type="text" name="pass" placeholder='  Generated Password...' value={password} readOnly className=' h-10 w-2/6 rounded-lg border-4 border-orange-400 p-2 text-black font-bold ' />

        <button className=' mx-5 font-bold bg-blue-600 h-10 w-20 rounded-lg' >COPY</button>

      </div>

      <div className='flex justify-center m-5'>
          <button className=' mt-5 font-bold bg-blue-600 h-12 w-28 rounded-lg ' onClick={newPass}>
            GENERATE
            </button>
      </div>


          <div className='mt-16 flex flex-row justify-center'>

              <label htmlFor="length" className='mx-6 font-extrabold text-xl text-orange-400 ' >Length of your password ({passLength}) </label>
              <input type="range" name="length" min={0} max={100} value={passLength} className='h-5 w-60 mx-6 mt-[6px] cursor-pointer ' 
              onChange={ (e) => {setPassLength(e.target.value)} } />
              {/* this onChange is given to make the slider working otherwise the slider won't move */}

          </div>

          <div className='flex flex-row justify-center' >

              <div className=' m-10 mt-20 flex flex-row justify-center' >

                <label htmlFor="numbers" className=' mx-6 font-extrabold text-xl text-orange-400' >NUMBERS?</label>
                <input type="checkbox" name="numbers" className='h-6 w-6 mt-[3.5px] '
                onChange={ () => {setNumbers((prev) => !prev)} }/>
                {/* onChange event for the useState hook of numbers checkbox, function is simple, */}
                {/* just complement the previous state */}

              </div>

              <div className=' m-10 mt-20 flex flex-row justify-center' >

                <label htmlFor="numbers" className=' mx-6 font-extrabold text-xl text-orange-400' >CHARACTERS?</label>
                <input type="checkbox" name="numbers" className='h-6 w-6 mt-[3.5px] border-2 border-blue-600'
                onChange={ () => {setChar((prev) => !prev)} }/>
                {/* similar to the above wala onChange */}

              </div>

          </div>
      
      
    </>
  );
}

export default App;
