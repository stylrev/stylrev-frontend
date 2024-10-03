"use client";

import { Button } from "@/components/ui/button";
import { cancelSubscription } from "@/utils/helpers/subscriptions";
import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  paidAmount: string;
  paymentStatus: "Pending" | "Schedule Call" | "Completed" | "Payment Pending";
  purchaseTime: string;
  meetingTime: string;
  services: string;
  paymentType: string;
  calendlyLink: string;
  paymentLink: string;
  meetingLink: string;
  subscription_completion_date?: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "paymentType",
    header: "Plan Type",
  },
  {
    accessorKey: "services.title",
    header: "Services",

    // cell: (row) => JSON.stringify(row.getValue()),
  },
  {
    accessorKey: "meetingTime",
    header: "Meeting Time",
    cell: (row) => (
      <span suppressHydrationWarning>
        {row.getValue()
          ? new Date(row.getValue() as string).toLocaleString()
          : "---"}
      </span>
    ),
  },
  {
    accessorKey: "paymentStatus",
    header: "Status",
    cell: (row) =>
      row.getValue() === "Schedule Call" ? (
        <span className="bg-[#FFF7CF] p-2 px-8 rounded-full block text-[#E28800] text-xs text-center capitalize">
          {row.getValue() as string}
        </span>
      ) : row.getValue() === "Completed" ? (
        <span className="bg-[#DFFFF0] p-2 px-8 rounded-full block text-[#00A757] text-xs text-center capitalize">
          {row.getValue() as string}
        </span>
      ) : (
        <span className="bg-[#FFF0F0] p-2 px-8 rounded-full block text-[#D20B0B] text-xs text-center capitalize">
          {(row.getValue() as string) || "Pending"}
        </span>
      ),
  },
  {
    accessorKey: "purchaseTime",
    header: "Date",
    cell: (row) => (
      <span suppressHydrationWarning>
        {row.getValue()
          ? new Date(row.getValue() as string).toLocaleString()
          : "---"}
      </span>
    ),
  },
  {
    accessorKey: "paidAmount",
    header: "Amount",
    cell: (row) => `$${row.getValue()}`,
  },
  {
    accessorKey: "paymentStatus",
    header: "Action",
    cell: (row) => (
      <>
        {row.getValue() === "Completed" ||
        moment().isBefore(
          moment(row?.row?.original?.subscription_completion_date).endOf("day")
        ) ? (
          <Button
            variant="outline"
            className="max-w-28	w-full rounded-lg bg-[#EEEEEE] border-[#EEEEEE] text-primary"
            onClick={() => window.open(row?.row?.original?.meetingLink)}
          >
            Open Meeting
          </Button>
        ) : row.getValue() === "Schedule Call" ? (
          <Button
            variant="outline"
            className="max-w-28	w-full rounded-lg bg-[#EEEEEE] border-[#EEEEEE] text-primary"
            onClick={() => window.open(row?.row?.original?.calendlyLink)}
          >
            Schedule Call
          </Button>
        ) : row?.row?.original?.paymentStatus === "Payment Pending" ? (
          <Button
            size="sm"
            disabled={
              row?.getValue() === "Completed" ||
              row?.getValue() === "Cancelled" ||
              row?.getValue() === "Cancelled By User"
            }
            className="max-w-28	w-full rounded-lg"
            onClick={() => window.open(row?.row?.original?.paymentLink)}
          >
            Pay Now
          </Button>
        ) : (
          <Button
            size="sm"
            disabled={
              row?.getValue() === "Completed" ||
              row?.getValue() === "Cancelled" ||
              row?.getValue() === "Cancelled By User"
            }
            className="max-w-28	w-full rounded-lg"
            onClick={() => window.open(row?.row?.original?.paymentLink)}
          >
            Pay Now
          </Button>
        )}
        {row?.getValue() === "Completed" &&
          (row?.row?.original?.paymentType === "Monthly" ||
            row?.row?.original?.paymentType === "Yearly") && (
            <Button
              size="sm"
              className="max-w-36 ms-2	w-full rounded-lg bg-[red] hover:bg-[red] text-white"
              onClick={async () => {
                await cancelSubscription(row?.row?.original?.id);
              }}
            >
              Cancel Subscription
            </Button>
          )}
      </>
    ),
  },
];
