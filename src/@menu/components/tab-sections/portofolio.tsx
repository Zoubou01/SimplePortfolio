import { Card, Typography, Grid } from '@mui/material'

const PortfolioSection = () => {
  return (
    <>
      <Grid container display={'flex'} flexDirection={'row'} justifyContent={'center'}>
        <Grid sx={{ padding: '1rem' }} item xs={10} sm={8} xl={5} lg={5} md={5}>
          <Card sx={{ backgroundColor: 'transparent' }}>
            <img
              style={{
                width: '100%',
                height: '250px',
                borderRadius: '20px'
              }}
              src='/images/portfolio/pms.png'
            />
            <Typography variant='h5'>Property Managment System</Typography>
            <Typography variant='subtitle1' className='mbe-2'>
              React, Next, PHP, Angular, Javascript, Typescript
            </Typography>
          </Card>
        </Grid>
        <Grid sx={{ padding: '1rem' }} item xs={10} sm={8} xl={5} lg={5} md={5}>
          <Card sx={{ backgroundColor: 'transparent' }}>
            <img
              style={{
                width: '100%',
                height: '250px',
                borderRadius: '20px'
              }}
              src='/images/portfolio/istorm.png'
            />
            <Typography variant='h5' marginBottom={0}>
              iStorm ecommerce website
            </Typography>
            <Typography variant='subtitle1' className='mbe-2'>
              Magento, Javascript, PHP
            </Typography>
          </Card>
        </Grid>
        <Grid sx={{ padding: '1rem' }} item xs={10} sm={8} xl={5} lg={5} md={5}>
          <Card sx={{ backgroundColor: 'transparent' }}>
            <img
              style={{
                width: '100%',
                height: '250px',
                borderRadius: '20px'
              }}
              src='/images/portfolio/isquare.png'
            />
            <Typography variant='h5'>iSquare ecommerce website</Typography>
            <Typography variant='subtitle1' className='mbe-2'>
              Magento, Javascript, PHP
            </Typography>
          </Card>
        </Grid>
        <Grid sx={{ padding: '1rem' }} item xs={10} sm={8} xl={5} lg={5} md={5}>
          <Card sx={{ backgroundColor: 'transparent' }}>
            <img
              style={{
                width: '100%',
                height: '250px',
                borderRadius: '20px'
              }}
              src='/images/portfolio/movies1.jpg'
            />
            <Typography variant='h5'>Movie App</Typography>
            <Typography variant='subtitle1' className='mbe-2'>
              React, Typescript
            </Typography>
          </Card>
        </Grid>
        <Grid sx={{ padding: '1rem' }} item xs={10} sm={8} xl={5} lg={5} md={5}>
          <Card sx={{ backgroundColor: 'transparent' }}>
            <img
              style={{
                width: '100%',
                height: '250px',
                borderRadius: '20px'
              }}
              src='/images/portfolio/acs.png'
            />
            <Typography variant='h5'>ACS</Typography>
            <Typography variant='subtitle1' className='mbe-2'>
              Java, Android Studio
            </Typography>
          </Card>
        </Grid>
        <Grid sx={{ padding: '1rem' }} item xs={10} sm={8} xl={5} lg={5} md={5}>
          <Card sx={{ backgroundColor: 'transparent' }}>
            <img
              style={{
                width: '100%',
                height: '250px',
                borderRadius: '20px'
              }}
              src='/images/portfolio/card.jpg'
            />
            <Typography variant='h5'>Memmory Card Game</Typography>
            <Typography variant='subtitle1' className='mbe-2'>
              React, Javascript
            </Typography>
          </Card>
        </Grid>
        <Grid sx={{ padding: '1rem' }} item xs={10} sm={8} xl={5} lg={5} md={5}>
          <Card sx={{ backgroundColor: 'transparent' }}>
            <img
              style={{
                width: '100%',
                height: '250px',
                borderRadius: '20px'
              }}
              src='/images/avatars/land.jpg'
            />
            <Typography variant='h5'>Simple Blog Website</Typography>
            <Typography variant='subtitle1' className='mbe-2'>
              React, Javascript
            </Typography>
          </Card>
        </Grid>
        <Grid sx={{ padding: '1rem' }} item xs={10} sm={8} xl={5} lg={5} md={5}>
          <Card sx={{ backgroundColor: 'transparent' }}>
            <img
              style={{
                width: '100%',
                height: '250px',
                borderRadius: '20px'
              }}
              src='/images/avatars/land.jpg'
            />
            <Typography variant='h5'>Simple Register Form</Typography>
            <Typography variant='subtitle1' className='mbe-2'>
              React, Javascript
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default PortfolioSection
