// Document https://fresh.deno.dev/docs/concepts/islands

import type { SignalStateDiagnosticOutPutProps } from "@@@types";

import {
  SETING_SVG_TREE_2
} from "@@@globalCONTROLS";

export function SignalStateDiagnosticOutPut(
  props: SignalStateDiagnosticOutPutProps,
) {
  const classTailWind = (() => {
    const colorBG = /*props.colorPalleteBG ??*/ "slate";
    const colorFG = /*props.colorPalleteFG ??*/ "slate";

    return {
      article: ``,
      section: `border-2 border-blue-400`,
      fieldset:
        `my-2 p-2 rounded-md border-[4px] border-${colorBG}-600/75  hover:border-${colorBG}-800/75`,
      fieldset_grid:
        `  grid grid-cols-4 gap-[2px] place-content-stretch box-border`,
      fieldset_legend:
        ` px-2 py-1 rounded-lg bg-${colorBG}-600/75 text-${colorBG}-800 hover:bg-${colorBG}-800/75 hover:text-${colorBG}-500` +
        ` font-mono text-xl subpixel-antialiased  text-left font-bold`,
    };
  })();  
  const A = {
    PLY: SETING_SVG_TREE_2.value.amountOfThePlyGroupings,
    SET: SETING_SVG_TREE_2.value.amountOfFractionsInSetGap,
    MID: SETING_SVG_TREE_2.value.amountOfFractionsInMidGap,
    MAX: SETING_SVG_TREE_2.value.ableMaximumRadiusOfLastPly,
  };
  const B = {
    axis_X: SETING_SVG_TREE_2.value.directionOfTheAxisX,
    axis_Y: SETING_SVG_TREE_2.value.directionOfTheAxisY,
    angInc: SETING_SVG_TREE_2.value.directionOfTheAngleOfIncrement,
    ang_00: SETING_SVG_TREE_2.value.directionOfTheAngleOfZeroValue,
  };
  const C = SETING_SVG_TREE_2.value.getHue;
  const D = SETING_SVG_TREE_2.value.getCalculated1OfPlysRadiuses;
  const E = SETING_SVG_TREE_2.value.getCalculated2OfPlysIdentity;

  const F = SETING_SVG_TREE_2.value.getCalculated3OfPlysFraction;
  const G = SETING_SVG_TREE_2.value.getCalculated4OfPlysArmChain;
  const H = SETING_SVG_TREE_2.value.getCalculated5OfPlysArmTypes;
  const J = SETING_SVG_TREE_2.value.getCalculated6OfPlysArmAngle;
  function getHuePly(n:number):string {
    return 'PE_'+n;
  }
  
  

  return (
    <article>
      <header class="w-full mb-[15px] rounded-t-lg text-center p-[15px] bg-black text-white text-[40px]"><h1>ZESTAWIENIE DIAGNOSTYCZNE</h1></header>
      <section
        class={`mb-4 grid grid-cols-4 gap-[5px] 
        place-content-stretch box-border`}
      >
        <p class={`bg-blue-700/50 rounded-l-md`}>NAZWA:</p>
        <p class={`bg-blue-700/50 rounded-t-md`}>ilość pokoleń</p>
        <p class={`bg-blue-700/50 rounded-t-md`}>odstęp pomiędzy</p>
        <p class={`bg-blue-700/50 rounded-t-md`}>odstęp końcowy</p>
        <p class={`bg-blue-700/50 rounded-l-md`}>WARTOŚĆ:</p>
        <p class={`bg-blue-500/50 rounded-b-md  text-center`}>
          {A.PLY}
        </p>
        <p class={`bg-blue-500/50 rounded-b-md  text-center`}>
          {A.SET}
        </p>
        <p class={`bg-blue-500/50 rounded-b-md  text-center`}>
          {A.MID}
        </p>
      </section>

      <section class={` `}>
        <table class="table-auto border-separate border border-slate-400">
          <thead>
            <tr>
              <th scope="col" colSpan={6} class={`bg-black/90 text-white rounded-md`}>powłoka</th>
              <th scope="col"class={`w-[80px] bg-black/90 text-white rounded-md`}>promień powłoki</th>
              <th scope="col"class={`bg-black/90 text-white rounded-md`}>ilość ułamków</th>
              <th scope="col"class={`bg-black/90 text-white rounded-md`}>ułamki: 'bit'</th>
              <th scope="col"class={`bg-black/90 text-white rounded-md`}>ułamki: 'set'</th>
              <th scope="col"class={`bg-black/90 text-white rounded-md`}>ułamki: 'mid'</th>

              <th scope="col" class={`bg-black/90 text-white rounded-md`}>kąt skoku</th>
              <th scope="col" class={`bg-black/90 text-white rounded-md`}>kąt startu</th>
            </tr>
          </thead>
          <tbody>
            {E.map(X=>{
                const HUE = X.idnTyp==="PA" 
                                    ? `bg-[${C.huePly.get(['PE_',X.idnPer].join(''))}]/50 rounded-md`
                                    : `bg-[${C.huePly.get(['PE_',X.idnPer].join(''))}]/90 rounded-md`;  
                const NR =  '№'+X._order.toString().padStart(2,' ');
                const iPE = 'PE№'+ X.idnPer.toString().padStart(2,' ');
                const iPA = 'PA№'+ X.idnPar.toString().padStart(2,' ');
                const iPP = 'PP№'+ X.idnPly.toString().padStart(2,' ');
                const iTT = ''+ X.idnTyp+'-'+X.numMod.toString().padStart(1,' ');
                const iXX = '⊕'+ X.numXor.toString().padStart(2,' ');

              return(<tr>
                      <th scope="row" class={`bg-black/90 text-white rounded-md`}>{NR}</th>
                      <td class={`bg-black/90 text-white rounded-md`}>{iPE}</td>
                      <td class={`bg-black/90 text-white rounded-md`}>{iPA}</td>
                      <td class={`bg-black/90 text-white rounded-md`}>{iPP}</td>
                      <td class={`bg-black/90 text-white rounded-md`}>{iTT}</td>
                      <td class={`bg-black/90 text-white rounded-md`}>{iXX}</td>
                      <td class={HUE}>{D[X._order].toFixed(3)}</td>
                      <td class={HUE}>{F[X._order].fraSumFra}</td>
                      <td class={HUE}>{F[X._order].fraGenBit}</td>
                      <td class={HUE}>{F[X._order].fraGapSet}</td>
                      <td class={HUE}>{F[X._order].fraGapMid}</td>
                      <td class={HUE}>{G[X._order].stepAngle.toFixed(3)}</td>
                      <td class={HUE}>{G[X._order].stepStart.toFixed(3)}</td>
                      
              </tr>);
            })}
          </tbody>
        </table>
      </section>
    </article>
  );
}
