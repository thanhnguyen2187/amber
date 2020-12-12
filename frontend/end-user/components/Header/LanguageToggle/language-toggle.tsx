import React, {
    useState,
} from 'react'
import {
    Grid,
    Link,
} from '@material-ui/core'

import _languages from './_languages'
import useLocalStorage from '../../../logics/use-local-storage-v2'


export default function LanguageToggle() {

    const [
        currentLanguage,
        setCurrentLanguage,
    ] = useLocalStorage(
        "lang",
        "en",
    )

    return (
        <Grid
            container
            // direction={"row"}
            // justify={"flex-end"}
            spacing={2}
        >
            {
                _languages
                .filter(
                    (language) =>
                        language.lang === currentLanguage
                )
                .map(
                    (language) =>
                        <Grid
                            item
                            onClick={() => setCurrentLanguage(language.key)}
                            key={language.key}
                        >
                            <Link
                                href={""}
                            >
                                {language.value}
                            </Link>
                        </Grid>
                )
            }
        </Grid>
    )
}
