import React, { useState } from 'react'
import './style.scss'
import { Grid } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { commonRoute } from '../../../config/routes'


const playersList = [
    { id: 1, name: 'Victoria', country: 'India', score: 7548653 },
    { id: 2, name: 'Benjamin', country: 'USA', score: 6209475 },
    { id: 3, name: 'James', country: 'UK', score: 364855 },
    { id: 4, name: 'Dom', country: 'Srilanka', score: 304855 },
    { id: 5, name: 'Elisa', country: 'Russia', score: 254855 },
    { id: 6, name: 'Fazil', country: 'Japan', score: 204855 },
    { id: 7, name: 'Google', country: 'Brazil', score: 154855 },
    { id: 8, name: 'Hameed', country: 'Mexico', score: 104855 },
    { id: 9, name: 'Irin', country: 'Italy', score: 104700 },
    { id: 10, name: 'JackSparrow', country: 'UK', score: 54855 },
    { id: 1, name: 'Victoria', country: 'India', score: 7548653 },
    { id: 2, name: 'Benjamin', country: 'USA', score: 6209475 },
    { id: 3, name: 'James', country: 'UK', score: 364855 },
    { id: 4, name: 'Dom', country: 'Srilanka', score: 304855 },
    { id: 5, name: 'Elisa', country: 'Russia', score: 254855 },
    { id: 6, name: 'Fazil', country: 'Japan', score: 204855 },
    { id: 7, name: 'Google', country: 'Brazil', score: 154855 },
    { id: 8, name: 'Hameed', country: 'Mexico', score: 104855 },
    { id: 9, name: 'Irin', country: 'Italy', score: 104700 },
    { id: 10, name: 'JackSparrow', country: 'UK', score: 54855 }
]




function StudentsList() {

    const [detail, setDetail] = useState(null)
    const history = useHistory()
    const clickHandler = (item) => {
        console.log(item)
        setDetail(item)
        history.push(commonRoute.instructorLogin.studentStats)
    }
    console.log(detail)

    return (
        <Grid item xs={12} md={10} className="students-list-card">
            <div className="title">List Of Students</div>
            <Grid container className="students-list-wrap">
                {playersList.map((item, index) => (
                    <Grid item xs={12} key={index} className="student-field-wrap" onClick={() => clickHandler(playersList[index])}>
                        <Grid item xs={12} md={10}>{item.id}</Grid>
                        <Grid item xs={12} md={10}>
                            <img src={require('../../../assets/img/User1.svg').default} />
                        </Grid>
                        <Grid item xs={12} md={10}>{item.name}</Grid>
                        <Grid item xs={12} md={10}>{item.country}</Grid>
                        <Grid item xs={12} md={10}>{item.score}</Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default StudentsList
