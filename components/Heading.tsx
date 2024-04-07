interface HeadingProps {
  title: string;
  description: string;
  icon: any; //LucideIcon: may cause error
  iconColor?: string;
  bgColor?: string;
}

export default function Heading({
  title,
  description,
  icon,
  iconColor,
  bgColor,
}: HeadingProps) {
  return (
    <>
    <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-3">
    
    </div>
    </>
  );
}
