import React, {
    useState
} from 'react'
import {
    Grid,
    Link,
} from '@material-ui/core'

import _links from './_links'
import useLocalStorage from 'logics/use-local-storage-v2'


export default function Links() {

    const [
        currentLanguage,
        setCurrentLanguage,
    ] = useLocalStorage(
        "lang",
        "en"
    )

    return (
        <Grid
            container
            justify={"center"}
            spacing={4}
        >
            {
                _links
                .filter(
                    (link) =>
                        link.language == currentLanguage
                )
                .map(
                    (
                        link,
                        index,
                    ) =>
                        <Grid
                            item
                            key={index}
                        >
                            <Link
                                href={link.url}
                            >
                                {link.label}
                            </Link>
                        </Grid>
                )
            }

        </Grid>
    )
}
