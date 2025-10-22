import Link from "next/link";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: "rgb(255, 0, 0)" }}
    >
      <div className="mx-auto flex w-full flex-col items-center gap-1 px-4 py-4 text-white uppercase md:flex-row md:justify-between">
        <Link
          href="/bibliographie"
          className="text-lg tracking-widest text-center md:flex-1 md:text-left"
        >
          BIBLIOGRAPHIE
        </Link>
        <Link
          href="/"
          className="text-lg tracking-widest text-center md:flex-1"
        >
          LÉA LEDUCQ
        </Link>
        <Link
          href="/a-propos"
          className="text-lg tracking-widest text-center md:flex-1 md:text-right"
        >
          À PROPOS
        </Link>
      </div>
    </header>
  );
}
