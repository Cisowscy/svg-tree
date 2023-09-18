import { JSX } from "preact";
import type { ComponentChildren } from "preact";
import type { Signal } from "@preact/signals";


export type TailWindColorPallete = "inherit" | "current" | "transparent" |"black" |"white" |"slate"|"gray"|"zinc"|"neutral"|"stone"|"red"|"orange"|"amber"|"yellow"|"lime"|"green"|"emerald"|"teal"|"cyan"|"sky"|"blue"|"indigo"|"violet"|"purple"|"fuchsia"|"pink"|"rose";
export type TailWindColorlevel = "-50" | "-100" | "-200" | "-300" | "-400" | "-500" | "-600" | "-700" | "-800" | "-900"  | "-950";
export type TailWindColorAlpha = "" | "/0" | "/5" | "/10" | "/15" | "/20" | "/25"  | "/30" | "/40" | "/50" | "/60" | "/70" | "/75" | "/80"  | "/90"  | "/95"  | "/100" ;

export interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement>{
  class? : string;
  colorPalleteBG?: TailWindColorPallete;
  colorPalleteFG?: TailWindColorPallete;
}

export interface BoxFlexProps extends JSX.HTMLAttributes<HTMLDivElement>{
  children: ComponentChildren;
  class? : string;
  colorPalleteBG?: TailWindColorPallete;
  colorPalleteFG?: TailWindColorPallete;
  themeNr: 0 | 1 ;
  sizeHead: number;
  sizeFoot: number;
  title:string;
}

export interface InputNumberProps extends JSX.HTMLAttributes<HTMLInputElement>{
  class? : string;
  colorPalleteBG?: TailWindColorPallete;
  colorPalleteFG?: TailWindColorPallete;
  min:number;
  max:number;
  step:number;
  value:number;
}
export interface InputColorProps extends JSX.HTMLAttributes<HTMLInputElement>{
  class? : string;
  colorPalleteBG?: TailWindColorPallete;
  colorPalleteFG?: TailWindColorPallete;
  value:string;
}

export type ConfigLayerCount = {
  gen:number,
  end:number,
  gap:number
};
export type ConfigLayerTypes = {
  rhoPa: number,
  rhoPe: number,
  color: string
};

export interface SvgFractionTreeConfigRhoProps extends JSX.HTMLAttributes<HTMLFieldSetElement>{
  class? : string;
  colorPalleteBG?: TailWindColorPallete;
  colorPalleteFG?: TailWindColorPallete;
  title:string;
  layerX?: Signal<ConfigLayerTypes>;
  fOnInput?:any;
}
export interface SvgFractionTreeConfigPhiProps extends JSX.HTMLAttributes<HTMLFieldSetElement>{
  class? : string;
  colorPalleteBG?: TailWindColorPallete;
  colorPalleteFG?: TailWindColorPallete;
  title:string;
  layers?: Signal<ConfigLayerCount>;
  fOnInput?:any;
}
interface SvgFractionTreeConfigProps {
  layers: Signal<ConfigLayerCount>;
  layer1: Signal<ConfigLayerTypes>;
}
