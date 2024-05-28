import React from 'react'
import { ReactComponent as EditIcon } from '../../../../assets/icons/gallery-edit.svg';
import { ReactComponent as GridIcon } from '../../../../assets/icons/grid.svg';
import { ReactComponent as SearchIcon } from '../../../../assets/icons/search.svg';
import { ReactComponent as AddIcon } from '../../../../assets/icons/add.svg';
import { ReactComponent as CalendarIcon } from '../../../../assets/icons/calendar.svg';

import { Add, Banner, Container, Content, Header, MenuTop, Search } from './style'
import avatar1 from "../../../../assets/images/2.png"
import avatar2 from "../../../../assets/images/1.png"
import avatar3 from "../../../../assets/images/3.png"
import avatar4 from "../../../../assets/images/4.png"
import avatar5 from "../../../../assets/images/5.png"
import avatar6 from "../../../../assets/images/6.png"
import Table from './Table';

function Task() {

  const date = new Date()
  const today = `${date.getUTCFullYear()}-${String(date.getUTCMonth()).padStart(2, "0")}-${String(date.getUTCDate()).padStart(2, "0")}`

  return (
    <Container>
      <Banner>
        <EditIcon className='edit' />
        <img src="https://createroo.vercel.app/static/media/banner.10082ef7c2f56ab76e9f.png" alt="" />
      </Banner>
      
      <Content>
        <Header>
          <div>
            <h1>Tarefas 1</h1>
            <div className="peoples">
              <img src={avatar1} alt="" />
              <img src={avatar2} alt="" />
              <img src={avatar3} alt="" />
              <img src={avatar4} alt="" />
              <img src={avatar5} alt="" />
              <img src={avatar6} alt="" />

              <span>+6 pessoas</span>
            </div>
          </div>
          <div>
            <button className='request'>
              Convidar
            </button>

            <button>
              Editar
            </button>
          </div>

        </Header>

        <MenuTop>
          <div className="line">
            <span className="tasks">
              <GridIcon />
              Tarefas
            </span>

            <div className="date">
              
              <label htmlFor="date">
                <CalendarIcon />
                Data
              </label>
              <input type="date" defaultValue={today} name="date" id="date" onChange={(e) => console.log(e.target.value)} />
            </div>

            <span className="qnt">
              Nenhuma tarefa
            </span>
          </div>
          <div className="line l2">
            <div className="division" />

            <Add>
              <AddIcon />
              Adicionar tarefa
            </Add>

            <Search>
              <SearchIcon />
              <input type="text" placeholder='Procurar...' />
            </Search>
          </div>
        </MenuTop>

        <Table />
      </Content>
    </Container>
  )
}

export default Task