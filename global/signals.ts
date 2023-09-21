import { computed, ReadonlySignal, Signal, signal } from "@preact/signals";
import { FunctionMakeSeting } from "@@@logic";


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
  

//-----------------------------------------------------------------------------------------------------------------------------

























