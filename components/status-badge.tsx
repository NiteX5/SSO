import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type Status = "Pending" | "inReview" | "Approved" | "Rejected" | "Uploaded" | "Pendiente" | "Revisión" | "Aprobado" | "Rechazado" | "Subido"

interface StatusBadgeProps {
  status: Status
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className={cn(
        "capitalize",
        status === "Pending" && "bg-red-100 text-red-800 hover:bg-red-200",
        status === "inReview" && "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
        status === "Approved" && "bg-green-100 text-green-800 hover:bg-green-200",
        status === "Rejected" && "bg-gray-100 text-gray-800 hover:bg-gray-200",
        status === "Uploaded" && "bg-blue-500 text-white hover:bg-blue-600",
        status === "Pendiente" && "bg-red-100 text-red-800 hover:bg-red-200",
        status === "Revisión" && "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
        status === "Aprobado" && "bg-green-100 text-green-800 hover:bg-green-200",
        status === "Rechazado" && "bg-gray-100 text-gray-800 hover:bg-gray-200",
        status === "Subido" && "bg-blue-500 text-white hover:bg-blue-600",
      )}
    >
      {status}
    </Badge>
  )
}

