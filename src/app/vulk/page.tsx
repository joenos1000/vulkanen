"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function VulkRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#vulk");
  }, [router]);

  return null;
}
