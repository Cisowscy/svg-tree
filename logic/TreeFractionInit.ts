//import { bgRgb24, rgb24,bold } from "$std/fmt/colors.ts";

//^ ---------------------------------------------------------------------------------------
export class InitFractionTree {
  aspectsOfPlyRadiusesFactor: number[];
  amountOfThePlyGroupings: number;
  amountOfFractionsInMidGap: number;
  amountOfFractionsInSetGap: number;
  ableMaximumRadiusOfLastPly: number;
  directionOfTheAxisX: "toLeft" | "toRight";
  directionOfTheAxisY: "toTop" | "toBottom";
  directionOfTheAngleOfIncrement: "toY_fromX" | "toX_fromY";
  directionOfTheAngleOfZeroValue: number;  
  huePly:Map<string, string> = new Map<string, string>([
  //huePly:Map<"PE_0"|"PE_1"|"PE_2"|"PE_3"|"PE_4"|"PE_5"|"PE_6"|"PE_7"|"PE_L", string> = new Map<"PE_0"|"PE_1"|"PE_2"|"PE_3"|"PE_4"|"PE_5"|"PE_6"|"PE_7"|"PE_L", string>([
    ["PE_0","#cac158"],
    ["PE_1","#ef9f2f"],
    ["PE_2","#ef5fcf"],
    ["PE_3","#9f5fef"],
    ["PE_4","#1fafdf"],
    ["PE_5","#8fdf4f"],
    ["PE_6","#efdf4f"],
    ["PE_7","#afaf8f"],
    ["PE_L","#e2e2e2"]
  ]);
  hueFra4:Map<string, string> = new Map<string, string>([
  //hueFra4:Map<"genBitPar"|"genBitPer"|"gapMidAll"|"gapSetAll", string> = new Map<"genBitPar"|"genBitPer"|"gapMidAll"|"gapSetAll", string>([
    ["genBitPar","#826c48"],
    ["genBitPer","#558248"],
    ["gapMidAll","#486682"],
    ["gapSetAll","#824e79"],
  ]);
  hueFra7:Map<string, [string,string,string,string]> = new Map<string, [string,string,string,string]>([
  // hueFra7:Map<"genBitPar"|"genBitPer"|"gapSetPar"|"gapSetPer"|"gapMidPar"|"gapMidPer"|"otherItem", [string,string,string,string]> = new Map<"genBitPar"|"genBitPer"|"gapSetPar"|"gapSetPer"|"gapMidPar"|"gapMidPer"|"otherItem", [string,string,string,string]>([
    ["genBitPar",["#4f4802","#837834","#b9ac65","#f3e399"]],
    ["genBitPer",["#245113","#568242","#8ab873","#c0f0a8"]],
    ["gapSetPar",["#61356e","#9565a2","#cc99d9","#ffd0ff"]],
    ["gapSetPer",["#004d6f","#357ea3","#72b4db","#a8ebff"]],
    ["gapMidPar",["#6f353a","#a56569","#de999c","#ffd0d2"]],
    ["gapMidPer",["#005358","#00868a","#3fbdc1","#80f4f8"]],
    ["otherItem",["#474747","#777777","#ababab","#e2e2e2"]]
  ]);

  constructor(config: {
    aspectsOfPlyRadiusesFactor: number[];
    amountOfThePlyGroupings: number;
    amountOfFractionsInMidGap: number;
    amountOfFractionsInSetGap: number;
    ableMaximumRadiusOfLastPly: number;
    directionOfTheAxisX?: "toLeft" | "toRight";
    directionOfTheAxisY?: "toTop" | "toBottom";
    directionOfTheAngleOfIncrement?: "toY_fromX" | "toX_fromY";
    directionOfTheAngleOfZeroValue?: number;
    huePly?: {
      PE_0?: string;
      PE_1?: string;
      PE_2?: string;
      PE_3?: string;
      PE_4?: string;
      PE_5?: string;
      PE_6?: string;
      PE_7?: string;
      PE_L?: string;
    };
    hueFra4?: {
      genBitPar?: string;
      genBitPer?: string;
      gapMidAll?: string;
      gapSetAll?: string;
    };
    hueFra7?:{
      genBitPar?:[string,string,string,string];
      genBitPer?:[string,string,string,string];
      gapSetPar?:[string,string,string,string];
      gapSetPer?:[string,string,string,string];
      gapMidPar?:[string,string,string,string];
      gapMidPer?:[string,string,string,string];
      otherItem?:[string,string,string,string];
    };
  }) {
    this.aspectsOfPlyRadiusesFactor = config.aspectsOfPlyRadiusesFactor;
    this.amountOfThePlyGroupings = config.amountOfThePlyGroupings;
    this.amountOfFractionsInMidGap = config.amountOfFractionsInMidGap;
    this.amountOfFractionsInSetGap = config.amountOfFractionsInSetGap;
    this.ableMaximumRadiusOfLastPly = config.ableMaximumRadiusOfLastPly;
    this.directionOfTheAxisX = config.directionOfTheAxisX ?? "toLeft";
    this.directionOfTheAxisY = config.directionOfTheAxisY ?? "toBottom";
    this.directionOfTheAngleOfIncrement = config.directionOfTheAngleOfIncrement ?? "toX_fromY";
    this.directionOfTheAngleOfZeroValue = config.directionOfTheAngleOfZeroValue ?? 180;
    (config.huePly!==undefined && config.huePly.PE_0!==undefined ) ? this.huePly.set("PE_0", config.huePly.PE_0) : null; 
    (config.huePly!==undefined && config.huePly.PE_1!==undefined ) ? this.huePly.set("PE_1", config.huePly.PE_1) : null; 
    (config.huePly!==undefined && config.huePly.PE_2!==undefined ) ? this.huePly.set("PE_2", config.huePly.PE_2) : null; 
    (config.huePly!==undefined && config.huePly.PE_3!==undefined ) ? this.huePly.set("PE_3", config.huePly.PE_3) : null; 
    (config.huePly!==undefined && config.huePly.PE_4!==undefined ) ? this.huePly.set("PE_4", config.huePly.PE_4) : null; 
    (config.huePly!==undefined && config.huePly.PE_5!==undefined ) ? this.huePly.set("PE_5", config.huePly.PE_5) : null; 
    (config.huePly!==undefined && config.huePly.PE_6!==undefined ) ? this.huePly.set("PE_6", config.huePly.PE_6) : null; 
    (config.huePly!==undefined && config.huePly.PE_7!==undefined ) ? this.huePly.set("PE_7", config.huePly.PE_7) : null; 
    (config.huePly!==undefined && config.huePly.PE_L!==undefined ) ? this.huePly.set("PE_L", config.huePly.PE_L) : null; 
    (config.hueFra4!==undefined && config.hueFra4.genBitPar!==undefined) ? this.hueFra4.set("genBitPar", config.hueFra4.genBitPar) : null;
    (config.hueFra4!==undefined && config.hueFra4.genBitPer!==undefined) ? this.hueFra4.set("genBitPer", config.hueFra4.genBitPer) : null;
    (config.hueFra4!==undefined && config.hueFra4.gapMidAll!==undefined) ? this.hueFra4.set("gapMidAll", config.hueFra4.gapMidAll) : null;
    (config.hueFra4!==undefined && config.hueFra4.gapSetAll!==undefined) ? this.hueFra4.set("gapSetAll", config.hueFra4.gapSetAll) : null;
    (config.hueFra7!==undefined && config.hueFra7.genBitPar!==undefined) ? this.hueFra7.set("genBitPar", config.hueFra7.genBitPar) : null;
    (config.hueFra7!==undefined && config.hueFra7.genBitPer!==undefined) ? this.hueFra7.set("genBitPer", config.hueFra7.genBitPer) : null;
    (config.hueFra7!==undefined && config.hueFra7.gapSetPar!==undefined) ? this.hueFra7.set("gapSetPar", config.hueFra7.gapSetPar) : null;
    (config.hueFra7!==undefined && config.hueFra7.gapSetPer!==undefined) ? this.hueFra7.set("gapSetPer", config.hueFra7.gapSetPer) : null;
    (config.hueFra7!==undefined && config.hueFra7.gapMidPar!==undefined) ? this.hueFra7.set("gapMidPar", config.hueFra7.gapMidPar) : null;
    (config.hueFra7!==undefined && config.hueFra7.gapMidPer!==undefined) ? this.hueFra7.set("gapMidPer", config.hueFra7.gapMidPer) : null;
    (config.hueFra7!==undefined && config.hueFra7.otherItem!==undefined) ? this.hueFra7.set("otherItem", config.hueFra7.otherItem) : null; 
  }
  get getHue(): {    
    huePly:Map<string, string>;
    hueFra4:Map<string, string>
    hueFra7:Map<string, [string,string,string,string]>

    //huePly:Map<"PE_0"|"PE_1"|"PE_2"|"PE_3"|"PE_4"|"PE_5"|"PE_6"|"PE_7"|"PE_L", string>;
    //hueFra4:Map<"genBitPar"|"genBitPer"|"gapMidAll"|"gapSetAll", string>
    //hueFra7:Map<"genBitPar"|"genBitPer"|"gapSetPar"|"gapSetPer"|"gapMidPar"|"gapMidPer"|"otherItem", [string,string,string,string]>
  } {
    return {
      huePly:this.huePly,
      hueFra4: this.hueFra4,
      hueFra7: this.hueFra7
    };
  }
  get getCalculated1OfPlysRadiuses(): number[] {
    const factors = this.aspectsOfPlyRadiusesFactor.toSpliced(1+(2 * (1 + this.amountOfThePlyGroupings)));
    const factorsCent = (this.ableMaximumRadiusOfLastPly / (factors.reduce((a, b) => a + b) ));
    let memoryRadius = 0;
    const radiuses = factors.map(f => {
      memoryRadius += (f * factorsCent);
      return memoryRadius;
    });
    return radiuses;
  }
  get getCalculated2OfPlysIdentity(): {
    _order: number;
    idnTyp: "PA" | "PE";
    idnPer: number;
    idnPar: number;
    idnPly: number;
    numMod: number;
    numBit: number;
    numXor: number;
    numFix: number;
    putMid: number;
    putSet: number;
    putPly: number;
    putMax: number;

  }[] {
    return [...Array(2 * (1 + this.amountOfThePlyGroupings)).keys()].map(N => {
      const _order: number = N;
      const numMod: number = ((_order % 2) - 1) * (-1);
      const numBit: number = _order<2?(_order % 2):(_order % 2) + 1;
      const idnTyp: "PA" | "PE" = _order % 2 === 0 ? "PA" : "PE";      
      const idnPer: number = idnTyp === "PA" ? _order / 2 : (_order - 1) / 2;
      const idnPar: number = idnPer - 1;
      const idnPly: number = idnTyp === "PA" ? idnPar : idnPer;
      const numXor: number = Math.ceil(Math.pow(2, idnPar) - 1);
      const numFix: number = (idnPar < 0 ? (-this.amountOfFractionsInMidGap) : 0);
      return {
        _order: _order,
        idnTyp: idnTyp,
        idnPer: idnPer,
        idnPar: idnPar,
        idnPly: idnPly,
        numXor: numXor,
        numMod: numMod,
        numBit: numBit,
        numFix: numFix,
        putSet: this.amountOfFractionsInSetGap,
        putMid: this.amountOfFractionsInMidGap,
        putPly: this.amountOfThePlyGroupings,
        putMax: this.ableMaximumRadiusOfLastPly
      };
    });
  }
  get getCalculated3OfPlysFraction(): {
    fraGapMid: number;
    fraGapSet: number;
    fraGenBit: number;
    fraSumFra: number;
  }[] {
    return this.getCalculated2OfPlysIdentity.map(i => {
      //* fraBIT = (numXor * numBit) + numBit;
      //* fraSET = numXor * (putSet + numMod);
      //* fraMID = numFix + putMid + numMod;
      //^ fraSUM = fraBIT + fraSET + fraMID; 
      const fraGenBit: number = (i.numXor * i.numBit) + i.numBit; ////Math.floor(Math.pow(2, i.idnPly));
      const fraGapSet: number = i.numXor * (i.putSet + i.numMod); ////this.amountOfFractionsInSetGap * i.numXor;
      const fraGapMid: number = i.numFix + i.putMid + i.numMod; ////(i.idnPar < 0 ? (-this.amountOfFractionsInMidGap) : 0) + i.numMod + this.amountOfFractionsInMidGap;
      const fraSumFra: number = fraGapMid + fraGapSet + fraGenBit;
      return {
        fraGapMid: fraGapMid,
        fraGapSet: fraGapSet,
        fraGenBit: fraGenBit,
        fraSumFra: fraSumFra
      };
    });
  }
  get getCalculated4OfPlysArmChain(): {
    stepAngle: number;
    stepItems: number;
    stepStart: number;
  }[] {
    const F = this.getCalculated3OfPlysFraction;
    return this.getCalculated2OfPlysIdentity.map(i => {
      const degFix: number = i.idnPar < 0 ? 0.5 : F[i._order].fraGapMid / 2;
      return {
        stepAngle: 360 / F[i._order].fraSumFra,
        stepItems: F[i._order].fraSumFra,
        stepStart: (()=>{
          if(i._order>1){
            return (360 / (2 * F[i._order].fraSumFra)) * (2 * degFix)+(360 / (2 * F[i._order].fraSumFra)) +this.directionOfTheAngleOfZeroValue;
          }else{
            return (360 / (2 * F[i._order].fraSumFra)) * (2 * degFix) +this.directionOfTheAngleOfZeroValue;
          }
        })()
      };
    });
  }
  get getCalculated5OfPlysArmTypes() {
    enum Fra {
      ParGapMid = "isMidGapOfPar",
      ParGapSet = "isSetGapOfPar",
      ParGenBit = "isBitGenOfPar",
      PerGapMid = "isMidGapOfPer",
      PerGapSet = "isSetGapOfPer",
      PerGenBit = "isBitGenOfPer"
    }

    const F = this.getCalculated3OfPlysFraction;
    return this.getCalculated2OfPlysIdentity.map(i=>{    
      const R = [];
      let X = i.numXor;     

      if(X===0 ){
        let GB = F[i._order].fraGenBit;
        while(GB>0){
          GB--;
          R.push(i.idnTyp==="PA" ? Fra.ParGenBit : Fra.PerGenBit );
        }
        let GS = F[i._order].fraGapSet;
        while(GS>0){
          GS--;
          R.push(i.idnTyp==="PA" ? Fra.ParGapSet : Fra.PerGapSet );
        }
        let GM = F[i._order].fraGapMid;
        while(GM>0){
          GM--;
          R.push(i.idnTyp==="PA" ? Fra.ParGapMid : Fra.PerGapMid );
        }        
      } else {
        while (X>0) {
          X--;
          let GB = (F[i._order].fraGenBit - (i.idnTyp==="PA" ? 1 : 2 )) /i.numXor;
          let GS = F[i._order].fraGapSet/i.numXor;
          while(GB+GS>0){
            if (GB>0) {
              GB--;
              R.push(i.idnTyp==="PA" ? Fra.ParGenBit : Fra.PerGenBit );       
            } else if (GS>0){
              GS--;
              R.push(i.idnTyp==="PA" ? Fra.ParGapSet : Fra.PerGapSet );
            }
          }
        }
        let GB = (F[i._order].fraGenBit - (i.idnTyp==="PA" ? 1 : 2 )) /i.numXor;
        while(GB>0){
          GB--;
          R.push(i.idnTyp==="PA" ? Fra.ParGenBit : Fra.PerGenBit );  
        }
        let GM = F[i._order].fraGapMid;
        while(GM>0){
          GM--;
          R.push(i.idnTyp==="PA" ? Fra.ParGapMid : Fra.PerGapMid );
        }
      }
      return R;
    });
  }
  get getCalculated6OfPlysArmAngle(): number[][] {
    const S = this.getCalculated4OfPlysArmChain;
    return this.getCalculated5OfPlysArmTypes.map((ply, iPly) =>{
      return ply.map((arm,iArm) =>{
        return (iArm * S[iPly].stepAngle)+S[iPly].stepStart + this.directionOfTheAngleOfZeroValue;
      });
    });
  }
}
//^ ---------------------------------------------------------------------------------------


//if((CONSOL_LOG??false)===true){
//  console.log(
//    /* plyIdn */ bgRgb24(rgb24(bold(`_nr: ${_nr.toString().padEnd(2,' ')} `),0x777777), 0xababab),
//    /* iPe */ bgRgb24(rgb24(bold(`iPe: ${iPe.toString().padEnd(2,' ')} `),0x568242), 0x8ab873),
//    /* typ */ N%2===0?bgRgb24(rgb24(bold(` PA `),0x837834), 0xb9ac65):bgRgb24(rgb24(bold(` PE `),0x568242), 0x8ab873),
//    /* idn */ N%2===0?bgRgb24(rgb24(bold(` ${iPa.toString().padEnd(2,' ')} `),0x837834), 0xb9ac65):bgRgb24(rgb24(bold(` ${iPe.toString().padEnd(2,' ')} `),0x568242), 0x8ab873),
//    /* iPa */ bgRgb24(rgb24(bold(`iPa: ${iPa.toString().padEnd(2,' ')} `),0x837834), 0xb9ac65),
//    /* fix */ bgRgb24(rgb24(bold(`0: ${fix.toString().padEnd(2,' ')} `),0x777777), 0xababab),
//    /* bitGen */ N%2===0?bgRgb24(rgb24(bold(`bitGen: ${bit.gen.toString().padEnd(3,' ')} `),0x837834), 0xb9ac65):bgRgb24(rgb24(bold(`bitGen: ${bit.gen.toString().padEnd(3,' ')} `),0x568242), 0x8ab873),
//    /* bitEnd */ N%2===0?bgRgb24(rgb24(bold(`bitEnd: ${bit.end.toString().padEnd(3,' ')} `),0x00868a), 0x3fbdc1):bgRgb24(rgb24(bold(`bitEnd: ${bit.end.toString().padEnd(3,' ')} `),0x357ea3), 0x72b4db),
//    /* bitMid */ N%2===0?bgRgb24(rgb24(bold(`bitMid: ${bit.mid.toString().padEnd(2,' ')} `),0x9565a2), 0xcc99d9):bgRgb24(rgb24(bold(`bitMid: ${bit.mid.toString().padEnd(2,' ')} `),0xa56569), 0xde999c),
//    /* bitSum */ bgRgb24(rgb24(bold(`bitSum: ${bit.sum.toString().padEnd(3,' ')} `),0x777777), 0xababab),
//    /* mid */ bgRgb24(rgb24(bold(`bitMid/2: ${mid.toString().padEnd(3,' ')} `),0x777777), 0xababab),
//    /* xor */ bgRgb24(rgb24(bold(`X: ${xor.toString().padEnd(2,' ')} `),0x777777), 0xababab),
//    /* xor */ bgRgb24(rgb24(bold(`aZeroD: ${ang.zero.deg.toFixed(3).padEnd(7,' ')} `),0x777777), 0xababab),
//    /* xor */ bgRgb24(rgb24(bold(`aStepD: ${ang.step.deg.toFixed(3).padEnd(7,' ')} `),0x777777), 0xababab),
//  );
//  arm.map(W=>{
//    console.log(B(W.typ), B(W.deg.toFixed(3).padEnd(7,' ')))
//  });
