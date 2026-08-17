"use client";

import { usePathname } from "next/navigation";

import SylvexaTechHero from "./SylvexaTechHero";

export default function GlobalHeroInjector() {
  const pathname = usePathname();

  if (pathname !== "/") {
    return null;
  }

  return <SylvexaTechHero />;
}
