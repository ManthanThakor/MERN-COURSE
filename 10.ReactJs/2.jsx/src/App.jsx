import "./App.css";

function App() {
  //! Basic Syntax
  const name = "John Doe";
  const age = 30;
  const isMarried = false;

  //! JSX Template
  const greeting = <h1>Hello, {name}!</h1>;

  //! Conditional Rendering
  const isLoggedIn = false;
  const userProfile = isLoggedIn ? (
    <h2>Welcome, John Doe!</h2>
  ) : (
    <h2>Please log in.</h2>
  );

  //! Looping
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) => <li key={number}>{number}</li>);

  // React Component
  const HelloWorld = () => <h1>Hello, World!</h1>;

  // Props
  const HelloWorldWithProps = (props) => <h1>Hello, {props.name}!</h1>;

  return (
    <div className="App">
      <header className="App-header">
        {greeting}
        {userProfile}
        <ul>{listItems}</ul>
        <HelloWorld />
        <HelloWorldWithProps name="Alice" />
        <h2>The Date is {new Date().toLocaleDateString()}</h2>
        <h2>My age is {age}</h2>
        <h2>I am {isMarried ? "Married" : "Single"}</h2>
      </header>
    </div>
  );
}

export default App;
