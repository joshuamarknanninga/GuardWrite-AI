import { useState } from "react";

const categories = [
  "trespass",
  "disturbance",
  "theft",
  "medical",
  "maintenance",
  "safety hazard",
  "lost property",
  "other"
];

function ReportForm({ onGenerate, isLoading = false }) {
  const [rawNotes, setRawNotes] = useState("");
  const [category, setCategory] = useState("trespass");

  const handleSubmit = (event) => {
    event.preventDefault();
    onGenerate({ rawNotes, category });
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Security incident report generator</h2>
      <p className="meta">Transform rough shift notes into professional documentation.</p>
      <label htmlFor="rawNotes">Raw Guard Notes</label>
      <textarea
        id="rawNotes"
        rows={8}
        value={rawNotes}
        onChange={(event) => setRawNotes(event.target.value)}
        placeholder="Example: 21:42 observed two individuals near loading dock gate..."
      />

      <label htmlFor="category">Incident Category</label>
      <select id="category" value={category} onChange={(event) => setCategory(event.target.value)}>
        {categories.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Generating..." : "Generate Professional Report"}
      </button>
    </form>
  );
}

export default ReportForm;
