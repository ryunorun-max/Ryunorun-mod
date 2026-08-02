import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-5 text-center">
      <p className="mb-2 text-xs uppercase tracking-[0.25em] text-amberdark">404</p>
      <h1 className="font-display text-3xl font-black italic">
        Rilis ini tidak ditemukan.
      </h1>
      <p className="mt-3 text-sm text-ink/60">
        Mungkin sudah dihapus atau tautannya salah ketik.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-sm border-2 border-ink bg-amber px-5 py-2.5 text-sm font-bold uppercase text-paper"
      >
        Kembali ke katalog
      </Link>
    </main>
  );
}
