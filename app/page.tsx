"use client"
import Header from "@/components/Header";
import HookDesc from "@/components/HookDesc";
import InputHook from "@/components/SearchBox";
import { HookContext } from "../context/HookContext";
import { useContext } from "react";

export default function Home() {
  const ctx = useContext(HookContext)

  if (!ctx) {
    throw new Error("HookContext chua duoc boc boi HookProvider")
  }

  const { search, setSearch, selectHook, setSelectHook } = ctx

  return (
    <>
    <div>
        <Header />
        <InputHook search={search} setSearch={setSearch} setSelectHook={setSelectHook} />
        <HookDesc selectHook={selectHook}  />
      </div></>
  );
}
