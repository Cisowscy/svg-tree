import type { FieldSetCol3Props } from "@@@types";

export function FieldSetCol3(props: FieldSetCol3Props) {
  const classTailWind = (() => {
    const colorBG = props.colorPalleteBG ?? "slate";
    const colorFG = props.colorPalleteFG ?? "slate";

    return { 
      fieldset:`my-2 p-2 rounded-md border-[4px] border-${colorBG}-600/75  hover:border-${colorBG}-800/75`,
      fieldset_grid: `  grid grid-cols-3 gap-[2px] place-content-stretch box-border`,      
      fieldset_legend:` px-2 py-1 rounded-lg bg-${colorBG}-600/75 text-${colorBG}-800 hover:bg-${colorBG}-800/75 hover:text-${colorBG}-500`
        +` font-mono text-xl subpixel-antialiased  text-left font-bold`,
    };
  })();
  return (
    <fieldset 
    {...props}
    class={`${props.class} ${classTailWind.fieldset}`}
  >
    <legend class={`${classTailWind.fieldset_legend}`}>(φ) {props.title}</legend>
      <form class={` ${classTailWind.fieldset_grid}`}>
        {props.children}
      </form>
    </fieldset>
  );
}