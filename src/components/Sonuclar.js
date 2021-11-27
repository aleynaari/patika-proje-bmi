import styled from 'styled-components'

const Container = styled.div`
background-color: #B4C6A6;
margin: 0 auto;
height: 250px;
width: 450px;
`;
const Baslik = styled.h3`
text-align: center;
`;
const BtnTemizle = styled.button`
display: block;
margin: 0 auto;
background-color: #FFF1AF;
color: #66806A;
font-weight: bold;
height: 30px;
border-radius: 5px;
`;

export default function Sonuclar() {
    return (
      <Container>
        <Baslik>
          Sonuçlarınız
        </Baslik>
        <br></br>
        <br></br>
        <br></br>
  
        <BtnTemizle>
          Sonuçları Temizle
        </BtnTemizle>
      </Container>
    );
}