import type { InputColorProps } from "@@@types";
import { IS_BROWSER } from "$fresh/runtime.ts";


export function InputColor(props: InputColorProps) {
  const classTailWind = (() => {
    const colorBG = props.colorPalleteBG ?? "slate";
    const colorFG = props.colorPalleteFG ?? "slate";

    return { 
      container: `w-full h-full`,
      content:`border-${colorBG}-100/50 border-2 rounded bg-${colorBG}-200/30 transition-colors text-${colorFG}-700`
      + ` px-2   w-full font-mono font-bold text-2xl text-center subpixel-antialiased`
      + ` hover:border-${colorBG}-900/50 hover:bg-${colorBG}-800/50 hover:text-${colorFG}-300 `,

    };
  })();
  return (
    <label 
      class={`${props.class ?? ''} ${classTailWind.container} `}
    >
      <input
        {...props}
        type="color"
        value={props.value}
        class={`${props.class4input ?? ''} ${classTailWind.content} `}
      />
      <p class={`${props.class4label ?? ''} ${classTailWind.content} `}>{props.title}</p>
    </label>
  );
}