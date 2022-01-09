import logo from './logo.svg';
import './App.css';

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
    </div>
  );
}

export default App;
