import { useSignal,  } from "@preact/signals";
import { BoxFlex, Svg } from "@@@templatesChangeLESS";
import { SvgFractionTreeConfig, SvgFractionTreePlot, SignalStateDiagnosticOutPut } from "@@@interfacesChangeABLE";
import { TreeFractionInit } from "@@@logic";
export default function Home() {  
  const cofigCountLayers = useSignal({
    gen:5,
    end:7,
    gap:3
  });

  const cofigCentLayers = useSignal(0);
  const cofigTypesLayer0 = useSignal({
    rhoPa:1,
    rhoPe:7,
    color:""
  });
  const cofigTypesLayer1 = useSignal({
    rhoPa:1,
    rhoPe:7,
    color:""
  });
  const cofigTypesLayer2 = useSignal({
    rhoPa:2,
    rhoPe:6,
    color:""
  });
  const cofigTypesLayer3 = useSignal({
    rhoPa:3,
    rhoPe:5,
    color:""
  });
  const cofigTypesLayer4 = useSignal({
    rhoPa:4,
    rhoPe:4,
    color:""
  });
  const cofigTypesLayer5 = useSignal({
    rhoPa:5,
    rhoPe:3,
    color:""
  });
  const cofigTypesLayer6 = useSignal({
    rhoPa:6,
    rhoPe:2,
    color:""
  });
  const cofigTypesLayer7 = useSignal({
    rhoPa:7,
    rhoPe:1,
    color:""
  });

  const configTreeFractions = useSignal({...TreeFractionInit(cofigCountLayers.value)});
  
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
      <Svg sizePX={'90%'} class={`border-1 border-rose-700`}>      
        <SvgFractionTreePlot  configTreeFractions={configTreeFractions} />
      </Svg> 

      <SignalStateDiagnosticOutPut cofigCentLayers={cofigCentLayers} configTreeFractions={configTreeFractions} layers={cofigCountLayers} layer0={cofigTypesLayer0} layer1={cofigTypesLayer1} layer2={cofigTypesLayer2} layer3={cofigTypesLayer3} layer4={cofigTypesLayer4} layer5={cofigTypesLayer5} layer6={cofigTypesLayer6} layer7={cofigTypesLayer7}/>
      

      <div>itemX</div>
    </BoxFlex>





    
    <BoxFlex as="aside" colorPalleteBG="slate" colorPalleteFG="slate"
      themeNr={1}  sizeHead={60} sizeFoot={40} 
      class="flex-none w-60 flex-col flex-nowrap" title="Konfiguracja Generatora"
    >
      <SvgFractionTreeConfig cofigCentLayers={cofigCentLayers} configTreeFractions={configTreeFractions} layers={cofigCountLayers} layer0={cofigTypesLayer0} layer1={cofigTypesLayer1} layer2={cofigTypesLayer2} layer3={cofigTypesLayer3} layer4={cofigTypesLayer4} layer5={cofigTypesLayer5} layer6={cofigTypesLayer6} layer7={cofigTypesLayer7}/>
      
      <div>itemX</div>
    </BoxFlex>
  </div>
  );
}






















