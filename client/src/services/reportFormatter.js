const categoryToneMap = {
  trespass: "Unauthorized access activity observed",
  disturbance: "Public disturbance requiring intervention",
  theft: "Suspected theft-related activity",
  medical: "Medical concern requiring response",
  maintenance: "Facility maintenance issue identified",
  "safety hazard": "Safety hazard requiring mitigation",
  "lost property": "Lost property incident logged",
  other: "General security incident"
};

export function formatIncidentReport({ rawNotes, category, officerName = "On-duty Security Officer" }) {
  const now = new Date();
  const summary = categoryToneMap[category] || categoryToneMap.other;
  const cleanedNotes = rawNotes.trim().replace(/\s+/g, " ");

  return {
    id: crypto.randomUUID(),
    createdAt: now.toISOString(),
    category,
    title: `${summary} - ${now.toLocaleDateString()}`,
    body: `Incident Summary:\n${summary}.\n\nReporting Officer:\n${officerName}\n\nDetailed Narrative:\n${cleanedNotes || "No detailed notes were provided."}\n\nActions Taken:\n- Site assessed and documented.\n- Relevant parties notified per post orders.\n- Follow-up recommended for supervisor review.\n\nStatus:\nOpen for supervisory review.`
  };
}
