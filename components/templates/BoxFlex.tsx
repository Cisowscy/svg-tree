import { Head } from "$fresh/runtime.ts";
import { JSX, Component, Fragment, render } from "preact";
import type { BoxFlexProps } from "@@@types";

export function BoxFlex(props: BoxFlexProps) {
  const themeNr = props.themeNr ?? 0;
  const classTailWind = (() => {
    const colorBG = props.colorPalleteBG ?? "slate";
    const colorFG = props.colorPalleteFG ?? "slate";

    return {
      container: ` flex-1 flex `,
      rowbar: ` bg-${colorBG}-${themeNr === 0 ? "800" : "700"} border-y-[4px] min-h-[${props.sizeHead}px]` +
        ` hover:bg-${colorBG}-${themeNr === 0 ? "500" : "600"}` +
        ` border-y-${colorBG}-${themeNr === 0 ? "600" : "500"}/50` +
        ` hover:border-y-${colorBG}-${themeNr === 0 ? "400" : "500"}/50` +
        `  ${
          themeNr !== 1 ? "" : `border-l-[4px] border-l-${colorBG}-800/50 hover:border-l-${colorBG}-500/50`
        }` +
        `w-full flex-none flex flex-row flex-nowrap items-center justify-evenly content-evenly transition-colors subpixel-antialiased`,
      header: ` ` +
        ` `,
      footer: ` border-b-[4px] min-h-[${props.sizeFoot}px]` +
        ` border-b-${colorBG}-${themeNr === 0 ? "600" : "500"}/50` +
        ` hover:border-b-${colorBG}-${themeNr === 0 ? "400" : "500"}/50`,
      content:
        `bg-${colorBG}-${themeNr === 0 ? "400" : "500"} flex-1 px-2 py-1` +
        `  ${themeNr !== 1 ? "" : `border-l-[4px] border-l-${colorBG}-400/50`}`,
      title: `font-mono text-2xl font-bold subpixel-antialiased text-slate-300 text-center`
    };
  })();
  return (
    <>
      <Head>
        <link rel="stylesheet" href="themes/BoxFlex.css" />
      </Head>
      <div
        {...props}
        class={`my--overflow-hidden ${props.class ?? ""} ${classTailWind.container} `}
      >
        <header class={`${classTailWind.rowbar} ${classTailWind.header}`}>
          <span class={` ${classTailWind.title}`}>{props.title}</span>
        </header>
        <main class={`scrolbar-theme-${themeNr} ${classTailWind.content} `} style={`overflow-x: ${props.overFlowX}; overflow-y: ${props.overFlowY}`} >
          {props.children}
        </main>
        <footer class={`${classTailWind.rowbar} ${classTailWind.footer}`}>
          <div>Item7</div>
          <div>Item8</div>
          <div>Item9</div>
        </footer>
      </div>
    </>
  );
}
