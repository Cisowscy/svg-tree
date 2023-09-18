// Document https://fresh.deno.dev/docs/concepts/islands

import type { Signal } from "@preact/signals";
import type { SvgFractionTreeConfigProps, ConfigLayerType } from "@@@types";
import { SvgFractionTreeConfigRho, SvgFractionTreeConfigPhi } from "@@@interfacesChangeLESS";



export default function SvgFractionTreeConfig(props: SvgFractionTreeConfigProps) {
  return (
    <div>
    <SvgFractionTreeConfigPhi title={`pokolenia`}/>
    <SvgFractionTreeConfigRho title={`pokolenie X`}/>
      <button onClick={() => props.count.value -= 1}>-1</button>
      <p>{props.count}</p>
      <button onClick={() => props.count.value += 1}>+1</button>
    </div>
  );
}