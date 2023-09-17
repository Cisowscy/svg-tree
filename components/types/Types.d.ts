import { JSX } from "preact";
import type { TailWindColorPallete, TailWindColorlevel,  TailWindColorAlpha} from '@@@types/tailwind.d.ts';

export interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement>{
  class? : string;
  colorPalleteBG?: TailWindColorPallete;
  colorPalleteFG?: TailWindColorPallete;
}
export interface BoxFlexProps extends JSX.HTMLAttributes<HTMLDivElement>{
  class? : string;
  colorPalleteBG?: TailWindColorPallete;
  colorPalleteFG?: TailWindColorPallete;
  themeNr: 0 | 1 ;
  sizeHead: number;
  sizeFoot: number;
  title:string;
}