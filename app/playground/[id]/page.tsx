"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { useParams } from "next/navigation";
import { usePlayground } from "@/features/playground/hooks/usePlayground";

const Page: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { playgroundData, templateData, isLoading, error, saveTemplateData } =
    usePlayground(id);

  return (
    <div>
      <>
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />

            <div className="flex flex-1 items-center gap-2">
              <div className="flex flex-col flex-1">
                <h1 className="text-sm font-medium">
                  {playgroundData?.name || "Code Playground"}
                </h1>
              </div>
            </div>
          </header>
        </SidebarInset>
      </>
    </div>
  );
};

export default Page;
