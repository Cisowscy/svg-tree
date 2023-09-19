// Document https://fresh.deno.dev/docs/concepts/islands

import type { SignalStateDiagnosticOutPutProps } from "@@@types";

import {
  TREE_LAYER0,
  TREE_LAYER1,
  TREE_LAYER2,
  TREE_LAYER3,
  TREE_LAYER4,
  TREE_LAYER5,
  TREE_LAYER6,
  TREE_LAYER7,
  TREE_LAYERS,
  TREE_RHO,
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
          {TREE_LAYERS.value.GEN}
        </p>
        <p class={`bg-blue-500/50 rounded-b-md  text-center`}>
          {TREE_LAYERS.value.END}
        </p>
        <p class={`bg-blue-500/50 rounded-b-md  text-center`}>
          {TREE_LAYERS.value.GAP}
        </p>
      </section>
      <section
        class={`mb-4 grid grid-cols-4 gap-[5px] place-content-stretch box-border`}
      >
        <div class={`bg-black/90 text-white rounded-md`}>powłoka</div>
        <div class={`bg-black/90 text-white rounded-md`}>promień</div>
        <div class={`bg-black/90 text-white rounded-md`}>-</div>
        <div class={`bg-black/90 text-white rounded-md`}>-</div>

        {TREE_RHO.value.map((X, I) => {
          return (
            <>
              <div class={`bg-[${X.HUE}]/50 rounded-md`}>{`φ-${I}-PA`}</div>
              <div class={`bg-[${X.HUE}]/50 rounded-md`}>
                {X.rPA.toFixed(3)}
              </div>
              <div class={`bg-[${X.HUE}]/50 rounded-md`}>-</div>
              <div class={`bg-[${X.HUE}]/50 rounded-md`}>-</div>
              <div class={`bg-[${X.HUE}]/90 rounded-md`}>{`φ-${I}-PE`}</div>
              <div class={`bg-[${X.HUE}]/90 rounded-md`}>
                {X.rPE.toFixed(3)}
              </div>
              <div class={`bg-[${X.HUE}]/90 rounded-md`}>-</div>
              <div class={`bg-[${X.HUE}]/90 rounded-md`}>-</div>
            </>
          );
        })}
      </section>
      <section class={`${classTailWind.section}`}>C</section>
      <section class={`${classTailWind.section}`}>D</section>
      <section class={`${classTailWind.section}`}>E</section>
      <section class={`${classTailWind.section}`}>F</section>
    </article>
  );
}
