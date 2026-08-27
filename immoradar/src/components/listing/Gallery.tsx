"use client";

import Image from "next/image";
import { useState } from "react";

export function Gallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0);
  const [error, setError] = useState<Set<number>>(new Set());

  if (images.length === 0 || error.has(0)) {
    return (
      <div className="flex aspect-[16/9] w-full items-center justify-center rounded-xl2 bg-ink-100 text-5xl">
        🏠
      </div>
    );
  }

  return (
    <div>
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl2 bg-ink-100">
        <Image
          src={images[active] ?? images[0]!}
          alt={title}
          fill
          sizes="(min-width: 1024px) 700px, 100vw"
          className="object-cover"
          priority
          onError={() => setError((prev) => new Set(prev).add(active))}
        />
      </div>
      {images.length > 1 && (
        <div className="mt-2 flex gap-2 overflow-x-auto">
          {images.map((img, i) => (
            <button
              key={img + i}
              type="button"
              onClick={() => setActive(i)}
              className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 ${
                i === active ? "border-brand-500" : "border-transparent"
              }`}
            >
              <Image src={img} alt="" fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
