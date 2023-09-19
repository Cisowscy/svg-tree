import { computed, ReadonlySignal, Signal, signal } from "@preact/signals";

//^ KONTROLA ROZDZIELCZOŚCI SVG - ZASADNICZA

export const SVG_SIZE: Signal<number> = signal(10000);
export const SVG_TRIM: Signal<number> = signal(1);

//^ KONTROLA ROZDZIELCZOŚCI SVG - POCHODNA

export const SVG_CENT: ReadonlySignal<number> = computed(() => {
  return SVG_SIZE.value / 100;
});
export const SVG_HALF: ReadonlySignal<number> = computed(() => {
  return SVG_SIZE.value / 2;
});
export const SVG_VIEW: ReadonlySignal<[number, number]> = computed(() => {
  return [
    -(SVG_TRIM.value * SVG_CENT.value),
    2 * (SVG_TRIM.value * SVG_CENT.value) + SVG_SIZE.value,
  ];
});
export const SVG_DESK: ReadonlySignal<{ viewBox: string }> = computed(() => {
  return {
    viewBox: `${SVG_VIEW.value[0]} ${SVG_VIEW.value[0]} ${SVG_VIEW.value[1]} ${
      SVG_VIEW.value[1]
    }`,
  };
});
export const SVG_ZERO: ReadonlySignal<{ transform: string }> = computed(() => {
  return {
    transform:
      `translate(${SVG_HALF.value} ${SVG_HALF.value}) rotate(180) scale (-1, 1)`,
  };
});
export const SVG_AREA: ReadonlySignal<{
  x: number;
  y: number;
  width: number;
  height: number;
  rx: number;
}> = computed(() => {
  return {
    x: 0,
    y: 0,
    width: SVG_SIZE.value,
    height: SVG_SIZE.value,
    rx: SVG_CENT.value * 20,
  };
});

//^ KONTROLA DRZEWA - ZASADNICZA

export const TREE_LAYERS: Signal<{ GEN: number; END: number; GAP: number }> =
  signal({ GEN: 7, END: 9, GAP: 9 });
export const TREE_LAYER0: Signal<{ sPE: number; HUE: string; sPA: number }> =
  signal({ sPE: 2, HUE: "#cac158", sPA: 1 });
export const TREE_LAYER1: Signal<{ sPE: number; HUE: string; sPA: number }> =
  signal({ sPE: 2, HUE: "#ef9f2f", sPA: 1 });
export const TREE_LAYER2: Signal<{ sPE: number; HUE: string; sPA: number }> =
  signal({ sPE: 2, HUE: "#ef5fcf", sPA: 1 });
export const TREE_LAYER3: Signal<{ sPE: number; HUE: string; sPA: number }> =
  signal({ sPE: 2, HUE: "#9f5fef", sPA: 1 });
export const TREE_LAYER4: Signal<{ sPE: number; HUE: string; sPA: number }> =
  signal({ sPE: 2, HUE: "#1fafdf", sPA: 1 });
export const TREE_LAYER5: Signal<{ sPE: number; HUE: string; sPA: number }> =
  signal({ sPE: 2, HUE: "#8fdf4f", sPA: 1 });
export const TREE_LAYER6: Signal<{ sPE: number; HUE: string; sPA: number }> =
  signal({ sPE: 2, HUE: "#efdf4f", sPA: 1 });
export const TREE_LAYER7: Signal<{ sPE: number; HUE: string; sPA: number }> =
  signal({ sPE: 2, HUE: "#afaf8f", sPA: 1 });
//export const TREE_LAYER8: Signal<{ SPE: number; HUE: string; SPA: number }> = signal({ SPE: 2, HUE: "#fe01ba", SPA: 1 });
//export const TREE_LAYER9: Signal<{ SPE: number; HUE: string; SPA: number }> = signal({ SPE: 2, HUE: "#fe01ba", SPA: 1 });

//^ KONTROLA DRZEWA - POCHODNA

export const TREE_RHO_CENT: ReadonlySignal<number> = computed(() => {
  return SVG_HALF.value / [
    TREE_LAYER0.value,
    TREE_LAYER1.value,
    TREE_LAYER2.value,
    TREE_LAYER3.value,
    TREE_LAYER4.value,
    TREE_LAYER5.value,
    TREE_LAYER6.value,
    TREE_LAYER7.value,
  ].toSpliced(1 + TREE_LAYERS.value.GEN).map((x) => x.sPE + x.sPA).reduce((
    a,
    b,
  ) => a + b);
});
export const TREE_RHO: ReadonlySignal<{
  rPE: number;
  rPA: number;
  HUE: string;
}[]> = computed(() => {
  let r = 0;
  return [
    TREE_LAYER0.value,
    TREE_LAYER1.value,
    TREE_LAYER2.value,
    TREE_LAYER3.value,
    TREE_LAYER4.value,
    TREE_LAYER5.value,
    TREE_LAYER6.value,
    TREE_LAYER7.value,
  ].toSpliced(1 + TREE_LAYERS.value.GEN).map((x) => {
    r = r + (TREE_RHO_CENT.value * x.sPA);
    const rPARENT = r;
    r = r + (TREE_RHO_CENT.value * x.sPE);
    const rPERSON = r;
    return {
      rPE: rPERSON,
      rPA: rPARENT,
      HUE: x.HUE,
    };
  });
});
export const TREE_PHI = computed(()=>{
  let idPER =0;
  let idPAR =0;
  return [...new Array(TREE_LAYERS.value.GEN + 1).keys()].map((nrGen) => {
    const frPer_frEnd = (nrGen === 0) ? 0 : TREE_LAYERS.value.END;
    const frPar_frEnd = (nrGen === 0) ? 1 : TREE_LAYERS.value.END + 1;
    const frPer_frGen = Math.floor(Math.pow(2, nrGen));
    const frPar_frGen = Math.floor(Math.pow(2, nrGen - 1));
    const frPer_frGap = (nrGen === 0 || nrGen === 1)
      ? 0
      : (frPar_frGen - 1) * TREE_LAYERS.value.GAP;
    const frPar_frGap = (nrGen === 0) ? 0 : frPar_frGen + frPer_frGap - 1;
    const fractionSUM = (frPer_frGen + frPer_frGap + frPer_frEnd) ==
        (frPar_frGen + frPar_frGap + frPar_frEnd)
      ? (frPar_frGen + frPar_frGap + frPar_frEnd)
      : 0;
    const Fraction = (nrFRA:number,PerOrPar:string) => {
      const indexFraInc = [...new Array(fractionSUM).keys()].map(K =>K+1);
      const indexFraDec = indexFraInc.toReversed();
      const indexFraIncMod = indexFraInc.map(K =>K%(2+TREE_LAYERS.value.GAP));
      const indexFraDecMod = indexFraDec.map(K =>K%(2+TREE_LAYERS.value.GAP));
      let angle0 ={per:0,par:0}; 
      const angleFraParent = [...new Array(fractionSUM).keys()].map(Y=>{
        if(Y===0){
          angle0.par = angle0.par + (((360/fractionSUM)*(TREE_LAYERS.value.END+1))/2);
        }
        const angle = (angle0.par + Y*(360/fractionSUM));
        return angle>=720?angle-720:angle>=360?angle-360:angle;
      });
      const angleFraPerson = [...new Array(fractionSUM).keys()].map(Y=>{
        if(Y===0){
          angle0.per = angle0.per + (((360/fractionSUM)*TREE_LAYERS.value.END)/2);
        }
        const angle = (angle0.per + Y*(360/fractionSUM));
        return angle>=720?angle-720:angle>=360?angle-360:angle;
      });  
      
      return {
        INFO:{
          indexFra:nrFRA,
          indexFraInc:indexFraInc[nrFRA], //!J
          indexFraDec:indexFraDec[nrFRA], //!K
          indexFraIncMod:indexFraIncMod[nrFRA], //!L
          indexFraDecMod:indexFraDecMod[nrFRA], //!M
        },
        DATA:{
          angleFra: PerOrPar ==="par"? angleFraParent[nrFRA] : angleFraPerson[nrFRA],
        }
      }
    }
    const RESULT = {
      INFO: {
        indexGen:nrGen, //!C
        setGap:TREE_LAYERS.value.GAP, //!A
        setEnd:TREE_LAYERS.value.END, //!B
        itemsFra: fractionSUM, //!I
        itemsFra_PAR:{
          itemsGen:frPar_frGen, //!D
          itemsGap:frPar_frGap, //!F
          itemsEnd:frPar_frEnd, //!H          
          angleFraZero:((360/fractionSUM)*(TREE_LAYERS.value.END+1))/2 //~R
        },
        itemsFra_PER:{
          itemsGen:frPer_frGen, //!E
          itemsGap:frPer_frGap, //!G
          itemsEnd:frPer_frEnd, //!H2          
          angleFraZero:((360/fractionSUM)*TREE_LAYERS.value.END)/2 //~P
        },
        angleFraStep: 360/fractionSUM //~P & ~R
      },
      DATA: {
        PAR: [...new Array(fractionSUM).keys()].map(n=>Fraction(n,'par')),
        PER: [...new Array(fractionSUM).keys()].map(n=>Fraction(n,'per'))
      }
    };
    return RESULT;
  }).map((GEN, nrGEN)=>{
    return {
      INFO: {...GEN.INFO},
      DATA:(()=>{
        const PAR = GEN.DATA.PAR.map((FRA,nrFRA)=>{
          const testList = new Set([...Array(1+GEN.INFO.itemsFra_PAR.itemsEnd).keys()].slice(1));
          const ParOrGapOrEnd = GEN.INFO.indexGen ===0 ? "isEND":testList.has(FRA.INFO.indexFraDec) ? "isEND" : FRA.INFO.indexFraIncMod===1 ? "isPAR" : "isGAP";
          
          return {
            INFO:{...FRA.INFO},
            DATA:{
              itemType: ParOrGapOrEnd,
              indexPAR:(()=>{
                if (ParOrGapOrEnd==="isPAR") {
                  idPAR++;
                  return idPAR;              
                }else {
                  return null;
                }
              })(),
              ...FRA.DATA
            }
          };
        });
        const PER = GEN.DATA.PER.map((FRA,nrFRA)=>{
          const testList = new Set([...Array(1+GEN.INFO.itemsFra_PER.itemsEnd).keys()].slice(1));
          const PerOrGapOrEnd = (testList.has(FRA.INFO.indexFraDec) && GEN.INFO.indexGen !==0) ? "isEND" : (FRA.INFO.indexFraIncMod===1 || FRA.INFO.indexFraIncMod===2) ? "isPER" : "isMID";

          return {
            INFO:{...FRA.INFO},
            DATA:{
              itemType: PerOrGapOrEnd,
              indexPER: (()=>{
                if (PerOrGapOrEnd==="isPER") {
                  idPER++;
                  return idPER;              
                }else {
                  return null;
                }
              })(),
              ...FRA.DATA
            }
          };
        });
        return {
          PAR:PAR,
          PER:PER
        };
      })()
      //
    };
  });


});
//console.log(TREE_LAYERS_CENT.value);
export const TREE_FRACTIONS: ReadonlySignal<{
  frPer_frEnd: number;
  frPar_frEnd: number;
  frPer_frGen: number;
  frPar_frGen: number;
  frPer_frGap: number;
  frPar_frGap: number;
  fractionSUM: number;
}[]> = computed(() => {
  return [...new Array(TREE_LAYERS.value.GEN + 1).keys()].map((nrGen) => {
    const frPer_frEnd = (nrGen === 0) ? 0 : TREE_LAYERS.value.END;
    const frPar_frEnd = (nrGen === 0) ? 1 : TREE_LAYERS.value.END + 1;
    const frPer_frGen = Math.floor(Math.pow(2, nrGen));
    const frPar_frGen = Math.floor(Math.pow(2, nrGen - 1));
    const frPer_frGap = (nrGen === 0 || nrGen === 1)
      ? 0
      : (frPar_frGen - 1) * TREE_LAYERS.value.GAP;
    const frPar_frGap = (nrGen === 0) ? 0 : frPar_frGen + frPer_frGap - 1;
    const fractionSUM = (frPer_frGen + frPer_frGap + frPer_frEnd) ==
        (frPar_frGen + frPar_frGap + frPar_frEnd)
      ? (frPar_frGen + frPar_frGap + frPar_frEnd)
      : 0;
    return {
      frPer_frEnd: frPer_frEnd,
      frPar_frEnd: frPar_frEnd,
      frPer_frGen: frPer_frGen,
      frPar_frGen: frPar_frGen,
      frPer_frGap: frPer_frGap,
      frPar_frGap: frPar_frGap,
      fractionSUM: fractionSUM,
    };
  });
});


























