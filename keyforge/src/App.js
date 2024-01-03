import { useCallback, useRef, useState } from 'react';
import './App.css';

function App() {

  //useState hook for the length of the password
  const [passLength, setPassLength] = useState(0);

  //useState hook for if numbers are allowed or not
  const [numbers, setNumbers] = useState(false);

  //useState hook for if characters are allowed or not
  const[char, setChar] = useState(false);

  const [password, setPassword] = useState("");

  //useRef hook to save the reference of password in the input field
  const passwordRef = useRef(null);

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

  //function to copy the input field of password to clipboard
  const onClickCopy = () => {
    window.navigator.clipboard.writeText(password);
    alert("THE PASSWORD IS COPIED");
  }

  return (
    <>

    <div className='flex flex-col justify-center items-center' >
    
      <div className=' my-6 h-2/6 w-3/5 bg-blue-900 rounded-xl shadow-[0px_0px_5px_4px_rgba(191,219,254,0.7)] ' >

      {/* DIV FOR THE HEADING OF THE WEBSITE */}
      <div className=' m-12 flex flex-row justify-center sm:m-10 sm:flex sm:flex-row sm:justify-center'>

          <div className=' text-6xl font-extrabold sm:text-8xl sm:font-extrabold'>
              KEY
          </div>

          <div className=' text-orange-500 text-6xl font-extrabold sm:text-orange-500 sm:text-8xl sm:font-extrabold' >
              FORGE
          </div>

      </div>

      <div className=' flex justify-center text-xl text-blue-200 font-bold
      sm:flex sm:justify-center sm:text-2xl sm:text-blue-200 sm:font-bold'>
        Your GO-TO Password Generator
      </div>
      
      <div className=' mt-20 flex flex-row justify-center
       sm:mt-20 sm:flex sm:flex-row sm:justify-center' >

        <input type="text" name="pass" placeholder='  Generated Password...' value={password} readOnly className=' h-10 w-2/6 rounded-lg border-4 border-orange-500 p-2 text-black font-bold
        sm:h-10 sm:w-2/6 sm:rounded-lg sm:border-4 sm:border-orange-500 sm:p-2 sm:text-black sm:font-bold ' />

        <button onClick={onClickCopy} ref={passwordRef}  className=' mx-5 font-bold bg-blue-200 h-10 w-20 rounded-lg text-black
         sm:mx-5 sm:font-bold sm:bg-blue-200 sm:text-black sm:h-10 sm:w-20 sm:rounded-lg hover:bg-black hover:text-blue-200 hover:border-2 hover:border-blue-200 ' >COPY</button>

      </div>

      <div className=' flex justify-center m-5
      sm:flex sm:justify-center sm:m-5'>

          <button className='mt-5 font-bold bg-blue-200 h-12 w-28 rounded-lg text-black
           sm:mt-5 sm:font-bold sm:bg-blue-200 sm:h-12 sm:w-28 sm:rounded-lg sm:text-black 
          hover:bg-black hover:text-blue-200 hover:border-2 hover:border-blue-200 ' onClick={newPass}>
            GENERATE
            </button>
      </div>


          <div className='mt-12 flex flex-col justify-center items-center
          sm:mt-12 sm:flex sm:flex-row sm:justify-center'>

              <label htmlFor="length" className='mx-6 my-5 font-extrabold text-xl text-orange-500
              sm:mx-6 sm:font-extrabold sm:text-xl sm:text-orange-500 ' >Length of your password ({passLength}) </label>

              <input type="range" name="length" min={0} max={100} value={passLength} className=' h-5 w-60 mx-6 mt-[6px] cursor-pointer
              sm:h-5 sm:w-60 sm:mx-6 sm:mt-[6px] sm:cursor-pointer ' 
              onChange={ (e) => {setPassLength(e.target.value)} } />
              {/* this onChange is given to make the slider working otherwise the slider won't move */}

          </div>

          <div className='flex flex-col justify-center
          sm:flex sm:flex-row sm:justify-center' >

              <div className='m-10 flex flex-row justify-center
               sm:m-10 sm:mt-10 sm:flex sm:flex-row sm:justify-center' >

                <label htmlFor="numbers" className='mx-6 font-extrabold text-xl text-orange-500
                 sm:mx-6 sm:font-extrabold sm:text-xl sm:text-orange-500' >NUMBERS?</label>
                <input type="checkbox" name="numbers" className='h-6 w-6 mt-[3.5px]
                sm:h-6 sm:w-6 sm:mt-[3.5px] '
                onChange={ () => {setNumbers((prev) => !prev)} }/>
                {/* onChange event for the useState hook of numbers checkbox, function is simple, */}
                {/* just complement the previous state */}

              </div>

              <div className=' m-10 flex flex-row justify-center
               sm:m-10 sm:mt-10 sm:flex sm:flex-row sm:justify-center' >

                <label htmlFor="numbers" className='mx-6 font-extrabold text-xl text-orange-500
                 sm:mx-6 sm:font-extrabold sm:text-xl sm:text-orange-500' >CHARACTERS?</label>
                <input type="checkbox" name="numbers" className='h-6 w-6 mt-[3.5px] border-2 border-blue-600
                sm:h-6 sm:w-6 sm:mt-[3.5px] sm:border-2 sm:border-blue-600'
                onChange={ () => {setChar((prev) => !prev)} }/>
                {/* similar to the above wala onChange */}

              </div>

          </div>
      
          </div>

          </div>
      
    </>
  );
}

export default App;
