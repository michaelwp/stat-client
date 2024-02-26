import React from 'react';
import Box from "@mui/system/Box";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material-next/CircularProgress";
import MainController from "./MainControllers";
import {Result} from "./Results";
import Typography from "@mui/material/Typography";


export const Tool = () => {
    const [tokens, setTokens] = React.useState([]);
    const [alertMessage, setAlertMessage] = React.useState("");
    const [keyword, setKeyword] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const setupKeyword = (word) => {
        if (word === keyword) {
            setKeyword("");
        } else {
            setKeyword(word);
        }
    }

    return (
        <>
            <Backdrop
                sx={{color: '#fff', zIndex: 1, position: "fixed"}}
                open={loading}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
            <Box sx={{marginTop: 10, textAlign: 'center'}}>
                <Typography
                    noWrap
                    variant="h5"
                    sx={{
                        color: 'inherit',
                        fontWeight: 700,
                    }}
                >
                    Simple Text Analysis Tool
                </Typography>
                <MainController
                    tokens={tokens}
                    setTokens={setTokens}
                    alertMessage={alertMessage}
                    setAlertMessage={setAlertMessage}
                    setKeyword={setKeyword}
                    setLoading={setLoading}
                />
                {
                    tokens.length > 0 && alertMessage === "" ?
                        <Result
                            tokens={tokens}
                            setupKeyword={setupKeyword}
                            setAlertMessage={setAlertMessage}
                            keyword={keyword}
                        /> : <></>
                }
            </Box>
        </>
    )
}