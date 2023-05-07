import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { StyledHeader, ExtendedTitle as Title, Info, InfoText, Navigation } from './StyledHeader';


const Header = ({ itemCount, displayedItemCount }) => {
  return (
    <StyledHeader >
      <Link to="/">
        <Title >Comic book universe</Title>
      </Link>
      <Navigation>
        <NavLink to="/history" activeClassName="active">History</NavLink>
        <NavLink to="/animated-list" activeClassName="active">Admin</NavLink>
      </Navigation>
      <Info>
        {itemCount !== undefined && displayedItemCount !== undefined && (
          <>
            <InfoText >Items in cart: {itemCount}</InfoText>
            <InfoText >Displayed items: {displayedItemCount}</InfoText>
          </>
        )}
      </Info>
    </StyledHeader>
  );
};

export default Header;
