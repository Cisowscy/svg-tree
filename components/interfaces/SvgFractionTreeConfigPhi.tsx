import { computed, signal } from "@preact/signals";
import type { SvgFractionTreeConfigPhiProps, ConfigLayerType } from "@@@types";
import { InputNumber, InputColor } from "@@@templatesChangeLESS";

export const configLabel = signal([3,5,4]);

export function SvgFractionTreeConfigPhi(props: SvgFractionTreeConfigPhiProps) {
  const classTailWind = (() => {
    const colorBG = props.colorPalleteBG ?? "slate";
    const colorFG = props.colorPalleteFG ?? "slate";

    return { 
      fieldset:`my-2 p-2 rounded-md border-[4px] border-${colorBG}-600/75  hover:border-${colorBG}-800/75`,
      fieldset_grid: `  pb-[2px] grid grid-cols-3 gap-[2px] place-content-stretch box-border`,      
      fieldset_legend:` px-2 py-1 rounded-lg bg-${colorBG}-600/75 text-${colorBG}-800 hover:bg-${colorBG}-800/75 hover:text-${colorBG}-500`
        +` font-mono text-xl subpixel-antialiased  text-left font-bold`,
    };
  })();
  //const handleOnonChangeGen = event => (_PROPS.gen1RhoPe.value = event.target.value);
  //const handleOnonChangeGen = event => (alert(event.target.value));
  //const handleOnonChangeGen = event => (alert(event.target.value));
  function handleChange(evt) {
    console.log("new value", evt.target.value);
  }
  return (
    <fieldset 
      {...props}
      class={`${props.class} ${classTailWind.fieldset}`}
    >
      <legend class={`${classTailWind.fieldset_legend}`}>(φ) {props.title}</legend>
      <div class={` ${classTailWind.fieldset_grid}`}>
        <InputNumber class4label={`text-[16.5px] `} class4input={`text-[26.5px]`} title="GEN" name="gen" value={5} min={1} max={9} step={0.5}   />
        <InputNumber class4label={`text-[16.5px] `} class4input={`text-[26.5px]`} title="END" name="end" value={5} min={1} max={9} step={0.5}   />
        <InputNumber class4label={`text-[16.5px] `} class4input={`text-[26.5px]`} title="GAP" name="gap" value={5} min={1} max={9} step={0.5}   />
      </div>
         {/*} 
         onInput={onInput_gen1RhoPe}  
  />*/}
      </fieldset>
  );
}