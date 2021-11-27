import styled from 'styled-components';

const Container = styled.div`
background-color: #B4C6A6;
height: 450px;
width: 450px;
margin: 0 auto;
`;
const Isim = styled.p `
font-weight: bold;
`;
const Kilo = styled.p `
font-weight: bold;
`;
const Boy = styled.p `
font-weight: bold;
`;
const BtnHesapla = styled.button`
display: block;
margin: 0 auto;
height: 30px;
width: 80px;
background-color: #FFF1AF;
color: #66806A;
font-weight: bold;
border-radius: 5px;
`;

export default function Form() {
    return (
      <Container>
        <ul style={{listStyle: "none",}}>
          <li>
            <Isim className="bilgiS">
              İsminizi Giriniz:
            </Isim>
            <input type="text" className="dataS">
            </input>
          </li>
          <li>
            <Kilo className="bilgiS">
              Kilonuzu Giriniz:
            </Kilo>
            <input type="text" className="dataS">
            </input>
          </li>
          <li>
            <Boy className="bilgiS">
              Boynuzu Giriniz:
            </Boy>
            <input type="text" className="dataS">
            </input>
          </li>
        </ul>

        <BtnHesapla>
           Hesapla
        </BtnHesapla>
        <hr></hr>



      </Container>
      
      
      
    );
}