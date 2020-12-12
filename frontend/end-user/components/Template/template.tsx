import React from 'react'
import {
    Grid,
    Box,
    MenuList,
    MenuItem,
    Button,
    Link,
} from '@material-ui/core'

import Header from '../Header/header'


export default function Template(props) {

    return (
        <Box
            m={2}
        >
            <Grid
                container
                direction={"column"}
                // justify={"flex-start"}
                // align-items={"center"}
                spacing={2}
            >
                <Grid
                    item
                >
                    <Header />
                </Grid>
                <Grid
                    item
                >
                    {props.children}
                </Grid>
                <Grid
                    item
                >
                    Footer
                </Grid>
            </Grid>
        </Box>
    )
}
