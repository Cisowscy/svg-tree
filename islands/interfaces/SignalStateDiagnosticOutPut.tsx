// Document https://fresh.deno.dev/docs/concepts/islands

import type { SignalStateDiagnosticOutPutProps } from "@@@types";

import {
  SETING_SVG_TREE
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

  return (
    <article>
      <section
        class={`mb-4 grid grid-cols-4 gap-[5px] place-content-stretch box-border`}
      >
        <p class={`bg-blue-700/50 rounded-l-md`}>NAZWA:</p>
        <p class={`bg-blue-700/50 rounded-t-md`}>ilość pokoleń</p>
        <p class={`bg-blue-700/50 rounded-t-md`}>odstęp pomiędzy</p>
        <p class={`bg-blue-700/50 rounded-t-md`}>odstęp końcowy</p>
        <p class={`bg-blue-700/50 rounded-l-md`}>WARTOŚĆ:</p>
        <p class={`bg-blue-500/50 rounded-b-md  text-center`}>
          {SETING_SVG_TREE.value.set.ply}
        </p>
        <p class={`bg-blue-500/50 rounded-b-md  text-center`}>
          {SETING_SVG_TREE.value.set.mid}
        </p>
        <p class={`bg-blue-500/50 rounded-b-md  text-center`}>
          {SETING_SVG_TREE.value.set.end}
        </p>
      </section>
      <section>
        <table class="table-auto border-separate border border-slate-400">
          <thead>
            <tr>
              <th scope="col"class={`w-[125px] bg-black/90 text-white rounded-md`}>powłoka</th>
              <th scope="col"class={`w-[80px] bg-black/90 text-white rounded-md`}>promień</th>
              <th scope="col"class={`bg-black/90 text-white rounded-md`}>frakc.</th>
              <th scope="col"class={`bg-black/90 text-white rounded-md`}>frGen</th>
              <th scope="col"class={`bg-black/90 text-white rounded-md`}>frEnd</th>
              <th scope="col"class={`bg-black/90 text-white rounded-md`}>frMid</th>
              <th scope="col"class={`bg-black/90 text-white rounded-md`}>xor</th>
              <th scope="col"class={`bg-black/90 text-white rounded-md`}>fix</th>
              <th scope="col"class={`bg-black/90 text-white rounded-md`}>xor</th>
              <th scope="col"class={`bg-black/90 text-white rounded-md`}>mid/2</th>
              <th scope="col"class={`bg-black/90 text-white rounded-md`}>deg zero</th>
              <th scope="col"class={`bg-black/90 text-white rounded-md`}>deg step</th>
            </tr>
          </thead>
          <tbody>
            {SETING_SVG_TREE.value.ply.map(L =>{
              const HUE = L.typ == "PA" 
                                ? `bg-[${SETING_SVG_TREE.value.hue.ply[L.iPe]}]/50 rounded-md`
                                : `bg-[${SETING_SVG_TREE.value.hue.ply[L.iPe]}]/90 rounded-md`;

              return(
                <tr>
                  <th scope="row" class={`bg-black/90 text-white rounded-md`}>{`${L._nr.toString().padEnd(2,' ')}|ρ${L.typ}|${L.iPe}|${L.iPa.toString().padStart(2,' ')}|${L.idn.toString().padStart(2,' ')}|`}</th> 
                  <td class={HUE}>{L.ply[1].toFixed(3)}</td>
                  <td class={HUE}>{L.bit.sum}</td>
                  <td class={HUE}>{L.bit.gen}</td>
                  <td class={HUE}>{L.bit.gen}</td>
                  <td class={HUE}>{L.bit.mid}</td>   
                  <td class={HUE}>{L.xor}</td>      
                  <td class={HUE}>{L.fix}</td>       
                  <td class={HUE}>{L.xor}</td>      
                  <td class={HUE}>{L.mid}</td>       
                  <td class={HUE}>{L.ang.zero.deg.toFixed(3)}</td>       
                  <td class={HUE}>{L.ang.step.deg.toFixed(3)}</td>            
                </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td class={`bg-black/90 text-white rounded-md`}> . </td>
              <td class={`bg-black/90 text-white rounded-md`}> . </td>
              <td class={`bg-black/90 text-white rounded-md`}> . </td>
              <td class={`bg-black/90 text-white rounded-md`}> . </td>
              <td class={`bg-black/90 text-white rounded-md`}> . </td>
              <td class={`bg-black/90 text-white rounded-md`}> . </td>
              <td class={`bg-black/90 text-white rounded-md`}> . </td>
              <td class={`bg-black/90 text-white rounded-md`}> . </td>
              <td class={`bg-black/90 text-white rounded-md`}> . </td>
              <td class={`bg-black/90 text-white rounded-md`}> . </td>
              <td class={`bg-black/90 text-white rounded-md`}> . </td>
              <td class={`bg-black/90 text-white rounded-md`}> . </td>
            </tr>
          </tfoot>
        </table>
      </section>
      
      
      <div class="h-[40px] w-full bg-black"></div>
      <section class={`${classTailWind.section}`}>C</section>
      <section class={`${classTailWind.section}`}>D</section>
      <section class={`${classTailWind.section}`}>E</section>
      <section class={`${classTailWind.section}`}>F</section>
    </article>
  );
}
