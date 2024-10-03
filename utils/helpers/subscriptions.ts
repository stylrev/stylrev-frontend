import { createClient } from "../supabase/client";

export async function getSubscription(
  setIsLoading: any,
  serviceId: number,
  paymentCycle?: "year" | "month"
): Promise<any> {
  const supabase = createClient();

  const { data } = await supabase.auth.getSession();
  if (!data?.session) {
    setIsLoading(false);
    alert("Please login");
    return null;
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const myHeaders = new Headers();

  myHeaders.append("Authorization", `Bearer ${data.session?.access_token}`);
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify({ email: user?.email, serviceId, paymentCycle });

  const requestOptions = {
    method: "POST",
    body: raw,
    headers: myHeaders,
    redirect: "follow" as RequestRedirect,
  };

  try {
    const response = await fetch(
      "https://lrustdadugzpmnmlgbrq.supabase.co/functions/v1/order",
      requestOptions
    );
    const result = await response.json();
    setIsLoading(false);
    if (result?.historyDocument) {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          "subscriptionId",
          result?.historyDocument?.id
        );
      }
      return result?.historyDocument;
    } else {
      alert(result?.message || "Something went wrong! Please reload the page.");
      return null;
    }
  } catch (error) {
    console.error(error);
    setIsLoading(false);
    return null;
  }
}

export async function cancelSubscription(historyId: any): Promise<any> {
  const supabase = createClient();

  const { data } = await supabase.auth.getSession();
  if (!data?.session) {
    alert("Please login");
    return null;
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const myHeaders = new Headers();

  myHeaders.append("Authorization", `Bearer ${data.session?.access_token}`);
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify({ email: user?.email, historyId });

  const requestOptions = {
    method: "POST",
    body: raw,
    headers: myHeaders,
    redirect: "follow" as RequestRedirect,
  };

  try {
    const response = await fetch(
      "https://lrustdadugzpmnmlgbrq.supabase.co/functions/v1/cancel-subscription",
      requestOptions
    );
    const result = await response.json();
    console.log("cancel resuly", result);
  } catch (error) {
    console.error(error);
    return null;
  }
}
