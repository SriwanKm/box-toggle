'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Head from "./components/Head"
import Box from "./components/Box"
import boxData from "./boxData";
import React, { useState } from "react";



export default function Home() {
  const [boxes, setBoxes] = useState(boxData)

  let allBoxes = boxes.map((box) => (
    <Box key={box.id}
      id={box.id}
      on={box.on} />
  ))

  

  return (

    <div>
      <Head />
      <h1>Hello world</h1>
      <div className={styles.box_container}>
        {allBoxes}
      </div>
    </div>
  );
}
