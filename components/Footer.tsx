import * as React from 'react'

import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube'
import { FaDiscord } from '@react-icons/all-files/fa/FaDiscord'
import { FaMeetup } from '@react-icons/all-files/fa/FaMeetup'
import { FaZhihu } from '@react-icons/all-files/fa/FaZhihu'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'

import * as config from '@/lib/config'
import { useDarkMode } from '@/lib/use-dark-mode'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const FooterImpl: React.FC = () => {
  

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>Copyright {config.version} {config.copyright}</div>

      
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

        {config.zhihu && (
          <a
            className={styles.zhihu}
            href={`https://zhihu.com/people/${config.zhihu}`}
            title={`Zhihu @${config.zhihu}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaZhihu />
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
            title={`LinkedIn ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin />
          </a>
        )}

        {config.newsletter && (
          <a
            className={styles.newsletter}
            href={`${config.newsletter}`}
            title={`Newsletter ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaEnvelope />
          </a>
        )}

        {config.youtube && (
          <a
            className={styles.youtube}
            href={`https://www.youtube.com/${config.youtube}`}
            title={`YouTube ${config.author}`}
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

export const Footer = React.memo(FooterImpl)
