'use client';
import boxData from "../boxData"
import React, { useState } from "react";
import styles from "../page.module.css"

export default function Box(props) {

    const [boxOn, setBoxOn] = useState(props.on)
    function changeBoxOn() {
        setBoxOn(prevColor => !prevColor)
        console.log(boxOn)
    }

    const style = { backgroundColor: boxOn ? "rgb(207, 219, 130)" : "transparent" }



    return (

        <div onClick={changeBoxOn} style={style} className={styles.box}>{props.id}</div>

    )
}