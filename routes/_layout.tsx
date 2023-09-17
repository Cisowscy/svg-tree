// Document https://fresh.deno.dev/docs/concepts/layouts

import { LayoutProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: LayoutProps) {
  const classTailWind = {
    layout: "bg-slate-700 flex-1 flex",
  };
  return (
    <div class={`layout ${classTailWind.layout}`}>
      <Component />
    </div>
  );
}