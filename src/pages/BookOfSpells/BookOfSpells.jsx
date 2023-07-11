import Footer from "../../components/Footer/Footer"
import { HeaderComp } from "../../components/Header/HeaderComp"
import { Spells } from "../../components/Spells/Spells.jsx"
import { PageContainer } from "./style"
import book from "../../Assests/img/hp/sub/Camada 2.png"
import book2 from "../../Assests/img/hp/sub/Camada 6.png"
 

export const BookOfSpells = () =>{

    return (       
       <PageContainer>
        <HeaderComp /> 
        {/* <div className="ligths-container main">
            <div className="ligths-container " >
            <Lights/> 
            </div>
            <div className="ligths-container " >
            <Lights/> 
            </div>
            <div className="ligths-container " >
            <Lights/> 
            </div>
            <div className="ligths-container " >
            <Lights/> 
            </div>
            <div className="ligths-container " >
            <Lights/> 
            </div>


        </div> */}
             
        <Spells/>       
        <div className="container-books">
            <img src={book} alt="" />
            <img src={book2} alt="" />
        </div>
        <Footer />
       </PageContainer>
     
    )
}