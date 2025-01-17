import FileExplorer from "./Component/FileExplorer";
import "./styles.css";
import data from "./data.json";

export default function App() {
  return <FileExplorer folderData={data} />;
}
