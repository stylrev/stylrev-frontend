import { createClient } from "@/utils/supabase/server";
import Header from "@/components/header";
import { redirect } from "next/navigation";
import { Payment, columns } from "./columns";
import { PaymentsTable } from "./payments";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728",
      paidAmount: "$ 75.00",
      paymentStatus: "Schedule Call",
      purchaseTime: new Date().toDateString(),
      meetingTime: new Date().toLocaleTimeString(),
      services: "Wardrobe Styling",
      paymentType: "Monthly",
      calendlyLink: "",
      paymentLink: "",
      meetingLink: "",
    },
    {
      id: "728",
      paidAmount: "$ 75.00",
      paymentStatus: "Schedule Call",
      purchaseTime: new Date().toDateString(),
      meetingTime: new Date().toLocaleTimeString(),
      services: "Wardrobe Styling",
      paymentType: "Monthly",
      calendlyLink: "",
      paymentLink: "",
      meetingLink: "",
    },
    {
      id: "728",
      paidAmount: "$ 75.00",
      paymentStatus: "Schedule Call",
      purchaseTime: new Date().toDateString(),
      meetingTime: new Date().toLocaleTimeString(),
      services: "Wardrobe Styling",
      paymentType: "Monthly",
      calendlyLink: "",
      paymentLink: "",
      meetingLink: "",
    },
  ];
}

export default async function Profile() {
  const data = await getData();

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/");
  }

  const { data: history, error } = await supabase
    .from("history")
    .select(`*, services ( title )`)
    .eq("userId", user.id)
    .order("id", { ascending: false });
  return (
    <>
      <Header />
      <section className="pt-32 md:pt-40 px-4">
        <div className="container bg-card-foreground rounded-2xl p-4 md:p-6">
          <h1 className="text-black text-2xl md:text-3xl font-semibold">
            Purchase History
          </h1>
          <div className="bg-card bg-white rounded-2xl p-4 border border-[#EEEEEE] mt-6">
            <PaymentsTable columns={columns} data={history || data} />
          </div>
        </div>
      </section>
    </>
  );
}
