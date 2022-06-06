import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Paper from "@mui/material/Paper"

function App() {
  return (
    <div>
    <Box sx={{ marginBottom: 2, flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className = "App-header">
          <Avatar sx={{margin:"10px"}}variant="square" src={process.env.PUBLIC_URL + '/static/kings.svg'} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "left" }}>
            Visual Analytics for Time-series (VATS)
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>

    <Container maxWidth="lg">
    <Typography sx= {{marginTop:1, marginBottom:1}} variant="h4">
            Project
    </Typography>
    
      <Typography  sx= {{margin: 1}}variant="body1">
          The COVID-19 pandemic has been one of the biggest public health challenges we have faced in the last
          century.Uncertainty together with associated levels of risk has seen the development of one-of-a-kind initiatives,
          labelled as “rapid response”, calling the research community to action.
          This project's aim is to co-create novel visual analytics (data
          mining + data visualization) tools to support data-intensive applications with focus on epidemic epidemiology modelling and human
          multi-omic data analytics.The COVID-19 pandemic has been one of the biggest public health challenges we have faced in the last
          century.
      </Typography>
      <Typography sx= {{margin: 1}} variant="body1">   
          The project will build on existing work developed as part of the <a
          href="https://sites.google.com/view/rampvis/">RAMPVIS</a> project
          a collaboration between the Informatics Department, King's College London, and the Scottish COVID-19
          Response Consortium (SCRC). Building on results from RAMPVIS we aim to develop a tool, provisionally called Visual Analytics for Time
          Series (VATS), to support real-time analysis of multiple time series data, including but not limited to: time series
          comparison, clustering, uncertainty quantification, and sensitivity analysis. VATS will be an open-source online tool backed up by
          an open-source software system that allows users, modelling scientists in the first instance, to manage their own data storage as well as
          contribute to VATS development and improvement through code, data, case studies.
        </Typography>
        </Container>
        


        <Container maxWidth="lg">
        <Box sx={{ marginTop: 1, marginBottom: 1 }}>
          <Typography variant="h4">
            People
          </Typography>
        </Box> 
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <Box sx={{ marginLeft: "10px" }}>
                  <Avatar sx={{ height: 100, width: 100 }} src={process.env.PUBLIC_URL + '/static/rita.jpg'} />

                </Box>
                <CardActionArea>

                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      <b>Rita Borgo</b> is a Senior Lecturer in Data Visualization at the Informatics Department at King’s
                      College London (KCL),
                      Head of the Human Centred Computing research group, and Deputy Director of the Centre for Urban
                      Science and Progress (CUSP) - London.
                      Her research focus is on Information Visualization and Visual Analytics with a particular focus on
                      the role of Human Factors in Visualization.

                    </Typography>
                  </CardContent>
                </CardActionArea>

              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <Box sx={{ marginLeft: "10px" }}>
                  <Avatar sx={{ height: 100, width: 100 }} src={process.env.PUBLIC_URL + '/static/jordana.jpg'} />

                </Box>
                <CardActionArea>

                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      
                      <b>Jordana Bell</b> is a Reader in Epigenomics in the Department of Twin Research and Genetic Epidemiology.
                      She is currently coordinator of the international JPI HDHL ERA DIMENSION consortium,
                      through which large-scale multi-omic time-series datasets are being generated across multiple
                      cohorts, both in fasting and postprandial state.
                      JB is also using AI applications to reduce the high-dimensionality of human multi-omic biological
                      datasets in cardio-metabolic health research.
                    </Typography>
                  </CardContent>
                </CardActionArea>

              </Card>
            </Grid>    <Grid item xs={12} sm={6} md={4}>
              <Card>
                <Box sx={{ marginLeft: "10px" }}>
                  <Avatar sx={{ height: 100, width: 100 }} src={process.env.PUBLIC_URL + '/static/alfie.jpg'} />

                </Box>
                <CardActionArea>

                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      <b>Alfie Abdul-Rahman</b> is a Lecturer in Computer Science at the Informatics Department at King’s College
                      London (KCL). Before joining King’s College London, she was a Research Associate at the University of Oxford
                      e-Research Centre.
                      She worked as a Research Engineer in HP Labs Bristol on document engineering, and then as a Software
                      Developer in London,
                      working on multi-format publishing.
                    </Typography>
                  </CardContent>
                </CardActionArea>

              </Card>
            </Grid>    <Grid item xs={12} sm={6} md={4}>
              <Card>
                <Box sx={{ marginLeft: "10px" }}>
                  <Avatar sx={{ height: 100, width: 100 }} src={process.env.PUBLIC_URL + '/static/tuna.jpg'} />

                </Box>
                <CardActionArea>

                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      <b>Tuna Gonen</b> is a Research Software Engineer working on developing the online Visual Analytics tool
                      for analysing the time series data. He graduated from University of Oxford with MEng.
                      His previous work was developing VASAP (VisualAnalytics for Search, Analysis, and
                      Prediction with Epidemiological Time-series Data) as a part of RAMPVIS.
                    </Typography>
                  </CardContent>
                </CardActionArea>

              </Card>
            </Grid>
          </Grid>
        </Container>
      

    </div>
  );
}

export default App;
