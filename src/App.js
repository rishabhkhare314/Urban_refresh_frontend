import logo from "./logo.svg";
import "./App.css";
import Layout from "./core/layouts/Layout/layout";
import 'semantic-ui-css/semantic.min.css'
function App() {
  return (
    <div className="App">
      <Layout>
        {" "}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </Layout>
    </div>
  );
}

export default App;
