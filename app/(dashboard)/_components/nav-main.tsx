"use client";

import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { useActiveRoute } from "@/hooks/use-active-route";
import type { NavMainItem } from "../_config/dashboard-sidebar-nav";

function NavMainCollapsible({
  item,
  isParentActive,
  isSubActive,
  shouldExpand,
}: {
  item: NavMainItem;
  isParentActive: boolean;
  isSubActive: (url: string) => boolean;
  shouldExpand: boolean;
}) {
  const [open, setOpen] = useState(shouldExpand);

  useEffect(() => {
    setOpen(shouldExpand);
  }, [shouldExpand]);

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      render={<SidebarMenuItem />}
    >
      <SidebarMenuButton
        tooltip={item.title}
        isActive={isParentActive}
        render={<Link href={item.url} />}
      >
        <item.icon />
        <span>{item.title}</span>
      </SidebarMenuButton>
      {item.items?.length ? (
        <>
          <CollapsibleTrigger
            render={<SidebarMenuAction className="aria-expanded:rotate-90" />}
          >
            <ChevronRightIcon />
            <span className="sr-only">Toggle</span>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.items.map((subItem) => (
                <SidebarMenuSubItem key={subItem.title}>
                  <SidebarMenuSubButton
                    isActive={isSubActive(subItem.url)}
                    render={<Link href={subItem.url} />}
                  >
                    <span>{subItem.title}</span>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </>
      ) : null}
    </Collapsible>
  );
}

export function NavMain({ items }: { items: NavMainItem[] }) {
  const { isParentActive, isSubActive, shouldExpand } = useActiveRoute();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <NavMainCollapsible
            key={item.title}
            item={item}
            isParentActive={isParentActive(item)}
            isSubActive={isSubActive}
            shouldExpand={shouldExpand(item)}
          />
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
