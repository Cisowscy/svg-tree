import { useSignal } from "@preact/signals";
import { BoxFlex } from "@@@templatesChangeLESS";

import { SvgFractionTreeConfig } from "@@@interfacesChangeABLE";

export default function Home() {  
  const cofigCountLayers = useSignal({
    gen:5,
    end:7,
    gap:3
  });
  const cofigTypesLayer1 = useSignal({
    rhoPa:1,
    rhoPe:7,
    color:"#ef9f2f"
  });
  const cofigTypesLayer2 = useSignal({
    rhoPa:2,
    rhoPe:6,
    color:"#ef5fcf"
  });
  const cofigTypesLayer3 = useSignal({
    rhoPa:3,
    rhoPe:5,
    color:"#9f5fef"
  });
  const cofigTypesLayer4 = useSignal({
    rhoPa:4,
    rhoPe:4,
    color:"#1fafdf"
  });
  const cofigTypesLayer5 = useSignal({
    rhoPa:5,
    rhoPe:3,
    color:"#8fdf4f"
  });
  const cofigTypesLayer6 = useSignal({
    rhoPa:6,
    rhoPe:2,
    color:"#efdf4f"
  });
  const cofigTypesLayer7 = useSignal({
    rhoPa:7,
    rhoPe:1,
    color:"#afaf8f"
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
      <SvgFractionTreeConfig layers={cofigCountLayers} layer1={cofigTypesLayer1} layer2={cofigTypesLayer2} layer3={cofigTypesLayer3} layer4={cofigTypesLayer4} layer5={cofigTypesLayer5} layer6={cofigTypesLayer6} layer7={cofigTypesLayer7}/>
      
      
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






















