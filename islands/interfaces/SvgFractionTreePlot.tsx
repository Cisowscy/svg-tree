// Document https://fresh.deno.dev/docs/concepts/islands

//import type { Signal } from "@preact/signals";
//import { signal, computed, effect, batch } from "@preact/signals";
import type { SvgFractionTreePlotProps } from "@@@types";


import {
  //SVG_HALF,
  SETING_SVG_TREE_2
} from "@@@globalCONTROLS";



export function SvgFractionTreePlot(props: SvgFractionTreePlotProps) {
  const A = {
    axis_X: SETING_SVG_TREE_2.value.directionOfTheAxisX,
    axis_Y: SETING_SVG_TREE_2.value.directionOfTheAxisY,
    angInc: SETING_SVG_TREE_2.value.directionOfTheAngleOfIncrement,
    ang_00: SETING_SVG_TREE_2.value.directionOfTheAngleOfZeroValue,
  };
  const B = SETING_SVG_TREE_2.value.getCalculated1OfPlysRadiuses;
  const C = SETING_SVG_TREE_2.value.getHue;
  const D = SETING_SVG_TREE_2.value.getCalculated2OfPlysIdentity;

  const E = SETING_SVG_TREE_2.value.getCalculated3OfPlysFraction;
  const F = SETING_SVG_TREE_2.value.getCalculated4OfPlysArmChain;
  const G = SETING_SVG_TREE_2.value.getCalculated5OfPlysArmTypes;
  const H = SETING_SVG_TREE_2.value.getCalculated6OfPlysArmAngle;

  

  return (   
    <g>
      <g name="(ply) ρ" >
        {B.map((W, iW)=>{          
          const HUE = C.huePly.get(['PE_',(iW-iW%2)/2].join(''));
          return(
            <circle name={`ρ-${(iW-iW%2)/2}-${iW}`} cx="0" cy="0" fill="none" stroke-width="50" stroke={`${HUE}`} r={W.toFixed(3)} />
          );
        })}
      </g>
      <g name="(ply-arm) ρ-φ" >
        {H.map((W,iW)=>{
          //~ A.ang_00
          const step = F[iW];
          //const aZeroD = L.ang.zero.deg;
          return(
            <g name={`(ply-arm) ρ-${(iW-iW%2)/2}-φ-${iW}`}>
              {W.map((V,iV)=>{
                const HUE = (()=>{
                  switch (G[iW][iV]) {
                    case 'isBitGenOfPar': return C.hueFra4.get("genBitPar");
                    case 'isBitGenOfPer': return C.hueFra4.get("genBitPer");
                    case 'isSetGapOfPar': return C.hueFra4.get("gapSetAll");
                    case 'isSetGapOfPer': return C.hueFra4.get("gapSetAll");
                    case 'isMidGapOfPar': return C.hueFra4.get("gapMidAll");
                    case 'isMidGapOfPer': return C.hueFra4.get("gapMidAll");    
                    default: return '#ababab'; 
                  }
                })();
                return(
                  <line name={`(arm) ρ-${(iW-iW%2)/2}-φ-${iW}`} x="0" y1={iW-1<0?0:B[iW-1].toFixed(3)} y2={B[iW].toFixed(3)} stroke={HUE} stroke-width="60" transform={` rotate(${V}) rotate(0)`} />
                );
              })}
            </g>
          );
        })}
      </g>
      
      
    </g>
  );
}