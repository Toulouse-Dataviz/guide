import * as React from 'react'
import { FaTwitter, FaGithub, FaLinkedin, FaYoutube, FaDiscord, FaMeetup, FaEnvelope } from 'react-icons/fa'
import { IoSunnyOutline, IoMoonSharp } from 'react-icons/io5'
import * as config from 'lib/config'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const Footer: React.FC<{
  isDarkMode: boolean
  toggleDarkMode: () => void
}> = ({ isDarkMode, toggleDarkMode }) => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const toggleDarkModeCb = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>Copyright 2021 {config.author}</div>

      {hasMounted ? (
        <div className={styles.settings}>
          <a
            className={styles.toggleDarkMode}
            onClick={toggleDarkModeCb}
            title='Toggle dark/light mode'
          >
            {!isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
          </a>
        </div>
      ) : null}

      <div className={styles.social}>
        {config.twitter && (
          <a
            className={styles.twitter}
            href={`https://twitter.com/${config.twitter}`}
            title={`Twitter @${config.twitter}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter />
          </a>
        )}

        {config.github && (
          <a
            className={styles.github}
            href={`https://github.com/${config.github}`}
            title={`GitHub @${config.github}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
          </a>
        )}

        {config.linkedin && (
          <a
            className={styles.linkedin}
            href={`https://www.linkedin.com/in/${config.linkedin}`}
            title={`LinkedIn ${config.linkedin}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin />
          </a>
        )}

        {config.youtube && (
          <a
            className={styles.youtube}
            href={`https://www.youtube.com/${config.youtube}`}
            title={`Youtube ${config.youtube}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaYoutube />
          </a>
        )}

        {config.discord && (
          <a
            className={styles.discord}
            href={`${config.discord}`}
            title={`Discord ${config.discord}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaDiscord />
          </a>
        )}

        {config.meetup && (
          <a
            className={styles.meetup}
            href={`${config.meetup}`}
            title={`Meetup ${config.meetup}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaMeetup />
          </a>
        )}

        {config.mail && (
          <a
            className={styles.mail}
            href={`${config.mail}`}
            title={`Mail ${config.mail}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaEnvelope />
          </a>
        )}

      </div>
    </footer>
  )
}
