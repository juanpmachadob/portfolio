import { t } from "i18next";

export const getExperience = () => [
  {
    company: "Perspektiva 360",
    logo: "perspektiva360.webp",
    website: "https://perspektiva360.com",
    role: t("experience.items.perspektiva360.role"),
    date: t("experience.items.perspektiva360.date"),
    tasks: [
      t("experience.items.perspektiva360.tasks.0"),
      t("experience.items.perspektiva360.tasks.1"),
      t("experience.items.perspektiva360.tasks.2"),
      t("experience.items.perspektiva360.tasks.3"),
    ],
  },
  {
    company: "Tigo Colombia Movil",
    logo: "tigo.webp",
    website: "https://www.tigo.com.co",
    role: t("experience.items.tigo.role"),
    date: t("experience.items.tigo.date"),
    tasks: [
      t("experience.items.tigo.tasks.0"),
      t("experience.items.tigo.tasks.1"),
      t("experience.items.tigo.tasks.2"),
      t("experience.items.tigo.tasks.3"),
    ],
  },
];
