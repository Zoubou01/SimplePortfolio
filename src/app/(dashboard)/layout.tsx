// MUI Imports
import Button from '@mui/material/Button'

// Type Imports
import type { ChildrenType } from '@core/types'

// Layout Imports]
import VerticalLayout from '@layouts/VerticalLayout'

// Component Imports
import Providers from '@components/Providers'
import ScrollToTop from '@core/components/scroll-to-top'

// Util Imports
import PhoneMenu from '@/@menu/components/phone-menu/menu'

const Layout = async ({ children }: ChildrenType) => {
  // Vars
  const direction = 'ltr'

  return (
    <Providers direction={direction}>
      <VerticalLayout>{children}</VerticalLayout>
      <PhoneMenu />

      <ScrollToTop className='mui-fixed'>
        <Button
          variant='contained'
          sx={{ backgroundColor: '#242323' }}
          className='is-10 bs-10 rounded-full p-0 min-is-0 flex items-center justify-center scroll-to-top'
        >
          <i className='tabler-arrow-up' style={{ color: '#9e2e2e' }} />
        </Button>
      </ScrollToTop>
    </Providers>
  )
}

export default Layout
