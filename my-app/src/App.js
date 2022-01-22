import React, {useState, useEffect} from 'react';
import Counter from './components/Counter';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';

// import logo from './logo.svg';
// import './App.css';
// import { useStatem } from 'react';


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

// function App() {
//   const [text, setText] = useState('update Text 0');

//   const onSubmit = () => {
//     console.log('onSubmit function call');
//   };

//   const onKeyup = (e) => {
//     if(e.keyCode == 13) { // keyboard enter event
//       onSubmit();
//     } else {
//       console.log('onKeyup function call');
//     }
//   };

//   // let text = "Hello World";

//   const updateText = () => {
//     setText('update Text 1');
//   }

//   return (
//     <div className="App">
//       {
//       // <button onClick={console.log('Hello World')}>Submit</button>
//       // : 함수 없이 넣을경우, 페이지 로드 시 바로 실행되어짐,
//       // 또한, 버튼클릭시 이벤트 발생이 안됨.

//       // <button onClick={() => console.log('Hello World')}>Submit</button>
//       }

//       <input type="text" onKeyUp={onKeyup}/>

//       <button onClick={onSubmit}>Submit</button>

//       <br/><br/>

//       <span>{text}</span>
//       <button onClick={updateText}>Update</button>


//     </div>
//   );
// }


// 05. 폼에서 useState
// function App() {
//   const [username, setUserName] = useState('');
//   const [password, setPassword] = useState('');

//   const onSubmit = (e) => {
//     e.preventDefault();
//     console.log(username, password);
//   };

//   return (
//     <div className="App">
//       <form onSubmit={onSubmit}>
//         <input type="text" placeholder="UserName" value={username} onChange={(e) => setUserName(e.target.value)}/><br/>
//         <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// 06.useEffect
// function App() {
//   const [count, setCount] = useState(0);
//   const [temp, setTemp] = useState(0);
//
//   useEffect(() => {
//     console.log('count ', count);
//     console.log('temp ', temp);
//   }, [count, temp]);
//   // => count 만 변경될경우에만 useEffect가 동작되도록 설정.
//   // => temp 만 변경될경우에만 useEffect가 동작되도록 설정.
//
//
//   useEffect(() => {
//     console.log('first rendering')
//   }, []);
//   // => [] 빈 배열을 넣어줄경우, 한번만 실행되어짐.
//
//   const increment = () => {
//     setCount(count + 1);
//   };
//
//   return (
//     <div className="App">
//       Hello World
//       <button onClick={increment}>click</button>
//       <button onClick={() => setTemp(temp + 1)}>click1</button>
//     </div>
//   );
// }


// 07, 08
// function App() {
//   const [buttonName, setButtonName] = useState('클릭');
//
//   const clickButton = () => {
//     setButtonName('click');
//   };
//
//   return (
//     <div className="App">
//       <Counter click="click1"/>
//       <Counter click={buttonName}/>
//       <Counter />
//
//       <button onClick={clickButton}>Click</button>
//     </div>
//   );
// }


// 09
// function App() {
//   const [condition, setCondition] = useState(false);
//
//   const Toggle = () => {
//     setCondition(!condition);
//   };
//
//   useEffect(() => {
//     console.log(condition)
//   }, [condition]);
//
//   const renderCondition = condition ? 'True' : 'False';
//
//   return (
//     <div className="App">
//       <div>{renderCondition}</div>
//       <button onClick={Toggle}>Toggle Button</button>
//     </div>
//   );
// }


// 10, 11
function App() {
  const [movies, setMovies] = useState(
    [
      { title : 'movie 1 title', year : '2019' }
      , { title : 'movie 2 title', year : '2020' }
      , { title : 'movie 3 title', year : '2021' }
    ]
  );

  const renderMovies = movies.map(item => {
    return (
      <Movie item={item} key={item.year}/>
    );
  });

  const addMovie = (movie) => {
    setMovies([
        ...movies
        , movie
    ]);
  };

  return (
    <div className="App">
      <h1>Movie List</h1>
      {renderMovies}
      <MovieForm addMovie={addMovie}/>
    </div>
  );
}


export default App;
