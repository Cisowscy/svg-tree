// Document https://fresh.deno.dev/docs/concepts/islands

import type { Signal } from "@preact/signals";
import { signal, computed, effect, batch } from "@preact/signals";
import type { SvgFractionTreePlotProps,initTreeFractionRhoOut } from "@@@types";


import {
  SVG_HALF, 
  TREE_RHO,  
  TREE_PHI
} from "@@@globalCONTROLS";



export function SvgFractionTreePlot(props: SvgFractionTreePlotProps) {

  

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
           // if(nrLAYER===1){
              //console.log(I_INFO);
            if(I_DATA.indexPAR !== null){
              return (<line x="0" y1={(nrLAYER-1)<0?0:TREE_RHO.value[(nrLAYER-1)].rPE} y2={TREE_RHO.value[nrLAYER].rPA}
                stroke={TREE_RHO.value[nrLAYER].HUE} stroke-width={80}
                transform={`rotate(${L_INFO.itemsFra_PAR.angleFraZero}) rotate(${I_DATA.angleFra}) rotate(0)`}
              />);
            }
           /// }
          })}</g>
          <g>{LAYER.DATA.PER.map((ITEM, nrITEM) => {
            const I_INFO = ITEM.INFO;
            const I_DATA = ITEM.DATA;
            //console.log(Object.keys(ITEM.INFO));
            //if(nrLAYER===1){
              //console.log(L_INFO);
            if(I_DATA.indexPER !== null){
              return (<line x="0" y1={TREE_RHO.value[nrLAYER].rPA} y2={TREE_RHO.value[nrLAYER].rPE} 
                stroke={TREE_RHO.value[nrLAYER].HUE} stroke-width={80}
                transform={`rotate(${L_INFO.itemsFra_PER.angleFraZero}) rotate(${I_DATA.angleFra}) rotate(0)`}
              />);
            }
            //}
          })}</g>
        </>);
      })}
    </g>
  );
}