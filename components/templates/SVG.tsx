import type { SvgProps } from "@@@types";
import  { 
  SVG_SIZE,
  SVG_TRIM,
  SVG_CENT,
  SVG_HALF,
  SVG_VIEW,
  SVG_DESK,
  SVG_ZERO,
  SVG_AREA
} from "@@@globalCONTROLS";


const SVG_RECT = {
  VIEW: { strokeWidth: "10", stroke: "white", fill: "grey" },
  PLOT: { strokeWidth: "5", stroke: "black", fill: "white" },
};

export function Svg(props: SvgProps) {
  const SVG_GRID_VISABLE = true;
  const SVG_GRID = () => {
    return (
      <g id="background_grid" opacity="0.95">
        <defs>
          <pattern id="gridS" viewBox="0,0,10,10" width="5%" height="5%">
            <rect
              x="0"
              y="0"
              width="10"
              height="10"
              fill="none"
              stroke="black"
              strokeWidth="0.01"
            />
          </pattern>
          <pattern id="gridM" viewBox="0,0,10,10" width="20%" height="20%">
            <rect
              x="0"
              y="0"
              width="10"
              height="10"
              fill="none"
              stroke="black"
              strokeWidth="0.01"
            />
          </pattern>
        </defs>
        {SVG_GRID_VISABLE && <rect {...SVG_AREA.value} fill="url(#gridS)" />}
        {SVG_GRID_VISABLE && <rect {...SVG_AREA.value} fill="url(#gridM)" />}
      </g>
    );
  };
  const SVG_AXIS_VISABLE = true;
  const SVG_AXIS = () => {
    const a = SVG_CENT.value * 2 / 6;
    const b = SVG_CENT.value * 12 / 6;
    const c = SVG_HALF.value - 2 * b;
    const a_plus_b = a + b;
    const b2_minus_1 = 2 * b - a;
    const d = 3 / 2 * b;
    const e = SVG_HALF.value - b;
    const f = SVG_HALF.value - b - 2 * a;
    const label = [
      {
        t: "X",
        x: `${SVG_HALF.value - (SVG_CENT.value * 44 / 6)}`,
        y: `-${(SVG_CENT.value * 16 / 6)}`,
      },
      {
        t: "Y",
        x: `${(SVG_CENT.value * 16 / 6)}`,
        y: `-${SVG_HALF.value - (SVG_CENT.value * 44 / 6)}`,
      },
      {
        t: "φ",
        x: `-${SVG_HALF.value - (SVG_CENT.value * 16 / 6)}`,
        y: `-${SVG_HALF.value / 2 - (SVG_CENT.value * 16 / 6)}`,
      },
    ];
    return (
      <>
        {SVG_AXIS_VISABLE && (
          <g {...SVG_ZERO.value} opacity="25%" strokeWidth={`${(SVG_CENT.value * 1 / 6)}`}>
            <path
              stroke="DARKGREEN"
              fill="GREEN"
              id="AXIS_X"
              d={`M 0,0` +
                ` l ${a}, ${a}` +
                ` l ${c},0` +
                ` l 0,${b}` +
                ` l ${b2_minus_1},-${a_plus_b}` +
                ` l -${b2_minus_1}, -${a_plus_b}` +
                ` l 0, ${b}` +
                ` L -${a}, -${a}` +
                ` Z`}
            />
            <text
              fill="DARKGREEN"
              x={label[0].x}
              y={label[0].y}
              fontSize={`${(SVG_CENT.value * 5)}`}
              fontWeight="800"
              alignment-baseline="middle"
              text-anchor="middle"
              transform="scale(1,-1) translate(0 0)"
            >
              {label[0].t}
            </text>
            <path
              stroke="DARKBLUE"
              fill="BLUE"
              id="AXIS_Y"
              d={`M 0,0` +
                ` l ${a}, ${a}` +
                ` l 0,${c}` +
                ` l ${b},0` +
                ` l -${a_plus_b}, ${b2_minus_1}` +
                ` l -${a_plus_b}, -${b2_minus_1}` +
                ` l ${b}, 0` +
                ` L -${a}, -${a}` +
                ` Z`}
            />
            <text
              fill="DARKBLUE"
              x={label[1].x}
              y={label[1].y}
              fontSize={`${(SVG_CENT.value * 5)}`}
              fontWeight="800"
              alignment-baseline="middle"
              text-anchor="middle"
              transform="scale(1,-1) translate(0 0)"
            >
              {label[1].t}
            </text>
            <path
              stroke="DARKRED "
              fill="RED "
              id="AXIS_Y"
              d={`M -${d},${e}` +
                ` A -${e},-${e} 0 0,1 -${e},${d}` +
                ` l -${b},0` +
                ` l ${a_plus_b},-${b2_minus_1}` +
                ` l ${a_plus_b},${b2_minus_1}` +
                ` l -${b},0` +
                ` A -${f},-${f} 0 0,0 -${d}, ${f}` +
                ` Z`}
            />
            <text
              fill="DARKRED"
              y={label[2].y}
              x={label[2].x}
              fontSize={`${(SVG_CENT.value * 35 / 6)}`}
              fontWeight="800"
              alignment-baseline="middle"
              text-anchor="middle"
              transform="scale(1,-1) translate(0 0)"
            >
              {label[2].t}
            </text>
          </g>
        )}
      </>
    );
  };
  

  return (
    <svg
      {...props}
      {...SVG_DESK.value}
      class={`${props.class ?? ""}`}
      width={props.sizePX}
      height={props.sizePX}
    >
      {SVG_GRID()}
      {SVG_AXIS()}
      <g {...SVG_ZERO.value}>
        {props.children}
      </g>
    </svg>
  );
}
