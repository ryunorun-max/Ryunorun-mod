"use client";

import { useMemo, useState } from "react";
import ModCard from "./ModCard";

export default function Catalog({ mods }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return mods;
    return mods.filter((m) => {
      const haystack = `${m.title} ${m.tags} ${m.category}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [mods, query]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari aplikasi atau game..."
          className="w-full rounded-sm border border-line bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-ink/40 sm:max-w-sm"
        />
        <span className="text-xs text-ink/50">
          {filtered.length} dari {mods.length} rilis
        </span>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-sm border border-dashed border-line bg-white/40 p-10 text-center text-sm text-ink/50">
          Tidak ada rilis yang cocok dengan pencarianmu.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((mod) => (
            <ModCard key={mod.id} mod={mod} />
          ))}
        </div>
      )}
    </div>
  );
}
