import Image from "next/image";

export default function Loader() {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center">
      <div className="w-14 h-14 relative animate-spin">
        <Image alt="logo" fill src="/favicon.png" />
      </div>
      <p className="text-sm text-muted-foreground">Neurons are getting excited!</p>
    </div>
  );
}
