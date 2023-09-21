import { useSignal,  } from "@preact/signals";
import { BoxFlex, Svg } from "@@@templatesChangeLESS";
import { SvgFractionTreeConfig, SvgFractionTreePlot, SignalStateDiagnosticOutPut } from "@@@interfacesChangeABLE";
export default function Home() {  
 

  const classTailWind = {
    root:`flex-1 flex w-full h-full flex-row flex-nowrap`
  };

  
  return (
  <div class={`${classTailWind.root}`}>
  
    <BoxFlex colorPalleteBG="slate" colorPalleteFG="slate"
      themeNr={1}  sizeHead={60} sizeFoot={40} overFlowX="auto" overFlowY="scroll"
      class="flex-none w-60 flex-col flex-nowrap" title="Konfiguracja Generatora"
    >
      <SvgFractionTreeConfig  />
      
      <div>itemX</div>
    </BoxFlex>



    
    <BoxFlex  colorPalleteBG="slate" colorPalleteFG="slate"
      themeNr={0} sizeHead={50} sizeFoot={30} overFlowX="scroll" overFlowY="scroll"
      class="flex-1 flex flex-col flex-nowrap " title="Generator SVG Sekwencji Drzewiastej"
    > 
      <div class="flex-1 box-border w-full h-full px-[30px] mb-[5px]">
        <div style="overflow: scroll"  class="box-border flex-1  w-full h-full border-[6px] border-slate-700/10" >
          <Svg sizePX={'2000px'} class={``}>      
            <SvgFractionTreePlot  />
          </Svg>
        </div>  
      </div>
      
       

      <SignalStateDiagnosticOutPut  />
      

      <div>itemX</div>
    </BoxFlex>


  </div>
  );
}






















