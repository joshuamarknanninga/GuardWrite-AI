import { useState } from "react";
import ReportForm from "../components/ReportForm.jsx";
import ReportPreview from "../components/ReportPreview.jsx";
import { generateReport } from "../services/api";

function NewReport({ onSaveReport, latestReport }) {
  const [isLoading, setIsLoading] = useState(false);
  const [preview, setPreview] = useState(latestReport || null);

  const handleGenerate = async (payload) => {
    setIsLoading(true);
    const report = await generateReport(payload);
    setPreview(report);
    onSaveReport(report);
    setIsLoading(false);
  };

  return (
    <section className="grid dashboard-grid">
      <ReportForm onGenerate={handleGenerate} isLoading={isLoading} />
      <ReportPreview report={preview} />
    </section>
  );
}

export default NewReport;
