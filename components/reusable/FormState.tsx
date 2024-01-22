import { cn } from "@/lib/utils";

interface IFormState {
  message: string | undefined;
  style: string;
  icon: React.ReactNode;
}
export function FormState({ message, style, icon }: IFormState) {
  return (
    <div className={cn("p-2 text-start", style)}>
      <p className="flex items-center justify-start gap-x-3">
        {icon} {message}
      </p>
    </div>
  );
}
