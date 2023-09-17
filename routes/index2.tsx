//import { useSignal } from "@preact/signals";

//import Counter2 from "@@@templatesChangeABLE/Counter2.tsx";
import { BoxFlex } from "@@@templatesChangeLESS/BoxFlex.tsx";

export default function Home() {
  const classTailWind = {
    root:`flex-1 flex flex-row flex-nowrap`
  };
  return (
  <div class={`${classTailWind.root}`}>
    
  <BoxFlex as="main" colorPalleteBG="emerald" colorPalleteFG="orange"
    themeNr={0} sizeHead={50} sizeFoot={30} 
    class="flex-1 flex-col flex-nowrap"/>
  
  <BoxFlex as="aside" colorPalleteBG="rose" colorPalleteFG="blue"
    themeNr={1}  sizeHead={60} sizeFoot={40} 
    class="flex-none w-60 flex-col flex-nowrap"/>
  </div>
  );
}
