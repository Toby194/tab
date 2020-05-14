import React, { useState } from 'react';

import styles from './Tab.module.css';

function Tab(props) {
    const [activeIdx, setActiveIdx] = useState(0);
    return(
        <div >
            <div className={styles.headers}>
                {props.items.map((item, i) => {
                    return (
                        <div
                        key={i}
                        className={styles.header + (i == activeIdx ? '' 
                        + styles.active : '')}
                        onClick={() => setActiveIdx(i)}>
                        {item.label}
                        </div>
                    )
                })}
            </div>
            <div className={styles.content}>{props.items[activeIdx].content}</div>

        </div>
    )
}


export default Tab;