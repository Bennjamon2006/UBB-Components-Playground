import { Editor } from "@monaco-editor/react";
import type { Monaco } from "@monaco-editor/react";
import { emmetHTML } from "emmet-monaco-es";
import { useEffect, useRef } from "react";

import "./App.css";

type Dispatch = () => void;

function App() {
  const dispatchRef = useRef<Dispatch | null>(null);

  const handleEditorWillMount = (monaco: Monaco) => {
    dispatchRef.current = emmetHTML(monaco);
  };

  const handleEditorChange = (value: string | undefined) => {
    console.log(value);
  };

  useEffect(() => {
    if (dispatchRef.current) {
      dispatchRef.current();
    }
  }, []);

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
            beforeMount={handleEditorWillMount}
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
