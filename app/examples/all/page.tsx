"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Chat from "../../components/chat";
import FileViewer from "../../components/file-viewer";

const FunctionCalling = () => {
  
  return (
    <main className={styles.main}>
      
      <div className={styles.container}>
        
        <div className={styles.column}>
          <a href="https://www.corning.com/kr/ko.html" target="_blank" rel="noopener noreferrer">
             <img src="/Corning.png" alt="Corning-Logo" className={styles.logo} />
          </a>
          <FileViewer />
        </div>
        
        <div className={styles.chatContainer}>
          <div className={styles.chat}>
            <Chat />
          </div>
        </div>

      </div>

    </main>
  );
};

export default FunctionCalling;
