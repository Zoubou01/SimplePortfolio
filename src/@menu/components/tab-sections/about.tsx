import { Card, CardContent, Typography } from '@mui/material'

import WhatIAmDoing from '../about-components/whatiamdoing'
import References from '../about-components/references'

const AboutSection = () => {
  return (
    <>
      <Card sx={{ backgroundColor: 'transparent' }}>
        <CardContent>
          <Typography variant='h5' className='mbe-2'>
            About Me
          </Typography>
          <Typography className='mbe-4' color='text.secondary'>
            I&apos;m a passionate Full Stack Developer with a strong focus on front-end technologies. With a solid
            foundation in both front and back-end development, I specialize in creating responsive, user-friendly web
            applications that provide a seamless experience across all devices. I have expertise in HTML, CSS,
            JavaScript, and modern frameworks like React (or Angular/Vue, depending on your preference), and I&apos;m
            equally comfortable working with back-end technologies like Node.js and databases to ensure complete
            functionality.
          </Typography>
          <Typography color='text.secondary' marginBottom={'2rem'}>
            My goal is to bring creative designs to life through clean, efficient code while keeping the user at the
            heart of every decision. I&apos;m always eager to learn new technologies and improve existing skills,
            collaborating closely with teams to deliver high-quality projects on time. Whether it&apos;s optimizing
            performance, improving accessibility, or building intuitive UI components, I&apos;m committed to creating
            solutions that make an impact.
          </Typography>
          <WhatIAmDoing />
          <References />
        </CardContent>
      </Card>
    </>
  )
}

export default AboutSection
