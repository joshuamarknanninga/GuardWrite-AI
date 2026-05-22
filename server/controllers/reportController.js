import Report from "../models/Report.js";

export async function getReports(_req, res) {
  try {
    const reports = await Report.find().sort({ createdAt: -1 }).limit(50);
    res.json(reports);
  } catch {
    res.json([]);
  }
}

export async function createReport(req, res) {
  const { category, rawNotes, formattedReport } = req.body;

  if (!category || !rawNotes || !formattedReport) {
    return res.status(400).json({ message: "category, rawNotes, and formattedReport are required." });
  }

  try {
    const report = await Report.create({ category, rawNotes, formattedReport });
    return res.status(201).json(report);
  } catch (error) {
    return res.status(500).json({ message: "Report could not be saved.", error: error.message });
  }
}
