import React, { useState } from 'react';

export default function GalleryGenerator() {
  const [cards, setCards] = useState([
    { href: '', image: '', title: '', quote: '' },
  ]);

  function updateCard(index, key, value) {
    const copy = [...cards];
    copy[index][key] = value;
    setCards(copy);
  }

  function addCard() {
    setCards([...cards, { href: '', image: '', title: '', quote: '' }]);
  }

  const output = `<GalleryGrid>
${cards
  .filter(c => c.title)
  .map(
    c => `  <GalleryCard
    href="${c.href}"
    image="${c.image}"
    title="${c.title}"
    quote="${c.quote}"
  />`
  )
  .join('\n\n')}
</GalleryGrid>`;

  return (
    <div style={{ padding: '2rem', maxWidth: 900 }}>
      <h1>Gallery Generator</h1>

      {cards.map((card, i) => (
        <div key={i} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
          <input placeholder="href" onChange={e => updateCard(i, 'href', e.target.value)} />
          <input placeholder="image" onChange={e => updateCard(i, 'image', e.target.value)} />
          <input placeholder="title" onChange={e => updateCard(i, 'title', e.target.value)} />
          <input placeholder="quote" onChange={e => updateCard(i, 'quote', e.target.value)} />
        </div>
      ))}

      <button onClick={addCard}>+ Add Card</button>

      <h2>Generated MDX</h2>
      <textarea value={output} rows={15} style={{ width: '100%' }} readOnly />
    </div>
  );
}