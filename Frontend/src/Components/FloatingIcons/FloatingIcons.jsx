import React, { useState, useEffect } from "react";
import "./FloatingIcons.css";

const FloatingIcons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0); // 0 to 1

  // Circle ring settings (viewBox 48 x 48)
  const RING_RADIUS = 21;
  const RING_LENGTH = 2 * Math.PI * RING_RADIUS;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0;

      setScrollProgress(progress);
      setShowScrollTop(scrollTop > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================================
     CONTACT DETAILS
  ========================================================= */

  const displayNumber = "+91 93375 94808";
  const callNumber = "+919337594808";
  const whatsappNumber = "919337594808";

  const whatsappMessage = encodeURIComponent(
    "Hello Shine Tour & Travels 👋\n\n" +
      "I visited your website and I am interested in your Odisha tour packages.\n" +
      "Please share the details, price and availability.\n\n" +
      "Thank you."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <aside className="FloatingIcons" aria-label="Floating quick actions">
      {/* Scroll to Top Button */}
      <button
        type="button"
        className={`FloatingIcons__btn FloatingIcons__btn--scroll ${
          showScrollTop ? "FloatingIcons__btn--visible" : ""
        }`}
        onClick={scrollToTop}
        aria-label={`Scroll to top, ${Math.round(scrollProgress * 100)}% scrolled`}
      >
        {/* Progress ring: fills while scrolling down, empties while going up */}
        <svg
          className="FloatingIcons__ring"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="floatingRingGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#5ab8ff" />
              <stop offset="100%" stopColor="#0668c4" />
            </linearGradient>
          </defs>

          <circle
            className="FloatingIcons__ring-track"
            cx="24"
            cy="24"
            r={RING_RADIUS}
          />

          <circle
            className="FloatingIcons__ring-fill"
            cx="24"
            cy="24"
            r={RING_RADIUS}
            stroke="url(#floatingRingGradient)"
            strokeDasharray={RING_LENGTH}
            strokeDashoffset={RING_LENGTH * (1 - scrollProgress)}
          />
        </svg>

        <svg
          className="FloatingIcons__svg FloatingIcons__arrow"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

      {/* Direct Call Button */}
      <a
        href={`tel:${callNumber}`}
        className="FloatingIcons__btn FloatingIcons__btn--call"
        aria-label={`Call ${displayNumber}`}
      >
        <span className="FloatingIcons__pulse" aria-hidden="true"></span>

        <svg
          className="FloatingIcons__svg FloatingIcons__svg--ring"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z" />
        </svg>

        <span className="FloatingIcons__label">
          <small>Call Now</small>
          <strong>{displayNumber}</strong>
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="FloatingIcons__btn FloatingIcons__btn--whatsapp"
        aria-label={`Chat on WhatsApp ${displayNumber}`}
      >
        <span className="FloatingIcons__pulse" aria-hidden="true"></span>

        <svg
          className="FloatingIcons__svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 18.15c-1.49 0-2.94-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.83c.01 4.54-3.69 8.23-8.22 8.23zm4.51-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.17 1.73 2.65 4.2 3.71.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.12-.22-.19-.47-.31z" />
        </svg>

        <span className="FloatingIcons__label FloatingIcons__label--wa">
          <small>Chat on WhatsApp</small>
          <strong>{displayNumber}</strong>
        </span>
      </a>
    </aside>
  );
};

export default FloatingIcons;