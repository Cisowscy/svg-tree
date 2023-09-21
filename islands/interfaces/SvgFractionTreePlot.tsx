// Document https://fresh.deno.dev/docs/concepts/islands

import type { Signal } from "@preact/signals";
import { signal, computed, effect, batch } from "@preact/signals";
import type { SvgFractionTreePlotProps,initTreeFractionRhoOut } from "@@@types";


import {
  SVG_HALF,  
  SETING_SVG_TREE
} from "@@@globalCONTROLS";



export function SvgFractionTreePlot(props: SvgFractionTreePlotProps) {

  

  return (   
    <g>
      <g name="(ply) ρ" >
        {SETING_SVG_TREE.value.ply.map(L=>{
          const HUE = SETING_SVG_TREE.value.hue.ply[L.iPe];
          return(
            <circle name={`ρ-${L._nr.toString().padStart(2,'0')}-${L.typ}_${L.iPe}`} cx="0" cy="0" fill="none" stroke-width="50" stroke={`${HUE}`} r={`${L.ply[1].toFixed(3)}`} />
          );
        })}
      </g>
      <g name="(arm) φ" >
        {SETING_SVG_TREE.value.ply.map(L=>{
          const aZeroD = L.ang.zero.deg;
          return(
            <g name={`(arm) φ-${L._nr.toString().padStart(2,'0')}-${L.typ}_${L.iPe}`}>
              {L.arm.map(F=>{
                const HUE = (()=>{
                  switch (F.typ) {
                    case 'bitGenPar': return SETING_SVG_TREE.value.hue.arm.par; //bgRgb24(rgb24(bold('bitGenPar'),0x837834), 0xb9ac65);
                    case 'bitGenPer': return SETING_SVG_TREE.value.hue.arm.per; //bgRgb24(rgb24(bold('bitGenPer'),0x568242), 0x8ab873);
                    case 'bitEndPar': return SETING_SVG_TREE.value.hue.arm.end; //bgRgb24(rgb24(bold('bitEndPar'),0x00868a), 0x3fbdc1);
                    case 'bitEndPer': return SETING_SVG_TREE.value.hue.arm.end; //bgRgb24(rgb24(bold('bitEndPer'),0x357ea3), 0x72b4db);
                    case 'bitMidPar': return SETING_SVG_TREE.value.hue.arm.mid; //bgRgb24(rgb24(bold('bitMidPar'),0x9565a2), 0xcc99d9);
                    case 'bitMidPer': return SETING_SVG_TREE.value.hue.arm.mid; //bgRgb24(rgb24(bold('bitMidPer'),0xa56569), 0xde999c);    
                    default: return '#ababab'; //bgRgb24(rgb24(bold(T),0x777777), 0xababab);
                  }
                })();
                return(
                  <line name={`(arm) φ-${L._nr.toString().padStart(2,'0')}-${L.typ}_${L.iPe}_${F._nr.toString().padStart(4,'0')}`} x="0" y1={L.ply[0].toFixed(3)} y2={L.ply[1].toFixed(3)} stroke={HUE} stroke-width="60" transform={` rotate(${L.ang.zero.deg}) rotate(${F.deg})`} />
                );
              })}
            </g>
          );
        })}
      </g>
      
      
    </g>
  );
}