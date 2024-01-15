import logo from './logo.svg';
import './App.css';

function App() {
  return(
      <Component3 />
  );
}

function Component3(){
  return (
    <>
      <Component2 />
      <Component1 />
    </>
  );
}

function Component1(){
  return (
    <>
      <p>1</p>
      <p1>2</p1>
    </>
  );
}

function Component2(){
  return(
      <h1>This is at the top</h1>
  );
}


export default App;
