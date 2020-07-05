import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

import starWars from '../../../assets/images/starwars.png';

function Layout({ children }) {
  return (
    <Wrapper>
      <Content>
        <div className="subContent">
          <img src={starWars} alt="StarWars" />
          <h1>SHIP STOP CALCULATOR</h1>
          {children}
        </div>
      </Content>
    </Wrapper>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
