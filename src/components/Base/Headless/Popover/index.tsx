import { twMerge } from "tailwind-merge";
import { Popover as HeadlessPopover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import clsx from "clsx";

function Popover({
  children,
  className,
  ...props
}: ExtractProps<typeof HeadlessPopover>) {
  return (
    <HeadlessPopover
      as="div"
      className={twMerge(["relative", className])}
      {...props}
    >
      {children}
    </HeadlessPopover>
  );
}

Popover.Button = <C extends React.ElementType = "div">({
  as,
  children,
  className,
  ...props
}: ExtractProps<typeof HeadlessPopover.Button> & {
  as?: C;
} & React.ComponentPropsWithRef<C>) => {
  return (
    <HeadlessPopover.Button
      as={as}
      className={twMerge(["cursor-pointer", className])}
      {...props}
    >
      {children}
    </HeadlessPopover.Button>
  );
};

Popover.Panel = ({
  children,
  className,
  placement = "bottom-end",
  ...props
}: ExtractProps<typeof HeadlessPopover.Panel> & {
  placement?:
    | "top-start"
    | "top"
    | "top-end"
    | "right-start"
    | "right"
    | "right-end"
    | "bottom-end"
    | "bottom"
    | "bottom-start"
    | "left-start"
    | "left"
    | "left-end";
}) => {
  return (
    <Transition
      as={Fragment}
      enter="transition-all ease-linear duration-150"
      enterFrom="mt-5 invisible opacity-0 translate-y-1"
      enterTo="mt-1 visible opacity-100 translate-y-0"
      leave="transition-all ease-linear duration-150"
      leaveFrom="mt-1 visible opacity-100 translate-y-0"
      leaveTo="mt-5 invisible opacity-0 translate-y-1"
    >
      <div
        className={clsx([
          "absolute z-30",
          placement == "top-start" && "start-0 bottom-[100%]",
          placement == "top" && "start-[50%] translate-x-[-50%] bottom-[100%]",
          placement == "top-end" && "end-0 bottom-[100%]",
          placement == "right-start" && "start-[100%] translate-y-[-50%]",
          placement == "right" && "start-[100%] top-[50%] translate-y-[-50%]",
          placement == "right-end" && "start-[100%] bottom-0",
          placement == "bottom-end" && "top-[100%] end-0",
          placement == "bottom" && "top-[100%] start-[50%] translate-x-[-50%]",
          placement == "bottom-start" && "top-[100%] start-0",
          placement == "left-start" && "end-[100%] translate-y-[-50%]",
          placement == "left" && "end-[100%] top-[50%] translate-y-[-50%]",
          placement == "left-end" && "end-[100%] bottom-0",
        ])}
      >
        <HeadlessPopover.Panel
          as="div"
          className={twMerge([
            "p-2 shadow-[0px_3px_10px_#00000017] bg-white border border-slate-200 rounded-lg dark:bg-darkmode-600",
            className,
          ])}
          {...props}
        >
          {children}
        </HeadlessPopover.Panel>
      </div>
    </Transition>
  );
};

export default Popover;
