import React from "react";

type HeaderItemProps = {
  title: string;
  Icon: (props: React.ComponentProps<"svg">) => JSX.Element;
};

function HeaderItem({ title, Icon }: HeaderItemProps) {
  return (
    <div
      data-testId={title.toLocaleLowerCase()}
      className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white"
    >
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p
        data-testId={`${title.toLowerCase()}-1`}
        className="tracking-widest opacity-0 group-hover:opacity-100"
      >
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
