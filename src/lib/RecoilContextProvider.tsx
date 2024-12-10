"use client";
import { RecoilRoot } from "recoil";
const RecoilContextProvider = ({ children }) =>
{
  return <RecoilRoot>{children}</RecoilRoot>;
};
export default RecoilContextProvider;