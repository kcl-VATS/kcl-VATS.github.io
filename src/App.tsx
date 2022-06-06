import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Visual Analytics for Time-series (VATS)
        </p>
        <p>
          The COVID-19 pandemic has been one of the biggest public health challenges we have faced in the last
          century.
          Uncertainty together with associated levels of risk has seen the development of one-of-a-kind initiatives,
          labelled as “rapid response”, calling the research community to action.
          The team behind this proposal has independently contributed to several of these initiatives drawing on their
          expertise in epidemics epidemiology modelling and data visualization.
          This proposal aims to bring together this wealth of expertise to co-create novel visual analytics (data
          mining + data visualization)
          tools to support data-intensive applications with focus on epidemic epidemiology modelling and human
          multi-omic data analytics.The COVID-19 pandemic has been one of the biggest public health challenges we have faced in the last
          century.
          Uncertainty together with associated levels of risk has seen the development of one-of-a-kind initiatives,
          labelled as “rapid response”, calling the research community to action.
          The team behind this proposal has independently contributed to several of these initiatives drawing on their
          expertise in epidemics epidemiology modelling and data visualization.
          This proposal aims to bring together this wealth of expertise to co-create novel visual analytics (data
          mining + data visualization)
          tools to support data-intensive applications with focus on epidemic epidemiology modelling and human
          multi-omic data analytics.
        </p>
        <p>
          The project will build on existing work developed as part of the <a
            href="https://sites.google.com/view/rampvis/">RAMPVIS</a> project
          a collaboration between the Informatics Department, King’s College London, and the Scottish COVID-19
          Response Consortium (SCRC).
          Building on results from RAMPVIS we aim to develop a tool, provisionally called Visual Analytics for Time
          Series (VATS),
          to support real-time analysis of multiple time series data, including but not limited to: time series
          comparison, clustering,
          uncertainty quantification, and sensitivity analysis. VATS will be an open-source online tool backed up by
          an open-source software system
          that allows users, modelling scientists in the first instance, to manage their own data storage as well as
          contribute to VATS development
          and improvement through code, data, case studies.
          Test
        </p>
      </header>

      <body>


        <Container maxWidth="lg">
          <Typography variant="h4">
            People
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <Box sx={{ marginLeft: "10px" }}>
                  <Avatar sx={{ height: 100, width: 100 }} src={process.env.PUBLIC_URL + '/static/rita.jpg'} />

                </Box>
                <CardActionArea>

                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Rita Borgo is a Senior Lecturer in Data Visualization at the Informatics Department at King’s
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
                      Jordana Bell is a Reader in Epigenomics in the Department of Twin Research and Genetic Epidemiology.
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
                      Alfie Abdul-Rahman is a Lecturer in Computer Science at the Informatics Department at King’s College
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
                      Tuna Gonen is a Research Software Engineer working on developing the online Visual Analytics tool
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
      </body>

    </div>
  );
}

export default App;
