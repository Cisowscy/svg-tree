import { rgb8,bgRgb8 } from "$std/fmt/colors.ts";
import type { initTreeFractionRhoOut } from "@@@types";


export function TreeFractionInit(genendgap:{gen:number,gap:number,end:number},log?:boolean):initTreeFractionRhoOut {
  const {gen, gap, end} = genendgap;
  let logg = log ?? false;
  let idPER =0;
  let idPAR =0;
  const CONFIG = [...new Array(gen+1).keys()].map(nrGen => {
    const frPer_frEnd= (nrGen===0) ? 0 : end;
    const frPar_frEnd= (nrGen===0) ? 1 : end+1;
    const frPer_frGen= Math.floor(Math.pow(2,nrGen));
    const frPar_frGen= Math.floor(Math.pow(2,nrGen-1));
    const frPer_frGap=(nrGen===0 || nrGen===1) ? 0 : (frPar_frGen-1)*gap;
    const frPar_frGap=(nrGen===0) ? 0 : frPar_frGen +frPer_frGap -1;
    const fractions = (frPer_frGen+frPer_frGap+frPer_frEnd)==(frPar_frGen+frPar_frGap+frPar_frEnd) ? (frPar_frGen+frPar_frGap+frPar_frEnd) : 0;
    
    function Fraction(nrFRA:number,PerOrPar:string) {
      const indexFraInc = [...new Array(fractions).keys()].map(K =>K+1);
      const indexFraDec = indexFraInc.toReversed();
      const indexFraIncMod = indexFraInc.map(K =>K%(2+gap));
      const indexFraDecMod = indexFraDec.map(K =>K%(2+gap));
      let angle0 ={per:0,par:0}; 
      const angleFraParent = [...new Array(fractions).keys()].map(Y=>{
        if(Y===0){
          angle0.par = angle0.par + (((360/fractions)*(end+1))/2);
        }
        const angle = (angle0.par + Y*(360/fractions));
        return angle>=720?angle-720:angle>=360?angle-360:angle;
      });
      const angleFraPerson = [...new Array(fractions).keys()].map(Y=>{
        if(Y===0){
          angle0.per = angle0.per + (((360/fractions)*end)/2);
        }
        const angle = (angle0.per + Y*(360/fractions));
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
        setGap:gap, //!A
        setEnd:end, //!B
        itemsFra: fractions, //!I
        itemsFra_PAR:{
          itemsGen:frPar_frGen, //!D
          itemsGap:frPar_frGap, //!F
          itemsEnd:frPar_frEnd, //!H          
          angleFraZero:((360/fractions)*(end+1))/2 //~R
        },
        itemsFra_PER:{
          itemsGen:frPer_frGen, //!E
          itemsGap:frPer_frGap, //!G
          itemsEnd:frPer_frEnd, //!H2          
          angleFraZero:((360/fractions)*end)/2 //~P
        },
        angleFraStep: 360/fractions //~P & ~R
      },
      DATA: {
        PAR: [...new Array(fractions).keys()].map(n=>Fraction(n,'par')),
        PER: [...new Array(fractions).keys()].map(n=>Fraction(n,'per'))
      }
    };
    //
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
  //console.log(Deno.inspect(CONFIG, {depth: 6}));
  (()=>{
    function  cEND(n:string,t:string|number|null,l:number) { return bgRgb8((n===''?'':`| ${n}: `)+`${t===null?'':t}`.padStart(l, " ")+(n===''?'':' |'),97)}
    function  cGAP(n:string,t:string|number|null,l:number) { return bgRgb8((n===''?'':`| ${n}: `)+`${t===null?'':t}`.padStart(l, " ")+(n===''?'':' |'),26)}
    function  cPER(n:string,t:string|number|null,l:number) { return bgRgb8((n===''?'':`| ${n}: `)+`${t===null?'':t}`.padStart(l, " ")+(n===''?'':' |'),28)}
    function  cPAR(n:string,t:string|number|null,l:number) { return bgRgb8((n===''?'':`| ${n}: `)+`${t===null?'':t}`.padStart(l, " ")+(n===''?'':' |'),94)}
    function cINF1(n:string,t:string|number|null,l:number) { return bgRgb8((n===''?'':`| ${n}: `)+`${t===null?'':t}`.padStart(l, " ")+(n===''?'':' |'),239)}
    function cINF2(n:string,t:string|number|null,l:number) { return bgRgb8((n===''?'':`| ${n}: `)+`${t===null?'':t}`.padStart(l, " ")+(n===''?'':' |'),235)}
    function cTyp(t:string) {
      switch (t) {
        case "isEND":
          return bgRgb8("isEND",97);
        case "isGAP":          
        case "isMID":
          return bgRgb8("isGAP",26);
        case "isPER":
          return bgRgb8("isPER",28);
        case "isPAR":
          return bgRgb8("isPAR",94);
        default:
          return '';
      }
    }  
    if (logg){
      CONFIG.map(GEN=>{
        console.log('');
        console.log('');
        console.log(
          cEND('setEnd',GEN.INFO.setEnd,2),
          cGAP('setGap',GEN.INFO.setGap,2),
          cINF1('nrGen',GEN.INFO.indexGen,2),
          cINF1('sumFra',GEN.INFO.itemsFra,3)
        );
        console.log(
          cEND('sumEnd',GEN.INFO.itemsFra_PAR.itemsEnd,2),
          cGAP('sumGap',GEN.INFO.itemsFra_PAR.itemsGap,2),
          cPAR('sumGen',GEN.INFO.itemsFra_PAR.itemsGen,2),
          cINF2('angle',GEN.INFO.itemsFra_PAR.angleFraZero,4)
        );
        console.log(
          cEND('sumEnd',GEN.INFO.itemsFra_PER.itemsEnd,2),
          cGAP('sumGap',GEN.INFO.itemsFra_PER.itemsGap,2),
          cPER('sumGen',GEN.INFO.itemsFra_PER.itemsGen,2),
          cINF2('angle',GEN.INFO.itemsFra_PER.angleFraZero,4)
        );
      for (let frNR = 0; frNR < GEN.DATA.PAR.length; frNR++) {
        const PAR = GEN.DATA.PAR[frNR];
        const PER = GEN.DATA.PER[frNR];
        console.log(
          cEND('',GEN.INFO.setEnd,1),
          cGAP('',GEN.INFO.setGap,1),
          cINF1('',GEN.INFO.indexGen,1),
          cINF1('',GEN.INFO.itemsFra,2),
          '**',
          cPAR('iPAR',PAR.DATA.indexPAR,4),
          cPAR('deg',PAR.DATA.angleFra,3),
          cTyp(PAR.DATA.itemType),
          cINF2('',PAR.INFO.indexFraIncMod,1),
          cINF2('',PAR.INFO.indexFraDecMod,1),
          cINF1('',PAR.INFO.indexFraInc,2),
          cINF1('',PAR.INFO.indexFraDec,2),
          '**',
          cPER('iPER',PER.DATA.indexPER,4),
          cPER('iPER',PER.DATA.angleFra,3),
          cTyp(PER.DATA.itemType),
          cINF2('',PER.INFO.indexFraIncMod,1),
          cINF2('',PER.INFO.indexFraDecMod,1),
          cINF1('',PER.INFO.indexFraInc,2),
          cINF1('',PER.INFO.indexFraDec,2),
          '**'
        );

        
      }

      });
    }
  })();

  
  return CONFIG;  
}
