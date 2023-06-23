import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Launch } from '@mui/icons-material';
import styled from '@emotion/styled';
import Highlight from 'react-highlight.js';
import { List, ListItem } from '@mui/material';

import 'highlight.js/styles/dracula.css';

const AboutContainer = styled(Container)`
  padding: 2rem 0;
`;

const PlayButton = styled(Button)`
  margin-top: 2rem;
`;

const yamlCode = `name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Execute remote commands
        uses: appleboy/ssh-action@master
        with:
          host: \${{ secrets.REMOTE_HOST }}
          username: \${{ secrets.REMOTE_USER }}
          key: \${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            cd /var/www/axelrod.co.il
            git pull
            cd react-app
            yarn install
            yarn run build`;

const GithubActionPage: React.FC = () => {
    return (
        <AboutContainer maxWidth="lg">
          <Typography variant="h2" gutterBottom>
            GitHub Actions: They're as Simple as They Should Be
          </Typography>
          
          <Typography variant="h6" gutterBottom>
          Simple is fun.
  </Typography>
    


          <Typography variant="body1" paragraph>
            I love GitHub Actions because they're simple. Simple is fun. What's complicated doesn't work. They allow us to automate workflows right within our GitHub repository. In this post, I'm explaining how to set up a GitHub Action to automate deploying our application whenever new code gets pushed to the main branch. In this blog itself I use them, link to the code at the bottom of the page.
          </Typography>
          
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img 
                    src="/images/github-action-setup.png" 
                    alt="GitHub Action setup in GitHub interface"
                    style={{ width: "90%", maxWidth: '600px', height: 'auto' }}
                />
            </div>
    
            <Typography variant="h6" gutterBottom>
            secret 🤫
  </Typography>

          <Typography variant="body1" paragraph>
            For our Action to execute commands on our remote server, it needs to authenticate itself, and this is achieved using SSH keys. Here's a nice YAML example of a GitHub Action workflow configuration, where the SSH private key is stored as a secret 🤫
          </Typography>

                
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img 
                    src="/images/github-secret.png" 
                    alt="GitHub secret setings"
                    style={{ width: "90%", maxWidth: '500px', height: 'auto' }}
                />
            </div>
          
          <Highlight language="yaml">
            {yamlCode}
          </Highlight>
    
          <Typography variant="h6" gutterBottom>
          Its all about automation!
  </Typography>
    
          <Typography variant="body1" paragraph>
            Once the action is set up (if everything is done right 🤞), you'll see it triggered and executed every time new code is pushed to your repository. In my case, it's a simple git pull and yarn build.
          </Typography>
          
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img 
                    src="/images/github-action-working.png" 
                    alt="GitHub Actions working"
                    style={{ width: "90%", maxWidth: '500px', height: 'auto' }}
                />
            </div>
    
          <Typography variant="body1" paragraph>
            With this automated process, deployments become more reliable and less prone to human error. It saves time, energy, and nerves. I'm all for automation. Automate the world! 🌍 Now we can focus more on the application development and less on the technical logistics of deploying since 2011.
          </Typography>

          <Typography variant="h6" gutterBottom>
    Fun facts:
  </Typography>

  <ol>
    <li>GitHub actually creates a mini-server instance for you to make the ssh connection and do the operations! In my case, it to deploy.</li>
    <li>It's free, and in private repos you have up to 2000 working minutes of an instance per month.</li>
  </ol>

  <Typography variant="h6" gutterBottom>
  In essence
  </Typography>
    
          <Typography variant="body1" paragraph>
           all you need to do is these three steps:
            </Typography>

            <ul>
  <li>Add a .github\workflows\main.yaml file to your repo.</li>
  <li>Add secrets in the Github interface.</li>
  <li>As part of the secrets, establish SSH for your server and provide it to Github as a secret with the key (in my case, SSH_PRIVATE_KEY).</li>
</ul>


    
          <Typography variant="body1" paragraph>
            This streamlined process not only makes your life easier but also offers you the freedom to expand your knowledge and improve your skills as an engineer. So, while you've saved time with automated deployments, why not learn something new or maybe even strum your guitar? 🎸 
          </Typography>



          <Typography variant="h6" gutterBottom>
          And now that I'm done writing this post...
  </Typography>
    
          <Typography variant="body1" paragraph>
  And now.. I'll do a simple:
  <Highlight language="shell">
    {"git add . \ngit commit -m \"adding blog post about github actions\" \ngit push origin main"}
  </Highlight>
  </Typography>
  <Typography variant="h6" paragraph style={{ color: 'rgb(66 34 255)', fontWeight: 'bold', marginTop: '2rem' }}>
  After this, the action will spring into action and the magic will happen! Isn't it amazing how much you can automate with just a bit of configuration? 
</Typography>




    
<Box display="flex" justifyContent="center" mt={4}>
            <a href="https://github.com/JoeAxelrod/node-react-AI/blob/main/.github/workflows/main.yaml" target="_blank" rel="noopener noreferrer">
              <PlayButton variant="contained" color="primary" startIcon={<Launch />} size="large">
                Check out the code on GitHub!
              </PlayButton>
            </a>
          </Box>

        </AboutContainer>
    );
    
    
};

export default GithubActionPage;
