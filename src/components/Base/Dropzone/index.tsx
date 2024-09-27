import "@/assets/css/vendors/dropzone.css";
import React, { createRef, useEffect } from "react";
import { init } from "./dropzone";
import DropzoneJs, { DropzoneOptions } from "dropzone";

export interface DropzoneElement extends HTMLDivElement {
  dropzone: DropzoneJs;
}

export interface DropzoneProps
  extends React.PropsWithChildren,
    React.ComponentPropsWithoutRef<"div"> {
  options: DropzoneOptions;
  getRef: (el: DropzoneElement) => void;
}

function Dropzone({
  options = {},
  getRef = () => {},
  children,
  ...computedProps
}: DropzoneProps) {
  const props = {
    options: options,
    getRef: getRef,
  };
  const fileUploadRef = createRef<DropzoneElement>();

  useEffect(() => {
    if (fileUploadRef.current) {
      props.getRef(fileUploadRef.current);
      init(fileUploadRef.current, props);
    }
  }, [props.options, children]);

  return (
    <div
      {...computedProps}
      ref={fileUploadRef}
      className="[&.dropzone]:border-2 [&.dropzone]:border-dashed dropzone [&.dropzone]:border-slate-300/70 [&.dropzone]:bg-slate-50 [&.dropzone]:cursor-pointer [&.dropzone]:dark:bg-darkmode-600 [&.dropzone]:dark:border-white/5"
    >
      <div className="dz-message">{children}</div>
    </div>
  );
}

export default Dropzone;
