import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { PATH_ROUTES } from 'constant';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Box as='nav' p='10px 10px'>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<HamburgerIcon />}
          variant='outline'
        />
        <MenuList>
          <MenuItem as={Link} to={PATH_ROUTES.main}>
            홈
          </MenuItem>
          <MenuItem as={Link} to={PATH_ROUTES.shopBasket}>
            장바구니
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default NavBar;
