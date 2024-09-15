import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};
export type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
};

export type TRouteGenerator = {
  name: string;
  path?: string;
  children?: TRouteGenerator[];
  element?: ReactNode;
};
