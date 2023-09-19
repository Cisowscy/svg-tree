import { useSignal,  } from "@preact/signals";
import { BoxFlex, Svg } from "@@@templatesChangeLESS";
import { SvgFractionTreeConfig, SvgFractionTreePlot, SignalStateDiagnosticOutPut } from "@@@interfacesChangeABLE";
import { TreeFractionInit } from "@@@logic";
export default function Home() {  
 

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
        <SvgFractionTreePlot  />
      </Svg> 

      <SignalStateDiagnosticOutPut  />
      

      <div>itemX</div>
    </BoxFlex>





    
    <BoxFlex as="aside" colorPalleteBG="slate" colorPalleteFG="slate"
      themeNr={1}  sizeHead={60} sizeFoot={40} 
      class="flex-none w-60 flex-col flex-nowrap" title="Konfiguracja Generatora"
    >
      <SvgFractionTreeConfig  />
      
      <div>itemX</div>
    </BoxFlex>
  </div>
  );
}






















