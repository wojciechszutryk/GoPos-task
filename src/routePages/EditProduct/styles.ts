import { createStyles, makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() =>
    createStyles({
        center: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '70vh',
        },
    })
)
