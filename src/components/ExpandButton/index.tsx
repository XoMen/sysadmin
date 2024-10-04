import { useEffect, useState } from "react";
import Lucide from "../Base/Lucide";

const ExpandButton = () => {
  const [isMinimized, setIsMinimized] = useState<boolean>(false);

  const requestFullscreen = () => {
    const el = document.documentElement;
    if (el.requestFullscreen && !document.fullscreenElement) {
      try {
        el.requestFullscreen();
      } catch (error) {
        console.error("Enter Fullscreen Error:", error);
      }
    } else {
      try {
        document.exitFullscreen();
      } catch (error) {
        console.error("Exit Fullscreen Error:", error);
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsMinimized(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <a
      href=""
      className="p-2 rounded-full hover:bg-slate-100"
      onClick={(e) => {
        e.preventDefault();
        requestFullscreen();
      }}
    >
      <Lucide
        icon={!isMinimized ? "Expand" : "Minimize"}
        className="w-[18px] h-[18px]"
      />
    </a>
  );
};

export default ExpandButton;
