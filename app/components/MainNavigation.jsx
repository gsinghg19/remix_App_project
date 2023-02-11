import { NavLink } from '@remix-run/react';

function MainNavigation() {
  return (
    <nav id='main-navigation'>
      <ul>
        <li className='nav-item'>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/notes'>My Notes</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/projects'>My Projects Board</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
