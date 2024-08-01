import React,{useEffect} from 'react'
import { Container } from 'reactstrap'
import AOS from "aos";
import 'aos/dist/aos.css';


function Index({heading="Heading",title="Title",src="Image",alt="alt"}) {
    useEffect(() => {
      AOS.init();
    }, [])
    return (
        <div className="heroWrp">
        <Container>
            <div className="heroMain">
                <div className="heroLeft" data-aos="fade-right" data-aos-duration="1500">
                    <h1>{heading}</h1>
                    <p>{title}</p>
                </div>
                <div className="heroRight" data-aos="fade-left" data-aos-duration="1500">
                    <div className="heroImg">
                        <img src={src} alt={alt} />
                    </div>
                </div>
            </div>
        </Container>
    </div>
    )
  }

// function index({heading="Heading",title="Title",src="Image",alt="alt"}) {
//     return (
//         <div className="heroWrp">
//             <Container>
//                 <div className="heroMain">
//                     <div className="heroLeft" data-aos="fade-right" data-aos-duration="1500">
//                         <h1>{heading}</h1>
//                         <p>{title}</p>
//                     </div>
//                     <div className="heroRight" data-aos="fade-left" data-aos-duration="1500">
//                         <div className="heroImg">
//                             <img src={src} alt={alt} />
//                         </div>
//                     </div>
//                 </div>
//             </Container>
//         </div>
//     )
// }

export default Index