import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { projectdetails } from '../data';

const ProjectsCard = () => {
  return (
    <Grid container spacing={4} sx={{ padding: 8, justifyContent: 'center' }}>
      {projectdetails.map((project, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Card
            sx={{
              maxWidth: 300, 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '24px', 
              boxShadow: 3, 
              
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={project.imgurl}
              alt={project.title}
              sx={{
                objectFit: 'cover', 
                padding: '4px', 
                boxSizing: 'border-box', 
                borderRadius: '24px', 
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h6">
                {project.title}
              </Typography>
              <Typography variant="body2" color="#75B06F">
                {project.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectsCard;
