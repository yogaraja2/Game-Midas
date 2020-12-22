import React from 'react'
import BgImage from '../../assets/img/bg.svg'
import { Button, CssBaseline, Grid, makeStyles, Typography } from '@material-ui/core'
import logo from '../../assets/img/midaslogo.svg'
import leaderboard from '../../assets/img/leaderboard.svg'
import newGame from '../../assets/img/newGame.svg'
import resume from '../../assets/img/resume.svg'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: `url(${BgImage})`,
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        width: '100%',
        height: '100vh'
    },
    logo: {
        margin: '20px',
        paddingLeft: '150px',
    },
    imageContainer: {
        display: 'flex',
        width: '80%',
        height: '80%',
        backgroundColor: '#EBEBEB',
        margin: '20px 169px',
        opacity: '0.8',
        borderRadius: '15px',
        alignSelf: 'center',
        alignContent: 'center',
    },
    button: {
        backgroundColor: '#009FFD',
        width: '150px',
        height: '50px',
        color: 'white',
        fontWeight: '700',
        alignSelf: 'flex-end',
    },
    image: {
        width: '270px',
        height: '270px'
    }
}))


function Home() {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <CssBaseline />
            <img src={logo} className={classes.logo} />
            <Grid container className={classes.imageContainer}>
                <Grid item xs={4}>
                    <Typography>Leader Board</Typography>
                    <img src={leaderboard} />

                </Grid>
                <Grid item xs={4}>
                    <Typography>New</Typography>
                    <img src={newGame} />

                </Grid>
                <Grid item xs={4}>
                    <Typography>Resume</Typography>
                    <img src={resume} />
                </Grid>
                <Button className={classes.button}>Next</Button>
            </Grid>

        </div>
    )
}

export default Home
