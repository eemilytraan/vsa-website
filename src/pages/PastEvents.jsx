import React, { useState, useRef, useEffect } from "react";
import Shelf from "../components/Shelf.jsx";
import { PAST_EVENTS } from "../data/pastEvents";

/* ========= Google Drive helpers ========= */

// Extract a Drive file ID from either style:
//  - https://drive.google.com/file/d/<ID>/view?...
//  - https://drive.google.com/open?id=<ID>  (or ...&id=<ID>)
const extractDriveId = (url) => {
  if (!url) return null;
  const d = url.match(/\/d\/([A-Za-z0-9_-]{10,})/);
  if (d?.[1]) return d[1];
  const q = url.match(/[?&]id=([A-Za-z0-9_-]{10,})/);
  if (q?.[1]) return q[1];
  return null;
};

// Use the thumbnail API (cheap + reliable); pick a reasonable width
const driveThumb = (id, w = 1200) =>
  `https://drive.google.com/thumbnail?id=${id}&sz=w${w}`;

// Optional: direct-view (heavier, can 429). We'll only try once if thumb fails.
const driveDirect = (id) =>
  `https://drive.google.com/uc?export=view&id=${id}`;

/* ========= SmartImage: loads thumbnail; falls back once to direct ========= */

function SmartImage({ rawUrl, alt }) {
  const id = extractDriveId(rawUrl);
  const thumb = id ? driveThumb(id, 1200) : rawUrl;
  const direct = id ? driveDirect(id) : rawUrl;

  const [src, setSrc] = useState(thumb);
  const triedDirect = useRef(false);

  // Lazy-load so we don't request everything at once
  const imgRef = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!imgRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );
    obs.observe(imgRef.current);
    return () => obs.disconnect();
  }, []);

  const onError = () => {
    // If the thumbnail fails (permissions/ID), try the heavier direct view once.
    if (!triedDirect.current && direct !== thumb) {
      triedDirect.current = true;
      setSrc(direct);
    }
  };

  return (
    <img
      ref={imgRef}
      src={visible ? src : undefined}
      data-src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={onError}
      referrerPolicy="no-referrer"
      style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover", borderRadius: 10 }}
    />
  );
}

export default function PastEventsPage() {
  return (
    <main className="container">
      <h1 className="past-title">Past Events</h1>

      {PAST_EVENTS.map((block) => {
        // Flatten: each image becomes its own polaroid
        const photos = block.events.flatMap((ev) =>
          ev.images.map((raw) => ({ title: ev.title, raw }))
        );

        return (
          <section key={block.academicYear} style={{ marginBottom: 48 }}>
            <h2 className="past-heading">{block.academicYear}</h2>

            <Shelf
              photosChildren={photos.map((p, i) => (
                <figure className="polaroid" key={`${p.title}-${i}`}>
                  <SmartImage rawUrl={p.raw} alt={p.title} />
                  <figcaption className="caption">{p.title}</figcaption>
                </figure>
              ))}
            />
          </section>
        );
      })}
    </main>
  );
}
