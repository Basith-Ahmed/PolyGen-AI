"use client";

import { Zap } from "lucide-react";
import { Button } from "./ui/button";
import axios from "axios";
import { useState } from "react";

interface SubscriptionButtonProps {
  isPro: boolean;
}

export default function SubscriptionButton({
  isPro = false,
}: SubscriptionButtonProps) {

const [loading, setLoading] = useState(false)

  const onClick = async () => {
    try {
        setLoading(true)
      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      console.log("BILLING_ERROR", error);
    } finally {
        setLoading(false)
    }
  };

  return (
    <Button>
      {isPro ? "Manage Subscriptions" : "Upgrade to Pro"}
      {!isPro && <Zap className="w-4 h-4 ml-2 fill-white" />}
    </Button>
  );
}
