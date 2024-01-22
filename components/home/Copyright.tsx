import { CopyrightIcon } from "lucide-react";

export function Copyright() {
  const year = new Date().getFullYear().toString();
  return (
    <span className="flex-center gap-x-3">
      <CopyrightIcon /> Copyright {year}
    </span>
  );
}
