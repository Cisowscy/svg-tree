import type { InputNumberProps } from "@@@types";
import { IS_BROWSER } from "$fresh/runtime.ts";


export function InputNumber(props: InputNumberProps) {
  const classTailWind = (() => {
    const colorBG = props.colorPalleteBG ?? "slate";
    const colorFG = props.colorPalleteFG ?? "slate";

    return { 
      input_number:`border-${colorBG}-100/50 border-2 rounded bg-${colorBG}-200/30 transition-colors text-${colorFG}-700`
      + ` px-2 py-1 my-1 w-full font-mono font-bold text-3xl text-center subpixel-antialiased`
      + ` hover:border-${colorBG}-900/50 hover:bg-${colorBG}-800/50 hover:text-${colorFG}-300 `,
    };
  })();
  return (
    <input
      {...props}
      type="number"
      min={props.min}
      max={props.max}
      step={props.step}
      value={props.value}
      class={`${props.class ?? ''} ${classTailWind.input_number} `}
    />
  );
}