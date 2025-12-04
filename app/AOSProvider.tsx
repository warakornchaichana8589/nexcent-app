"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
      easing: "ease-out",
    });
  }, []);

  useEffect(() => {
    // Ensure new route content gets animations without a full reload
    AOS.refresh();
  }, [pathname]);

  return null;
}
