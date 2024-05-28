import React from 'react'
import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg';
import { ReactComponent as AddIcon } from '../../../assets/icons/add.svg';
import { ReactComponent as HashtagIcon } from '../../../assets/icons/hashtag.svg';
import { Add, Container, List, Search, Tasks } from './style'
import Task from './Task';

function Home() {
  return (
    <Container>
      <List>
        <Search>
          <SearchIcon />
          <input type="text" placeholder='Procurar...' />
        </Search>

        <Add>
          Criar lista
          <AddIcon />
        </Add>
        <h5>LISTAS</h5>

        <Tasks className='active'>
          <HashtagIcon />
          <span>Tarefas 1</span>
        </Tasks>

        <Tasks>
          <HashtagIcon />
          <span>Tarefas 2</span>
        </Tasks>
      </List>

      <Task />
    </Container>
  )
}

export default Home