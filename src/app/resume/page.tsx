import React from "react";

const DRIVE_PREVIEW_URL =
  "https://drive.google.com/file/d/1oo-FP_F_MNLCj-huyzGZKm3jJ12hGFkw/preview";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background-dark">
      <iframe
        title="Resume Preview"
        src={DRIVE_PREVIEW_URL}
        className="w-full h-screen border-0"
        allow="autoplay"
        loading="eager"
      />
    </div>
  );
}

