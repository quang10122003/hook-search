"use client"
import Header from "@/components/Header";
import HookDesc from "@/components/HookDesc";
import InputHook from "@/components/SearchBox";
import { HookContext } from "../../context/HookContext";
import { useContext } from "react";
import { Tab } from "@/components/Tab";
import { useTranslations } from "next-intl";
export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <>
      <Tab />
    </>
  );
}
