import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab'
import { Card, CardHeader, CardContent, Typography } from '@mui/material'

const ProfessionalExperience = () => {
  return (
    <Card sx={{ background: '#101010' }}>
      <CardHeader titleTypographyProps={{ color: '#e1def5e6' }} title='Professional Experience' />
      <CardContent>
        <Timeline position='left'>
          <TimelineItem position='left'>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: '#9e2e2e !important' }} />
              <TimelineConnector sx={{ width: '1px', backgroundColor: '#9e2e2e' }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography className='font-medium' sx={{ color: '#e1def5e6' }}>
                Fullstack Developer @ WebHotelier
              </Typography>
              <Typography variant='caption' sx={{ color: '#9e2e2e' }}>
                Jan 2024 - Present
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem position='right'>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: '#9e2e2e' }} />
              <TimelineConnector sx={{ width: '1px', backgroundColor: '#9e2e2e' }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography className='font-medium' sx={{ color: '#e1def5e6' }}>
                FullStack Developer @ Loggia Studios
              </Typography>
              <Typography variant='caption' sx={{ color: '#9e2e2e' }}>
                Jan 2023 - Jan 2024
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: '#9e2e2e' }} />
              <TimelineConnector sx={{ width: '1px', backgroundColor: '#9e2e2e' }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography className='font-medium' sx={{ color: '#e1def5e6' }}>
                Software Engineer @ Conveos
              </Typography>
              <Typography variant='caption' sx={{ color: '#9e2e2e' }}>
                January 2022 - December 2022
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem position='right'>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: '#9e2e2e' }} />
              <TimelineConnector sx={{ width: '1px', backgroundColor: '#9e2e2e' }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography className='font-medium' sx={{ color: '#e1def5e6' }}>
                Software Engineer @ 8essentially
              </Typography>
              <Typography variant='caption' sx={{ color: '#9e2e2e' }}>
                September 2021 - December 2021
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: '#9e2e2e' }} />
              <TimelineConnector sx={{ width: '1px', backgroundColor: '#9e2e2e' }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography className='font-medium' sx={{ color: '#e1def5e6' }}>
                Web Developer @ Universe Core
              </Typography>
              <Typography variant='caption' sx={{ color: '#9e2e2e' }}>
                January 2020 - September 2021
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem position='right'>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: '#9e2e2e' }} />
              <TimelineConnector sx={{ width: '1px', backgroundColor: '#9e2e2e' }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography className='font-medium' sx={{ color: '#e1def5e6' }}>
                Web Developer @ Styloola
              </Typography>
              <Typography variant='caption' sx={{ color: '#9e2e2e' }}>
                July 2017 - August 2019
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </CardContent>
    </Card>
  )
}

export default ProfessionalExperience
