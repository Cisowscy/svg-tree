import { computed, ReadonlySignal, Signal, signal } from "@preact/signals";
import { InitFractionTree } from "@@@logic";


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
  PLY: number; MID: number; SET: number; 
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
  GEN: 7, END: 5, GAP: 1, 
  PLY: 7, MID: 5, SET: 1, 
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
export const SETING_SVG_TREE_2 = computed(()=>{
  const X = new InitFractionTree({
    aspectsOfPlyRadiusesFactor: [
      /* point 0  */
      TREE_LAYERS.value.gen0sPA /* [ply  0]  -<PA:-1>-<PA:-1>-<PE:0>- */,
      TREE_LAYERS.value.gen0sPE /* [ply  1]  -<PE:0 >-<PA:-1>-<PE:0>- */, 
      TREE_LAYERS.value.gen1sPA /* [ply  2]  -<PA:0 >-<PA: 0>-<PE:1>- */, 
      TREE_LAYERS.value.gen1sPE /* [ply  3]  -<PE:1 >-<PA: 0>-<PE:1>- */, 
      TREE_LAYERS.value.gen2sPA /* [ply  4]  -<PA:1 >-<PA: 1>-<PE:2>- */, 
      TREE_LAYERS.value.gen2sPE /* [ply  5]  -<PE:2 >-<PA: 1>-<PE:2>- */, 
      TREE_LAYERS.value.gen3sPA /* [ply  6]  -<PA:2 >-<PA: 2>-<PE:3>- */, 
      TREE_LAYERS.value.gen3sPE /* [ply  7]  -<PE:3 >-<PA: 2>-<PE:3>- */, 
      TREE_LAYERS.value.gen4sPA /* [ply  8]  -<PA:3 >-<PA: 3>-<PE:4>- */, 
      TREE_LAYERS.value.gen4sPE /* [ply  9]  -<PE:4 >-<PA: 3>-<PE:4>- */, 
      TREE_LAYERS.value.gen5sPA /* [ply 10]  -<PA:4 >-<PA: 4>-<PE:5>- */, 
      TREE_LAYERS.value.gen5sPE /* [ply 11]  -<PE:5 >-<PA: 4>-<PE:5>- */, 
      TREE_LAYERS.value.gen6sPA /* [ply 12]  -<PA:5 >-<PA: 5>-<PE:6>- */, 
      TREE_LAYERS.value.gen6sPE /* [ply 13]  -<PE:6 >-<PA: 5>-<PE:6>- */, 
      TREE_LAYERS.value.gen7sPA /* [ply 14]  -<PA:6 >-<PA: 6>-<PE:7>- */, 
      TREE_LAYERS.value.gen7sPE /* [ply 15]  -<PE:7 >-<PA: 6>-<PE:7>- */, 
      1 /* [ply 16]  BORDER OF LAST LAYER*/
    ],
    amountOfThePlyGroupings: TREE_LAYERS.value.PLY,
    amountOfFractionsInMidGap: TREE_LAYERS.value.MID,
    amountOfFractionsInSetGap: TREE_LAYERS.value.SET,
    ableMaximumRadiusOfLastPly: SVG_HALF.value,
    huePly: {
      PE_0: TREE_LAYERS.value.gen0HUE,
      PE_1: TREE_LAYERS.value.gen1HUE,
      PE_2: TREE_LAYERS.value.gen2HUE,
      PE_3: TREE_LAYERS.value.gen3HUE,
      PE_4: TREE_LAYERS.value.gen4HUE,
      PE_5: TREE_LAYERS.value.gen5HUE,
      PE_6: TREE_LAYERS.value.gen6HUE,
      PE_7: TREE_LAYERS.value.gen7HUE
    },
    hueFra4:{
      genBitPar: TREE_LAYERS.value.huePA,
      genBitPer: TREE_LAYERS.value.huePE,
      gapMidAll: TREE_LAYERS.value.hueGE,
      gapSetAll: TREE_LAYERS.value.hueGM
    }
  });
  return X;
});
//^ --------------------------------------------------------------------------------------------------------------------------------------
  

//-----------------------------------------------------------------------------------------------------------------------------

























