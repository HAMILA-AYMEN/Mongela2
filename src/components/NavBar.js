import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import  { useCart } from 'react-use-cart'
import {useNavigate} from 'react-router-dom'

function NavBar({ setsearchTitle }) {

  const {items}=useCart()

  const navigate = useNavigate();

    const navigateTopanier = () => {
      // 👇️ navigate to /Panier
      navigate('/Panier');
    };

    

  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);

  
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Møngela</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="Store">Montres Homme</Nav.Link>
          <Nav.Link href="Store">Montres Femme</Nav.Link>
          
        </Nav>
        
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Rechercher..."
            className="me-2"
            aria-label="Search"
            onChange={(e) => setsearchTitle(e.target.value)}
          />
          <Button variant="outline-secondary">Rechercher</Button>
        </Form>
        <IconButton aria-label="cart">
  <StyledBadge onClick={navigateTopanier} badgeContent={items.length} color="secondary">
    <ShoppingCartIcon />
  </StyledBadge>
</IconButton>
      </Container>
    </Navbar>
  );
}
export default NavBar;
