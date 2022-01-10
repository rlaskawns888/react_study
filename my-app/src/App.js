import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  const [text, setText] = useState('update Text 0');

  const onSubmit = () => {
    console.log('onSubmit function call');
  };

  const onKeyup = (e) => {
    if(e.keyCode == 13) { // keyboard enter event
      onSubmit();
    } else {
      console.log('onKeyup function call');
    }
  };

  // let text = "Hello World";

  const updateText = () => {
    setText('update Text 1');      
  }

  return (
    <div className="App">
      {
      // <button onClick={console.log('Hello World')}>Submit</button>
      // : 함수 없이 넣을경우, 페이지 로드 시 바로 실행되어짐,
      // 또한, 버튼클릭시 이벤트 발생이 안됨.

      // <button onClick={() => console.log('Hello World')}>Submit</button>
      }
      
      <input type="text" onKeyUp={onKeyup}/>
      
      <button onClick={onSubmit}>Submit</button>

      <br/><br/>

      <span>{text}</span>
      <button onClick={updateText}>Update</button>


    </div>
  );
}

export default App;
