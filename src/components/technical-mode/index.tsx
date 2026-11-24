import { useState } from "react";

import "../../styles/technical-mode.css";
import CodeEditor from "./CodeEditor";
import Preview from "./Preview";

export default function TechnicalMode() {
  const [previewContent, setPreviewContent] = useState<string>("");

  const handleEditorChange = (value: string) => {
    setPreviewContent(value);
  };

  return (
    <div className="panel">
      <section>
        <div className="tab">
          <h2>Editor</h2>
        </div>
        <div className="content">
          <CodeEditor onChange={handleEditorChange} value={previewContent} />
        </div>
      </section>
      <section>
        <div className="tab">
          <h2>Preview</h2>
        </div>

        <div className="content">
          <Preview content={previewContent} />
        </div>
      </section>
    </div>
  );
}
