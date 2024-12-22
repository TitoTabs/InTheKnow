import React, { FC, PropsWithChildren } from "react";
import { ComponentLayout } from "@/components/layout";

const Container: FC<PropsWithChildren> = ({ children }) => {
  return <ComponentLayout> {children} </ComponentLayout>;
};

export default Container;
