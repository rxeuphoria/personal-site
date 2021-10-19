import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
const Badge = styled.h3`
  font-weight: bold;
`;
const NavLinks = styled.div`
  display: flex;
  gap: 10px;
`;

const NavLinkSingle = styled.button`
  text-decoration: none;
  border: none;
  background: none;
  font-size: 1rem;
  cursor: pointer;
`;

const Navigation = ({pages, selectPage}) => {
 
  return (
    <Nav>
      <Badge>benjamin charles</Badge>
      <NavLinks>
        {pages.map((prop) => (
          <NavLinkSingle
            key={prop.index}
            onClick={() => {selectPage(prop.index)}}
          >
            {prop.navtitle}
          </NavLinkSingle>
        ))}
      </NavLinks>
    </Nav>
  );
};

export default Navigation;
