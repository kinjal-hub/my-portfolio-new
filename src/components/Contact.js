import {  Typography, Button, Stack, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { email, gitHubLink } from '../data';

const Contact = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Let's Connect
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
        <Button
          variant="contained"
          size="large"
          startIcon={<EmailIcon />}
          component={Link} 
          to={`mailto:${email}`}
          sx={{ textTransform: 'none', borderRadius: 2 }}
        >
          Email Me
        </Button>
        <Button
          variant="outlined"
          size="large"
          startIcon={<GitHubIcon />}
          component={Link} 
          to={gitHubLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textTransform: 'none', borderRadius: 2 }}
        >
          GitHub Profile
        </Button>

      </Stack>
    </Container>
  );
};

export default Contact;
