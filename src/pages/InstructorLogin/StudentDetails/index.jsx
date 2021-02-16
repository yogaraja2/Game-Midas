import React from 'react'
import './style.scss'
import { Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

function StudentDetails() {
    const studentDetail = useSelector(state => state?.studentDetail)
    return (
        <Grid item xs={12} md={10} className="student-details-card">
            <div className="title">
                Student Stats
            </div>
            <div className="stu-detail-wrap">
                <div className="detailed-wrap">
                    <div className="name-wrap">
                        <div className="heading">Name</div>
                        <div className="value">{studentDetail.name}</div>
                    </div>
                    <div className="other-details">
                        <div className="field-wrap">
                            <div className="heading">Rank </div>
                            <div className="value">{studentDetail.leaderBoardRank}</div>
                        </div>
                        <div className="field-wrap">
                            <div className="heading">Game Mode </div>
                            <div className="value">{studentDetail.gameMode || 0}</div>
                        </div>
                        <div className="field-wrap">
                            <div className="heading">Game Length </div>
                            <div className="value">{studentDetail.gameLength || 0}</div>
                        </div>
                        <div className="field-wrap">
                            <div className="heading">Country </div>
                            <div className="value">{studentDetail.country}</div>
                        </div>
                    </div>
                </div>
                <div className="charts-wrap">

                </div>
                <div className="avatar-wrap">
                    <img src={require(`../../../assets/img/Avatar${studentDetail.avatarIcon}.svg`).default} alt="user-avatar" />
                </div>

            </div>
        </Grid>
    )
}

export default StudentDetails


{/* <div>Score : {studentDetail.totalScore}</div>
                        <div>Income : {studentDetail.income || 0}</div>
                        <div>Networth : {studentDetail.networth || 0}</div> */}
