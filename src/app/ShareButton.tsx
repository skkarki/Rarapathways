"use client";

export default function ShareButton() {
  const shareUrl = "https://rarapathways.com";
  const shareText = "Check out RaraPathways - your gateway to study, work and live abroad!";

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: "RaraPathways", text: shareText, url: shareUrl });
      } catch {
        // user cancelled
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="share-section">
      <span className="share-label">Share:</span>
      <a
        href={`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on WhatsApp"
      >
        WhatsApp
      </a>
      <a
        href={`mailto:?subject=${encodeURIComponent("RaraPathways")}&body=${encodeURIComponent(shareText + "\n\n" + shareUrl)}`}
        aria-label="Share via Email"
      >
        Email
      </a>
      <button type="button" onClick={handleShare} className="share-copy">
        Copy Link
      </button>
    </div>
  );
}
