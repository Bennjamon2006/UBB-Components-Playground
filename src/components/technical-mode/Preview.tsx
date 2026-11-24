import { useEffect } from "react";
import useQuery from "../../hooks/useQuery";
import stylesService from "../../services/stylesService";

export default function Preview({ content }: { content: string }) {
  const { state: stylesState, execute: fetchStyles } = useQuery(
    stylesService.getAllStyleSheets,
  );

  useEffect(() => {
    fetchStyles();
  }, [fetchStyles]);

  if (stylesState.status === "success") {
    console.log("Styles fetched successfully:", stylesState.data);
  }

  return (
    <iframe
      title="Preview"
      srcDoc={content}
      sandbox="allow-scripts"
      style={{ width: "100%", height: "100%", border: "none" }}
    />
  );
}
