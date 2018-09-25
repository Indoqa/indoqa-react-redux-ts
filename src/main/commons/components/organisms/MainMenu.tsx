import React from 'react'
import {NavLink} from 'react-router-dom'
import Box from '../../../idqFela/components/Box'

import Menu from '../molecules/Menu'
import MenuLink from '../molecules/MenuLink'

const MainMenu = () => (
  <Menu>
    <Box pb={2} />
    <MenuLink>
      <NavLink to="/time">Time</NavLink>
    </MenuLink>
    <MenuLink>
      <NavLink to="/todos">Todos</NavLink>
    </MenuLink>
    <MenuLink>
      <NavLink to="/words">Words</NavLink>
    </MenuLink>
    <MenuLink>
      <NavLink to="/forms">Forms</NavLink>
    </MenuLink>
  </Menu>
)

export default MainMenu
