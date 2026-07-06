import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center group" aria-label="MoneyGrow India home">
      <Image
        src="/logo.png"
        alt=""
        width={1816}
        height={425}
        priority
        className="h-14 w-auto"
      />
    </Link>
  );
}
