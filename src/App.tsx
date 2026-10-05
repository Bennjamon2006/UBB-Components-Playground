import { Editor } from "@monaco-editor/react";
import "./App.css";

function App() {
  const handleEditorChange = (value: string | undefined) => {
    console.log(value);
  };

  return (
    <div className="panel">
      <section>
        <div className="tab">
          <h2>Editor</h2>
        </div>
        <div className="content">
          <Editor
            height="100%"
            defaultLanguage="html"
            theme="vs-dark"
            onChange={handleEditorChange}
            options={{ minimap: { enabled: false } }}
          />
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
