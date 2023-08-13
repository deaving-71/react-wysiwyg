import { useEditor, EditorContent } from "@tiptap/react";
import Toolbar from "./toolbar";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TextAlign from "@tiptap/extension-text-align";
import Image from "@tiptap/extension-image";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Link from "@tiptap/extension-link";
import Highlight from "@tiptap/extension-highlight";
import { cn } from "../lib/utils";

type Props = {};

export default function TextEditor(props: React.ComponentProps<"div">) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Subscript,
      Superscript,
      Color,
      Highlight.configure({
        multicolor: true,
      }),
      TextStyle,
      Image,
      Link.configure({
        openOnClick: false,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: `
    <h2>
      Hi there,
    </h2>
    <p>
      this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
    </p>
    <ul>
      <li>
        That’s a bullet list with one …
      </li>
      <li>
        … or two list items.
      </li>
    </ul>
    <p>
      Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
    </p>
    <pre><code class="language-css">body {
display: none;
}</code></pre>
    <p>
      I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
    </p>
    <blockquote>
      Wow, that’s amazing. Good work, boy! 👏
      <br />
      — Mom
    </blockquote>
  `,
    editorProps: {
      attributes: {
        class: "focus:outline-none min-h-[400px] p-4",
      },
    },
  });

  if (!editor) return;

  return (
    <div
      {...props}
      className={cn(
        "border w-[820px] rounded-md mx-auto overflow-hidden",
        props.className
      )}
    >
      <Toolbar editor={editor} />
      <EditorContent editor={editor} className="unreset" />
    </div>
  );
}
