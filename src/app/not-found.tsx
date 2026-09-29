import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center bg-white py-24 text-center">
      <div className="container-x">
        <p className="font-display text-7xl font-extrabold text-gradient">404</p>
        <h1 className="mt-4 text-3xl font-bold text-ink-900">Page not found</h1>
        <p className="mt-3 text-ink-500">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <Link href="/" className="btn-brand mt-8">Back to home</Link>
      </div>
    </section>
  );
}
