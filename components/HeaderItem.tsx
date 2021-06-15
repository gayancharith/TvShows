import React from "react";
import { useRouter } from "next/router";

type HeaderItemProps = {
  title: string;
  Icon: (props: React.ComponentProps<"svg">) => JSX.Element;
};

function HeaderItem({ title, Icon }: HeaderItemProps) {
  const router = useRouter();
  return (
    <div
      data-testid={title.toLowerCase()}
      className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white"
      onClick={() => {
        if (title.toLowerCase() === "home") {
          router.push("/");
        }
      }}
    >
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p
        data-testid={`${title.toLowerCase()}-1`}
        className="tracking-widest opacity-0 group-hover:opacity-100"
      >
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
