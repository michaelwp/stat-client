import React from 'react';
import Chip from '@mui/material/Chip';
import Grid from '@mui/system/Unstable_Grid';

const Token = (props) => {
    const [wordList, setWordList] = React.useState([]);

    React.useEffect(() => {
        setWordList(removeDuplicate(props.tokens));
    }, [props.tokens, props.keyword])

    const removeDuplicate = (terms) => {
        const uniqueTerms = []
        terms.forEach((t) => {
            if (uniqueTerms.indexOf(t) < 0) {
                uniqueTerms.push(t);
            }
        })

        return uniqueTerms.sort()
    }

    return (
        <>
            <Grid sx={{textAlign: 'justify'}}>
                {
                    wordList.map((word, index) => {
                        return <Chip
                            key={index}
                            sx={{m: 0.5}}
                            label={word}
                            size="small"
                            variant={props.keyword === word ? "filled" : "outlined"}
                            onClick={() => props.setupKeyword(word)}
                            color="primary"
                        />
                    })
                }
            </Grid>
        </>
    );
}
export default Token;