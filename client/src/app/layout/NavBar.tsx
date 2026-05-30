import { Box, AppBar, Toolbar, Typography, Container, MenuList, Button, LinearProgress } from "@mui/material";
import { Group } from "@mui/icons-material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";
import { useStore } from "../../lib/hooks/useStore";
import { Observer } from "mobx-react-lite";
export default function NavBar() {
    const { uiStore } = useStore();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{
                backgroundImage: 'linear-gradient(135deg,#182a73 0%, #218aae 69%,#20a7ac 89%)',
                position: 'relative'
            }}>
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
                            <MenuItemLink to='/counter'>Counter</MenuItemLink>
                            </MenuList>
                       
                        <Box sx={{ px: 2, py: 1, display: 'flex', alignItems: 'center' }}>
                            User menu
                        </Box>
                    </Toolbar>
                </Container>
                <Observer>
                    {() => uiStore.isLoading ? (
                        <LinearProgress
                            color="secondary"
                            sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 4 }}
                        />
                    ):null}
                </Observer>
            </AppBar>
        </Box>
    )
}