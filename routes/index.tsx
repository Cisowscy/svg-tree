import { useSignal } from "@preact/signals";
import { BoxFlex } from "@@@templatesChangeLESS";
import { SvgFractionTreeConfigRho, SvgFractionTreeConfigPhi } from "@@@interfacesChangeLESS";

import { SvgFractionTreeConfig } from "@@@interfacesChangeABLE";

export default function Home() {  
  const cofigCountLayers = useSignal({
    gen:5,
    end:7,
    gap:3
  });
  const cofigTypesLayer1 = useSignal({
    rhoPa:4,
    rhoPe:3,
    color:"#579bdf"
  });
  const count2 = useSignal(2);
  const count3 = useSignal([1,5]);
  const count4 = useSignal({gen:5,gap:4});
  const classTailWind = {
    root:`flex-1 flex flex-row flex-nowrap`
  };
  return (
  <div class={`${classTailWind.root}`}>
    
    <BoxFlex as="main" colorPalleteBG="slate" colorPalleteFG="slate"
      themeNr={0} sizeHead={50} sizeFoot={30} 
      class="flex-1 flex-col flex-nowrap" title="Generator SVG Sekwencji Drzewiastej"
    >
      
      <SvgFractionTreeConfig layers={cofigCountLayers} layer1={cofigTypesLayer1}/>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
    </BoxFlex>
    
    <BoxFlex as="aside" colorPalleteBG="slate" colorPalleteFG="slate"
      themeNr={1}  sizeHead={60} sizeFoot={40} 
      class="flex-none w-60 flex-col flex-nowrap" title="Konfiguracja Generatora"
    >
      <SvgFractionTreeConfigPhi title={`pokolenia`}/>
      <SvgFractionTreeConfigRho title={`pokolenie X`}/>
      
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
      <div>item1</div>
    </BoxFlex>
  </div>
  );
}






















