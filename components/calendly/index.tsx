"use client";
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { InlineWidget } from "react-calendly";
import { createClient } from "@/utils/supabase/client";

function Calendly({ isOpen, setIsOpen, subscription }: any) {
  useEffect(() => {
    const supabase = createClient();
    const channel = supabase
      .channel("schema-db-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "history",
        },
        (payload: any) => {
          // console.log(payload, "---------------payload");
          if (typeof window !== "undefined") {
            const subscriptionId =
              window?.localStorage?.getItem("subscriptionId");
            // console.log(subscriptionId, "---------------subscriptionId");
            if (
              payload?.new?.id == subscriptionId &&
              payload.new?.paymentLink &&
              payload.new?.meetingLink &&
              payload.new?.stripeStatus === "Pending"
            ) {
              setIsOpen(false);
              window?.open(payload.new?.paymentLink, "_self");
            }
          }
        }
      )
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px] rounded-2xl py-10 px-8 w-[calc(100%-30px)]">
        <DialogHeader>
          <DialogTitle className="font-bold uppercase text-black text-3xl text-center">
            SET UP YOUR MEETING
          </DialogTitle>
        </DialogHeader>
        <InlineWidget url={subscription?.calendlyLink} />
      </DialogContent>
    </Dialog>
  );
}

export default Calendly;
