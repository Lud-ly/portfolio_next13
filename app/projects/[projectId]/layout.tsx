import { PropsWithChildren } from "react";
import ArrowBack from "~/src/components/nav/ArrowBack";

export default function LayoutBoard({
  children,
}: PropsWithChildren<{
  params: { projectId: string };
}>) {
  return (
    <div className="px-5 bg-gray-100 dark:bg-gray-900 rounded-2xl">
      <ArrowBack iSize={40} />
      {children}
    </div>
  );
}
