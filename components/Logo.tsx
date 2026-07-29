import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex flex-col leading-none">
      <Image
        src="/nexus_logo.svg"
        alt="Nexus"
        width={150}
        height={43}
        priority
      />

    </Link>
  );
}
