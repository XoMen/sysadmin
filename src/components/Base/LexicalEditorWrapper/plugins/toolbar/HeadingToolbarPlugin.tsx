import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getSelection, $isRangeSelection } from "lexical";
import { $setBlocksType } from "@lexical/selection";
import { $createHeadingNode, HeadingTagType } from "@lexical/rich-text";
import { useState } from "react";
import Lucide from "@/components/Base/Lucide";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5";

export default function HeadingToolbarPlugin(): JSX.Element {
  const [editor] = useLexicalComposerContext();
  const [activeHeading, setActiveHeading] = useState<HeadingTag | null>(null);

  const headingTags: HeadingTag[] = ["h1", "h2", "h3", "h4", "h5"];
  const headingIcons = [
    "Heading1",
    "Heading2",
    "Heading3",
    "Heading4",
    "Heading5",
  ] as const;

  const onClick = (tag: HeadingTag): void => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const isRemoving = activeHeading === tag;

        if (isRemoving) {
          // Remove heading style by setting to paragraph
          $setBlocksType(selection, () =>
            $createHeadingNode("p" as HeadingTagType)
          );
          setActiveHeading(null);
        } else {
          // Apply the selected heading style
          $setBlocksType(selection, () => $createHeadingNode(tag));
          setActiveHeading(tag);
        }
      }
    });
  };

  return (
    <>
      {headingTags.map((tag, i) => (
        <button
          onClick={() => onClick(tag)}
          key={tag}
          className={`toolbar-item spaced ${
            activeHeading === tag ? "active" : ""
          }`}
          aria-label={`Heading ${tag}`}
        >
          <Lucide icon={headingIcons[i]} className="w-4 h-4" />
        </button>
      ))}
    </>
  );
}
