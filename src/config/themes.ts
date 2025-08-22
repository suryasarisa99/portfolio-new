/**
 * Copyright (c) 2025 Sarisa Jaya Surya
 *
 * This file is part of a proprietary project and is governed by the terms in LICENSE.
 * Unauthorized use, modification, or distribution is prohibited. All rights reserved.
 * For permissions, contact yanis.sebastian.zuercher@gmail.com
 */

import {
  Moon,
  Sun,
  Cloud,
  Sunset,
  Sprout,
  Slack,
  Trees,
  Infinity as InfinityIcon,
  MoonStar,
  Coffee,
} from "lucide-react";
import { FaCube, FaGem, FaMoneyBillAlt } from "react-icons/fa";
import {} from "react-icons/si";
import {} from "react-icons/fa6";
import {} from "react-icons/cg";
import { BsBalloon } from "react-icons/bs";
import {} from "react-icons/io5";
import {} from "react-icons/io";
import {} from "react-icons/fa";
import {} from "react-icons/fi";
import {} from "react-icons/ri";
import {} from "react-icons/hi2";
import {} from "react-icons/hi";
import {} from "react-icons/vsc";

import type { ElementType } from "react";

export interface ThemeConfig {
  value: string;
  label: string;
  icon: ElementType; // allows more icons rather than just lucide-react
  isCustom: boolean;
  type: "light" | "dark"; // for automatic theme mapping
}

export const THEMES: ThemeConfig[] = [
  { value: "light", label: "Light", icon: Sun, isCustom: false, type: "light" },
  {
    value: "dark",
    label: "Dark",
    icon: MoonStar,
    isCustom: false,
    type: "dark",
  },
  {
    value: "system",
    label: "System",
    icon: Sun,
    isCustom: false,
    type: "light",
  }, // system handled via getThemeType
  {
    value: "life",
    label: "Solarpunk",
    icon: Sprout,
    isCustom: true,
    type: "light",
  },
  {
    value: "cyber",
    label: "Cyberpunk",
    icon: Slack,
    isCustom: true,
    type: "dark",
  },
  {
    value: "cloud",
    label: "Cloud",
    icon: Cloud,
    isCustom: true,
    type: "light",
  },
  {
    value: "forest",
    label: "Forest",
    icon: Trees,
    isCustom: true,
    type: "dark",
  },
  {
    value: "amethyst",
    label: "Amethyst",
    icon: FaGem,
    isCustom: true,
    type: "dark",
  },
  {
    value: "vintage",
    label: "Vintage",
    icon: FaMoneyBillAlt,
    isCustom: true,
    type: "light",
  },
  {
    value: "coffee",
    label: "Coffee",
    icon: Coffee,
    isCustom: true,
    type: "light",
  },
];
export const STANDARD_THEMES = THEMES.filter((theme) => !theme.isCustom);
export const CUSTOM_THEMES = THEMES.filter((theme) => theme.isCustom);

export const ALL_THEME_VALUES = THEMES.map((theme) => theme.value);
export type Theme = (typeof ALL_THEME_VALUES)[number];

export const getThemeType = (currentTheme: Theme): "light" | "dark" => {
  console.log("currentTheme: ", currentTheme);
  if (currentTheme === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  const cfg = THEMES.find((t) => t.value === currentTheme);
  console.log("theme: ", cfg);
  return cfg?.type || "light";
};
