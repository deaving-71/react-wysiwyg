import TextEditor from "./components/text-editor";
import "./styles/ProseMirror.scss";
import "./styles/unreset.scss";

export default function App() {
  return (
    <div className="min-h-screen h-full bg-zinc-50 py-20">
      <TextEditor className="border" />
    </div>
  );
}
