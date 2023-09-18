import type { SvgProps } from "@@@types";
export function Svg(props: SvgProps) {
  const SVG_SIZE = 6000;
  const SVG_TRIM = 1;
  const SVG_CENT = SVG_SIZE/100;
  const SVG_HALF = SVG_SIZE/2;
  const SVG_VIEW = [-(SVG_TRIM*SVG_CENT), 2*(SVG_TRIM*SVG_CENT)+SVG_SIZE];
  const SVG_DESK = {viewBox: `${SVG_VIEW[0]} ${SVG_VIEW[0]} ${SVG_VIEW[1]} ${SVG_VIEW[1]}`};
  const SVG_ZERO = { id:"SVG_ROOT", transform:`translate(${SVG_HALF} ${SVG_HALF}) rotate(180) scale (-1, 1)`};
  const SVG_AREA = {x:0,y:0, width:SVG_SIZE, height:SVG_SIZE, rx:SVG_CENT*20};
  const SVG_RECT = {
            VIEW: {strokeWidth:"10", stroke:"white", fill:"grey"},
            PLOT: {strokeWidth:"5", stroke:"black", fill:"white"}
  };  
  const VISABLE_GIRD = true;
  const SVG_GRID = () => {
    return(
      <g id="background_grid" opacity="0.95">
        <defs>
          <pattern id="gridS" viewBox="0,0,10,10" width="5%"  height="5%">  <rect x="0" y="0" width="10" height="10"fill="none" stroke="black" strokeWidth="0.01"  /> </pattern>
          <pattern id="gridM" viewBox="0,0,10,10" width="20%" height="20%"> <rect x="0" y="0" width="10" height="10"fill="none" stroke="black" strokeWidth="0.01"  /> </pattern>
        </defs>
        {VISABLE_GIRD && <rect { ...SVG_AREA}  fill="url(#gridS)" />}
        {VISABLE_GIRD && <rect { ...SVG_AREA}  fill="url(#gridM)" />}
      </g>
    );
  };
  const VISABLE_AXIS = true;
  const SVG_AXIS = () => {
    const a =(SVG_CENT * 2/6);
    const b =(SVG_CENT * 12/6)
    const c = SVG_HALF - 2*b;
    const a_plus_b =a+b;
    const b2_minus_1 =2*b -a;
    const d = 3/2 * b;
    const e = SVG_HALF - b;
    const f = SVG_HALF - b - 2*a;
    const label = [
      {t:"X", x:`${SVG_HALF - (SVG_CENT * 44/6)}`,y:`-${(SVG_CENT * 16/6)}`},
      {t:"Y", x:`${(SVG_CENT * 16/6)}`, y:`-${SVG_HALF-(SVG_CENT * 44/6)}`},
      {t:"φ", x:`-${SVG_HALF -(SVG_CENT * 16/6)}`,y:`-${SVG_HALF/2 -(SVG_CENT * 16/6)}`}
    ];
    return(
      <>
        {VISABLE_AXIS && <g {...SVG_ZERO} opacity="25%"  strokeWidth={`${(SVG_CENT * 1/6)}`}>
          <path stroke="DARKGREEN" fill="GREEN"
                id="AXIS_X"
                d={`M 0,0`
                +` l ${a}, ${a}`
                +` l ${c},0`
                +` l 0,${b}`
                +` l ${b2_minus_1},-${a_plus_b}`
                +` l -${b2_minus_1}, -${a_plus_b}`
                +` l 0, ${b}`
                +` L -${a}, -${a}`
                +` Z`}
          />
          <text fill="DARKGREEN"  x={label[0].x} y={label[0].y} fontSize={`${(SVG_CENT * 5)}`} fontWeight="800" alignment-baseline="middle" text-anchor="middle" transform="scale(1,-1) translate(0 0)">{label[0].t}</text>
          <path stroke="DARKBLUE" fill="BLUE"
                id="AXIS_Y"
                d={`M 0,0`
                +` l ${a}, ${a}`
                +` l 0,${c}`
                +` l ${b},0`
                +` l -${a_plus_b}, ${b2_minus_1}`
                +` l -${a_plus_b}, -${b2_minus_1}`
                +` l ${b}, 0`
                +` L -${a}, -${a}`
                +` Z`}
          />
          <text fill="DARKBLUE"   x={label[1].x} y={label[1].y} fontSize={`${(SVG_CENT * 5)}`} fontWeight="800" alignment-baseline="middle" text-anchor="middle" transform="scale(1,-1) translate(0 0)">{label[1].t}</text>
          <path stroke="DARKRED " fill="RED "
                id="AXIS_Y"
                d={`M -${d},${e}`
                +` A -${e},-${e} 0 0,1 -${e},${d}`
                +` l -${b},0`
                +` l ${a_plus_b},-${b2_minus_1}`
                +` l ${a_plus_b},${b2_minus_1}`
                +` l -${b},0`
                +` A -${f},-${f} 0 0,0 -${d}, ${f}`
                +` Z`}
          />            
          <text fill="DARKRED"  y={label[2].y} x={label[2].x} fontSize={`${(SVG_CENT * 35/6)}`} fontWeight="800" alignment-baseline="middle" text-anchor="middle" transform="scale(1,-1) translate(0 0)">{label[2].t}</text>
        </g>}
      </>      
    );
  };

  return (
    <svg  {...props} {...SVG_DESK} class={`${props.class ?? ''}`} width={props.sizePX} height={props.sizePX}>
      {SVG_GRID()}
      {SVG_AXIS()}
      {props.children}
    </svg>
  );
}