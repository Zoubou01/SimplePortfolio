'use client'

import { Typography, Grid, Card, CardContent } from '@mui/material'

const WhatIAmDoing = () => {
  return (
    <>
      <Typography variant='h5' className='mbe-2'>
        What i am doing
      </Typography>
      <Grid container gap={5} sx={{ display: 'flex', justifyContent: 'center' }} marginBottom={'2rem'}>
        <Grid item xs={12} xl={6} lg={6} md={6}>
          <Card sx={{ background: '#171717' }}>
            <CardContent>
              <Grid container display={'flex'} flexDirection={'column'}>
                <Grid container xs={12}>
                  <Grid item xs={2}>
                    <img width={'40px'} src='/images/icons/language-icons/webDesign.svg' />
                  </Grid>
                  <Grid item xs={9} alignContent={'end'}>
                    <Typography variant='h5' className='mbe-2'>
                      Web Design
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={9}>
                  <Typography className='ellipsis'>
                    Creating visually appealing, functional and user-friendly websites
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} xl={5} lg={5} md={5}>
          <Card sx={{ background: '#171717', display: 'flex' }}>
            <CardContent>
              <Grid container display={'flex'} flexDirection={'column'}>
                <Grid container xs={12}>
                  <Grid item xs={2}>
                    <img width={'40px'} src='/images/icons/language-icons/webDevelopment.svg' />
                  </Grid>
                  <Grid item xs={9} alignContent={'end'}>
                    <Typography variant='h5' className='mbe-2'>
                      Web Development
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={9}>
                  <Typography color='text.secondary'>Bringing creative designs to life through clean code.</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} xl={5} lg={5} md={5}>
          <Card sx={{ background: '#171717', display: 'flex' }}>
            <CardContent>
              <Grid container display={'flex'} flexDirection={'column'}>
                <Grid container xs={12}>
                  <Grid item xs={2}>
                    <img width={'40px'} src='/images/icons/language-icons/mobileRed.svg' />
                  </Grid>
                  <Grid item xs={9} alignContent={'end'}>
                    <Typography variant='h5' className='mbe-2'>
                      Mobile Apps
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={9}>
                  <Typography color='text.secondary'>Developing applications for iOS and Android.</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} xl={6} lg={6} md={6}>
          <Card sx={{ background: '#171717', display: 'flex' }}>
            <CardContent>
              <Grid container display={'flex'} flexDirection={'column'}>
                <Grid container xs={12}>
                  <Grid item xs={2}>
                    <img width={'40px'} src='/images/icons/language-icons/gaming.svg' />
                  </Grid>
                  <Grid item xs={9} alignContent={'end'}>
                    <Typography variant='h5' className='mbe-2'>
                      Gaming
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={9}>
                  <Typography color='text.secondary'>Challenges and riddle solving are my passion.</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default WhatIAmDoing
