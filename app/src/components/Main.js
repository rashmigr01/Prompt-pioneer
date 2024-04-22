import * as React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

export default function Main({ exportedString_2 }) {
  const sysString = exportedString_2;

  const [prompt, setPrompt] = React.useState('');
  const [response, setResponse] = React.useState('');
  const [response2, setResponse2] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const generateResponse = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://127.0.0.1:5000/generate-response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ systemMessage: sysString, prompt }),
      });
      const data = await res.json();
      if (data.error) {
        console.error('Error generating response:', data.error);
      } else {
        setResponse(data.response);
      }

      const res2 = await fetch('http://127.0.0.1:5000/generate-response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ systemMessage: "", prompt }),
      });
      const data2 = await res2.json();
      if (data2.error) {
        console.error('Error generating response:', data2.error);
      } else {
        setResponse2(data2.response);
      }

    } catch (error) {
      console.error('Error generating response:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
          <Stack spacing={2} useFlexGap alignSelf="center" justifySelf="center">
            <Typography component="h2" variant="h4" color="text.primary">
              Get a Personalized Response!
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              alignSelf="center"
              spacing={1}
              useFlexGap
              sx={{ pt: 2, width: { xs: '100%' } }}
            >
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                aria-label="Enter your email address"
                placeholder="Your prompt"
                inputProps={{
                  autoComplete: 'off',
                  ariaLabel: 'Enter your email address',
                }}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                sx={{ minWidth: { xs: '81%' } }}
              />
              <Button variant="contained" color="primary" onClick={generateResponse}>
                {loading ? <CircularProgress size={24} color="primary"/> : 'Personalize Response'}
              </Button>
            </Stack>
            <Stack>
                <Typography variant="body2" marginBottom="1em">
                  This is the response ChatGPT gives after applying the modifications selected.
                </Typography>
              <TextField
                id="outlined-basic"
                label="Better Response"
                variant="outlined"
                disabled
                multiline
                rows={5}
                value={response}
              />
            </Stack>
            <Stack>
                <Typography variant="body2" marginBottom="1em">
                  This is the response ChatGPT gives without any prompt modifications:
                </Typography>
                <TextField
                  id="outlined-basic"
                  label="Original Response"
                  variant="outlined"
                  disabled
                  multiline
                  rows={5}
                  value={response2}
                  sx = {{ minWidth:"100%" }}
                />
            </Stack>
        </Stack>
    </Container>
  );
}