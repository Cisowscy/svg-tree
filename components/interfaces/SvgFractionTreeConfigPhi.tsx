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
      fieldset_grid: `  pb-1 grid grid-cols-3 gap-[2px] place-content-stretch box-border`,      
      fieldset_legend:` px-2 py-1 rounded-lg bg-${colorBG}-600/75 text-${colorBG}-800 hover:bg-${colorBG}-800/75 hover:text-${colorBG}-500`
        +` font-mono text-xl subpixel-antialiased  text-left font-bold`,
      inputs_label: `border-${colorBG}-100/50 border-2 rounded bg-${colorBG}-200/30 transition-colors text-${colorFG}-700`
      + ` px-2   w-full font-mono font-bold text-3xl text-center subpixel-antialiased`
      + ` hover:border-${colorBG}-900/50 hover:bg-${colorBG}-800/50 hover:text-${colorFG}-300 `,
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

        <h2 class={` ${classTailWind.inputs_label} `}>GEN</h2>
        <h2 class={` ${classTailWind.inputs_label} `}>END</h2>
        <h2 class={` ${classTailWind.inputs_label} `}>GAP</h2>
        <InputNumber class={`w-full h-full`} min={1} max={9} step={0.5} value={configLabel.value[0]} onInput={handleChange} />
        <InputNumber class={`w-full h-full`} min={1} max={9} step={0.5} value={configLabel.value[1]}  />
        <InputNumber class={`w-full h-full`} min={1} max={9} step={0.5} value={configLabel.value[2]}  />

      </div>
         {/*} 
         onInput={onInput_gen1RhoPe}  
  />*/}
      </fieldset>
  );
}