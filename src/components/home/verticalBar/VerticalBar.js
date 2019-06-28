import React from 'react'
import styles from './verticalbar.module.scss'
import * as theme from '../../../style/theme'

const style = {
    left:{
        padding: '0% 20px 0 0',
        borderImage: `linear-gradient(to bottom, ${theme.primary}, ${theme.tertiary}) 0 1 0 0`
    },
    right:{
        padding: '0 0 0 20px',
        borderImage: `linear-gradient(to bottom, ${theme.primary}, ${theme.tertiary}) 0 0 0 1`
    }
}

function VerticalBar(props) {
    return (
        <div className={styles["vertical-bar"]}>
            <div className={styles["vertical-bar-wrapper"]} style ={style[props.position]} >
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
