import { supabase } from "@/lib/supabaseClient";
import Catalog from "@/components/Catalog";

export const revalidate = 30;

export default async function HomePage() {
  const { data: mods, error } = await supabase
    .from("mods")
    .select("*")
    .eq("status", "active")
    .order("created_at", { ascending: false });

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-5 py-10 sm:px-8">
      <header className="mb-10 border-b-2 border-ink pb-6">
        <p className="mb-2 text-xs uppercase tracking-[0.25em] text-amberdark">
          Katalog Rilis
        </p>
        <h1 className="font-display text-4xl font-black italic leading-tight sm:text-5xl">
          Aplikasi &amp; game buatan sendiri,
          <br />
          dikumpulkan di satu tempat.
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/70">
          Setiap kartu di bawah ini adalah rilis yang dibuat dan dipelihara
          sendiri — lengkap dengan versi, catatan fitur, dan tautan unduhan
          langsung.
        </p>
      </header>

      {error ? (
        <div className="rounded-sm border border-amberdark/40 bg-amber/10 p-6 text-sm text-amberdark">
          Gagal memuat data dari Supabase: {error.message}
          <br />
          Pastikan environment variable sudah diisi dan tabel <code>mods</code> sudah dibuat.
        </div>
      ) : (
        <Catalog mods={mods ?? []} />
      )}
    </main>
  );
}
