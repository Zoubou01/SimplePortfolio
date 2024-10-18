'use client'

import React from 'react'

import { TabContext, TabList, TabPanel } from '@mui/lab'

import { Typography, Tab, Card, CardContent } from '@mui/material'

import { useDispatch, useSelector } from 'react-redux'

import PhoneDotsMenu from './phone-dots'
import { setDotsState } from '@/store/dotsSlice'

const References = () => {
  const dispatch = useDispatch()
  const active = useSelector((state: any) => state.dots.dotsState)

  // @ts-ignore
  const handleChange = (newValue: string) => {
    dispatch(setDotsState(newValue))
  }

  return (
    <>
      <Typography
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'space-between'}
        variant='h5'
        className='mbe-2'
      >
        References
        <div className='not-for-screen'>
          <PhoneDotsMenu />
        </div>
      </Typography>
      <TabContext value={active}>
        <div className='flex'>
          <div className='not-for-phone'>
            <TabList
              orientation='vertical'
              aria-label='vertical tabs example'
              TabIndicatorProps={{ style: { backgroundColor: '#9e2e2e' } }}
            >
              <Tab className='custom-tab' onClick={() => handleChange('3')} value='3' label='Loggia' />
              <Tab className='custom-tab' onClick={() => handleChange('2')} value='2' label='Webhotelier' />
              <Tab className='custom-tab' onClick={() => handleChange('1')} value='1' label='8essentially' />
            </TabList>
          </div>
          <TabPanel value='1'>
            <Card sx={{ backgroundColor: 'transparent' }}>
              <CardContent sx={{ paddingTop: 0 }}>
                <Typography variant='h5'>Maria Frantzeskaki</Typography>
                <Typography variant='h5'>Ceo & Founder 8essentially</Typography>
                <Typography variant='body1'>
                  To Whom It May Concern, I highly recommend Giannis Zouboulakis, who worked as a Fullstack Developer at
                  8essentially under my supervision from September 2022 to December 2022. During this time, Giannis
                  consistently demonstrated exceptional technical skills, leadership qualities, and a strong commitment
                  to delivering high-quality work. As a Fullstack Developer, Giannis was responsible for overseeing the
                  design, development, and optimization of complex web applications. As a team leader, he led a team of
                  developers in implementing responsive, user-friendly interfaces using cutting-edge technologies such
                  as HTML5, CSS3, JavaScript (ES6+), React, and various other frontend frameworks. Giannis showed
                  excellent problem-solving abilities, often finding innovative solutions to complex challenges. His
                  attention to detail and focus on performance optimization greatly improved the user experience of our
                  applications. Beyond his technical proficiency, Giannis was a natural leader, effectively mentoring
                  junior developers and fostering a collaborative team environment. One of Giannis&apos;s key
                  achievements was developing our personal website. This project not only enhanced our product offering
                  but also helped us meet critical deadlines and exceed client expectations. Giannis is a dedicated
                  professional who is always eager to learn and adapt to new technologies. He works well under pressure
                  and consistently meet deadlines, making him an asset to any development team. I have no doubt that
                  Giannis will continue to excel in his career and would be a great addition to any organization.
                </Typography>
                <Typography marginTop={5} variant='body1'>
                  Sincerely, Maria Frantzeskaki.
                </Typography>
              </CardContent>
            </Card>
          </TabPanel>
          <TabPanel value='2'>
            <Card sx={{ backgroundColor: 'transparent' }}>
              <CardContent sx={{ paddingTop: 0 }}>
                <Typography variant='h5'>Eftihis Vavourakis</Typography>
                <Typography variant='h5'>Senior Fullstack Developer at Webhotelier</Typography>
                <Typography variant='body1'>
                  I am pleased to provide this reference for Giannis Zouboulakis, who works with me as a Frontend
                  Developer at Webhotelier from February 2024 untill now. During this period, I have the opportunity to
                  closely observe Giannis&apos;s skills, dedication, and contributions to our team. Giannis has an
                  exceptional talent for translating complex requirements into seamless and user-friendly interfaces. He
                  is proficient in key frontend technologies, including HTML, CSS, JavaScript, and frameworks such as
                  React or Angular, which he utilized effectively to enhance our web applications our property managment
                  system. Throughout his tenure, Giannis consistently demonstrates a strong work ethic and a commitment
                  to delivering high-quality work. One of the standout projects he contributes is our complex property
                  managment system. His work not only improved the overall user experience but also contributed
                  significantly to our project&apos;s success. What impresses me most about Giannis is his ability to
                  collaborate with both technical and non-technical team members. He is always open to feedback and
                  eager to assist colleagues, fostering a collaborative and positive working environment. Giannis also
                  proactively sought opportunities to improve our processes, suggesting valuable enhancements that
                  streamlined our workflow. In addition to his technical skills, Giannis possesses excellent
                  communication abilities. He effectively articulates complex concepts to stakeholders and ensures that
                  everyone is aligned on project goals. I am confident that Giannis will excel in any role he pursues.
                  He is a talented developer and a dependable team player who would be an asset to any organization.
                </Typography>
                <Typography marginTop={5} variant='body1'>
                  Sincerely, Eftihis Vavourakis.
                </Typography>
              </CardContent>
            </Card>
          </TabPanel>
          <TabPanel value='3'>
            <Card sx={{ backgroundColor: 'transparent' }}>
              <CardContent sx={{ paddingTop: 0 }}>
                <Typography variant='h5'>Vasilis Iliakis</Typography>
                <Typography variant='h5'>Ceo & Founder of Loggia Studios</Typography>
                <Typography variant='body1'>
                  To Whom It May Concern, I am writing to recommend Giannis Zouboulakis, who worked as a Full Stack
                  Developer at Loggia Studios from January 2023 to January 2024. During this time, I had the privilege
                  of supervising him and witnessing his exceptional skills and contributions to our team. As a Full
                  Stack Developer, Giannis demonstrated a comprehensive understanding of both frontend and backend
                  technologies, allowing him to deliver complete, high-quality solutions. He was proficient in a variety
                  of programming languages and frameworks, including JavaScript, PHP, Node.js, React, Next which he
                  leveraged effectively to develop robust applications. One of Giannis&apos;s key strengths is his
                  ability to tackle complex problems and deliver innovative solutions. A notable example of this was
                  when he led the development of iStorm&apos;s ecommerce website, which resulted in improving
                  performance and increasing user engagement. This project not only showcased his technical acumen but
                  also his ability to manage timelines and work collaboratively with cross-functional teams. Giannis was
                  always willing to lend a helping hand to colleagues, providing support and guidance whenever needed.
                  He was an active participant in code reviews, consistently offering constructive feedback that
                  contributed to the overall quality of our codebase. His collaborative nature helped foster a positive
                  and productive work environment. Moreover, Giannis was dedicated to continuous learning and
                  improvement. He frequently sought out new challenges and was proactive in staying current with
                  industry trends, ensuring that our team utilized the best practices and technologies available. I have
                  no hesitation in recommending Giannis for any future endeavors. He is a talented and committed
                  developer who will undoubtedly be an asset to any organization.
                </Typography>
                <Typography marginTop={5} variant='body1'>
                  Sincerely, Vasilis Iliakis.
                </Typography>
              </CardContent>
            </Card>
          </TabPanel>
        </div>
      </TabContext>
    </>
  )
}

export default References
