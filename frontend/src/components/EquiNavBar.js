import React, { Component } from 'react';

export default class EquiNavBar extends Component {
  render() {
    return (
      <nav
        className='navbar navbar-expand-lg navbar-light'
        style={{ backgroundColor: 'pink' }}
      >
        <div className='container-fluid'>
          {/* <a class="navbar-brand"> CRUD App using Mern stack</a>*/}
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link' aria-current='page' href='/'>
                  Equipment
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
