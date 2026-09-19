import { usePathname } from "next/navigation";

export type BreadcrumbEntry = {
  label: string;
  href: string;
  isLast: boolean;
};

function toLabel(segment: string): string {
  return segment
    .replace(/-/g, " ")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function useBreadcrumbs(): BreadcrumbEntry[] {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    return {
      label: toLabel(segment),
      href,
      isLast: index === segments.length - 1,
    };
  });
}
