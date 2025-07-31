import React from "react";
import { Link } from "react-router-dom";

/** Simple star rating (supports integer 0–5) */
function StarRating({ rating, max = 5 }) {
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`Rating: ${rating} of ${max}`}
    >
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={i < rating ? "text-yellow-300" : "text-text/60"}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
      <span className="sr-only">
        {rating} out of {max} stars
      </span>
    </div>
  );
}

/**
 * size: one of "sm" | "md" | "lg" controlling tile width
 * album: { coverUrl, albumName, artistName, rating, id }
 */
export default function AlbumTile({
  album = {
    coverUrl: "https://m.media-amazon.com/images/I/71BjhQlaLPL.jpg",
    albumName: "My Beautiful Dark Twisted Fantasy",
    artistName: "Kanye West",
    rating: 3,
    id: "alb_6f4a9c2e",
  },
  size = "md",
}) {
  const { coverUrl, albumName, artistName, rating, id } = album;

  // size variants: adjust width
  const sizeClasses = {
    sm: "w-44",
    md: "w-56",
    lg: "w-72",
  };
  const tileWidth = sizeClasses[size] || sizeClasses.md;

  return (
    <div
      className={`${tileWidth} flex flex-col bg-box text-text rounded-2xl overflow-hidden shadow transition hover:shadow-lg cursor-pointer select-none`}
      aria-label={`${albumName} by ${artistName}, rating ${rating} out of 5`}
    >
      <Link to={`/albums/${id}`} className="flex flex-col h-full">
        <div className="relative">
          <div className="aspect-square w-full overflow-hidden">
            <img
              src={coverUrl}
              alt={`${albumName} cover`}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        <div className="p-3 flex flex-col flex-grow gap-1">
          <div className="flex-1">
            <h2 className="text-base font-semibold truncate">{albumName}</h2>
            <p className="text-sm truncate">By {artistName}</p>
          </div>
          <div className="mt-2">
            <StarRating rating={rating} />
          </div>
        </div>
      </Link>
    </div>
  );
}
