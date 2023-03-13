import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'

export const Header = () => (
  <AppBar position='static'>
    <Container maxWidth='xl'>
      <Toolbar disableGutters>
        <SmartToyIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography
          variant='h6'
          noWrap
          component='div'
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          Top 10
        </Typography>
      </Toolbar>
    </Container>
  </AppBar>
)
