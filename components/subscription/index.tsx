"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { getSubscription } from "@/utils/helpers/subscriptions";
import { Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createClient } from "@/utils/supabase/client";
import { FEATURES } from "@/utils/constants";
import Login from "../login";
import Calendly from "../calendly";

export default function Subscription() {
  const [type, setType] = useState("monthly");
  const [subscriptionList, setSubscriptionList] = useState<any>([]);
  const [isLoader, setIsLoader] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);

  const getSubscriptions = useCallback(async () => {
    try {
      setIsLoader(true);
      const supabase = createClient();
      const { data: services, error } = await supabase
        .from("services")
        .select()
        .eq("subscription", true)
        .order("id", { ascending: false });

      if (error) {
        throw error;
      }
      if (services) {
        setSubscriptionList(services?.reverse()?.flat());
      }
    } catch (error) {
      alert("Error loading subscriptions!");
    } finally {
      setIsLoader(false);
    }
  }, []);

  const checkUser = useCallback(async () => {
    const supabase = createClient();
    const { data: user } = await supabase.auth.getUser();

    if (user) {
      setUser(user?.user);
    }
  }, []);

  useEffect(() => {
    getSubscriptions();
    checkUser();
  }, []);

  return (
    <>
      <Tabs
        defaultValue="monthly"
        onValueChange={(val) => setType(val)}
        className="mt-16"
      >
        <TabsList className="max-w-[390px] mx-auto mb-16">
          <TabsTrigger value="monthly" className="max-w-48 w-full">
            monthly
          </TabsTrigger>
          <TabsTrigger value="yearly" className="max-w-48 w-full">
            yearly
          </TabsTrigger>
        </TabsList>
        <TabsContent value={type || "monthly"}>
          <div className="flex gap-4 flex-wrap justify-center">
            {isLoader ? (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              <>
                {subscriptionList?.map((item: any, itemNo: number) => (
                  <SubscriptionCard
                    key={item.title}
                    {...item}
                    itemNo={itemNo}
                    type={type}
                    user={user}
                  />
                ))}
              </>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}

function SubscriptionCard({
  itemNo,
  id,
  type,
  title,
  serviceName,
  yearlydiscount,
  monthlyPayment,
  yearlyPayment,
  description,
  user,
}: any) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState<boolean>(false);
  const [subscriptionResponse, setSubscriptionResponse] = useState<any>(null);

  const subscribe = async (id: number) => {
    setIsLoading(true);
    const response = await getSubscription(
      setIsLoading,
      id,
      type === "monthly" ? "month" : "year"
    );
    if (response) {
      setSubscriptionResponse(response);
      setIsCalendlyOpen(true);
    }
  };

  return (
    <Card
      key={serviceName}
      className={cn(
        "w-full min-w-[300px] max-w-[434px] rounded-none text-black",
        itemNo === 1 ? "py-7 bg-black text-white" : "md:mt-8"
      )}
    >
      <CardHeader className="gap-10">
        <CardTitle className="flex items-center justify-between">
          <span className="font-semibold">{title}</span>
          {itemNo === 1 && (
            <span className="px-4 py-1 rounded-full bg-[#FFD966] text-sm text-black">
              Popular
            </span>
          )}
        </CardTitle>
        <CardDescription className={`${itemNo === 1 ? "text-white" : ""}`}>
          <span className="flex justify-between mb-5">
            <span
              className={cn(
                "text-[54px]	text-black font-semibold",
                itemNo === 1 ? "text-white" : ""
              )}
            >
              ${type === "monthly" ? monthlyPayment : yearlyPayment}
            </span>
            {type === "monthly" && (
              <span className={cn("text-xs max-w-28")}>
                {yearlydiscount}% OFF on Yearly Subscription
              </span>
            )}
          </span>
          {/* {description} */}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {user ? (
          <Button
            className="w-full bg-secondary hover:bg-secondary/90 rounded-full"
            size="lg"
            onClick={() => subscribe(id)}
            disabled={isLoading}
          >
            {isLoading && (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}{" "}
            Purchase Plan
          </Button>
        ) : (
          <Login>
            <Button
              className="w-full bg-secondary hover:bg-secondary rounded-full"
              size="lg"
            >
              Purchase Plan
            </Button>
          </Login>
        )}

        <h4 className="text-xl mt-3 font-semibold">Features</h4>
        <ul className="flex flex-col gap-4">
          {FEATURES[itemNo]?.map((item, index) => (
            <li className="flex gap-3" key={index}>
              <span className="flex max-h-8 items-center justify-center min-w-8 rounded-lg bg-secondary">
                <Check
                  size="18"
                  className={`min-h-8 ${itemNo === 1 ? "text-black" : ""}`}
                />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
      {/* {isCalendlyOpen && ( */}
      <Calendly
        isOpen={isCalendlyOpen}
        setIsOpen={setIsCalendlyOpen}
        subscription={subscriptionResponse}
      />
      {/* )} */}
    </Card>
  );
}
