// Document https://fresh.deno.dev/docs/concepts/islands

import type { Signal } from "@preact/signals";
import { signal, computed, effect, batch } from "@preact/signals";
import type { SvgFractionTreePlotProps,initTreeFractionRhoOut } from "@@@types";


import {
  SVG_HALF,  
  SETING_SVG_TREE,
  TREE_SETING,
  TREE_RHO,  
  TREE_PHI
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
          const aZeroD = L.deg.zero;
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
                  <line name={`(arm) φ-${L._nr.toString().padStart(2,'0')}-${L.typ}_${L.iPe}_${F._nr.toString().padStart(4,'0')}`} x="0" y1={L.ply[0].toFixed(3)} y2={L.ply[1].toFixed(3)} stroke={HUE} stroke-width="60" transform={` rotate(${L.deg.zero}) rotate(${F.deg})`} />
                );
              })}
            </g>
          );
        })}
      </g>
      
      {/*
      <g name="PHI"> {TREE_SETING.value.PLY.map((X, iX) =>{
        //const HUE = TREE_SETING.value.HUE.PLY[iX];
          return(
            <g name={`PHI-PLY-${iX}`}>
              {TREE_SETING.value.PLY[iX].PHI.map((Y,iY) =>{
                const HUE_4PAR = (()=>{ const typPAR:string = TREE_SETING.value.PLY[iX].PHI[iY].PAR.TYP; return typPAR=="isGapEND" ? TREE_SETING.value.HUE.G_E : typPAR=="isGapMID" ? TREE_SETING.value.HUE.G_M : TREE_SETING.value.HUE.PAR; })();
                const HUE_4PER = (()=>{ const typPER:string = TREE_SETING.value.PLY[iX].PHI[iY].PER.TYP; return typPER=="isGapEND" ? TREE_SETING.value.HUE.G_E : typPER=="isGapMID" ? TREE_SETING.value.HUE.G_M : TREE_SETING.value.HUE.PER; })();
                const RHO_4PAR = X.RHO.PAR;
                const RHO_4PER = X.RHO.PER;
                const DEG_STEP = TREE_SETING.value.DEG[iX].STEP;
                const DEG_ZERO_4PAR = TREE_SETING.value.DEG[iX].ZERO.PAR;
                const DEG_ZERO_4PER = TREE_SETING.value.DEG[iX].ZERO.PER;
                const DEG_4PAR = TREE_SETING.value.PLY[iX].PHI[iY].PAR.DEG;
                const DEG_4PER = TREE_SETING.value.PLY[iX].PHI[iY].PER.DEG;
                return(
                  <g name={`PHI-PLY-${iX}-ARM-${iY}`} >
                      <line  name={`PHI-PLY-${iX}-ARM-${iY}-PAR`} x="0" y1={RHO_4PAR[0]} y2={RHO_4PAR[1]} stroke={HUE_4PAR} stroke-width="80" transform={`rotate(${DEG_ZERO_4PAR}) rotate(${DEG_4PAR}) rotate(0)`} />
                      <line  name={`PHI-PLY-${iX}-ARM-${iY}-PER`} x="0" y1={RHO_4PER[0]} y2={RHO_4PER[1]} stroke={HUE_4PER} stroke-width="80" transform={`rotate(${DEG_ZERO_4PER}) rotate(${DEG_4PER}) rotate(0)`} />
                  </g>
                );
              })}
            </g>
          );
      })} </g>
      
      
      
      
      
      
      TREE_PHI.value.map((LAYER, nrLAYER) =>{
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
      })*/}
    </g>
  );
}