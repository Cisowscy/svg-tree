import { computed, signal } from "@preact/signals";
import type { SvgFractionTreeConfigRhoProps, ConfigLayerType } from "@@@types";
import { InputNumber, InputColor } from "@@@templatesChangeLESS";

export const configLabel = signal([3,"#ab01ef",4]);

export function SvgFractionTreeConfigRho(props: SvgFractionTreeConfigRhoProps) {
  const classTailWind = (() => {
    const colorBG = props.colorPalleteBG ?? "slate";
    const colorFG = props.colorPalleteFG ?? "slate";

    return { 
      fieldset:`my-2 p-2 rounded-md border-[4px] border-${colorBG}-600/75  hover:border-${colorBG}-800/75`,
      fieldset_grid: `  pb-1 grid grid-cols-3 gap-[2px] place-content-stretch box-border`,      
      fieldset_legend:` px-2 py-1 rounded-lg bg-${colorBG}-600/75 text-${colorBG}-800 hover:bg-${colorBG}-800/75 hover:text-${colorBG}-500`
        +` font-mono text-xl subpixel-antialiased  text-left font-bold`,
    };
  })();
  return (
    <fieldset 
      {...props}
      class={`${props.class} ${classTailWind.fieldset}`}
    >
      <legend class={`${classTailWind.fieldset_legend}`}>(ρ) {props.title}</legend>
      <div class={` ${classTailWind.fieldset_grid}`}>

        <InputNumber class={`w-full h-full`} min={1} max={9} step={0.5} value={configLabel.value[0]}  /> 
        <InputColor class={`w-full h-full`} value={configLabel.value[1]}  /> 
        <InputNumber class={`w-full h-full`} min={1} max={9} step={0.5} value={configLabel.value[2]}  /> 

      </div>
         {/*} 
         onInput={onInput_gen1RhoPe}  
  />*/}
      </fieldset>
  );
}