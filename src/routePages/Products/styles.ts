import { createStyles, makeStyles } from '@mui/styles'

export const useStyles = makeStyles(() =>
    createStyles({
        center: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    })
)
