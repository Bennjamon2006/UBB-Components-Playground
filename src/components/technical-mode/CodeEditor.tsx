import { useEffect, useRef } from "react";
import { Editor } from "@monaco-editor/react";
import type { Monaco } from "@monaco-editor/react";
import { emmetHTML } from "emmet-monaco-es";

interface CodeEditorProps {
  onChange: (value: string) => void;
  value: string;
}

type Dispatch = () => void;

export default function CodeEditor({ onChange, value }: CodeEditorProps) {
  const dispatchRef = useRef<Dispatch | null>(null);

  const handleEditorWillMount = (monaco: Monaco) => {
    dispatchRef.current = emmetHTML(monaco);
  };

  const handleEditorChange = (value: string | undefined) => {
    onChange(value || "");
  };

  useEffect(() => {
    if (dispatchRef.current) {
      dispatchRef.current();
    }
  }, []);

  return (
    <Editor
      height="100%"
      defaultLanguage="html"
      theme="vs-dark"
      beforeMount={handleEditorWillMount}
      onChange={handleEditorChange}
      value={value}
      options={{ minimap: { enabled: false } }}
    />
  );
}
