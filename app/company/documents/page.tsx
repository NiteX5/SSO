"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/status-badge"
import { Search } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useTranslations } from "@/lib/i18n"



export default function CompanyDocuments() {
  const [filter, setFilter] = useState("all")
  const [search, setSearch] = useState("")
  const { lang } = useLanguage()
  const t = useTranslations(lang)

  const documents = [
    { id: 1, name: t("serviceOrder"), status: t("pending") },
    { id: 2, name: t("startOfActivities"), status: t("approved") },
    { id: 3, name: t("legalRepresentativeDeclaration"), status: t("inReview") },
    { id: 4, name: t("exceptionalWorkApproval"), status: t("approved") },
    { id: 5, name: t("ssoProgram"), status: t("inReview") },
    { id: 6, name: t("riskMatrix"), status: t("pending") },
    { id: 7, name: t("workProcedure"), status: t("inReview") },
    { id: 8, name: t("kickoffMeeting"), status: t("pending") },
    { id: 9, name: t("internalRegulations"), status: t("pending") },
  ]

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch = t(doc.name).toLowerCase().includes(search.toLowerCase())
    const matchesFilter = filter === "all" || doc.status === filter
    return matchesSearch && matchesFilter
  })

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{t("companyDocuments")}</h1>
        <p className="text-muted-foreground">{t("companyDocumentsDescription")}</p>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={t("searchDocuments")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8"
          />
        </div>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={t("filterByStatus")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t("allStatus")}</SelectItem>
            <SelectItem value={t("pending")}>{t("pending")}</SelectItem>
            <SelectItem value={t("inReview")}>{t("inReview")}</SelectItem>
            <SelectItem value={t("approved")}>{t("approved")}</SelectItem>
            <SelectItem value={t("rejected")}>{t("rejected")}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t("documentName")}</TableHead>
              <TableHead>{t("status")}</TableHead>
              <TableHead>{t("actions")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDocuments.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell className="font-medium">{t(doc.name)}</TableCell>
                <TableCell>
                  <StatusBadge status={doc.status as any} />
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    {doc.status === t("pending") ? t("upload") : t("view")}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-6 flex justify-end">
        <Button>{t("sendForReview")}</Button>
      </div>
    </div>
  )
}

