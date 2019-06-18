import React from 'react'
import './verticalbar.css'

function VerticalBar(props) {
    return (
        <div className={"vertical-bar"}>
            <div className={"vertical-bar-wrapper "+props.position}>
                <div>カ</div>
                <div>ス</div>
                <div>テ</div>
                <div>ッ</div>
                <div>ロ</div>
            </div>
        </div>
    )
}

export default VerticalBar
