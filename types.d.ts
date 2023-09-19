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

export interface FieldSetCol3Props extends JSX.HTMLAttributes<HTMLFieldSetElement>{
  children: ComponentChildren;
  class? : string;
  colorPalleteBG?: TailWindColorPallete;
  colorPalleteFG?: TailWindColorPallete;
  title: string;
  name: string;
}

export interface InputNumberProps extends JSX.HTMLAttributes<HTMLInputElement>{
  class? : string;
  colorPalleteBG?: TailWindColorPallete;
  colorPalleteFG?: TailWindColorPallete;
  min:number;
  max:number;
  step:number;
  value:number;
  title: string;
  class4input?: string;
  class4label?: string;
}
export interface InputColorProps extends JSX.HTMLAttributes<HTMLInputElement>{
  class? : string;
  colorPalleteBG?: TailWindColorPallete;
  colorPalleteFG?: TailWindColorPallete;
  value:string;
  title: string;
  class4input?: string;
  class4label?: string;
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

interface SvgFractionTreeConfigProps {
  abc?:number;
}
interface SvgProps extends JSX.SVGAttributes<SVGSVGElement> {
  class? : string;
  sizePX: number;
  children: ComponentChildren;
}
interface SvgFractionTreePlotProps {
  abc?:number;
  
}

interface SignalStateDiagnosticOutPutProps {
  abc?:number;
}





































export type initTreeFractionRhoOut = {
  info: TypeInitNewTreeInfo;
  data: TypeInitNewTreeData;
}

export type TypeInitNewTreeData = {
  par: Par[];
  per: Per[];
}

export type Par = {
  info: ParInfo;
  data: ParData;
}

export type ParData = {
  itemType: PurpleItemType;
  indexPar: number | null;
  angleFra: number;
}

export type PurpleItemType = "isEND" | "isPAR" | "isGAP";

export type ParInfo = {
  indexFra:       number;
  indexFraInc:    number;
  indexFraDec:    number;
  indexFraIncMod: number;
  indexFraDecMod: number;
}

export type Per = {
  info: ParInfo;
  data: PerData;
}

export type PerData = {
  itemType: FluffyItemType;
  indexPer: number | null;
  angleFra: number;
}

export type FluffyItemType = "isPER" | "isEND" | "isMID";

export type TypeInitNewTreeInfo = {
  indexGen:     number;
  setGap:       number;
  setEnd:       number;
  itemsFra:     number;
  itemsFraPar:  ItemsFraP;
  itemsFraPer:  ItemsFraP;
  angleFraStep: number;
}

export type ItemsFraP = {
  itemsGen:     number;
  itemsGap:     number;
  itemsEnd:     number;
  angleFraZero: number;
}
