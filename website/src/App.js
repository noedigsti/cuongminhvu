import logo from './logo.svg';
import './App.css';

const visitors = [
  {
    name: 'you',
  },
  {
    name: 'me',
  },
]

const Greeting = ({name}) => {
  console.log(name);
  return (
    <h1>
      Welcome {name} to my page!
    </h1>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {visitors.map((visitor) => {
          return <Greeting {...visitor} />
        })}

        <img src={logo} className="App-logo" alt="logo" />
        <p>Site is in contruction! 🔨</p>
      </header>
    </div>
  );
}

export default App;
