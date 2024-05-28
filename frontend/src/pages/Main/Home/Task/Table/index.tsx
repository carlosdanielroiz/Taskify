import React from 'react'
import { Container } from './style'

import avatar1 from "../../../../../assets/images/2.png"
import avatar2 from "../../../../../assets/images/1.png"
import avatar3 from "../../../../../assets/images/3.png"
import avatar4 from "../../../../../assets/images/4.png"
import avatar5 from "../../../../../assets/images/5.png"
import avatar6 from "../../../../../assets/images/6.png"

function Table() {
  return (
    <Container>
      <tr className='header'>
        <td className='desc'>Descrição</td>
        <td>Status</td>
        <td>Categoria</td>
        <td>Pessoas</td>
        <td>Hora</td>
      </tr>
      <tr>
        <td className='desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s...</td>
        <td>
          <span className='done'>Feito</span>
        </td>
        <td>
          <span className='urgent'>Urgente</span>
        </td>
        <td>
          <img src={avatar2} alt="" />
          <img src={avatar4} alt="" />
          <img src={avatar5} alt="" />
        </td>
        <td>15:30</td>
      </tr>

      <tr>
        <td className='desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s...</td>
        <td>
          <span className='on-going'>Fazendo</span>
        </td>
        <td>
          <span className='important'>Importante</span>
        </td>
        <td>/
          <img src={avatar1} alt="" />
          <img src={avatar3} alt="" />
          <img src={avatar6} alt="" />
        </td>
        <td>16:15</td>
      </tr>

      <tr>
        <td className='desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s...</td>
        <td>
          <span>À Fazer</span>
        </td>
        <td>
          <span className='reminder'>Lembrete</span>
        </td>
        <td>
          <img src={avatar2} alt="" />
          <img src={avatar3} alt="" />
          <img src={avatar4} alt="" />
          <img src={avatar6} alt="" />
        </td>
        <td>17:30</td>
      </tr>

      
    </Container>
  )
}

export default Table