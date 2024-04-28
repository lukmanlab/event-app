import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
  return (
    <div className="mx-auto mt-2 max-w-80">
      {children}
    </div>
  );
}