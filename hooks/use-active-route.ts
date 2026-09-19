import { usePathname } from "next/navigation";

function matchRoute(pathname: string, url: string): boolean {
  if (url === "/") return pathname === "/";
  return pathname === url || pathname.startsWith(`${url}/`);
}

type NavSubItem = { url: string };
type NavItem = { url: string; items?: NavSubItem[] };

export function useActiveRoute() {
  const pathname = usePathname();

  const hasActiveSub = (item: NavItem) =>
    item.items?.some((sub) => matchRoute(pathname, sub.url)) ?? false;

  const isSubActive = (url: string) => matchRoute(pathname, url);

  const isParentActive = (item: NavItem) =>
    matchRoute(pathname, item.url) && !hasActiveSub(item);

  const shouldExpand = (item: NavItem) =>
    matchRoute(pathname, item.url) || hasActiveSub(item);

  return { isParentActive, isSubActive, shouldExpand };
}
