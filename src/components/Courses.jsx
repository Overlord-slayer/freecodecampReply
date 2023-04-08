import React from 'react'
import Button from '@mui/material/Button'
import '../Styles/Courses.css'
import Stack from '@mui/material/Stack'
import DevicesIcon from '@mui/icons-material/Devices'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import StorageIcon from '@mui/icons-material/Storage'
import GppGoodIcon from '@mui/icons-material/GppGood'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import WebIcon from '@mui/icons-material/Web'
import TerminalIcon from '@mui/icons-material/Terminal'
import DataUsageIcon from '@mui/icons-material/DataUsage'
import AnalyticsIcon from '@mui/icons-material/Analytics'
import SdStorageIcon from '@mui/icons-material/SdStorage'
import CalculateIcon from '@mui/icons-material/Calculate'
import ScienceIcon from '@mui/icons-material/Science'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import { Link } from '@mui/material'

const stack = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const button = {
  width: '750px',
  height: '80px',
  backgroundColor: '#3a3b4f',
  border: '3px solid white',
  borderRadious: '0px',
  color: 'white',
  '&:hover': {
    color: 'black',
    backgroundColor: 'white',
  },
}

const firstIcon = {
  height: '50px',
  width: '50px',
  position: 'absolute',
  left: '20px',
  bottom: 0,
  top: '8px',
  alignSelf: 'flex-start',
  pointerEvents: 'none',
  display: 'flex',
}

const lastIcon = {
  height: '35px',
  width: '35px',
  position: 'absolute',
  right: '10px',
  top: '17px',
  bottom: 0,
  alignSelf: 'flex-end',
  pointerEvents: 'none',
  display: 'flex',
}

export default function Courses() {
  return (
    <>

      <h1 className="tittle">Earn free verified certifications in:</h1>

      <Stack sx={stack} direction="column" spacing={2}>
        <Button
          sx={button}
          variant="outlined"
          size="large"
          href="https://www.freecodecamp.org/learn/2022/responsive-web-design/"
          startIcon={<DevicesIcon sx={firstIcon} fontSize="inherit" />}
          endIcon={<KeyboardDoubleArrowRightIcon sx={lastIcon} />}
        >
          (New) Responsive Web Design Certification
        </Button>
        <Button
          sx={button}
          variant="outlined"
          size="large"
          href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"
          startIcon={<TerminalIcon sx={firstIcon} fontSize="large" />}
          endIcon={<KeyboardDoubleArrowRightIcon sx={lastIcon} />}
        >
          JavaScript Algorithms and Data Structures Certificacion
        </Button>
        <Button
          sx={button}
          variant="outlined"
          size="large"
          href="https://www.freecodecamp.org/learn/front-end-development-libraries/"
          startIcon={<WebIcon sx={firstIcon} />}
          endIcon={<KeyboardDoubleArrowRightIcon sx={lastIcon} />}
        >
          Front End Development Libraries Certification
        </Button>
        <Button
          sx={button}
          variant="outlined"
          size="large"
          href="https://www.freecodecamp.org/learn/data-visualization/"
          startIcon={<DataUsageIcon sx={firstIcon} />}
          endIcon={<KeyboardDoubleArrowRightIcon sx={lastIcon} />}
        >
          Data Visualization Certification
        </Button>
        <Button
          sx={button}
          variant="outlined"
          size="large"
          href="https://www.freecodecamp.org/learn/relational-database/"
          startIcon={<SdStorageIcon sx={firstIcon} />}
          endIcon={<KeyboardDoubleArrowRightIcon sx={lastIcon} />}
        >
          Relational Database (Beta) Certification
        </Button>
        <Button
          sx={button}
          variant="outlined"
          size="large"
          href="https://www.freecodecamp.org/learn/back-end-development-and-apis/"
          startIcon={<StorageIcon sx={firstIcon} />}
          endIcon={<KeyboardDoubleArrowRightIcon sx={lastIcon} />}
        >
          Back End Development and APIs Certificacion
        </Button>
        <Button
          sx={button}
          variant="outlined"
          size="large"
          href="https://www.freecodecamp.org/learn/quality-assurance/"
          startIcon={<ContentPasteIcon sx={firstIcon} />}
          endIcon={<KeyboardDoubleArrowRightIcon sx={lastIcon} />}
        >
          Quality Assurance Certification
        </Button>
        <Button
          sx={button}
          variant="outlined"
          size="large"
          href="https://www.freecodecamp.org/learn/scientific-computing-with-python/"
          startIcon={<ScienceIcon sx={firstIcon} />}
          endIcon={<KeyboardDoubleArrowRightIcon sx={lastIcon} />}
        >
          Scientific Computing with Python Certification
        </Button>
        <Button
          sx={button}
          variant="outlined"
          size="large"
          href="https://www.freecodecamp.org/learn/data-analysis-with-python/"
          startIcon={<AnalyticsIcon sx={firstIcon} />}
          endIcon={<KeyboardDoubleArrowRightIcon sx={lastIcon} />}
        >
          Data Analisys with Python Certificacion
        </Button>
        <Button
          sx={button}
          variant="outlined"
          size="large"
          href="https://www.freecodecamp.org/learn/information-security/"
          startIcon={<GppGoodIcon sx={firstIcon} />}
          endIcon={<KeyboardDoubleArrowRightIcon sx={lastIcon} />}
        >
          Information Security Certificacion
        </Button>
        <Button
          sx={button}
          variant="outlined"
          size="large"
          href="https://www.freecodecamp.org/learn/machine-learning-with-python/"
          startIcon={<SmartToyIcon sx={firstIcon} />}
          endIcon={<KeyboardDoubleArrowRightIcon sx={lastIcon} />}
        >
          Machine Learning with Python Certification
        </Button>
        <Button
          sx={button}
          variant="outlined"
          size="large"
          href="https://www.freecodecamp.org/learn/college-algebra-with-python/"
          startIcon={<CalculateIcon sx={firstIcon} />}
          endIcon={<KeyboardDoubleArrowRightIcon sx={lastIcon} />}
        >
          College Algebra with Python Certification
        </Button>
      </Stack>
      <Link href="https://auth.freecodecamp.org/login?state=hKFo2SBzdW9UcGdaRlpG
        bGFlZW9UVjJCNjRFQWl2el81RjJFQaFupWxvZ2luo3RpZNkgRUIxelQzVUhXOFNYanZoSGdk
        ZHBDX19KNElqR2pXcHKjY2lk2SBhVUR2OWpWcVRmeEJSRTFsNjBOQTVBZjd5VENHRTRjeQ&c
        lient=aUDv9jVqTfxBRE1l60NA5Af7yTCGE4cy&protocol=oauth2&response_type=cod
        e&redirect_uri=https%3A%2F%2Fapi.freecodecamp.org%2Fauth%2Fauth0%2Fcallb
        ack&scope=openid%20profile%20email"
      >
        <button className="Start-freeButton" type="button">Get Started (it&apos;s free)</button>
      </Link>
    </>
  )
}
