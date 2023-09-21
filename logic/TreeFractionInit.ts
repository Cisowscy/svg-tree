import { bgRgb24, rgb24,bold } from "$std/fmt/colors.ts";

//^ ------------------------------------------------------------- TYPES ---------
interface ELEMENTAR {
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
}

interface HUECOLORS {
  arm: {
    par: string;
    per: string;
    mid: string;
    end: string;
  };
  ply: string[];
}

interface ELEMENTAR_2 {
  ply: number;
  end: number;
  mid: number;
}
interface ELEMENT_R {  
  PA: [number,number,number];
  PE: [number,number,number];
}
interface GETNUMBER {
  set: ELEMENTAR_2;
  ply: ELEMENT_R[];
}

interface FRACT_BIT {
      gen: number;
      mid: number;
      end: number;
      sum: number;
}
interface FRA_ANGLE {
  step: {
      deg: number;
      fra: (string | number)[];
  };
  zero: {
    deg: number;
    fra: (string | number)[];
  };
}
type TYP_BITS =  "bitGenPar" | "bitGenPer" | "bitEndPar" | "bitEndPer" | "bitMidPar" | "bitMidPer";
interface FRACT_ARM {
  _nr: number;
  deg: number;
  typ: TYP_BITS;
}

interface FRACTIONS {
  _nr: number;
  typ: "PA" | "PE";
  iPe: number;
  iPa: number;
  idn: number;
  xor: number;
  fix: number;
  bit: FRACT_BIT;
  mid: number;
  ang: FRA_ANGLE;
  arm: FRACT_ARM[];
  deg?: {
      step: number;
      zero: number;
  };
}

interface FRACTIONS_2 extends FRACTIONS {
  ply: number[];
}
//^ ---------------------------------------------------------------------------------------

export function FunctionMakeSeting(
  /* TREE_LAYERS.value */ T:ELEMENTAR, 
  /* SVG_HALF.value */ H: number,  
  ): {
    hue: HUECOLORS;
    set: ELEMENTAR_2;
    ply: FRACTIONS_2[];
} {
    function fractions(Q:{
      /* TREE_LAYERS.value.GEN */ PLY:number,
      /* TREE_LAYERS.value.GAP */ GAP:number,
      /* TREE_LAYERS.value.END */ MID:number
    },CONSOL_LOG?:boolean):FRACTIONS[]  {
      function A(D:number):number {
        //while (D>=360) {
        //  D = D -360;
        //}
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
      const PLY:FRACTIONS[] = [...Array(2*(1+Q.PLY)).keys()].map(N=>{
        const _nr:number = N;
        const typ: "PA" | "PE" = N%2===0?"PA":"PE";
        const iPe:number = N%2===0?N/2:(N-1)/2;
        const iPa:number = iPe-1;
        const idn:number = N%2===0?iPa:iPe;
        const xor:number = Math.ceil(Math.pow(2,iPa)-1);
        const fix:number = iPa<0 ? N%2===0? (-(Q.MID)+1) : (-(Q.MID)+0) : N%2===0? 1 : 0;
        const bit:FRACT_BIT = ((idnPLY, midNUM, xorNUM, fixNUM, idnPAR)=>{
          const bitGen:number = Math.floor(Math.pow(2,idnPLY));
          const bitMid:number = fixNUM + midNUM;
          const halfMi:number = idnPAR<0 ? 0.5 : bitMid/2;
          const bitEnd:number = xorNUM*(2*halfMi);
          const bitSum:number = bitGen+bitMid+bitEnd;
          return {
            gen: bitGen,
            end: bitEnd,
            mid: bitMid,
            sum: bitSum
          };
        })(idn,Q.MID,xor, fix, iPa);
        const mid:number = iPa<0 ? 0.5 : bit.mid/2;
        const ang:FRA_ANGLE = ((ITEMS, HALF)=>{
          return {
            step:{
              fra: [360,'/',ITEMS],
              deg: 360/ITEMS
            },
            zero:{
              fra: [2*HALF,'*(',360,'/',2*ITEMS,')'],
              deg: 2*HALF*(360/(2*ITEMS))
            }
          };
        })(bit.sum, mid);
        //  switch (_nr) {
        //    case 0: return (mid/2)*aStepD;
        //    case 1: return (mid/2)*aStepD;
        //    case 3: return 10;//(mid/2)*aStepD;
        //    case 4: return 90;
        //  
        //    default: return 0;
        //  }
        //  //return A(mid*aStepD);
        //})();
        const arm:FRACT_ARM[] = ((xorNUM, bitGen, bitEnd, bitMid, NR, aStepD, aZeroD)=>{
          const R: TYP_BITS[] = [];
          let X = xorNUM;
          if(X===0 ){
            let G =bitGen;
            while(G>0){
              G--;
              R.push(NR%2===0?"bitGenPar":"bitGenPer");
            }
            let E =bitEnd;
            while(E>0){
              E--;
              R.push(NR%2===0?"bitEndPar":"bitEndPer");
            }
            let M =bitMid;
            while(M>0){
              M--;
              R.push(NR%2===0?"bitMidPar":"bitMidPer");
            }        
          } else {
            while (X>0) {
              X--;
              let G = (bitGen-(NR%2===0?1:2))/xorNUM;
              let E = bitEnd/xorNUM;
              while(G+E>0){
                if (G>0) {
                  G--;
                  R.push(NR%2===0?"bitGenPar":"bitGenPer");            
                } else if (E>0){
                  E--;
                  R.push(NR%2===0?"bitEndPar":"bitEndPer");
                }
              }
            }
            let G = (bitGen-(NR%2===0?1:2))/xorNUM;
            while(G>0){
              G--;
              R.push(NR%2===0?"bitGenPar":"bitGenPer");
            }
            let M =bitMid;
            while(M>0){
              M--;
              R.push(NR%2===0?"bitMidPar":"bitMidPer");
            }
          }
          return R.map((T,Y) =>{
            const REZ:FRACT_ARM = {_nr:Y, deg:A((Y*aStepD)+aZeroD),typ:T}
            return REZ;
          });
        })(xor,bit.gen, bit.end, bit.mid, _nr, ang.step.deg, ang.zero.deg);
        const deg:{
          step: number;
          zero: number;
        } = {
          step: ang.step.deg,
          zero: ang.zero.deg
        };    
        //(()=>{
        if((CONSOL_LOG??false)===true){
          console.log(
            /* plyIdn */ bgRgb24(rgb24(bold(`_nr: ${_nr.toString().padEnd(2,' ')} `),0x777777), 0xababab),
            /* iPe */ bgRgb24(rgb24(bold(`iPe: ${iPe.toString().padEnd(2,' ')} `),0x568242), 0x8ab873),
            /* typ */ N%2===0?bgRgb24(rgb24(bold(` PA `),0x837834), 0xb9ac65):bgRgb24(rgb24(bold(` PE `),0x568242), 0x8ab873),
            /* idn */ N%2===0?bgRgb24(rgb24(bold(` ${iPa.toString().padEnd(2,' ')} `),0x837834), 0xb9ac65):bgRgb24(rgb24(bold(` ${iPe.toString().padEnd(2,' ')} `),0x568242), 0x8ab873),
            /* iPa */ bgRgb24(rgb24(bold(`iPa: ${iPa.toString().padEnd(2,' ')} `),0x837834), 0xb9ac65),
            /* fix */ bgRgb24(rgb24(bold(`0: ${fix.toString().padEnd(2,' ')} `),0x777777), 0xababab),
            /* bitGen */ N%2===0?bgRgb24(rgb24(bold(`bitGen: ${bit.gen.toString().padEnd(3,' ')} `),0x837834), 0xb9ac65):bgRgb24(rgb24(bold(`bitGen: ${bit.gen.toString().padEnd(3,' ')} `),0x568242), 0x8ab873),
            /* bitEnd */ N%2===0?bgRgb24(rgb24(bold(`bitEnd: ${bit.end.toString().padEnd(3,' ')} `),0x00868a), 0x3fbdc1):bgRgb24(rgb24(bold(`bitEnd: ${bit.end.toString().padEnd(3,' ')} `),0x357ea3), 0x72b4db),
            /* bitMid */ N%2===0?bgRgb24(rgb24(bold(`bitMid: ${bit.mid.toString().padEnd(2,' ')} `),0x9565a2), 0xcc99d9):bgRgb24(rgb24(bold(`bitMid: ${bit.mid.toString().padEnd(2,' ')} `),0xa56569), 0xde999c),
            /* bitSum */ bgRgb24(rgb24(bold(`bitSum: ${bit.sum.toString().padEnd(3,' ')} `),0x777777), 0xababab),
            /* mid */ bgRgb24(rgb24(bold(`bitMid/2: ${mid.toString().padEnd(3,' ')} `),0x777777), 0xababab),
            /* xor */ bgRgb24(rgb24(bold(`X: ${xor.toString().padEnd(2,' ')} `),0x777777), 0xababab),
            /* xor */ bgRgb24(rgb24(bold(`aZeroD: ${ang.zero.deg.toFixed(3).padEnd(7,' ')} `),0x777777), 0xababab),
            /* xor */ bgRgb24(rgb24(bold(`aStepD: ${ang.step.deg.toFixed(3).padEnd(7,' ')} `),0x777777), 0xababab),
          );
          arm.map(W=>{
            console.log(B(W.typ), B(W.deg.toFixed(3).padEnd(7,' ')))
          });
        }
        const REZULT:FRACTIONS =  {
          _nr:_nr,
          typ: typ,
          iPe: iPe,
          iPa: iPa,
          idn: idn,
          xor: xor,
          fix: fix,
          bit: bit,
          mid: mid,
          ang: ang,
          deg: deg,
          arm: arm
        };
        return REZULT;
      });
      return PLY;  
    }
    function layers(
      /* TREE_LAYERS.value */ T:ELEMENTAR,       
      /* SVG_HALF.value */ H: number,
      ): {
        HUE: HUECOLORS;
        NUM: GETNUMBER;
    } {
      function GetHue(N:number):HUECOLORS {
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
      function GetNum(N:number):GETNUMBER {   
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