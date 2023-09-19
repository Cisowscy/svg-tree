// Document https://fresh.deno.dev/docs/concepts/islands

import type { SignalStateDiagnosticOutPutProps } from "@@@types";

import {
  TREE_SETING,
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
        <p class={`bg-blue-700/50 rounded-t-md`}>odstęp końcowy</p>
        <p class={`bg-blue-700/50 rounded-t-md`}>odstęp środkowy</p>
        <p class={`bg-blue-700/50 rounded-l-md`}>WARTOŚĆ:</p>
        <p class={`bg-blue-500/50 rounded-b-md  text-center`}>
          {TREE_SETING.value.GEN}
        </p>
        <p class={`bg-blue-500/50 rounded-b-md  text-center`}>
          {TREE_SETING.value.END}
        </p>
        <p class={`bg-blue-500/50 rounded-b-md  text-center`}>
          {TREE_SETING.value.GAP}
        </p>
      </section>
      <section
        class={`mb-4 grid grid-cols-4 gap-[5px] place-content-stretch box-border`}
      >
        <div class={`bg-black/90 text-white rounded-md`}>powłoka</div>
        <div class={`bg-black/90 text-white rounded-md`}>promień</div>
        <div class={`bg-black/90 text-white rounded-md`}>-</div>
        <div class={`bg-black/90 text-white rounded-md`}>-</div>

        {TREE_SETING.value.HUE.PLY.map((HUE, I) => {
          return (
            <>
              <div class={`bg-[${HUE}]/50 rounded-md`}>{`φ-${I}-PA`}</div>
              <div class={`bg-[${HUE}]/50 rounded-md`}>
                {TREE_SETING.value.PLY[I].RHO.PAR[1].toFixed(3)}
              </div>
              <div class={`bg-[${HUE}]/50 rounded-md`}>-</div>
              <div class={`bg-[${HUE}]/50 rounded-md`}>-</div>
              <div class={`bg-[${HUE}]/90 rounded-md`}>{`φ-${I}-PE`}</div>
              <div class={`bg-[${HUE}]/90 rounded-md`}>
                {TREE_SETING.value.PLY[I].RHO.PER[1].toFixed(3)}
              </div>
              <div class={`bg-[${HUE}]/90 rounded-md`}>-</div>
              <div class={`bg-[${HUE}]/90 rounded-md`}>-</div>
            </>
          );
        })}
      </section>
      {TREE_SETING.value.PLY.map((J,iJ) =>{
        return(
          <>          
            <div class="h-[40px] w-full bg-black"></div>
            <section class={`${classTailWind.section} grid grid-cols-4 gap-[5px] place-content-stretch box-border`}>
              {TREE_SETING.value.PLY[iJ].PHI.map((H,iH)=>{
                const tPa = TREE_SETING.value.PLY[iJ].PHI[iH].PAR.TYP;
                const tPe = TREE_SETING.value.PLY[iJ].PHI[iH].PER.TYP;
                const aPa = TREE_SETING.value.PLY[iJ].PHI[iH].PAR.DEG.toFixed(3);
                const aPe = TREE_SETING.value.PLY[iJ].PHI[iH].PER.DEG.toFixed(3);
                
                const cPa = tPa=="isGapEND" ? TREE_SETING.value.HUE.G_E : tPa=="isGapMID" ? TREE_SETING.value.HUE.G_M : TREE_SETING.value.HUE.PAR;                
                const cPe = tPe=="isGapEND" ? TREE_SETING.value.HUE.G_E : tPe=="isGapMID" ? TREE_SETING.value.HUE.G_M : TREE_SETING.value.HUE.PER;
                return(<>
                <div class={`bg-[${cPa}]`}>{aPa}</div>
                <div class={`bg-[${cPa}]`}>{tPa}</div>
                <div class={`bg-[${cPe}]`}>{tPe}</div>
                <div class={`bg-[${cPe}]`}>{aPe}</div>
                </>);
              })}
            </section>
          </>
        )
      })}
      <div class="h-[40px] w-full bg-black"></div>
      <section class={`${classTailWind.section}`}>C</section>
      <section class={`${classTailWind.section}`}>D</section>
      <section class={`${classTailWind.section}`}>E</section>
      <section class={`${classTailWind.section}`}>F</section>
    </article>
  );
}
