import React from "react";
import "./NewEntry.css";

export default function NewEntry() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("ran");
  }
  return (
    <div className="newentry-container">
      <form className="form-container" onClick={handleSubmit}>
        <div className="input-container">
          <input
            required
            className="entry-title"
            type="text"
            name="title"
            placeholder="Enter title..."
          />
        </div>
        <div className="input-container">
          <textarea
            required
            name="entry"
            type="text"
            placeholder="Start typing..."
          />
        </div>
        <button type="submit">Save as Draft</button>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}
