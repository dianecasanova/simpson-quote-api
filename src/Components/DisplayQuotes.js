import React from "react";

function DisplayQuotes({ quote }) {
  return (
    <figure className="DisplayQuotes">
      <img src={quote.image} alt={quote.character} />
      <figcaption>
        <blockquote>{quote.quote}</blockquote>
        <cite>{quote.character}</cite>
      </figcaption>
    </figure>
  );
}

export default DisplayQuotes;
