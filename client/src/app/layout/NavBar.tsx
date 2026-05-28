import { Box, AppBar, Toolbar, Typography, Container, MenuList, Button } from "@mui/material";
import { Group } from "@mui/icons-material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";


export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundImage:'linear-gradient(135deg,#182a73 0%, #218aae 69%,#20a7ac 89%)' }}>
                <Container>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box>

                            <Button component={NavLink} to='/' sx={{ display: 'flex', gap: 2 }}>
                            <Group fontSize="large"/>
                            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Reactivities</Typography>
                                </Button>
                            
                        </Box>
                        
                            <MenuList sx={{ display: 'flex', gap: 2 }}>
                            <MenuItemLink to='/activities'>Activities</MenuItemLink>
                            <MenuItemLink to='/createActivity'>Create Activity</MenuItemLink>
                            </MenuList>
                       
                        <Box sx={{ px: 2, py: 1, display: 'flex', alignItems: 'center' }}>
                            User menu
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}