// Document https://fresh.deno.dev/docs/concepts/islands

import type { Signal } from "@preact/signals";
import type { SvgFractionTreeConfigProps, ConfigLayerType } from "@@@types";
import { SvgFractionTreeConfigRho, SvgFractionTreeConfigPhi } from "@@@interfacesChangeLESS";
import { InputNumber, InputColor } from "@@@templatesChangeLESS";


import { useState } from 'preact/hooks';


export function SvgFractionTreeConfig(props: SvgFractionTreeConfigProps) {
  const handleOnInput_changeConfigCountLayers = event => (props.layers.value={...props.layers.value, [event.target.name]: event.target.value});  
  const handleOnInput_changeConfigTypesLayer1 = event => (props.layer1.value={...props.layer1.value, [event.target.name]: event.target.value});

  //  const value = event.target.value;
  //  //[props.count4.value[event.target.name]]:value
  //  (props.count3.value = event.target.value)
  //};
  
  const [state, setState] = useState({gen:5,gap:4,end:3});  
  const handle_onInput_4 = event => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  };
  return (
    <div>
      <form name="changeConfigCountLayers">
        <h1> changeConfigCountLayers </h1>
        <label > GEN <InputNumber class={`w-full h-full`} min={1} max={9} step={0.5} name="gen" value={props.layers.value.gen} onInput={handleOnInput_changeConfigCountLayers}   /> </label>
        <label > END <InputNumber class={`w-full h-full`} min={1} max={9} step={0.5} name="end" value={props.layers.value.end} onInput={handleOnInput_changeConfigCountLayers}   /> </label>
        <label > GAP <InputNumber class={`w-full h-full`} min={1} max={9} step={0.5} name="gap" value={props.layers.value.gap} onInput={handleOnInput_changeConfigCountLayers}   /> </label>
        <hr />
        <span>|GEN:{props.layers.value.gen}|END:{props.layers.value.end}|GAP:{props.layers.value.gap}|</span>
      </form>
      <br />      
      <form name="changeConfigTypesLayerX">
        <h1> changeConfigTypesLayer1 </h1>
        <label > RhoPa <InputNumber class={`w-full h-full`} min={1} max={9} step={0.5} name="rhoPa" value={props.layer1.value.rhoPa} onInput={handleOnInput_changeConfigTypesLayer1}   /> </label>
        <label > Color <InputColor class={`w-full h-full`} name="color" value={props.layer1.value.color}  onInput={handleOnInput_changeConfigTypesLayer1} /> </label>
        <label > RhoPe <InputNumber class={`w-full h-full`} min={1} max={9} step={0.5} name="rhoPe" value={props.layer1.value.rhoPe} onInput={handleOnInput_changeConfigTypesLayer1}   /> </label>
        <hr />
        <span>|RhoPa:{props.layer1.value.rhoPa}|Color:{props.layer1.value.color}|RhoPe:{props.layer1.value.rhoPe}|</span>
      </form>
    <SvgFractionTreeConfigPhi title={`pokolenia`}/>
    <SvgFractionTreeConfigRho title={`pokolenie X`}/>
      <button onClick={() => props.count.value -= 1}>-1</button>
      <p>{props.count}</p>
      <button onClick={() => props.count.value += 1}>+1</button>
    </div>
  );
}