"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function handleChange(value: string) {
    const nextLocale = value;
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <div>
      <label >Language: </label>
      <select
        value={locale}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="vn">Vietnamese</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}
