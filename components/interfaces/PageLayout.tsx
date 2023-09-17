
import type { PageLayoutProps } from '@@@typesChangeLESS/Types.d.ts';
//import { JSX } from "preact";
export function PageLayout(props: PageLayoutProps) {
  //const classCss: JSX.CSSProperties = { };
  const classTailWind = {};
  return (
       
    <div 
      {...props}
      class={`my--overflow-hidden `} style="">
    
        
      <h1>PageLayout</h1>
    </div>
    </>
  );
}