"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function DownloadButton({ slug, downloadUrl }) {
  const [loading, setLoading] = useState(false);

  async function handleDownload() {
    setLoading(true);
    try {
      await supabase.rpc("increment_download", { mod_slug: slug });
    } catch (e) {
      console.error(e);
    } finally {
      window.location.href = downloadUrl;
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="flex-1 rounded-sm border-2 border-ink bg-amber px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-paper shadow-[3px_3px_0_#1C2333] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
    >
      {loading ? "Menyiapkan..." : "Unduh sekarang"}
    </button>
  );
}
