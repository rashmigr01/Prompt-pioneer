import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import Tooltip from '@mui/material/Tooltip';

export default function Modifiers({ onExport }) {

  const [value1, setValue1] = React.useState('');

  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };

  const [prompt2, setPrompt2] = React.useState('');

  const [prompt3, setPrompt3] = React.useState('');

  const [checked4, setChecked4] = React.useState(false);

  const handleChange4 = (event) => {
    setChecked4(event.target.checked);
  };

  const [prompt5, setPrompt5] = React.useState('');

  const [prompt6, setPrompt6] = React.useState('');

  const [checked7, setChecked7] = React.useState(false);

  const handleChange7 = (event) => {
    setChecked7(event.target.checked);
  };

  const [checked8, setChecked8] = React.useState(false);

  const handleChange8 = (event) => {
    setChecked8(event.target.checked);
  };

  const [checked9, setChecked9] = React.useState(false);

  const handleChange9 = (event) => {
    setChecked9(event.target.checked);
  };

  React.useEffect(() => {
    const generateExportString = () => {
      let exportString = '';

      if (checked9) {
        exportString += 'Very Important: You must provide examples with your answer! ';
      }

      if(prompt2!=='') {
        exportString += 'Use the following contextual information to answer questions: ' + prompt2 + '. ';
      }

      if(prompt3!=='') {
        exportString += 'Answer questions and provide citations from the reference material of ' + prompt3 + '. ';
      }

      if(checked4) {
        exportString += 'Think in a step-by-step manner to answer any question. ';
      }

      if(prompt5!=='') {
        exportString += 'Answer consistently in about ' + prompt5 + ' words. ';
      }

      if(prompt6!=='') {
        exportString += 'Incorporate the following keywords in your answer. Keywords: "' + prompt6 + '". ';
      }

      if (checked7) {
        exportString += 'Recheck your answer for all cases before responding. Solve the question yourself before answering yes/no questions. ';
      }

      if (checked8) {
        exportString += 'Explain all pre-requisite concepts to understand the answer before providing the answer. ';
      }

      if (value1!=='0' && value1!=='') {
        exportString += 'My expertise level to understand the answers, on a scale of 5, is ' + value1 + '. ';
      }

      return exportString;
    };

    const handleExport = () => {
      const exportedString = generateExportString();
      onExport(exportedString);
    };
  
    handleExport();
  
  }, [value1, prompt2, prompt3, checked4, prompt5, prompt6, checked7, checked8, checked9, onExport]);

  return (
    <Container
      id="modifiers"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Select Your Modifiers
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Select the below modifiers to improve your prompt based on your current requirements. You can read about them in detail in the 'Descriptions' section.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flexGrow: 1,
            p: 1,
          }}
        >
          <CardContent>
            <FormControl>
              <Box display="flex" flexDirection="row" justifyContent="space-between">
              <Typography variant="h6" color="text.primary">
                Knowledge level?
              </Typography>
              <Tooltip title="Select how good you are at the topic your prompt is about">
                  < LiveHelpIcon />
              </Tooltip>
              </Box>
              {/* <Tooltip title="Delete" arrow alignSelf="center">
                <DeleteIcon />
              </Tooltip> */}
              <Typography variant="body1" color="text.secondary">
                Select how much you know about the topic.
              </Typography>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value1}
                onChange={handleChange1}
                display="flex"
              >
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <FormControlLabel value="1" control={<Radio />} label="Very low" />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel value="2" control={<Radio />} label="Low" />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel value="3" control={<Radio />} label="Moderate" />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel value="4" control={<Radio />} label="Good" />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel value="5" control={<Radio />} label="Very Good" />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel value="0" control={<Radio />} label="Not Applicable" />
                  </Grid>
                </Grid>
              </RadioGroup>
            </FormControl>
          </CardContent>
        </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flexGrow: 1,
              p: 1,
            }}
          >
            <CardContent>
              <Box display="flex" flexDirection="row" justifyContent="space-between">
              <Typography variant="h6" color="text.primary">
                Who Are You?
              </Typography>
              <Tooltip title="Example: I am a class 6 Computer Science teacher">
                  < LiveHelpIcon />
              </Tooltip>
              </Box>
              <Typography variant="body1" color="text.secondary">
                Write about yourself to add some context to your questions.
              </Typography>
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                placeholder="Your context"
                value={prompt2}
                onChange={(e) => setPrompt2(e.target.value)}
                multiline
                rows={5}
                sx={{ width: { xs: '100%' }, marginTop: { xs: '0.5em' } }}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flexGrow: 1,
              p: 1,
            }}
          >
            <CardContent>
              <Box display="flex" flexDirection="row" justifyContent="space-between">
              <Typography variant="h6" color="text.primary">
                Reference Source?
              </Typography>
              <Tooltip title="Example: Wikipedia/NCERT Textbooks">
                  < LiveHelpIcon />
              </Tooltip>
              </Box>
              <Typography variant="body1" color="text.secondary">
                Request citations from a reference source in the answer.
              </Typography>
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                placeholder="Reference"
                value={prompt3}
                onChange={(e) => setPrompt3(e.target.value)}
                multiline
                rows={5}
                sx={{ width: { xs: '100%' }, marginTop: { xs: '0.5em' } }}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flexGrow: 1,
              p: 1,
            }}
          >
            <CardContent>
              <Box display="flex" flexDirection="row" justifyContent="space-between">
              <Typography variant="h6" color="text.primary">
                Think Slowly?
              </Typography>
              <Tooltip title="Select this if you have complex prompts and require ChatGPT to operate methodically">
                  < LiveHelpIcon />
              </Tooltip>
              </Box>
              <Typography variant="body1" color="text.secondary">
                Ask ChatGPT to think slowly in a step-by-step manner to improve the answer.
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                pr: 2,
              }}
            >
              <Switch
              checked={checked4}
              onChange={handleChange4}
              inputProps={{ 'aria-label': 'controlled' }}
              />
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flexGrow: 1,
              p: 1,
            }}
          >
            <CardContent>
              <Box display="flex" flexDirection="row" justifyContent="space-between">
              <Typography variant="h6" color="text.primary">
                Word count?
              </Typography>
              <Tooltip title="Example: 150">
                  < LiveHelpIcon />
              </Tooltip>
              </Box>
              <Typography variant="body1" color="text.secondary">
                Provide a word count for the answer to ensure consistent answers.
              </Typography>
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                placeholder="Word Count"
                type="number"
                inputProps={{
                  min: 1,
                  max: 1000,
                }}
                value={prompt5}
                onChange={(e) => setPrompt5(e.target.value)}
                sx={{ width: { xs: '100%' }, marginTop: { xs: '0.5em' } }}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flexGrow: 1,
              p: 1,
            }}
          >
            <CardContent>
              <Box display="flex" flexDirection="row" justifyContent="space-between">
              <Typography variant="h6" color="text.primary">
                Keywords?
              </Typography>
              <Tooltip title="Example: agriculture, irrigation, India">
                  < LiveHelpIcon />
              </Tooltip>
              </Box>
              <Typography variant="body1" color="text.secondary">
                Provide keywords which should be included in the answer to ensure accuracy.
              </Typography>
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                placeholder="Key Words"
                value={prompt6}
                onChange={(e) => setPrompt6(e.target.value)}
                sx={{ width: { xs: '100%' }, marginTop: { xs: '0.5em' } }}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flexGrow: 1,
              p: 1,
            }}
          >
            <CardContent>
            <Box display="flex" flexDirection="row" justifyContent="space-between">
              <Typography variant="h6" color="text.primary">
                Rechecking?
              </Typography>
              <Tooltip title="Select this if you have math/physics problems and want ChatGPT to recheck its answer">
                  < LiveHelpIcon />
              </Tooltip>
              </Box>
              <Typography variant="body1" color="text.secondary">
                Ask ChatGPT to recheck its own solutions to ensure correctness of math-based answers.
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                pr: 2,
              }}
            >
              <Switch
              checked={checked7}
              onChange={handleChange7}
              inputProps={{ 'aria-label': 'controlled' }}
              />
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flexGrow: 1,
              p: 1,
            }}
          >
            <CardContent>
            <Box display="flex" flexDirection="row" justifyContent="space-between">
              <Typography variant="h6" color="text.primary">
                Prerequisite Knowledge?
              </Typography>
              <Tooltip title="Select this if you want ChatGPT to give you information about all topics which depend on the current topic">
                  < LiveHelpIcon />
              </Tooltip>
              </Box>
              <Typography variant="body1" color="text.secondary">
                Ask ChatGPT to explain all prerequisite knowledge in the answer.
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                pr: 2,
              }}
            >
              <Switch
              checked={checked8}
              onChange={handleChange8}
              inputProps={{ 'aria-label': 'controlled' }}
              />
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flexGrow: 1,
              p: 1,
            }}
          >
            <CardContent>
            <Box display="flex" flexDirection="row" justifyContent="space-between">
              <Typography variant="h6" color="text.primary">
                Examples?
              </Typography>
              <Tooltip title="Select this if you want ChatGPT to provide examples with its answers">
                  < LiveHelpIcon />
              </Tooltip>
              </Box>
              <Typography variant="body1" color="text.secondary">
                Ask ChatGPT to provide examples for  a better explanation of the answer.
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                pr: 2,
              }}
            >
              <Switch
              checked={checked9}
              onChange={handleChange9}
              inputProps={{ 'aria-label': 'controlled' }}
              />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}