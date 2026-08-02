import { notFound } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import DownloadButton from "@/components/DownloadButton";

export const revalidate = 30;

async function getMod(slug) {
const { data } = await supabase
.from("mods")
.select("*")
.eq("slug", slug)
.eq("status", "active")
.single();
return data;
}

export default async function ModDetailPage({ params }) {
const mod = await getMod(params.slug);
if (!mod) notFound();

const tags = (mod.tags || "").split(",").map((t) => t.trim()).filter(Boolean);
const features = (mod.features || "")
.split(",")
.map((f) => f.trim())
.filter(Boolean);

return (
<main className="mx-auto min-h-screen max-w-3xl px-5 py-10 sm:px-8">
<Link href="/" className="mb-8 inline-block text-xs uppercase tracking-widest text-amberdark">
← Kembali ke katalog
</Link>

  <div className="overflow-hidden rounded-sm border-2 border-ink bg-white/60 shadow-[5px_5px_0_#1C2333]">
    {mod.image_url && (
      <img
        src={mod.image_url}
        alt={mod.title}
        className="aspect-[16/9] w-full border-b-2 border-ink object-cover"
      />
    )}

    <div className="p-6 sm:p-8">
      <div className="mb-3 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-sm border border-line bg-paper px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-ink/70"
          >
            #{tag}
          </span>
        ))}
      </div>

      <h1 className="font-display text-3xl font-black italic sm:text-4xl">
        {mod.title}
      </h1>
      <p className="mt-1 text-sm text-ink/60">
        {mod.version && <span className="mr-3">Versi {mod.version}</span>}
        oleh {mod.mod_by}
      </p>

      {features.length > 0 && (
        <ul className="mt-6 space-y-1.5 border-t border-dashed border-line pt-5 text-sm text-ink/80">
          {features.map((f) => (
            <li key={f} className="flex gap-2">
              <span className="text-amberdark">—</span> {f}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex items-center gap-4 border-t border-dashed border-line pt-5 text-xs text-ink/60">
        <span>⭐ {Number(mod.rating ?? 5).toFixed(1)} ({mod.rating_count} rating)</span>
        <span>♥ {mod.likes ?? 0}</span>
        <span>{mod.download_count ?? 0} unduhan</span>
      </div>

      <div className="mt-6 rounded-sm border border-line bg-paper px-4 py-3 text-xs text-ink/70">
        🔑 Password: {mod.password}
      </div>

      <div className="mt-6 flex gap-3">
        <DownloadButton slug={mod.slug} downloadUrl={mod.download_url} />
      </div>
    </div>
  </div>
</main>
);
}
