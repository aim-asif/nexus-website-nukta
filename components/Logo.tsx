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
      <span className="mt-1.5 text-[0.6rem] font-light uppercase tracking-[0.32em] text-neutral-200">
        Property Maintenance
      </span>
    </Link>
  );
}
