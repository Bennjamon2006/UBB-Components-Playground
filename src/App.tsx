import "./App.css";

function App() {
  return (
    <div className="panel">
      <section>
        <div className="tab">
          <h2>Editor</h2>
        </div>
        <div className="content">
          <textarea></textarea>
        </div>
      </section>
      <section>
        <div className="tab">
          <h2>Preview</h2>
        </div>

        <div className="content">
          <iframe>
            <h1>Preview</h1>
          </iframe>
        </div>
      </section>
    </div>
  );
}

export default App;
