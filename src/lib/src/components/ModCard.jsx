import Link from "next/link";

export default function ModCard({ mod }) {
  const tags = (mod.tags || "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  return (
    <Link
      href={`/mod/${mod.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-sm border border-line bg-white/60 shadow-[3px_3px_0_#1C2333] transition-transform hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#1C2333]"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-line bg-ink/5">
        {mod.image_url ? (
          <img
            src={mod.image_url}
            alt={mod.title}
            className="h-full w-full object-cover grayscale-[15%] transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-display text-3xl italic text-ink/30">
            {mod.title?.[0] ?? "?"}
          </div>
        )}
        <span className="stamp absolute right-2 top-2 rounded-sm border border-amberdark bg-paper px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amberdark">
          {mod.version || "rilis"}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-display text-lg font-semibold leading-snug text-ink">
          {mod.title}
        </h3>
        <p className="text-xs text-ink/60">oleh {mod.mod_by}</p>

        {tags.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-1.5">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-sm border border-line bg-paper px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-ink/70"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between border-t border-dashed border-line pt-2 text-[11px] text-ink/60">
          <span>⭐ {Number(mod.rating ?? 5).toFixed(1)}</span>
          <span>{mod.download_count ?? 0} unduhan</span>
        </div>
      </div>
    </Link>
  );
}
