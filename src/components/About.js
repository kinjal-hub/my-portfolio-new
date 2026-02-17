import { Box, Typography, Link , Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { gitHubLink, infotext } from '../data'; 

const About = () => {
  
  const splitIndex = infotext.indexOf('On the backend');
  const firstParagraph = infotext.slice(0, splitIndex).trim();
  const secondParagraph = infotext.slice(splitIndex).trim();

  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', py: { xs: 4, md: 8 }, px: 2 }}>
        <Typography 
          variant="h6" 
          color="#75B06F" 
          component="p"
          sx={{ mt: 4, textAlign: 'justify', fontSize: { xs: '1rem', md: '1.1rem' } }}
        >
          {firstParagraph}
        </Typography>

        <Typography 
          variant="h6" 
          color="#75B06F" 
          component="p"
          sx={{ mt: 4, textAlign: 'justify', fontSize: { xs: '1rem', md: '1.1rem' } }}
        >
          {secondParagraph}
        </Typography>

        <Typography 
          variant="h6" 
          color="#75B06F" 
          sx={{ mt: 4, textAlign: 'justify' }}
        >
          <Link 
            component={RouterLink} 
            to={gitHubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            sx={{ ml: 1 }}
          >
            GitHubLink
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
