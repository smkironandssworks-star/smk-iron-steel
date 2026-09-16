import { cn } from "../../utils/constants";

export default function Container({ children, className = "" }) {
  return (
    <div className={cn("max-w-7xl mx-auto px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}