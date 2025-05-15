"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/status-badge"
import { ChevronDown, ChevronUp, Search } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useTranslations } from "@/lib/i18n"



export default function EmployeeDocuments() {
  const [search, setSearch] = useState("")
  const [expandedEmployees, setExpandedEmployees] = useState<number[]>([])

  const { lang } = useLanguage()
  const t = useTranslations(lang)


  const employees = [
    {
      id: 1,
      name: t("John Doe"),
      documents: [
        { id: 1, name: t("ID Card"), status: t("approved") },
        { id: 2, name: t("Safety Training Certificate"), status: t("pending") },
        { id: 3, name: t("Medical Examination"), status: t("inReview") },
      ],
    },
    {
      id: 2,
      name: t("Jane Smith"),
      documents: [
        { id: 4, name: t("ID Card"), status: t("approved") },
        { id: 5, name: t("Safety Training Certificate"), status: t("approved") },
        { id: 6, name: t("Medical Examination"), status: t("approved") },
      ],
    },
  ]


  const filteredEmployees = employees.filter((employee) => employee.name.toLowerCase().includes(search.toLowerCase()))

  const toggleEmployee = (employeeId: number) => {
    setExpandedEmployees((prev) =>
      prev.includes(employeeId) ? prev.filter((id) => id !== employeeId) : [...prev, employeeId],
    )
  }

  

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{t("Employee Documents")}</h1>
        <p className="text-muted-foreground">{t('Manage and track the status of your employees documentation')}</p>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={t("Search employees...")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t("EmployeeName")}</TableHead>
              <TableHead>{t("DocumentsStatus")}</TableHead>
              <TableHead>{t("actions")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEmployees.map((employee) => (
              <>
                <TableRow key={employee.id}>
                  <TableCell className="font-medium">{employee.name}</TableCell>
                  <TableCell>
                    <StatusBadge
                      status={employee.documents.every((doc) => doc.status === t("approved")) ? t("approved") : t("pending")}
                    />
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" onClick={() => toggleEmployee(employee.id)}>
                      {expandedEmployees.includes(employee.id) ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                      <span className="sr-only">Toggle documents</span>
                    </Button>
                  </TableCell>
                </TableRow>
                {expandedEmployees.includes(employee.id) && (
                  <>
                    <TableRow>
                      <TableCell colSpan={3} className="p-0 border-b-0">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>{t("DocumentName")}</TableHead>
                              <TableHead>{t("status")}</TableHead>
                              <TableHead>{t('actions')}</TableHead>
                            </TableRow>
                          </TableHeader>
                        </Table>
                      </TableCell>
                    </TableRow>
                    {employee.documents.map((doc) => (
                      <TableRow key={doc.id}>
                        <TableCell className="pr-14">{doc.name}</TableCell>
                        <TableCell>
                          <StatusBadge status={doc.status as any} />
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            {doc.status === "pending" ? "Upload" : "View"}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </>
                )}
              </>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

