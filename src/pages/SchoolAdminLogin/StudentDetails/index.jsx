import React from 'react'
import './style.scss'
import { Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

function StudentDetails() {
    const studentDetail = useSelector(state => state.studentDetail)
    return (
        <Grid item xs={12} md={10} className="student-details-card">
            <div className="title">
                Student Stats
            </div>
            <div className="stu-detail-wrap">
                <div>Name : {studentDetail.name}</div>
                <div>Country : {studentDetail.country}</div>
                <div>Score : {studentDetail.score}</div>
                <div>Income : {10000}</div>
                <div>Networth : {10000}</div>
                <div>Game Mode : {"Easy"}</div>
                <div>Game Length : {"10"}</div>
            </div>
        </Grid>
    )
}

export default StudentDetails
