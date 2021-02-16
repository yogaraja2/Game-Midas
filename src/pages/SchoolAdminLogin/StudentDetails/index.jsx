import React from 'react'
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
                <div>Rank : {studentDetail.leaderBoardRank}</div>
                <div>Score : {studentDetail.totalScore}</div>
                <div>Income : {studentDetail.income || 0}</div>
                <div>Networth : {studentDetail.networth || 0}</div>
                <div>Game Mode : {studentDetail.role || 0}</div>
                <div>Game Length : {studentDetail.gameLength || 0}</div>
                <div>Country : {studentDetail.country}</div>
            </div>
        </Grid>
    )
}

export default StudentDetails
