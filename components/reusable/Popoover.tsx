import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface IPopoover {
  children: React.ReactNode;
  icon: React.ReactNode;
  style?: string;
}

export default function Popoover({ children, icon, style }: IPopoover) {
  return (
    <Popover>
      <PopoverTrigger>{icon}</PopoverTrigger>
      <PopoverContent className={style}>{children}</PopoverContent>
    </Popover>
  );
}
