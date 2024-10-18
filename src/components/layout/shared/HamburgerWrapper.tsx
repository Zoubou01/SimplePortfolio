'use client'

import { useState } from 'react'

import { Button, Dialog, DialogContent, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'

//Hamburger Menu
import Hamburger from 'hamburger-react'

const HamburgerWrapper = () => {
  const [isOpen, setOpen] = useState(false)

  const handleHamburger = () => {
    setOpen(!isOpen)
  }

  return (
    <>
      <Dialog fullScreen onClose={handleHamburger} aria-labelledby='full-screen-dialog-title' open={isOpen}>
        <DialogContent sx={{ background: '#000000c4 !important', height: '100vh' }}>
          <List sx={{ textAlign: 'center', height: '100%' }} component='nav' aria-label='main mailbox'>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText onClick={handleHamburger} sx={{ textAlign: 'center' }}>
                  <Button className='no-hover'>
                    <Typography color='white' className='text-auto' fontSize={'7rem'}>
                      EXPERIENCE
                    </Typography>
                  </Button>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText onClick={handleHamburger} sx={{ textAlign: 'center' }}>
                  <Typography color='white' className='text-auto' fontSize={'7rem'}>
                    PROJECTS
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText onClick={handleHamburger} sx={{ textAlign: 'center' }}>
                  <Typography color='white' className='text-auto' fontSize={'7rem'}>
                    CONTACT
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText onClick={handleHamburger} sx={{ textAlign: 'center' }}>
                  <Typography color='white' className='text-auto' fontSize={'7rem'}>
                    ABOUT
                  </Typography>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </DialogContent>
      </Dialog>
      <div style={{ padding: '1rem' }}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </>
  )
}

export default HamburgerWrapper
