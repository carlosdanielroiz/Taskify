import { Box, Container, Logo, Text, Title } from './styles'
import { useState } from 'react';
import logo from "../../assets/images/logo.png"
import "animate.css"

export default function Main() {
  const array = new Array(20).fill(0).map((_, index) => index);

  const [hovered, setHovered] = useState(false)

  return (
    <Container>
      <Box>
        <Logo src={logo} alt='Logo INVISION' className='animate__animated animate__fadeInUp' />
        <Title className='animate__animated animate__fadeInUp' >Template básico da INVISION para ReactJS</Title>
        <Text className='animate__animated animate__fadeInUp'>&copy; INVISION™ 2023</Text>
      </Box>

      <div className='carousel'>
        {
          array.map(item => (
            <h5
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={hovered ? {animationDuration: "2000ms"} : {animationDuration: "1500ms"}}
              key={item}>TEMPLATE INVISION™</h5>
          ))
        }
      </div>
    </Container>
  )
}
