import { FC, PropsWithChildren } from "react";

interface Props {
  className?: string;
}

const Container: FC<PropsWithChildren<Props>> = ({ children, className }) => {
  return (
    <div className={`${className} container mx-auto bg-container`}>
      {children}
    </div>
  );
};

export default Container;
