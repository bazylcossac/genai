"use client";
import useMediaQuery from "@/lib/hooks/useMediaQuery";
import { Session } from "next-auth";
import { useAppStore } from "@/store/appStore";
import React from "react";
import { CgArrowsV } from "react-icons/cg";
import MobileNavbar from "../dashboard_navbar/MobileNavbar";
import useShortcutOpenInput from "@/lib/hooks/useShortcutOpenInput";

function HeaderClient({ session }: { session: Session }) {
  const setShowSearchBarDialog = useAppStore(
    (state) => state.setShowSearchBarDialog
  );
  useShortcutOpenInput(() => setShowSearchBarDialog(true));
  const isDesktop = useMediaQuery();

  return (
    <div className="flex flex-row items-center">
      <div className="flex items-center gap-2 hover:bg-neutral-700 transition rounded-md px-2 py-1 cursor-pointer">
        {!isDesktop && <MobileNavbar />}
        <div className="bg-white rounded-full size-6 flex items-center justify-center text-black text-sm font-bold">
          <p>{session?.user?.name?.slice(0, 1)}</p>
        </div>
        <p className="text-xs">{session?.user?.name}</p>
        <CgArrowsV className="text-md text-white/70" />
      </div>
      <p className="font-bold text-white/50 mx-2 hidden md:inline-block">/</p>

      <div className="items-center gap-2 hover:bg-neutral-700 transition rounded-md px-2 py-2 cursor-pointer hidden md:flex">
        <div className="flex flex-row gap-2 items-center ">
          <p className="text-xs text-white">Default project</p>
          <CgArrowsV className="text-md text-white/70" />
        </div>
      </div>
    </div>
  );
}

export default HeaderClient;
