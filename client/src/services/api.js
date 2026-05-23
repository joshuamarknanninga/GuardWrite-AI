import { formatIncidentReport } from "./reportFormatter";

// Placeholder for future backend/OpenAI integration.
export async function generateReport(payload) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(formatIncidentReport(payload));
    }, 250);
  });
}
