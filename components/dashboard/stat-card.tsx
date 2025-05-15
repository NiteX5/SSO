"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

interface StatCardProps {
  title: string
  initialValue: number
  suffix?: string
}

export default function StatCard({ title, initialValue, suffix = "" }: StatCardProps) {
  const [value] = useState(initialValue)

  return (
    <Card className="p-4">
      <h3 className="text-gray-600 text-sm">{title}</h3>
      <p className="text-3xl font-bold mt-2">
        {value.toLocaleString()} {suffix}
      </p>
    </Card>
  )
}
