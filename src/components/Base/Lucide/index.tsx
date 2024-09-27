import React, { useContext } from "react";
import * as lucideIcons from "lucide-react";
import { twMerge } from "tailwind-merge";
import { DirectionContext } from "@/utils/direction-context"; // Correctly import DirectionContext

export const { icons } = lucideIcons;

interface LucideProps extends React.ComponentPropsWithoutRef<"svg"> {
  icon: keyof typeof icons;
  title?: string;
}

function Lucide(props: LucideProps) {
  const { icon, className, ...computedProps } = props;

  // Get the direction context value
  const directionContext = useContext(DirectionContext);

  // Handle the case when the context is undefined
  if (!directionContext) {
    console.error("DirectionContext is undefined. Make sure your component is wrapped in DirectionProvider.");
    return null; // Or return a fallback component/UI
  }

  const { direction } = directionContext; // Safely destructure direction now

  // Function to replace 'Left' and 'Right' based on direction
  const getTransformedIconName = (iconName: string) => {
    if (direction === "rtl") {
      // If RTL, swap 'Left' and 'Right'
      return iconName.replace("Left", "Temp")
          .replace("Right", "Left")
          .replace("Temp", "Right");
    }
    // Otherwise, return the original icon name
    return iconName;
  };

  // Transform the icon name if necessary
  const transformedIconName = getTransformedIconName(icon as string);

  // Check if the transformed icon exists in the icons object
  const Component = icons[transformedIconName as keyof typeof icons];

  if (!Component) {
    console.error(`Icon "${transformedIconName}" does not exist.`);
    return null; // Handle missing icons
  }

  return (
    <Component
      {...computedProps}
      className={twMerge(["stroke-[1] w-5 h-5", props.className])}
    />
  );
}

export default Lucide;
