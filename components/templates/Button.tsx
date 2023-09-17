import { IS_BROWSER } from "$fresh/runtime.ts";
import type { ButtonProps } from '@@@typesChangeLESS/Types.d.ts';

export function Button(props: ButtonProps) {
  const classTailWind = {
    button:    ` bg-${props.colorPalleteBG??'slate'}-200/50` +        ` border-${props.colorPalleteBG??'slate'}-100/50` +       ` text-${props.colorPalleteFG??'slate'}-700` 
      +  ` hover:bg-${props.colorPalleteBG??'slate'}-800/50` +  ` hover:border-${props.colorPalleteBG??'slate'}-900/50` + ` hover:text-${props.colorPalleteFG??'slate'}-300` 
      + ` active:bg-${props.colorPalleteBG??'slate'}-800/75` + ` active:border-${props.colorPalleteBG??'slate'}-900/75` +` active:text-${props.colorPalleteFG??'slate'}-100` 
      + ` font-mono font-bold  text-center subpixel-antialiased`
      + ` px-2 py-1 border-2 text-3xl rounded  transition-colors`
    };
  return (
    <button
      {...props}
      class={`${props.class ?? ''} ${classTailWind.button} `}
      disabled={!IS_BROWSER || props.disabled}
    >
    </button>
);
}
