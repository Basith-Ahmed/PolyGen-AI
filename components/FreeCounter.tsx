"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { MAX_FREE_COUNTS } from "@/constants";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import { useProModal } from "@/hooks/UseProModal";

interface FreeCounterProps {
  apiLimitCount: number;
  isPro: boolean;
}

export default function FreeCounter({ apiLimitCount = 0, isPro = false }: FreeCounterProps) {
  const proModel = useProModal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  if (isPro) {
    return null
  }

  return (
    <div className="px-4 md:pr-0">
      <Card className="bg-[#d3e3fd] border-0 shadow-md">
        <CardContent className="py-6">
          <div className="text-center text-sm font-bold text-[#041e49] mb-4 space-y-2">
            <p>
              {MAX_FREE_COUNTS - apiLimitCount} of {MAX_FREE_COUNTS} Generations Remaining
            </p>
            <Progress
              className="h-2"
              value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
            />
          </div>
          <Button
            variant={"premium"}
            className="w-full"
            onClick={proModel.onOpen}
          >
            Upgrade
            <Zap className="w-4 h-4 ml-1 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
