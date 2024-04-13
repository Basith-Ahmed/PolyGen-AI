"use client";

import { Menu } from "lucide-react";

import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

interface HamburgerMenuProps {
  apiLimitCount: number;
  isPro: boolean;
}

export default function HamburgerMenu({ apiLimitCount = 0, isPro = false }: HamburgerMenuProps) {
  /*hydration error*/
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant={"ghost"} size={"icon"} className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0">
        <Sidebar apiLimitCount={apiLimitCount} isPro={isPro}/>
      </SheetContent>
    </Sheet>
  );
}
