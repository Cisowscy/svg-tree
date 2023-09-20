import { computed, ReadonlySignal, Signal, signal } from "@preact/signals";
import { bgRgb24, rgb24,bold } from "$std/fmt/colors.ts";

function FunctionMakeSeting(
  /* TREE_LAYERS.value */ T:{    
    GEN: number; END: number; GAP: number; 
    huePA: string; huePE: string; hueGE: string; hueGM: string;
    gen0sPA:number; gen0HUE: string; gen0sPE:number;
    gen1sPA:number; gen1HUE: string; gen1sPE:number;
    gen2sPA:number; gen2HUE: string; gen2sPE:number;
    gen3sPA:number; gen3HUE: string; gen3sPE:number;
    gen4sPA:number; gen4HUE: string; gen4sPE:number;
    gen5sPA:number; gen5HUE: string; gen5sPE:number;
    gen6sPA:number; gen6HUE: string; gen6sPE:number;
    gen7sPA:number; gen7HUE: string; gen7sPE:number;
  }, 
  /* SVG_HALF.value */ H: number,  
  ): {
    hue: {
        arm: {
            par: string;
            per: string;
            mid: string;
            end: string;
        };
        ply: string[];
    };
    set: {
        ply: number;
        end: number;
        mid: number;
    };
    ply: {
        ply: number[];
        _nr: number;
        typ: string;
        iPe: number;
        iPa: number;
        idn: number;
        xor: number;
        fix: number;
        bit: {
            gen: number;
            mid: number;
            end: number;
            sum: number;
        };
        mid: number;
        deg: {
            step: number;
            zero: number;
        };
        arm: {
            _nr: number;
            deg: number;
            typ: string;
        }[];
    }[];
} {
    function fractions(Q:{
      /* TREE_LAYERS.value.GEN */ PLY:number,
      /* TREE_LAYERS.value.GAP */ GAP:number,
      /* TREE_LAYERS.value.END */ MID:number
    },CONSOL_LOG?:boolean): {
      _nr: number;
      typ: string;
      iPe: number;
      iPa: number;
      idn: number;
      xor: number;
      fix: number;
      bit: {
          gen: number;
          mid: number;
          end: number;
          sum: number;
      };
      mid: number;
      deg: {
          step: number;
          zero: number;
      };
      arm: {
        _nr: number;
        deg: number;
        typ: string;
      }[];
    }[] {
      function A(D:number):number {
        while (D>=360) {
          D = D -360;
        }
        return D;
      }
      function B(T:string) {
        switch (T) {
          case 'bitGenPar': return bgRgb24(rgb24(bold('bitGenPar'),0x837834), 0xb9ac65);
          case 'bitGenPer': return bgRgb24(rgb24(bold('bitGenPer'),0x568242), 0x8ab873);
          case 'bitEndPar': return bgRgb24(rgb24(bold('bitEndPar'),0x00868a), 0x3fbdc1);
          case 'bitEndPer': return bgRgb24(rgb24(bold('bitEndPer'),0x357ea3), 0x72b4db);
          case 'bitMidPar': return bgRgb24(rgb24(bold('bitMidPar'),0x9565a2), 0xcc99d9);
          case 'bitMidPer': return bgRgb24(rgb24(bold('bitMidPer'),0xa56569), 0xde999c);    
          default: return bgRgb24(rgb24(bold(T),0x777777), 0xababab);
        }
      }
      const PLY = [...Array(2*(1+Q.PLY)).keys()].map(N=>{
        const _nr = N;
        const typ = N%2===0?"PA":"PE";
        const iPe = N%2===0?N/2:(N-1)/2;
        const iPa = iPe-1;
        const idn = N%2===0?iPa:iPe;
        const xor = Math.ceil(Math.pow(2,iPa)-1);
        const fix = iPa<0 ? N%2===0? (-(Q.MID)+1) : (-(Q.MID)+0) : N%2===0? 1 : 0;
        const bitGen = Math.floor(Math.pow(2,idn));
        const bitMid = fix + Q.MID;
        const mid = iPa<0 ? 0.5 : bitMid/2;
        const bitEnd = xor*(2*mid);
        const bitSum = bitGen+bitMid+bitEnd;
        
        const degStep = A(360/bitSum);
        const degZero = A(mid*degStep);
    
        const arm = (()=>{
          let R = [];
          let X = xor;
          if(X===0 ){
            let G =bitGen;
            while(G>0){
              G--;
              R.push(N%2===0?"bitGenPar":"bitGenPer");
            }
            let E =bitEnd;
            while(E>0){
              E--;
              R.push(N%2===0?"bitEndPar":"bitEndPer");
            }
            let M =bitMid;
            while(M>0){
              M--;
              R.push(N%2===0?"bitMidPar":"bitMidPer");
            }        
          } else {
            while (X>0) {
              X--;
              let G = (bitGen-(N%2===0?1:2))/xor;
              let E = bitEnd/xor;
              while(G+E>0){
                if (G>0) {
                  G--;
                  R.push(N%2===0?"bitGenPar":"bitGenPer");            
                } else if (E>0){
                  E--;
                  R.push(N%2===0?"bitEndPar":"bitEndPer");
                }
              }
            }
            let G = (bitGen-(N%2===0?1:2))/xor;
            while(G>0){
              G--;
              R.push(N%2===0?"bitGenPar":"bitGenPer");
            }
            let M =bitMid;
            while(M>0){
              M--;
              R.push(N%2===0?"bitMidPar":"bitMidPer");
            }
          }
          return R.map((T,Y) =>{
            return {_nr:Y, deg:A(Y*degStep+degZero),typ:T};
          });
        })();
    
        if((CONSOL_LOG??false)===true){
          console.log(
            /* plyIdn */ bgRgb24(rgb24(bold(`_nr: ${_nr.toString().padEnd(2,' ')} `),0x777777), 0xababab),
            /* iPe */ bgRgb24(rgb24(bold(`iPe: ${iPe.toString().padEnd(2,' ')} `),0x568242), 0x8ab873),
            /* typ */ N%2===0?bgRgb24(rgb24(bold(` PA `),0x837834), 0xb9ac65):bgRgb24(rgb24(bold(` PE `),0x568242), 0x8ab873),
            /* idn */ N%2===0?bgRgb24(rgb24(bold(` ${iPa.toString().padEnd(2,' ')} `),0x837834), 0xb9ac65):bgRgb24(rgb24(bold(` ${iPe.toString().padEnd(2,' ')} `),0x568242), 0x8ab873),
            /* iPa */ bgRgb24(rgb24(bold(`iPa: ${iPa.toString().padEnd(2,' ')} `),0x837834), 0xb9ac65),
            /* fix */ bgRgb24(rgb24(bold(`0: ${fix.toString().padEnd(2,' ')} `),0x777777), 0xababab),
            /* bitGen */ N%2===0?bgRgb24(rgb24(bold(`bitGen: ${bitGen.toString().padEnd(3,' ')} `),0x837834), 0xb9ac65):bgRgb24(rgb24(bold(`bitGen: ${bitGen.toString().padEnd(3,' ')} `),0x568242), 0x8ab873),
            /* bitEnd */ N%2===0?bgRgb24(rgb24(bold(`bitEnd: ${bitEnd.toString().padEnd(3,' ')} `),0x00868a), 0x3fbdc1):bgRgb24(rgb24(bold(`bitEnd: ${bitEnd.toString().padEnd(3,' ')} `),0x357ea3), 0x72b4db),
            /* bitMid */ N%2===0?bgRgb24(rgb24(bold(`bitMid: ${bitMid.toString().padEnd(2,' ')} `),0x9565a2), 0xcc99d9):bgRgb24(rgb24(bold(`bitMid: ${bitMid.toString().padEnd(2,' ')} `),0xa56569), 0xde999c),
            /* bitSum */ bgRgb24(rgb24(bold(`bitSum: ${bitSum.toString().padEnd(3,' ')} `),0x777777), 0xababab),
            /* mid */ bgRgb24(rgb24(bold(`bitMid/2: ${mid.toString().padEnd(3,' ')} `),0x777777), 0xababab),
            /* xor */ bgRgb24(rgb24(bold(`X: ${xor.toString().padEnd(2,' ')} `),0x777777), 0xababab),
            /* xor */ bgRgb24(rgb24(bold(`degZERO: ${degZero.toFixed(3).padEnd(7,' ')} `),0x777777), 0xababab),
            /* xor */ bgRgb24(rgb24(bold(`degSTEP: ${degStep.toFixed(3).padEnd(7,' ')} `),0x777777), 0xababab),
          );
          arm.map(W=>{
            console.log(B(W.typ), B(W.deg.toFixed(3).padEnd(7,' ')))
          });
        }
        return {
          _nr:_nr,
          typ: typ,
          iPe: iPe,
          iPa: iPa,
          idn: idn,
          xor: xor,
          fix: fix,
          bit: { gen: bitGen, mid: bitMid, end: bitEnd, sum: bitSum },
          mid: mid,
          deg: { step: degStep, zero: degZero },
          arm: arm
        };
      });
      return PLY;  
    }
    function layers(
      /* TREE_LAYERS.value */ T:{    
        GEN: number; END: number; GAP: number; 
        huePA: string; huePE: string; hueGE: string; hueGM: string;
        gen0sPA:number; gen0HUE: string; gen0sPE:number;
        gen1sPA:number; gen1HUE: string; gen1sPE:number;
        gen2sPA:number; gen2HUE: string; gen2sPE:number;
        gen3sPA:number; gen3HUE: string; gen3sPE:number;
        gen4sPA:number; gen4HUE: string; gen4sPE:number;
        gen5sPA:number; gen5HUE: string; gen5sPE:number;
        gen6sPA:number; gen6HUE: string; gen6sPE:number;
        gen7sPA:number; gen7HUE: string; gen7sPE:number;
      },       
      /* SVG_HALF.value */ H: number,
      ): {
        HUE: {
            arm: {
                par: string;
                per: string;
                mid: string;
                end: string;
            };
            ply: string[];
        };
        NUM: {
            set: {
                ply: number;
                end: number;
                mid: number;
            };
            ply: {
                PA: number[];
                PE: number[];
            }[];
        };
    } {
      function GetHue(N:number): {
          arm: {
              par: string;
              per: string;
              mid: string;
              end: string;
          };
          ply: string[];
      } {
          return {
            arm:{ par: T.huePA, per: T.huePE, mid: T.hueGE, end:T.hueGM},
            ply:[
              T.gen0HUE,    
              T.gen1HUE,
              T.gen2HUE,
              T.gen3HUE,
              T.gen4HUE,
              T.gen5HUE,
              T.gen6HUE,
              T.gen7HUE
            ].toSpliced(1 + N)
          };       
        }
      function GetNum(N:number): {
          set: {
              ply: number;
              end: number;
              mid: number;
          };
          ply: {
              PA: number[];
              PE: number[];
          }[];
      } {   
          return {
            set: {ply: T.GEN, end: T.GAP, mid: T.END},
            ply: (()=>{
              const befPLY_0 = [
                {sPA: T.gen0sPA , sPE: T.gen0sPE },    
                {sPA: T.gen1sPA , sPE: T.gen1sPE },
                {sPA: T.gen2sPA , sPE: T.gen2sPE },
                {sPA: T.gen3sPA , sPE: T.gen3sPE },
                {sPA: T.gen4sPA , sPE: T.gen4sPE },
                {sPA: T.gen5sPA , sPE: T.gen5sPE },
                {sPA: T.gen6sPA , sPE: T.gen6sPE },
                {sPA: T.gen7sPA , sPE: T.gen7sPE }
              ].toSpliced(1 + N)
              const cent =  (H / befPLY_0.map((x) => x.sPE + x.sPA).reduce((a,b) => a + b))
              let r = 0;
              const befPLY = befPLY_0.map((x) => {
                r = r + (cent * x.sPA);
                const rPARENT = r;
                r = r + (cent* x.sPE);
                const rPERSON = r;
                return {
                  ...x,
                  rPE: rPERSON,
                  rPA: rPARENT,
                };
              });
              return befPLY.map((x,i) => {
                const a = (i-1)<0 ? 0 : befPLY[i-1].rPE;
                const b = (i+1)>T.GEN ? H : befPLY[i+1].rPA;      
                return {
                  PA:[a,x.rPA,x.rPE],
                  PE:[x.rPA,x.rPE,b] 
                };
              });
            })()
          }
        }
      return {HUE:GetHue(T.GEN), NUM:GetNum(T.GEN)};
    }
    const F = fractions({PLY:T.GEN,GAP:T.GAP,MID:T.END},false);
    const L = layers(T,H);
    return {
      hue: L.HUE,
      set: L.NUM.set,
      ply: F.map(O=>{
        return {
          ...O,
          ply: O.typ=="PA" ? L.NUM.ply[O.iPe].PA  : L.NUM.ply[O.iPe].PE
        }
      })
    }
}

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
export const TREE_LAYERS: Signal<{ 
  GEN: number; END: number; GAP: number; 
  huePA: string; huePE: string; hueGE: string; hueGM: string;
  gen0sPA:number; gen0HUE: string; gen0sPE:number;
  gen1sPA:number; gen1HUE: string; gen1sPE:number;
  gen2sPA:number; gen2HUE: string; gen2sPE:number;
  gen3sPA:number; gen3HUE: string; gen3sPE:number;
  gen4sPA:number; gen4HUE: string; gen4sPE:number;
  gen5sPA:number; gen5HUE: string; gen5sPE:number;
  gen6sPA:number; gen6HUE: string; gen6sPE:number;
  gen7sPA:number; gen7HUE: string; gen7sPE:number;
}> = signal({ 
  GEN: 7, END: 9, GAP: 9, 
  huePA:"#826c48", huePE:"#558248", hueGE:"#824e79", hueGM: "#486682",
  gen0sPA:1, gen0HUE: "#cac158", gen0sPE:3,
  gen1sPA:1, gen1HUE: "#ef9f2f", gen1sPE:3,
  gen2sPA:1, gen2HUE: "#ef5fcf", gen2sPE:3,
  gen3sPA:1, gen3HUE: "#9f5fef", gen3sPE:3,
  gen4sPA:1, gen4HUE: "#1fafdf", gen4sPE:3,
  gen5sPA:1, gen5HUE: "#8fdf4f", gen5sPE:3,
  gen6sPA:1, gen6HUE: "#efdf4f", gen6sPE:3,
  gen7sPA:1, gen7HUE: "#afaf8f", gen7sPE:3
});
//^ KONTROLA DRZEWA - POCHODNA
export const SETING_SVG_TREE = computed(()=>{
  return FunctionMakeSeting(TREE_LAYERS.value, SVG_HALF.value);
});

//^ --------------------------------------------------------------------------------------------------------------------------------------



const TREE_PLY_s: ReadonlySignal<{
  sPA: number;
  HUE: string;
  sPE: number;
}[]> = computed(()=>{
  return [
    {sPA: TREE_LAYERS.value.gen0sPA , HUE: TREE_LAYERS.value.gen0HUE , sPE: TREE_LAYERS.value.gen0sPE },    
    {sPA: TREE_LAYERS.value.gen1sPA , HUE: TREE_LAYERS.value.gen1HUE , sPE: TREE_LAYERS.value.gen1sPE },
    {sPA: TREE_LAYERS.value.gen2sPA , HUE: TREE_LAYERS.value.gen2HUE , sPE: TREE_LAYERS.value.gen2sPE },
    {sPA: TREE_LAYERS.value.gen3sPA , HUE: TREE_LAYERS.value.gen3HUE , sPE: TREE_LAYERS.value.gen3sPE },
    {sPA: TREE_LAYERS.value.gen4sPA , HUE: TREE_LAYERS.value.gen4HUE , sPE: TREE_LAYERS.value.gen4sPE },
    {sPA: TREE_LAYERS.value.gen5sPA , HUE: TREE_LAYERS.value.gen5HUE , sPE: TREE_LAYERS.value.gen5sPE },
    {sPA: TREE_LAYERS.value.gen6sPA , HUE: TREE_LAYERS.value.gen6HUE , sPE: TREE_LAYERS.value.gen6sPE },
    {sPA: TREE_LAYERS.value.gen7sPA , HUE: TREE_LAYERS.value.gen7HUE , sPE: TREE_LAYERS.value.gen7sPE }
  ].toSpliced(1 + TREE_LAYERS.value.GEN);
});
export const TREE_RHO_CENT: ReadonlySignal<number> = computed(() => (SVG_HALF.value / TREE_PLY_s.value.map((x) => x.sPE + x.sPA).reduce((a,b) => a + b)));
const TREE_PLY_r: ReadonlySignal<{
  rPE: number;
  rPA: number;
  sPA: number;
  HUE: string;
  sPE: number;
}[]> = computed(()=>{
  let r = 0;
  return TREE_PLY_s.value.map((x) => {
    r = r + (TREE_RHO_CENT.value * x.sPA);
    const rPARENT = r;
    r = r + (TREE_RHO_CENT.value * x.sPE);
    const rPERSON = r;
    return {
      ...x,
      rPE: rPERSON,
      rPA: rPARENT,
    };
  });
});

const TREE_SETING_0: ReadonlySignal<{
  GEN: number;
  END: number;
  GAP: number;
  HUE: {
      PAR: string;
      PER: string;
      G_E: string;
      G_M: string;
      PLY: string[];
  };
  PLY: {
      RHO:{
        PAR: number[];
        PER: number[];
      }
  }[];
}> = computed(()=>{
  return {
    GEN: TREE_LAYERS.value.GEN,
    END: TREE_LAYERS.value.END,
    GAP: TREE_LAYERS.value.GAP,
    HUE: {
      PAR: TREE_LAYERS.value.huePA,
      PER: TREE_LAYERS.value.huePE,
      G_E: TREE_LAYERS.value.hueGE, 
      G_M: TREE_LAYERS.value.hueGM,
      PLY: TREE_PLY_s.value.map((x) => x.HUE)      
    },
    PLY: TREE_PLY_r.value.map((x,i) => {
      const a = (i-1)<0 ? 0 : TREE_PLY_r.value[i-1].rPE;
      const b = (i+1)>TREE_LAYERS.value.GEN ? SVG_HALF.value : TREE_PLY_r.value[i+1].rPA;

      return {RHO:{
        PAR:[a,x.rPA,x.rPE],
        PER:[x.rPA,x.rPE,b] 
      }};
    })
  }
});

export const TREE_SETING: ReadonlySignal<{
  GEN: number;
  END: number;
  GAP: number;
  HUE: {
      PAR: string;
      PER: string;
      G_E: string;
      G_M: string;
      PLY: string[];
  };
  PLY: {
      PHI: {
          PAR: { DEG: number; TYP: string };
          PER: { DEG: number; TYP: string };
      }[];
      RHO: {
          PAR: number[];
          PER: number[];
      };
  }[];
  DEG: {
      ZERO: {
          PAR: number;
          PER: number;
      };
      STEP: number;
  }[];
  BIT: {
      GAP: {
          END: {
              PER: number;
              PAR: number;
          };
          MID: {
              PER: number;
              PAR: number;
          };
      };
      GEN: {
          NUM: number;
          BIT: {
              PER: number;
              PAR: number;
          };
      };
      SUM: number;
  }[];
  IDN: {
      order: {
          INC: number[];
          DEC: number[];
      };
      modulo: {
          INC: number[];
          DEC: number[];
      };
  }[];
}> = computed(()=>{
  return ((Q)=>{
    function A(D:number):number {
      while (D>=360) {
        D = D -360;
      }
      return D;
    }
    function B(T:string):string {
      return T
      //=="isGapEND" ? "G_E" : T=="isGapMID" ? "G_M" : T=="isBitPar" ? "PAR" : T=="isBitPer" ? "PER" : '';
    }
    //console.log(Q);
    const INFO_FRACTIONS_TYPE: {
      GAP: {
          END: {
              PER: number;
              PAR: number;
          };
          MID: {
              PER: number;
              PAR: number;
          };
      };
      GEN: {
          NUM: number;
          BIT: {
              PER: number;
              PAR: number;
          };
      };
      SUM: number;
  }[] = [];
    const INFO_FRACTIONS_DEGS: {
      ZERO: {
          PAR: number;
          PER: number;
      };
      STEP: number;
  }[] = [];
    const INFO_FRACTIONS_ARMS: {
      order: {
          INC: number[];
          DEC: number[];
      };
      modulo: {
          INC: number[];
          DEC: number[];
      };
  }[] = [];
    //enum T {
    //  isGapEND = "G_E",
    //  isGapMID = "G_M",
    //  isBitPAR = "PAR",
    //  isBitPER = "PER" 
    //}
    const U = Q.PLY.map((X,iX) => {
      //console.log("-".repeat(20));
      const R = (() =>{      
        const gapEND = {
          PER: (iX === 0) ? 0 : Q.END,
          PAR: (iX === 0) ? 1 : Q.END + 1
        };
        const genNUM = iX;
        const genBIT = {
          PER: Math.floor(Math.pow(2, iX)),
          PAR: Math.floor(Math.pow(2, iX - 1))
        };
        const gapMID = {
          PER: ((iX === 0 || iX === 1) ? 0 : (genBIT.PAR - 1) * Q.GAP),
          PAR: (iX === 0) ? 0 : genBIT.PAR + ((iX === 0 || iX === 1) ? 0 : (genBIT.PAR - 1) * Q.GAP) - 1
        };     
        const FRA = (gapEND.PAR + gapMID.PAR + genBIT.PAR) == (gapEND.PER + gapMID.PER + genBIT.PER) ? (gapEND.PER + gapMID.PER + genBIT.PER) : 0; 
        return {GAP:{END:gapEND,MID:gapMID},GEN:{NUM:genNUM,BIT:genBIT},SUM:FRA};
      })();
      INFO_FRACTIONS_TYPE.push(R);
      const FRACTIONS = (R.GAP.END.PAR + R.GAP.MID.PAR + R.GEN.BIT.PAR) == (R.GAP.END.PER + R.GAP.MID.PER + R.GEN.BIT.PER) ? (R.GAP.END.PER + R.GAP.MID.PER + R.GEN.BIT.PER) : 0;
      const PHI_DEG = {
        ZERO: {
          PAR:((Z:number,L:number,F:number)=>{
            switch (L) {
              case 0:                
                return A(Z+(360/(2*F)));
            
              case 1:                
                return A(Z+(360/2)+(360/F));
            
              case 2:                
                return A(Z+(6*(360/22))+360/44);
            
              case 3:                
                return Z;
            
              case 4:                
                return Z;
            
              case 5:                
                return Z;
            
              case 6:                
                return Z;
            
              case 7:                
                return Z;
            
              default:
                return Z;
            }
          })(A(((360/FRACTIONS)*(Q.END+1))/2),iX,FRACTIONS),
          PER:((Z:number,L:number,F:number)=>{
            switch (L) {
              case 0:                
                return A(Z+(360/(2*F)));
            
              case 1:                
                return A(Z+(360/2)+(360/F)+(360/(2*F)));
            
              case 2:                
                return A(Z+(7*(360/22)));
            
              case 3:                
                return Z;
            
              case 4:                
                return Z;
            
              case 5:                
                return Z;
            
              case 6:                
                return Z;
            
              case 7:                
                return Z;
            
              default:
                return Z;
            }
          })(A(((360/FRACTIONS)*Q.END)/2),iX,FRACTIONS)
        },
        STEP:A(360/FRACTIONS)
      };
      INFO_FRACTIONS_DEGS.push(PHI_DEG);
      const PHI_VEC = ((orderInc,M,F,E)=>{
        const orderDec = orderInc.toReversed();
        const modulInc = orderInc.map(K =>K%M);
        const modulDec = orderDec.map(K =>K%M);
        const infoITEM = {order:{INC: orderInc, DEC:orderDec},modulo:{INC:modulInc,DEC:modulDec}};
        INFO_FRACTIONS_ARMS.push(infoITEM);
        let angle0 ={per:0,par:0}; 
        const testPAR = new Set([...Array(1+INFO_FRACTIONS_TYPE[iX].GAP.END.PAR).keys()].slice(1));
        const testPER = new Set([...Array(1+INFO_FRACTIONS_TYPE[iX].GAP.END.PER).keys()].slice(1));
        const anglePHI = orderInc.map((incORD,iY) =>{
          if((iY)===0){
            angle0.par = angle0.par + (((360/F)*(E+1))/2);
            angle0.per = angle0.per + (((360/F)*E)/2);
          }
          const decORD = orderDec[iY];
          const incMOD = modulInc[iY];
          const decMOD = modulDec[iY];
          return {
            PAR:{DEG:A(angle0.par + iY*(360/F)),TYP: B(iX ===0 ? "isGapEND":testPAR.has(decORD) ? "isGapEND" : incMOD===1 ? "isBitPAR" : "isGapMID")},
            PER:{DEG:A(angle0.per + iY*(360/F)),TYP: B((testPER.has(decORD) && iX !==0) ? "isGapEND" : (incMOD===1 || incMOD===2) ? "isBitPER" : "isGapMID")}
          }
        });

        return anglePHI;
      })(
        [...new Array(FRACTIONS).keys()].map(K =>K+1),
        Q.GAP+2,
        FRACTIONS,
        Q.END
      );
      return {
        ...X,
        //PIP:
        //ARM: {
          PHI:PHI_VEC
        //}
      };
    });
    const REZULT = {GEN:Q.GEN, END: Q.END, GAP: Q.GAP, HUE: Q.HUE, PLY: U, 
      DEG:INFO_FRACTIONS_DEGS, 
      BIT:INFO_FRACTIONS_TYPE, 
      //IDN:INFO_FRACTIONS_ARMS
    };
    //console.log(INFO_FRACTIONS_TYPE);
    //console.log(INFO_FRACTIONS_DEGS);
    //console.log(REZULT);
    return REZULT;
  })(TREE_SETING_0.value);
});     

//-----------------------------------------------------------------------------------------------------------------------------
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


























