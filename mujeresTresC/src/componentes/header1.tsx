import './css/head1.css';
import React, { useEffect } from 'react';
const Header1 = () =>{
    useEffect(() => {
        const slides = document.querySelectorAll(".carousel-slide");
        let currentIndex = 0;
    
        function showNextSlide() {
          slides[currentIndex].classList.remove("active");
          currentIndex = (currentIndex + 1) % slides.length;
          slides[currentIndex].classList.add("active");
        }
    
        const interval = setInterval(showNextSlide, 3000);
    
        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
      }, []);
    
    return(
        <header className="header">
            <div className="carousel">
                <div className="carousel-slide active" style={{ backgroundImage: "url('')" }}></div>
                <div className="carousel-slide" style={{ backgroundImage: "url('https://st.depositphotos.com/1037987/2504/i/950/depositphotos_25046947-stock-photo-group-of-women-meeting-in.jpg')" }}></div>
                <div className="carousel-slide" style={{ backgroundImage: "url('https://as1.ftcdn.net/v2/jpg/04/49/17/54/1000_F_449175479_RHshjCaaFboqjmOGfdBnIt6ABUbIKAto.jpg')" }}></div>
                <div className="carousel-slide" style={{ backgroundImage: "url('https://thumbs.dreamstime.com/b/mujeres-en-grupo-de-apoyo-ayudando-una-mujer-deprimida-que-ha-sido-v%C3%ADctima-abuso-emocional-y-violencia-animar-querida-j%C3%B3venes-205049738.jpg')" }}></div>
                <div className="carousel-slide" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1043062548/es/foto/grupo-de-amigos-de-las-mujeres-agarrados-de-la-mano-juntos-contra-la-puesta-de-sol.jpg?s=612x612&w=0&k=20&c=WVTfA4p8HpUh4MKYWh64WAPblDOemIwje5XOHa1dMp0=')" }}></div>
                <div className="carousel-slide" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1474891943/es/foto/tres-mujeres-mayores-divirti%C3%A9ndose-riendo-a-carcajadas-afuera-amigas-felices-hablando-juntas.jpg?s=1024x1024&w=is&k=20&c=IQyer2wpVm50OMNCgpXipRFDMLyQ8lYy_S0kLb-IttU=')" }}></div>
            </div>
        </header>

    )
}
export default Header1;