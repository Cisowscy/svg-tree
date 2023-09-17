import { JSX } from "preact";
import type { TailWindColorPallete, TailWindColorlevel,  TailWindColorAlpha} from '@@@types/tailwind.d.ts';

export interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement>{
  class? : string;
  colorPalleteBG?: TailWindColorPallete;
  colorPalleteFG?: TailWindColorPallete;
}

