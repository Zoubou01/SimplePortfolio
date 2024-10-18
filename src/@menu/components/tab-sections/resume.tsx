import Education from '@/@core/components/education/education'
import ProfessionalExperience from '@/@core/components/exp/professional'
import { Card, CardMedia, CardContent, Typography } from '@mui/material'

const Resume = () => {
  return (
    <>
      <ProfessionalExperience />
      <Education />
    </>
  )
}

export default Resume
