import type { InputColorProps } from "@@@types";


export function InputColor(props: InputColorProps) {
  const classTailWind = (() => {
    const colorBG = props.colorPalleteBG ?? "slate";
    const colorFG = props.colorPalleteFG ?? "slate";

    return { 
      input_color: `border-${colorBG}-100/50 border-2 rounded bg-${colorBG}-200/30 transition-colors text-${colorFG}-700 `
      + ` px-2 py-1 my-1 w-full h-full text-center subpixel-antialiased`
      + ` hover:border-${colorBG}-900/50 hover:bg-${colorBG}-800/50 hover:text-${colorFG}-300 `,
    };
  })();
  return (
    <input
      {...props}
      type="color"
      value={props.value}
      class={`${props.class ?? ''} ${classTailWind.input_color} `}
    />
  );
}