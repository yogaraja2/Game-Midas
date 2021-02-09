import React from 'react'
import './style.scss'
import { Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

function StudentDetails() {
    const studentDetail = useSelector(state => state.studentDetail)
    return (
        <Grid item xs={12} md={10} className="student-details-card">
            <div className="title">
                StudentDetails
            </div>
            <div className="stu-detail-wrap">
                <div>Name : {studentDetail.name}</div>
                <div>Country : {studentDetail.country}</div>
                <div>Score : {studentDetail.score}</div>
            </div>
        </Grid>
    )
}

export default StudentDetails
