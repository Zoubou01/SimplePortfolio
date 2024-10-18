import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/lab'
import { Card, CardHeader, CardContent, Typography } from '@mui/material'

const Education = () => {
  return (
    <Card sx={{ background: '#101010' }}>
      <CardHeader titleTypographyProps={{ color: '#e1def5e6' }} title='Education' />
      <CardContent>
        <Timeline position='left'>
          <TimelineItem position='left'>
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: '#9e2e2e' }} />
              <TimelineConnector sx={{ width: '1px', backgroundColor: '#9e2e2e' }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography className='font-medium' sx={{ color: '#e1def5e6' }}>
                Integrated Master Degree - Computer Science Engineering
              </Typography>
              <Typography variant='caption' sx={{ color: '#e1def5e6' }}>
                Sep 2016 - 2024
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
                Award winning for best assosiate programmer (iStorm)
              </Typography>
              <Typography variant='caption' sx={{ color: '#e1def5e6' }}>
                May 2024 - Sept 2024
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
                C2 Proficiency Degree in English
              </Typography>
              <Typography variant='caption' sx={{ color: '#e1def5e6' }}>
                2012
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </CardContent>
    </Card>
  )
}

export default Education
