// Document https://fresh.deno.dev/docs/concepts/islands

import { useState } from 'preact/hooks';
import type { Signal } from "@preact/signals";
import type { SvgFractionTreeConfigProps } from "@@@types";
import { InputNumber, InputColor, FieldSetCol3, Button } from "@@@templatesChangeLESS";
import { TreeFractionInit } from "@@@logic";


import {
  TREE_LAYERS,
  TREE_LAYER0,
  TREE_LAYER1,
  TREE_LAYER2,
  TREE_LAYER3,
  TREE_LAYER4,
  TREE_LAYER5,
  TREE_LAYER6,
  TREE_LAYER7
} from "@@@globalCONTROLS";


export function SvgFractionTreeConfig(props: SvgFractionTreeConfigProps) {
  function V(a:boolean, c:number):number {
    return a ? c : 0;
  }
  function W():number{
    const arr=[   V(TREE_LAYERS.value.GEN > 0, TREE_LAYER1.value.sPE),
                  V(TREE_LAYERS.value.GEN > 0, TREE_LAYER1.value.sPA),
                  V(TREE_LAYERS.value.GEN > 1, TREE_LAYER2.value.sPE),
                  V(TREE_LAYERS.value.GEN > 1, TREE_LAYER2.value.sPA),
                  V(TREE_LAYERS.value.GEN > 2, TREE_LAYER3.value.sPE),
                  V(TREE_LAYERS.value.GEN > 2, TREE_LAYER3.value.sPA),
                  V(TREE_LAYERS.value.GEN > 3, TREE_LAYER4.value.sPE),
                  V(TREE_LAYERS.value.GEN > 3, TREE_LAYER4.value.sPA),
                  V(TREE_LAYERS.value.GEN > 4, TREE_LAYER5.value.sPE),
                  V(TREE_LAYERS.value.GEN > 4, TREE_LAYER5.value.sPA),
                  V(TREE_LAYERS.value.GEN > 5, TREE_LAYER6.value.sPE),
                  V(TREE_LAYERS.value.GEN > 5, TREE_LAYER6.value.sPA),
                  V(TREE_LAYERS.value.GEN > 6, TREE_LAYER7.value.sPE),
                  V(TREE_LAYERS.value.GEN > 6, TREE_LAYER7.value.sPA)];
      console.log(arr);
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue);

  }
  const handleOnInput_changeConfigCountLayers = event => {
    (TREE_LAYERS.value={...TREE_LAYERS.value, [event.target.name]: parseInt(event.target.value,10)});
    //props.configTreeFractions.value = TreeFractionInit(props.layers.value);
  };  
  const handleOnInput_changeConfigTypesLayer0 = event => {
    (TREE_LAYER0.value={...TREE_LAYER0.value, [event.target.name]: (event.target.name!=="HUE"? parseInt(event.target.value,10) : event.target.value)});
    //props.cofigCentLayers.value = W();
  };  
  const handleOnInput_changeConfigTypesLayer1 = event => {
    (TREE_LAYER1.value={...TREE_LAYER1.value, [event.target.name]: (event.target.name!=="HUE"? parseInt(event.target.value,10) : event.target.value)});
   // props.cofigCentLayers.value = W();
  };  
  const handleOnInput_changeConfigTypesLayer2 = event => {
    (TREE_LAYER2.value={...TREE_LAYER2.value, [event.target.name]: (event.target.name!=="HUE"? parseInt(event.target.value,10) : event.target.value)});
    //props.cofigCentLayers.value = W();
  };  
  const handleOnInput_changeConfigTypesLayer3 = event => {
    (TREE_LAYER3.value={...TREE_LAYER3.value, [event.target.name]: (event.target.name!=="HUE"? parseInt(event.target.value,10) : event.target.value)});
    //props.cofigCentLayers.value = W();
  };  
  const handleOnInput_changeConfigTypesLayer4 = event => {
    (TREE_LAYER4.value={...TREE_LAYER4.value, [event.target.name]: (event.target.name!=="HUE"? parseInt(event.target.value,10) : event.target.value)});
   // props.cofigCentLayers.value = W();
  };  
  const handleOnInput_changeConfigTypesLayer5 = event => {
    (TREE_LAYER5.value={...TREE_LAYER5.value, [event.target.name]: (event.target.name!=="HUE"? parseInt(event.target.value,10) : event.target.value)});
   // props.cofigCentLayers.value = W();
  };  
  const handleOnInput_changeConfigTypesLayer6 = event => {
    (TREE_LAYER6.value={...TREE_LAYER6.value, [event.target.name]: (event.target.name!=="HUE"? parseInt(event.target.value,10) : event.target.value)});
   // props.cofigCentLayers.value = W();
  };  
  const handleOnInput_changeConfigTypesLayer7 = event => {
    (TREE_LAYER7.value={...TREE_LAYER7.value, [event.target.name]: (event.target.name!=="HUE"? parseInt(event.target.value,10) : event.target.value)});
    //props.cofigCentLayers.value = W();
  };



  return (
    <div>
      <Button class={`w-full`} onClick={()=>(props.configTreeFractions.value = TreeFractionInit(props.layers.value))}>ok</Button>
      <FieldSetCol3  title={`(φ) pokolenia`} name="cofigLayers">
        <InputNumber colorPalleteBG="red" name="GEN" value={TREE_LAYERS.value.GEN} 
        onInput={handleOnInput_changeConfigCountLayers} title="GEN" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={7} step={1} />
        <InputNumber    name="END" value={TREE_LAYERS.value.END} 
        onInput={handleOnInput_changeConfigCountLayers} title="END" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <InputNumber    name="GAP" value={TREE_LAYERS.value.GAP} 
        onInput={handleOnInput_changeConfigCountLayers} title="GAP" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <p class={`text-[10px]`}   >GEN: {TREE_LAYERS.value.GEN}</p>
        <p class={`text-[10px]`}   >END: {TREE_LAYERS.value.END}</p>
        <p class={`text-[10px]`}   >GAP: {TREE_LAYERS.value.GAP}</p>
      </FieldSetCol3>

      {TREE_LAYERS.value.GEN >=0 && <FieldSetCol3  
                                  title ={`(ρ) pokolenie 0`}
                                  name=   "cofigLayer0">
        <InputNumber name="sPA"  value={TREE_LAYER0.value.sPA} 
        onInput={handleOnInput_changeConfigTypesLayer0} title="sPA" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <InputColor  name="HUE"  value={TREE_LAYER0.value.HUE} 
        onInput={handleOnInput_changeConfigTypesLayer0} title="HUE" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`}/>
        <InputNumber name="sPE"  value={TREE_LAYER0.value.sPE} 
        onInput={handleOnInput_changeConfigTypesLayer0} title="sPE" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <p class={`text-[10px]`} >sPA: {TREE_LAYER0.value.sPA}</p>
        <p class={`text-[10px]`} >HUE: {TREE_LAYER0.value.HUE}</p>
        <p class={`text-[10px]`} >sPE: {TREE_LAYER0.value.sPE}</p>
      </FieldSetCol3>}

      {TREE_LAYERS.value.GEN > 0 && <FieldSetCol3  
                                  title ={`(ρ) pokolenie 1`}
                                  name=   "cofigLayer1">
        <InputNumber name="sPA"  value={TREE_LAYER1.value.sPA} 
        onInput={handleOnInput_changeConfigTypesLayer1} title="sPA" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <InputColor  name="HUE"  value={TREE_LAYER1.value.HUE} 
        onInput={handleOnInput_changeConfigTypesLayer1} title="HUE" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`}/>
        <InputNumber name="sPE"  value={TREE_LAYER1.value.sPE} 
        onInput={handleOnInput_changeConfigTypesLayer1} title="sPE" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <p class={`text-[10px]`} >sPA: {TREE_LAYER1.value.sPA}</p>
        <p class={`text-[10px]`} >HUE: {TREE_LAYER1.value.HUE}</p>
        <p class={`text-[10px]`} >sPE: {TREE_LAYER1.value.sPE}</p>
      </FieldSetCol3>}

      {TREE_LAYERS.value.GEN > 1 && <FieldSetCol3  
                                  title ={`(ρ) pokolenie 2`}
                                  name=   "cofigLayer2">
        <InputNumber name="sPA"  value={TREE_LAYER2.value.sPA} 
        onInput={handleOnInput_changeConfigTypesLayer2} title="sPA" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <InputColor  name="HUE"  value={TREE_LAYER2.value.HUE} 
        onInput={handleOnInput_changeConfigTypesLayer2} title="HUE" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`}/>
        <InputNumber name="sPE"  value={TREE_LAYER2.value.sPE} 
        onInput={handleOnInput_changeConfigTypesLayer2} title="sPE" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <p class={`text-[10px]`} >sPA: {TREE_LAYER2.value.sPA}</p>
        <p class={`text-[10px]`} >HUE: {TREE_LAYER2.value.HUE}</p>
        <p class={`text-[10px]`} >sPE: {TREE_LAYER2.value.sPE}</p>
      </FieldSetCol3>}

      {TREE_LAYERS.value.GEN > 2 && <FieldSetCol3  
                                  title ={`(ρ) pokolenie 3`}
                                  name=   "cofigLayer3">
        <InputNumber name="sPA"  value={TREE_LAYER3.value.sPA} 
        onInput={handleOnInput_changeConfigTypesLayer3} title="sPA" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <InputColor  name="HUE"  value={TREE_LAYER3.value.HUE} 
        onInput={handleOnInput_changeConfigTypesLayer3} title="HUE" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`}/>
        <InputNumber name="sPE"  value={TREE_LAYER3.value.sPE} 
        onInput={handleOnInput_changeConfigTypesLayer3} title="sPE" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <p class={`text-[10px]`} >sPA: {TREE_LAYER3.value.sPA}</p>
        <p class={`text-[10px]`} >HUE: {TREE_LAYER3.value.HUE}</p>
        <p class={`text-[10px]`} >sPE: {TREE_LAYER3.value.sPE}</p>
      </FieldSetCol3>}

      {TREE_LAYERS.value.GEN > 3 && <FieldSetCol3  
                                  title ={`(ρ) pokolenie 4`}
                                  name=   "cofigLayer4">
        <InputNumber name="sPA"  value={TREE_LAYER4.value.sPA} 
        onInput={handleOnInput_changeConfigTypesLayer4} title="sPA" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <InputColor  name="HUE"  value={TREE_LAYER4.value.HUE} 
        onInput={handleOnInput_changeConfigTypesLayer4} title="HUE" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`}/>
        <InputNumber name="sPE"  value={TREE_LAYER4.value.sPE} 
        onInput={handleOnInput_changeConfigTypesLayer4} title="sPE" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <p class={`text-[10px]`} >sPA: {TREE_LAYER4.value.sPA}</p>
        <p class={`text-[10px]`} >HUE: {TREE_LAYER4.value.HUE}</p>
        <p class={`text-[10px]`} >sPE: {TREE_LAYER4.value.sPE}</p>
      </FieldSetCol3>}

      {TREE_LAYERS.value.GEN > 4 && <FieldSetCol3  
                                  title ={`(ρ) pokolenie 5`}
                                  name=   "cofigLayer5">
        <InputNumber name="sPA"  value={TREE_LAYER5.value.sPA} 
        onInput={handleOnInput_changeConfigTypesLayer5} title="sPA" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <InputColor  name="HUE"  value={TREE_LAYER5.value.HUE} 
        onInput={handleOnInput_changeConfigTypesLayer5} title="HUE" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`}/>
        <InputNumber name="sPE"  value={TREE_LAYER5.value.sPE} 
        onInput={handleOnInput_changeConfigTypesLayer5} title="sPE" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <p class={`text-[10px]`} >sPA: {TREE_LAYER5.value.sPA}</p>
        <p class={`text-[10px]`} >HUE: {TREE_LAYER5.value.HUE}</p>
        <p class={`text-[10px]`} >sPE: {TREE_LAYER5.value.sPE}</p>
      </FieldSetCol3>}

      {TREE_LAYERS.value.GEN > 5 && <FieldSetCol3  
                                  title ={`(ρ) pokolenie 6`}
                                  name=   "cofigLayer6">
        <InputNumber name="sPA"  value={TREE_LAYER6.value.sPA} 
        onInput={handleOnInput_changeConfigTypesLayer6} title="sPA" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <InputColor  name="HUE"  value={TREE_LAYER6.value.HUE} 
        onInput={handleOnInput_changeConfigTypesLayer6} title="HUE" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`}/>
        <InputNumber name="sPE"  value={TREE_LAYER6.value.sPE} 
        onInput={handleOnInput_changeConfigTypesLayer6} title="sPE" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <p class={`text-[10px]`} >sPA: {TREE_LAYER6.value.sPA}</p>
        <p class={`text-[10px]`} >HUE: {TREE_LAYER6.value.HUE}</p>
        <p class={`text-[10px]`} >sPE: {TREE_LAYER6.value.sPE}</p>
      </FieldSetCol3>}

      {TREE_LAYERS.value.GEN > 6 && <FieldSetCol3  
                                  title ={`(ρ) pokolenie 7`}
                                  name=   "cofigLayer7">
        <InputNumber name="sPA"  value={TREE_LAYER7.value.sPA} 
        onInput={handleOnInput_changeConfigTypesLayer7} title="sPA" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <InputColor  name="HUE"  value={TREE_LAYER7.value.HUE} 
        onInput={handleOnInput_changeConfigTypesLayer7} title="HUE" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`}/>
        <InputNumber name="sPE"  value={TREE_LAYER7.value.sPE} 
        onInput={handleOnInput_changeConfigTypesLayer7} title="sPE" class={`w-full h-full`} class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <p class={`text-[10px]`} >sPA: {TREE_LAYER7.value.sPA}</p>
        <p class={`text-[10px]`} >HUE: {TREE_LAYER7.value.HUE}</p>
        <p class={`text-[10px]`} >sPE: {TREE_LAYER7.value.sPE}</p>
      </FieldSetCol3>}

    </div>
  );
}