import React from 'react';

export default function GalleryCard({ image, title, quote, href }) {
  return (
    <a href={href} className="gallery-card">
      {image && <img src={image} alt={title} />}
      <div className="gallery-card-content">
        <h4 className="gallery-card-title">{title}</h4>
        {quote && <p className="gallery-card-quote">{quote}</p>}
      </div>
    </a>
  );
}