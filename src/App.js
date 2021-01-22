import { useEffect, useState } from 'react';
import script from './python/script.py';
import logo from './logo.svg';
import './App.css';

function App() {
  const [output, setOutput] = useState("(loading...)");

  const runScript = code => {
    window.pyodide.loadPackage([]).then(() => {
      const output = window.pyodide.runPython(code);
      setOutput(output);
    })
  }

  useEffect(() => {
    window.languagePluginLoader.then(() => {
      fetch(script)
        .then(src => src.text())
        .then(runScript)
    })
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          5 + 7 = {output}
        </p>
      </header>
    </div>
  );
}

export default App;
