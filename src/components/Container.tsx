import { FC, PropsWithChildren } from "react";

const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className="container mx-auto px-4">{children}</div>;
};

export default Container;
