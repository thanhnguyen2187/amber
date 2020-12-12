import React, {
    useState
} from 'react'
import {
    Grid,
    Link,
    makeStyles,
} from '@material-ui/core'

import Links from './Links/links'
import LanguageToggle from './LanguageToggle/language-toggle'

const useStyles = makeStyles({
    root: {
        background: "#FF8C00",
        width: "100%",
    }
})

export default function Header(props) {

    const styles = useStyles()
    return (
        <Grid
            container
            spacing={2}
            className={styles.root}
        >
            <Grid
                item
                xs={10}
            >
                <Links/>
            </Grid>

            <Grid
                item
                // xs={}
            >
                <LanguageToggle/>
            </Grid>
        </Grid>
    )
}
