import { Box, AppBar, Toolbar, Typography, Container, Button } from "@mui/material";
import { Group } from "@mui/icons-material";

type Props = {
    openForm: () => void;
}
export default function NavBar({ openForm}:Props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundImage:'linear-gradient(135deg,#182a73 0%, #218aae 69%,#20a7ac 89%)' }}>
                <Container>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Group fontSize="large"/>
                            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Reactivities</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button color="inherit" sx={{ fontSize: '1.1rem', textTransform: 'uppercase', fontWeight:'bold' }}>Activities</Button>
                            <Button color="inherit" sx={{ fontSize: '1.1rem', textTransform: 'uppercase', fontWeight:'bold' }}>About</Button>
                            <Button color="inherit" sx={{ fontSize: '1.1rem', textTransform: 'uppercase', fontWeight:'bold' }}>Contact</Button>
                        </Box>
                        <Button onClick={openForm} size='large' variant='contained' color='warning'>Create Activity</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}