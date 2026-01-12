<div className="gb-cover">
  <img
    src="https://github.com/laxmiree/snow-fox-record/blob/main/static/img/home-cover.png?raw=true"
    alt="Snow Fox cover"
    className="gb-cover-image"
  />

  <div className="gb-cover-bar">
    <h1 className="gb-cover-title">
      <img
        src="/img/snow-fox.svg"
        alt="Snow Fox"
        className="gb-cover-icon"
      />
      Snow Fox Observation Record
    </h1>
  </div>
</div>

<div className="home-intro-block">

<p className="home-welcome">Welcome!</p>

<p className="home-lead">
  This site is dedicated to Lucien / Xu Mo content from
  <em>Love and Producer</em> / <em>Mr. Love: Queen’s Choice</em>.
  It features official localizations, original CN transcripts,
  and fan translations.
</p>

<p>
  Just a quick disclaimer: neither English nor Chinese is my first
  language, so I apologize in advance if any translations feel a bit
  awkward or contain mistakes. I’m doing my best to stay as faithful
  as possible while keeping things readable.
</p>

<p className="home-signoff">
  Thanks for stopping by — I hope you enjoy exploring this little
  archive of Xu Mo~
</p>

</div>

import GalleryGrid from '@site/src/components/GalleryGrid';
import GalleryCard from '@site/src/components/GalleryCard';

<GalleryGrid>
  <GalleryCard
    href="./docs/dates"
    image="./img/dates.jpg"
    title="Courtship Logs"
    quote="Date and MQ archive and translations"
  />

  <GalleryCard
    href="./docs/main-story"
    image="./img/main-story.jpg"
    title="Core File: Subject X"
    quote="Main Story archive and translations"
  />

  <GalleryCard
    href="./docs/asmr"
    image="./img/asmr.jpg"
    title="Auditory Logs"
    quote="ASMR / Right Beside You archive and translations"
  />

  <GalleryCard
    href="./docs/cn-exclusive"
    image="./img/cn-exclusive.jpg"
    title="Region-Locked Sightings"
    quote="CN server exclusive translations"
  />

  <GalleryCard
    href="./docs/misc"
    image="/img/misc.jpg"
    title="Unclassified Fragments"
    quote="Miscellaneous archive and translations"
  />
</GalleryGrid>
