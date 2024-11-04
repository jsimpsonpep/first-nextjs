import React from 'react';
import styles from './ContentSection.module.css';

export default function ContentSection(props) {
  return (
    <div className={styles.contentSection} id={props.identity}>
      <p className={styles.content__p}>For the final project, my group is working with Vue to better understand the use of Frameworks for React. I am particularly interested in Vue for its incremental capabilites. This is preticularly relivant for iteratively adding interactivity and functionality to legacy site that may be too large or too complex to modernize holistically. Institutional and Enterprise sites and legacy systems seem like prime candidates for integrating Vue to modernize critical features and to add more value while providing for better user experiences.</p>
      <p>Here&apos;s my <a href="https://github.com/jsimpsonpep/first-nextjs">repo for this home work project.</a></p>
    </div>
  )
}
