import { Head } from "$fresh/runtime.ts";
import { JSX, Component, Fragment, render } from "preact";
import type { BoxFlexProps } from "@@@typesChangeLESS/Types.d.ts";

export function BoxFlex(props: BoxFlexProps) {
  const classTailWind = (() => {
    const themeNr = props.themeNr ?? 0;
    const colorBG = props.colorPalleteBG ?? "slate";
    const colorFG = props.colorPalleteFG ?? "slate";

    return {
      container: ` flex-1 flex `,
      rowbar: ` bg-${colorBG}-${themeNr === 0 ? "800" : "700"}` +
        ` hover:bg-${colorBG}-${themeNr === 0 ? "500" : "600"}` +
        `  ${
          themeNr !== 1 ? "" : `border-l-[4px] border-l-${colorBG}-800/50`
        }` +
        `w-full flex-none flex flex-row flex-nowrap items-center justify-evenly content-evenly transition-colors subpixel-antialiased`,
      header: ` border-t-[4px] min-h-[${props.sizeHead}px]` +
        ` border-t-${colorBG}-${themeNr === 0 ? "600" : "500"}/50` +
        ` hover:border-t-${colorBG}-${themeNr === 0 ? "400" : "500"}/50` +
        ` `,
      footer: ` border-b-[4px] min-h-[${props.sizeFoot}px]` +
        ` border-b-${colorBG}-${themeNr === 0 ? "600" : "500"}/50` +
        ` hover:border-b-${colorBG}-${themeNr === 0 ? "400" : "500"}/50`,
      content:
        `bg-${colorBG}-${themeNr === 0 ? "400" : "500"} flex-1 px-2 py-1` +
        `  ${themeNr !== 1 ? "" : `border-l-[4px] border-l-${colorBG}-400/50`}`,
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
          <div>Item1</div>
          <div>Item2</div>
          <div>Item3</div>
        </header>
        <main class={`fresh-page-component-theme-styled-scrollbars-1 ${classTailWind.content} `} style="overflow-y: scroll" >
          <div>Item4</div>
          <div>Item5</div>
          <div>Item6</div>
          <div>Item4</div>
          <div>Item5</div>
          <div>Item6</div>
          <div>Item4</div>
          <div>Item5</div>
          <div>Item6</div>
          <div>Item4</div>
          <div>Item5</div>
          <div>Item6</div>
          <div>Item4</div>
          <div>Item5</div>
          <div>Item6</div>
          <div>Item4</div>
          <div>Item5</div>
          <div>Item6</div>
          <div>Item4</div>
          <div>Item5</div>
          <div>Item6</div>
          <div>Item4</div>
          <div>Item5</div>
          <div>Item6</div>
          <div>Item4</div>
          <div>Item5</div>
          <div>Item6</div>
          <div>Item4</div>
          <div>Item5</div>
          <div>Item6</div>
          <div>Item4</div>
          <div>Item5</div>
          <div>Item6</div>
          <div>Item4</div>
          <div>Item5</div>
          <div>Item6</div>
          <div>Item4</div>
          <div>Item5</div>
          <div>Item6</div>
          <div>Item4</div>
          <div>Item5</div>
          <div>Item6</div>
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