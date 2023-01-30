
import './App.css';
// import FunctionalCompo from './FunctionalCompo';
// import ClassCompo from './ClassCompo';
function App() {
  let courseName = 'React Library';
  function apple() {
    courseName = 'Python';
    alert(courseName);
  }
  return (
    <div className="App">
      <h1>{courseName}</h1>
      <button onClick={apple}>Click Me</button>
      {/* <FunctionalCompo/>
      <ClassCompo/> */}
    </div>
  );
}

export default App;
