"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/status-badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useTranslations } from "@/lib/i18n"
import { useLanguage } from "@/lib/language-context"


export default function MiningCompanyView() {
  const [selectedCompany, setSelectedCompany] = useState<string | undefined>(undefined)
  const [expandedSections, setExpandedSections] = useState<string[]>([])
  const { lang } = useLanguage()
  const t = useTranslations(lang)


  // Datos de ejemplo
  const companies = [
    {
      id: 1,
      name: "Fusion SPA",
      documents: [
        { id: 1, name: "certificateOfGoodStanding", status: t("uploaded") },
        { id: 2, name: "businessLicense", status: t("pending") },
        { id: 3, name: "backgroundCheck", status: t("rejected") },
      ],
      employees: [
        {
          id: 1,
          name: "John Doe",
          documents: [
            { id: 1, name: "idCard", status: t("uploaded") },
            { id: 2, name: "safetyTrainingCertificate", status: t("pending") },
            { id: 3, name: "medicalExamination", status: t("rejected") },
          ],
        },
        {
          id: 2,
          name: "Jane Smith",
          documents: [
            { id: 4, name: "idCard", status: t("uploaded") },
            { id: 5, name: "safetyTrainingCertificate", status: t("uploaded") },
            { id: 6, name: "medicalExamination", status: t("pending") },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "AVLA Chile",
      documents: [
        { id: 4, name: "certificateOfGoodStanding", status: t("uploaded") },
        { id: 5, name: "businessLicense", status: t("uploaded") },
        { id: 6, name: "backgroundCheck", status: t("pending") },
      ],
      employees: [
        {
          id: 3,
          name: "Alice Johnson",
          documents: [
            { id: 7, name: "idCard", status: t("uploaded") },
            { id: 8, name: "safetyTrainingCertificate", status: t("uploaded") },
            { id: 9, name: "medicalExamination", status: t("uploaded") },
          ],
        },
      ],
    },
  ]


  const toggleSection = (section: string) => {
    setExpandedSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  const handleStatusChange = (documentId: number, newStatus: string) => {
    console.log(`Document ${documentId} status changed to ${newStatus}`)
  }

  const selectedCompanyData = companies.find((c) => c.id.toString() === selectedCompany)

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">{t("miningCompanyDocumentReview")}</h1>

      <div className="flex justify-between items-center mb-6">
        <Select onValueChange={setSelectedCompany} value={selectedCompany}>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder={t("selectCompany")} />
          </SelectTrigger>
          <SelectContent>
            {companies.map((company) => (
              <SelectItem key={company.id} value={company.id.toString()}>
                {company.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select></div>

      {selectedCompanyData && (
        <div className="space-y-6">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50%]">{t("companyDocuments")}</TableHead>
                  <TableHead>{t("status")}</TableHead>
                  <TableHead>{t("actions")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {selectedCompanyData.documents.map((doc) => (
                  <TableRow key={doc.id}>
                    <TableCell>{t(doc.name)}</TableCell>
                    <TableCell>
                      <StatusBadge status={doc.status as any} />
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" onClick={() => handleStatusChange(doc.id, t("approved"))}>
                          {t("approve")}
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleStatusChange(doc.id, t("rejected"))}>
                          {t("reject")}
                        </Button>
                        <Button variant="outline" size="sm" >
                          {t("view")}
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead colSpan={3}>{t("employeeDocuments")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {selectedCompanyData.employees.map((employee) => (
                  <>
                    <TableRow
                      key={employee.id}
                      className="hover:bg-muted/50 cursor-pointer"
                      onClick={() => toggleSection(`employee-${employee.id}`)}
                    >
                      <TableCell colSpan={3} className="font-medium">
                        <div className="flex items-center">
                          {expandedSections.includes(`employee-${employee.id}`) ? (
                            <ChevronUp className="h-4 w-4 mr-2" />
                          ) : (
                            <ChevronDown className="h-4 w-4 mr-2" />
                          )}
                          {employee.name}
                        </div>
                      </TableCell>
                    </TableRow>
                    {expandedSections.includes(`employee-${employee.id}`) && (
                      <>
                        {employee.documents.map((doc) => (
                          <TableRow key={doc.id}>
                            <TableCell className="pl-8">{t(doc.name)}</TableCell>
                            <TableCell>
                              <StatusBadge status={doc.status as any} />
                            </TableCell>
                            <TableCell>
                              <div className="flex space-x-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleStatusChange(doc.id, t("approved"))}
                                >
                                  {t("approve")}
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleStatusChange(doc.id, t("rejected"))}
                                >
                                  {t("reject")}
                                </Button>
                                <Button variant="outline" size="sm" >
                                  {t("view")}
                                </Button>
                              </div>
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
      )}
    </div>
  )
}

