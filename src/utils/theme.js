import { createTheme } from '@mui/material'


export const theme = createTheme({
    overrides: {
        MuiButton: {
          sizeTiny: {
            root: {
              background: 'purple',
              padding: '4px'
            }
          }
        }
      }
}) 



