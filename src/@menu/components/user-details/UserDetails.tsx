import { Card, CardContent, Chip, Divider, Typography } from '@mui/material'

import CustomAvatar from '@/@core/components/mui/Avatar'

const UserDetails = () => {
  return (
    <Card
      sx={{
        position: 'sticky',
        top: '25px',
        background: '#101010',
        boxShadow: '0px 3px 20px 20px rgb(47 43 61 / 0.14)'
      }}
    >
      <CardContent className='flex flex-col pbs-12 gap-6'>
        <div className='flex flex-col gap-6'>
          <div className='flex items-center justify-center flex-col gap-4'>
            <div
              className='flex flex-col items-center gap-4'
              style={{ backgroundColor: '#242323', borderRadius: '20px' }}
            >
              <CustomAvatar alt='user-profile' src='/images/avatars/my-avatar.png' variant='rounded' size={120} />
            </div>
            <div className='flex flex-col items-center'>
              <Typography variant='h4' color={'#e1def5e6'}>
                Giannis Zouboulakis
              </Typography>
              <Chip label='Software Engineer' sx={{ color: '#e1def5e6' }} size='medium' variant='tonal' />
            </div>
          </div>
          <div className='flex flex-col items-start flex-wrap gap-4'>
            <div className='flex flex-row items-center gap-4'>
              <CustomAvatar variant='rounded' sx={{ backgroundColor: '#242323' }} skin='light'>
                <i className='tabler-checkbox' />
              </CustomAvatar>
              <div>
                <Typography variant='h5' color={'#e1def5e6'}>
                  3+ years
                </Typography>
                <Typography color={'#e1def5e6'}>Experience</Typography>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <CustomAvatar variant='rounded' sx={{ backgroundColor: '#242323' }} skin='light'>
                <i className='tabler-briefcase' />
              </CustomAvatar>
              <div>
                <Typography variant='h5' color={'#e1def5e6'}>
                  WebHotelier
                </Typography>
                <Typography color={'#e1def5e6'}>FrontEnd Developer</Typography>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Divider className='mlb-4' sx={{ color: '#e1def5e6' }} />
          <div className='flex flex-col gap-2'>
            <div className='flex items-center flex-wrap gap-x-1.5'>
              <a href='mailto: gianniszouboulakis@gmail.com' style={{ display: 'flex', alignItems: 'center' }}>
                <CustomAvatar variant='rounded' sx={{ backgroundColor: '#242323' }} skin='light'>
                  <i className='tabler-mail' />
                </CustomAvatar>
                <Typography className='font-medium' color='#e1def5e6' marginLeft={'0.4rem'}>
                  gianniszouboulakis@gmail.com
                </Typography>
              </a>
            </div>
            <div className='flex items-center flex-wrap gap-x-1.5'>
              <CustomAvatar variant='rounded' sx={{ backgroundColor: '#242323' }} skin='light'>
                <i className='tabler-map-pin' />
              </CustomAvatar>
              <Typography className='font-medium' color='#e1def5e6'>
                EU Citizen
              </Typography>
              <Typography color='#e1def5e6'></Typography>
            </div>
            <div className='flex items-center flex-wrap gap-x-1.5'>
              <a href='tel:+306983416878' style={{ display: 'flex', alignItems: 'center' }}>
                <CustomAvatar variant='rounded' sx={{ backgroundColor: '#242323' }} skin='light'>
                  <i className='tabler-phone' />
                </CustomAvatar>
                <Typography className='font-medium' color='#e1def5e6' marginLeft={'0.4rem'}>
                  +30 698 3416878
                </Typography>
              </a>
            </div>
            {/* <div className='flex items-center flex-wrap gap-x-1.5'>
              <Typography className='font-medium' color='#e1def5e6'>
                LinkedIn:{' '}
                <a
                  style={{ color: '#1975d6' }}
                  target='_blank'
                  href='http://www.linkedin.com/in/giannis-zoumpoulakis-a1a780201'
                >
                  Giannis Zouboulakis
                </a>
              </Typography>
              <Typography color='#e1def5e6'></Typography>
            </div>
            <div className='flex items-center flex-wrap gap-x-1.5'>
              <Typography className='font-medium' color='#e1def5e6'>
                Country: EU Citizen
              </Typography>
              <Typography color='#e1def5e6'></Typography>
            </div> */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a
                style={{ color: '#1975d6' }}
                target='_blank'
                href='http://www.linkedin.com/in/giannis-zoumpoulakis-a1a780201'
              >
                <img
                  src={'/images/icons/language-icons/linkedin.png'}
                  style={{ marginRight: '1rem', width: 35, height: 35, objectFit: 'contain' }}
                />
              </a>
              <a style={{ color: '#1975d6' }} target='_blank' href='https://github.com/Zoubou01'>
                <img
                  src={'/images/icons/language-icons/github_white.png'}
                  style={{ color: 'white', marginRight: '1rem', width: 35, height: 35, objectFit: 'contain' }}
                />
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default UserDetails
