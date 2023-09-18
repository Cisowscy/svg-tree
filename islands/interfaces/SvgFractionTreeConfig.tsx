// Document https://fresh.deno.dev/docs/concepts/islands

import { useState } from 'preact/hooks';
import type { Signal } from "@preact/signals";
import type { SvgFractionTreeConfigProps } from "@@@types";
import { InputNumber, InputColor, FieldSetCol3 } from "@@@templatesChangeLESS";



export function SvgFractionTreeConfig(props: SvgFractionTreeConfigProps) {
  const handleOnInput_changeConfigCountLayers = event => (props.layers.value={...props.layers.value, [event.target.name]: event.target.value});  
  const handleOnInput_changeConfigTypesLayer1 = event => (props.layer1.value={...props.layer1.value, [event.target.name]: event.target.value});  
  const handleOnInput_changeConfigTypesLayer2 = event => (props.layer2.value={...props.layer2.value, [event.target.name]: event.target.value});  
  const handleOnInput_changeConfigTypesLayer3 = event => (props.layer3.value={...props.layer3.value, [event.target.name]: event.target.value});  
  const handleOnInput_changeConfigTypesLayer4 = event => (props.layer4.value={...props.layer4.value, [event.target.name]: event.target.value});  
  const handleOnInput_changeConfigTypesLayer5 = event => (props.layer5.value={...props.layer5.value, [event.target.name]: event.target.value});  
  const handleOnInput_changeConfigTypesLayer6 = event => (props.layer6.value={...props.layer6.value, [event.target.name]: event.target.value});  
  const handleOnInput_changeConfigTypesLayer7 = event => (props.layer7.value={...props.layer7.value, [event.target.name]: event.target.value});

  return (
    <div>
      <FieldSetCol3  title={`pokolenia`} name="cofigLayers">
        <InputNumber name="gen" value={props.layers.value.gen} onInput={handleOnInput_changeConfigCountLayers} title="GEN" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={0.5} />
        <InputNumber name="end" value={props.layers.value.end} onInput={handleOnInput_changeConfigCountLayers} title="END" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={0.5} />
        <InputNumber name="gap" value={props.layers.value.gap} onInput={handleOnInput_changeConfigCountLayers} title="GAP" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={0.5} />
        <p class={`text-[10px]`} >GEN: {props.layers.value.gen}</p>
        <p class={`text-[10px]`} >END: {props.layers.value.end}</p>
        <p class={`text-[10px]`} >GAP: {props.layers.value.gap}</p>
      </FieldSetCol3>

      <FieldSetCol3  title={`pokolenie X`}  name="cofigLayerX">
        <InputNumber name="rhoPa" value={props.layer1.value.rhoPa} onInput={handleOnInput_changeConfigTypesLayer1} title="RhoPa" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={0.5} />
        <InputColor  name="color" value={props.layer1.value.color} onInput={handleOnInput_changeConfigTypesLayer1} title="Color" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`}/>
        <InputNumber name="rhoPe" value={props.layer1.value.rhoPe} onInput={handleOnInput_changeConfigTypesLayer1} title="RhoPe" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={0.5} />
        <p class={`text-[10px]`} >RhoPa: {props.layer1.value.rhoPa}</p>
        <p class={`text-[10px]`} >Color: {props.layer1.value.color}</p>
        <p class={`text-[10px]`} >RhoPe: {props.layer1.value.rhoPe}</p>
      </FieldSetCol3>
    </div>
  );
}