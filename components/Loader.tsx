import Image from "next/image";

export default function Loader() {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center">
      <div className="w-14 h-14 relative animate-pulse duration-1000">
        <Image alt="logo" fill src="/logo_v2.png" />
      </div>
      <p className="text-sm text-muted-foreground">Neurons are getting excited!</p>
    </div>
  );
}
