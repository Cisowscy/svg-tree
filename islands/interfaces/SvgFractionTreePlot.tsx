// Document https://fresh.deno.dev/docs/concepts/islands

import type { Signal } from "@preact/signals";
import { signal, computed, effect, batch } from "@preact/signals";
import type { SvgFractionTreePlotProps,initTreeFractionRhoOut } from "@@@types";


import {
  TREE_RHO,  
  TREE_PHI
} from "@@@globalCONTROLS";



function layerX_PHI(nrGen:number, end:number, gap:number) {
  const frPer_frEnd= (nrGen===0) ? 0 : end;
  const frPar_frEnd= (nrGen===0) ? 1 : end+1;
  const frPer_frGen= Math.floor(Math.pow(2,nrGen));
  const frPar_frGen= Math.floor(Math.pow(2,nrGen-1));
  const frPer_frGap=(nrGen===0 || nrGen===1) ? 0 : (frPar_frGen-1)*gap;
  const frPar_frGap=(nrGen===0) ? 0 : frPar_frGen +frPer_frGap -1;
  const fractions = (frPer_frGen+frPer_frGap+frPer_frEnd)==(frPar_frGen+frPar_frGap+frPar_frEnd) ? (frPar_frGen+frPar_frGap+frPar_frEnd) : 0;
  
  return {
    fractionsPerson:{end:frPer_frEnd, gen:frPer_frGen, gap:frPer_frGap}, 
    fractionsParent:{end:frPar_frEnd, gen:frPar_frGen, gap:frPar_frGap}, 
    fractions: fractions
  };
}

export function SvgFractionTreePlot(props: SvgFractionTreePlotProps) {

  
  

//const layer1_Phi = computed(() => {
//  return layerX_PHI(1, props.layers.value.end, props.layers.value.gap);
//});
//effect(() => console.log(props.configTreeFractions.value));

  return (   
    <g>
      {TREE_RHO.value.map((Layer, nrLayer) =>{
            return(
              <>
                <circle cx="0" cy="0" fill="none" stroke-width="50" stroke={`${Layer.HUE}`} r={`${Layer.rPA.toFixed(3)}`} />
                <circle cx="0" cy="0" fill="none" stroke-width="50" stroke={`${Layer.HUE}`} r={`${Layer.rPE.toFixed(3)}`} />
              </>
            );
        })}
      {TREE_PHI.value.map((LAYER, nrLAYER) =>{
        const L_INFO = LAYER.INFO;
        return(<>
          <g>{LAYER.DATA.PAR.map((ITEM, nrITEM) => {
            const I_INFO = ITEM.INFO;
            const I_DATA = ITEM.DATA;
            //console.log(Object.keys(ITEM.INFO));
          })}</g>
          <g>{LAYER.DATA.PER.map((ITEM, nrITEM) => {
            const I_INFO = ITEM.INFO;
            const I_DATA = ITEM.DATA;
            //console.log(Object.keys(ITEM.INFO));

          })}</g>
        </>);
      })}
    </g>
  );
}