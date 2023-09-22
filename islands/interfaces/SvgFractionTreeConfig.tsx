// Document https://fresh.deno.dev/docs/concepts/islands

//import { useState } from 'preact/hooks';
//import type { Signal } from "@preact/signals";
import type { SvgFractionTreeConfigProps } from "@@@types";
import { InputNumber, InputColor, FieldSetCol3, Button } from "@@@templatesChangeLESS";


import { TREE_LAYERS } from "@@@globalCONTROLS";


export function SvgFractionTreeConfig(props: SvgFractionTreeConfigProps) {
  
  const changeConfigFractions = event => {
    (TREE_LAYERS.value={
      ...TREE_LAYERS.value,
      [event.target.name]:  (event.target.name !== "huePA" && event.target.name !== "huePE" && event.target.name !== "hueGE" && event.target.name !== "hueGM" 
        && event.target.name !== "gen0HUE" && event.target.name !== "gen1HUE" && event.target.name !== "gen2HUE" && event.target.name !== "gen3HUE" 
        &&  event.target.name !== "gen4HUE" && event.target.name !== "gen5HUE" && event.target.name !== "gen6HUE" && event.target.name !== "gen7HUE")
        ? parseInt(event.target.value,10) : event.target.value
    });
  }; 

  return (
    <div>
      <Button class={`w-full`} >ok</Button>

      <FieldSetCol3  
                                title={`(φ) pokolenia`} 
                                name="cofigLayers">
        <InputNumber title="PLY" name="PLY" value={TREE_LAYERS.value.PLY} onInput={changeConfigFractions} class4label={` h-[33px] text-[20px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={7} step={1} />
        <InputNumber title="MID" name="MID" value={TREE_LAYERS.value.MID} onInput={changeConfigFractions} class4label={` h-[33px] text-[20px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <InputNumber title="SET" name="SET" value={TREE_LAYERS.value.SET} onInput={changeConfigFractions} class4label={` h-[33px] text-[20px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <p class={`text-[10px]`}   >PLY: {TREE_LAYERS.value.PLY}</p>
        <p class={`text-[10px]`}   >MID: {TREE_LAYERS.value.MID}</p>
        <p class={`text-[10px]`}   >SET: {TREE_LAYERS.value.SET}</p>
        <div
          class={`col-span-3 grid grid-cols-2 gap-[5px]`}
        >
          <InputColor title="PARENT" name="huePA" value={TREE_LAYERS.value.huePA} onInput={changeConfigFractions} class4label={` h-[33px] text-[20px]`} class4input={` h-[40px] text-[26.5px]`}/>
          <InputColor title="PERSON" name="huePE" value={TREE_LAYERS.value.huePE} onInput={changeConfigFractions} class4label={` h-[33px] text-[20px]`} class4input={` h-[40px] text-[26.5px]`}/>
          <p class={`text-[10px]`}   >huePA: {TREE_LAYERS.value.huePA}</p>
          <p class={`text-[10px]`}   >huePE: {TREE_LAYERS.value.huePE}</p>
          <InputColor title="GAPMID" name="hueGM" value={TREE_LAYERS.value.hueGM} onInput={changeConfigFractions} class4label={` h-[33px] text-[20px]`} class4input={` h-[40px] text-[26.5px]`}/>
          <InputColor title="GAPEND" name="hueGE" value={TREE_LAYERS.value.hueGE} onInput={changeConfigFractions} class4label={` h-[33px] text-[20px]`} class4input={` h-[40px] text-[26.5px]`}/>
          <p class={`text-[10px]`}   >hueGM: {TREE_LAYERS.value.hueGM}</p>
          <p class={`text-[10px]`}   >hueGE: {TREE_LAYERS.value.hueGE}</p>
        </div>
      </FieldSetCol3>

      {TREE_LAYERS.value.PLY >=0 && <FieldSetCol3  
                                  title ={`(ρ) pokolenie 0`}
                                  name=   "cofigLayer0">
        <InputNumber name="gen0sPA"  value={TREE_LAYERS.value.gen0sPA} onInput={changeConfigFractions} title="sPA" class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <InputColor  name="gen0HUE"  value={TREE_LAYERS.value.gen0HUE} onInput={changeConfigFractions} title="HUE" class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`}/>
        <InputNumber name="gen0sPE"  value={TREE_LAYERS.value.gen0sPE} onInput={changeConfigFractions} title="sPE" class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <p class={`text-[10px]`} >sPA: {TREE_LAYERS.value.gen0sPA}</p>
        <p class={`text-[10px]`} >HUE: {TREE_LAYERS.value.gen0HUE}</p>
        <p class={`text-[10px]`} >sPE: {TREE_LAYERS.value.gen0sPE}</p>
      </FieldSetCol3>}

      {TREE_LAYERS.value.PLY > 0 && <FieldSetCol3  
                                  title ={`(ρ) pokolenie 1`}
                                  name=   "cofigLayer1">
        <InputNumber name="gen1sPA"  value={TREE_LAYERS.value.gen1sPA} onInput={changeConfigFractions} title="sPA" class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <InputColor  name="gen1HUE"  value={TREE_LAYERS.value.gen1HUE} onInput={changeConfigFractions} title="HUE" class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`}/>
        <InputNumber name="gen1sPE"  value={TREE_LAYERS.value.gen1sPE} onInput={changeConfigFractions} title="sPE" class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <p class={`text-[10px]`} >sPA: {TREE_LAYERS.value.gen1sPA}</p>
        <p class={`text-[10px]`} >HUE: {TREE_LAYERS.value.gen1HUE}</p>
        <p class={`text-[10px]`} >sPE: {TREE_LAYERS.value.gen1sPE}</p>
      </FieldSetCol3>}

      {TREE_LAYERS.value.PLY > 1 && <FieldSetCol3  
                                  title ={`(ρ) pokolenie 2`}
                                  name=   "cofigLayer2">
        <InputNumber name="gen2sPA"  value={TREE_LAYERS.value.gen2sPA} onInput={changeConfigFractions} title="sPA" class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <InputColor  name="gen2HUE"  value={TREE_LAYERS.value.gen2HUE} onInput={changeConfigFractions} title="HUE" class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`}/>
        <InputNumber name="gen2sPE"  value={TREE_LAYERS.value.gen2sPE} onInput={changeConfigFractions} title="sPE" class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <p class={`text-[10px]`} >sPA: {TREE_LAYERS.value.gen2sPA}</p>
        <p class={`text-[10px]`} >HUE: {TREE_LAYERS.value.gen2HUE}</p>
        <p class={`text-[10px]`} >sPE: {TREE_LAYERS.value.gen2sPE}</p>
      </FieldSetCol3>}

      {TREE_LAYERS.value.PLY > 2 && <FieldSetCol3  
                                  title ={`(ρ) pokolenie 3`}
                                  name=   "cofigLayer3">
        <InputNumber name="gen3sPA"  value={TREE_LAYERS.value.gen3sPA} onInput={changeConfigFractions} title="sPA" class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <InputColor  name="gen3HUE"  value={TREE_LAYERS.value.gen3HUE} onInput={changeConfigFractions} title="HUE" class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`}/>
        <InputNumber name="gen3sPE"  value={TREE_LAYERS.value.gen3sPE} onInput={changeConfigFractions} title="sPE" class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <p class={`text-[10px]`} >sPA: {TREE_LAYERS.value.gen3sPA}</p>
        <p class={`text-[10px]`} >HUE: {TREE_LAYERS.value.gen3HUE}</p>
        <p class={`text-[10px]`} >sPE: {TREE_LAYERS.value.gen3sPE}</p>
      </FieldSetCol3>}

      {TREE_LAYERS.value.PLY > 3 && <FieldSetCol3  
                                  title ={`(ρ) pokolenie 4`}
                                  name=   "cofigLayer4">
        <InputNumber name="gen4sPA"  value={TREE_LAYERS.value.gen4sPA} onInput={changeConfigFractions} title="sPA" class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <InputColor  name="gen4HUE"  value={TREE_LAYERS.value.gen4HUE} onInput={changeConfigFractions} title="HUE" class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`}/>
        <InputNumber name="gen4sPE"  value={TREE_LAYERS.value.gen4sPE} onInput={changeConfigFractions} title="sPE" class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <p class={`text-[10px]`} >sPA: {TREE_LAYERS.value.gen4sPA}</p>
        <p class={`text-[10px]`} >HUE: {TREE_LAYERS.value.gen4HUE}</p>
        <p class={`text-[10px]`} >sPE: {TREE_LAYERS.value.gen4sPE}</p>
      </FieldSetCol3>}

      {TREE_LAYERS.value.PLY > 4 && <FieldSetCol3  
                                  title ={`(ρ) pokolenie 5`}
                                  name=   "cofigLayer5">
        <InputNumber name="gen5sPA"  value={TREE_LAYERS.value.gen5sPA} onInput={changeConfigFractions} title="sPA" class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <InputColor  name="gen5HUE"  value={TREE_LAYERS.value.gen5HUE} onInput={changeConfigFractions} title="HUE" class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`}/>
        <InputNumber name="gen5sPE"  value={TREE_LAYERS.value.gen5sPE} onInput={changeConfigFractions} title="sPE" class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <p class={`text-[10px]`} >sPA: {TREE_LAYERS.value.gen5sPA}</p>
        <p class={`text-[10px]`} >HUE: {TREE_LAYERS.value.gen5HUE}</p>
        <p class={`text-[10px]`} >sPE: {TREE_LAYERS.value.gen5sPE}</p>
      </FieldSetCol3>}

      {TREE_LAYERS.value.PLY > 5 && <FieldSetCol3  
                                  title ={`(ρ) pokolenie 6`}
                                  name=   "cofigLayer6">
        <InputNumber name="gen6sPA"  value={TREE_LAYERS.value.gen6sPA} onInput={changeConfigFractions} title="sPA" class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <InputColor  name="gen6HUE"  value={TREE_LAYERS.value.gen6HUE} onInput={changeConfigFractions} title="HUE" class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`}/>
        <InputNumber name="gen6sPE"  value={TREE_LAYERS.value.gen6sPE} onInput={changeConfigFractions} title="sPE" class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <p class={`text-[10px]`} >sPA: {TREE_LAYERS.value.gen6sPA}</p>
        <p class={`text-[10px]`} >HUE: {TREE_LAYERS.value.gen6HUE}</p>
        <p class={`text-[10px]`} >sPE: {TREE_LAYERS.value.gen6sPE}</p>
      </FieldSetCol3>}

      {TREE_LAYERS.value.PLY > 6 && <FieldSetCol3  
                                  title ={`(ρ) pokolenie 7`}
                                  name=   "cofigLayer7">
        <InputNumber name="gen7sPA"  value={TREE_LAYERS.value.gen7sPA} onInput={changeConfigFractions} title="sPA" class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <InputColor  name="gen7HUE"  value={TREE_LAYERS.value.gen7HUE} onInput={changeConfigFractions} title="HUE" class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`}/>
        <InputNumber name="gen7sPE"  value={TREE_LAYERS.value.gen7sPE} onInput={changeConfigFractions} title="sPE" class4label={` h-[33px] text-[16.5px] `} class4input={` h-[40px] text-[26.5px]`} min={1} max={9} step={1} />
        <p class={`text-[10px]`} >sPA: {TREE_LAYERS.value.gen7sPA}</p>
        <p class={`text-[10px]`} >HUE: {TREE_LAYERS.value.gen7HUE}</p>
        <p class={`text-[10px]`} >sPE: {TREE_LAYERS.value.gen7sPE}</p>
      </FieldSetCol3>}

    </div>
  );
}