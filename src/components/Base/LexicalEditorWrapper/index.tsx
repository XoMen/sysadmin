import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";

import { useEffect, useState } from "react";
import { HeadingNode } from "@lexical/rich-text";

import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import ExampleTheme from "./ExampleTheme";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
const theme = ExampleTheme;
import "./lexical-styles.css";
import HtmlPlugin from "./plugins/HtmlPlugin";
import { Highlight } from "../PreviewComponent";
function onError(error: any) {
  console.error(error);
}

const LexicalEditorWrapper = ({ onChange }: { onChange: any }) => {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
    nodes: [HeadingNode],
  };
  const [isSourceView, setIsSourceView] = useState(false);
  const [htmlSource, setHtmlSource] = useState("");

  const handleHtmlChanged = (html: string) => {
    setHtmlSource(html);
  };
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="editor-container w-full">
        <ToolbarPlugin
          isSourceView={isSourceView}
          toggleSourceView={() => setIsSourceView(!isSourceView)}
        />
        <hr />
        {isSourceView ? (
          <div className="position-relative">
            <Highlight className="w-100">{htmlSource}</Highlight>
          </div>
        ) : (
          <>
            <RichTextPlugin
              contentEditable={<ContentEditable className="editor-input" />}
              placeholder={
                <div className="editor-placeholder mt-12">
                  Enter some text...
                </div>
              }
              ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
            <AutoFocusPlugin />
            <HtmlPlugin onHtmlChanged={handleHtmlChanged} initialHtml="" />
            <OnChangePlugin onChange={onChange} />
          </>
        )}
      </div>
    </LexicalComposer>
  );
};

export default LexicalEditorWrapper;
