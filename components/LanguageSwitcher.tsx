"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import styles from "../style/LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();
    const t = useTranslations("LanguageSwitcher")

    function handleChange(value: string) {
        const nextLocale = value;
        router.replace(pathname, { locale: nextLocale });
    }

    return (
        <div className={styles.languageSwitcher}>
            <label className={styles.languageSwitcher__label}>{t("languageSwitcher__label")}:</label>
            <select
                className={styles.languageSwitcher__select}
                value={locale}
                onChange={(e) => handleChange(e.target.value)}
            >
                <option className={styles.languageSwitcher__option} value="vn">{t("languageSwitcher__option")}</option>
                <option className={styles.languageSwitcher__option} value="en">{t("languageSwitcher__option2")}</option>
            </select>
        </div>
    );
}
