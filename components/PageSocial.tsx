import React from 'react'
import cs from 'classnames'

import * as config from 'lib/config'

import styles from './PageSocial.module.css'

interface SocialLink {
  name: string
  title: string
  icon: React.ReactNode
  href?: string
}

const socialLinks: SocialLink[] = [
  config.twitter && {
    name: 'twitter',
    href: `https://twitter.com/${config.twitter}`,
    title: `Twitter @${config.twitter}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z' />
      </svg>
    )
  },

  config.github && {
    name: 'github',
    href: `https://github.com/${config.github}`,
    title: `GitHub @${config.github}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
      </svg>
    )
  },

  config.linkedin && {
    name: 'linkedin',
    href: `https://www.linkedin.com/in/${config.linkedin}`,
    title: `LinkedIn ${config.linkedin}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z' />
      </svg>
    )
  },

  config.youtube && {
    name: 'youtube',
    href: `https://www.youtube.com/${config.youtube}`,
    title: `Youtube ${config.youtube}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
         <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,14.598V9.402c0-0.385,0.417-0.625,0.75-0.433l4.5,2.598c0.333,0.192,0.333,0.674,0,0.866l-4.5,2.598 C10.417,15.224,10,14.983,10,14.598z"/>
      </svg>
    )
  },

  config.discord && {
    name: 'discord',
    href: `${config.discord}`,
    title: `Discord ${config.discord}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d="M14,11.02c-0.52,0-0.94,0.53-0.94,1.18c0,0.65,0.42,1.18,0.94,1.18s0.94-0.53,0.94-1.18C14.94,11.55,14.52,11.02,14,11.02z M10,11.02c-0.52,0-0.94,0.53-0.94,1.18c0,0.65,0.42,1.18,0.94,1.18s0.94-0.53,0.94-1.18C10.94,11.55,10.52,11.02,10,11.02z M14,11.02c-0.52,0-0.94,0.53-0.94,1.18c0,0.65,0.42,1.18,0.94,1.18s0.94-0.53,0.94-1.18C14.94,11.55,14.52,11.02,14,11.02z M10,11.02c-0.52,0-0.94,0.53-0.94,1.18c0,0.65,0.42,1.18,0.94,1.18s0.94-0.53,0.94-1.18C10.94,11.55,10.52,11.02,10,11.02z M18,3H6	C4.34,3,3,4.34,3,6v12c0,1.66,1.34,3,3,3h11l-0.38-1.41l3.01,3.03c0.51,0.51,1.37,0.15,1.37-0.56V6C21,4.34,19.66,3,18,3z M17.57,14.74C16.2,15.99,14.41,16,14.41,16l-0.43-0.58c0.44-0.15,0.82-0.35,1.21-0.65l-0.09-0.24c-0.72,0.33-1.65,0.53-3.1,0.53	s-2.38-0.2-3.1-0.53l-0.09,0.24c0.39,0.3,0.77,0.5,1.21,0.65L9.59,16c0,0-1.79-0.01-3.16-1.26c-0.22-0.2-0.31-0.51-0.29-0.8	C6.39,11.05,7.28,9.3,7.6,8.76c0.07-0.13,0.17-0.23,0.29-0.32c0.38-0.25,1.33-0.81,2.5-0.93l0.3,0.61c0.43-0.08,0.9-0.14,1.31-0.14	c0.4,0,0.86,0.06,1.31,0.14l0.3-0.61c1.12,0.09,2.11,0.67,2.5,0.93c0.12,0.09,0.22,0.19,0.29,0.32c0.32,0.55,1.21,2.29,1.46,5.18	C17.88,14.23,17.79,14.54,17.57,14.74z M14,11.02c-0.52,0-0.94,0.53-0.94,1.18c0,0.65,0.42,1.18,0.94,1.18s0.94-0.53,0.94-1.18	C14.94,11.55,14.52,11.02,14,11.02z M10,11.02c-0.52,0-0.94,0.53-0.94,1.18c0,0.65,0.42,1.18,0.94,1.18s0.94-0.53,0.94-1.18	C10.94,11.55,10.52,11.02,10,11.02z"/>
      </svg>
    )
  },

  config.meetup && {
    name: 'meetup',
    href: `${config.meetup}`,
    title: `Meetup ${config.meetup}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d="M11.53,20.31a3.18,3.18,0,0,1-1,.55,3.59,3.59,0,0,1-4.71-2.4,5.49,5.49,0,0,1-.13-.74c0-.19,0-.15-.17-.19a3.16,3.16,0,0,1-2.42-2,3.25,3.25,0,0,1,.78-3.59.14.14,0,0,0,0-.2A3.1,3.1,0,0,1,5.13,7.43a2.78,2.78,0,0,1,.95-.32A.22.22,0,0,0,6.27,7,4.62,4.62,0,0,1,13,4.78a.21.21,0,0,0,.2,0,4.11,4.11,0,0,1,4.53,1.31,4,4,0,0,1,.88,2.77A.13.13,0,0,0,18.7,9,2.25,2.25,0,0,1,20,12.13a2.21,2.21,0,0,1-.55.74.1.1,0,0,0,0,.15,3.91,3.91,0,0,1-3.06,5.92H16c-.07,0-.1,0-.12.09a2.63,2.63,0,0,1-.63,1.12,2.6,2.6,0,0,1-1.59.81,2.68,2.68,0,0,1-2.09-.61l-.06,0Zm4-3.58a1.66,1.66,0,0,0,.75-.14.56.56,0,0,0-.07-1L16,15.51l-.7-.12c-.44-.09-.62-.3-.58-.75a3.24,3.24,0,0,1,.17-.82c.2-.56.44-1.12.67-1.67s.49-1.18.72-1.78a1.63,1.63,0,0,0,.1-.95,1.19,1.19,0,0,0-.74-1,1.84,1.84,0,0,0-1.6.09.32.32,0,0,1-.45-.05c-.12-.11-.24-.23-.37-.33A.94.94,0,0,0,12.89,8a1.13,1.13,0,0,0-1.06.23l-.29.26a2.93,2.93,0,0,1-.33.24.44.44,0,0,1-.44,0l-.85-.4a1.27,1.27,0,0,0-.77-.12,1.85,1.85,0,0,0-1.42,1,7.56,7.56,0,0,0-.46,1.11q-.66,2-1.28,4.07a1.37,1.37,0,0,0,.35,1.44,1.59,1.59,0,0,0,1.26.44,1.15,1.15,0,0,0,1-.66,2.26,2.26,0,0,0,.12-.25L10,12.08c.15-.39.31-.77.47-1.15a.52.52,0,0,1,.5-.29.46.46,0,0,1,.37.38.76.76,0,0,1,0,.44l-.69,1.77c-.15.4-.32.79-.46,1.19a.61.61,0,0,0,.3.81A1,1,0,0,0,11.58,15a2.54,2.54,0,0,0,.27-.42l1.68-3.31c.09-.18.18-.37.29-.54a1.61,1.61,0,0,1,.3-.36.34.34,0,0,1,.4,0,.29.29,0,0,1,.12.33,1.06,1.06,0,0,1-.08.3c-.15.33-.3.66-.45,1-.33.72-.69,1.42-1,2.15a1.86,1.86,0,0,0,1.13,2.44A4.31,4.31,0,0,0,15.48,16.73Z"/><circle cx="17.32" cy="20.6" r="0.96" transform="translate(-0.03 0.02) rotate(-0.08)"/><circle cx="1.83" cy="11.54" r="0.91" transform="translate(-9.73 13.32) rotate(-89.74)"/><path d="M13.33,3.82a.91.91,0,1,1,.9-.91A.9.9,0,0,1,13.33,3.82Z"/><circle cx="20.15" cy="7.8" r="0.77" transform="translate(-0.01 0.03) rotate(-0.09)"/><path d="M4.66,5.52a.69.69,0,0,1,.7-.69.7.7,0,0,1,.69.69.71.71,0,0,1-.7.7A.7.7,0,0,1,4.66,5.52Z"/><circle cx="11.45" cy="21.99" r="0.59"/><path d="M22.11,13.14a.57.57,0,1,1-.57-.57A.56.56,0,0,1,22.11,13.14Z"/><ellipse cx="7.36" cy="1.9" rx="0.48" ry="0.48" transform="translate(-0.01 0.04) rotate(-0.31)"/><path d="M23.09,10.31a.42.42,0,0,1-.43.42.42.42,0,0,1,0-.85A.42.42,0,0,1,23.09,10.31Z"/><path d="M4.25,18.63a.42.42,0,0,1,.84,0,.42.42,0,1,1-.84,0Z"/>
      </svg>
    )
  }
].filter(Boolean)

export const PageSocial: React.FC = () => {
  return (
    <div className={styles.pageSocial}>
      {socialLinks.map((action) => (
        <a
          className={cs(styles.action, styles[action.name])}
          href={action.href}
          key={action.name}
          title={action.title}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className={styles.actionBg}>
            <div className={styles.actionBgPane} />
          </div>

          <div className={styles.actionBg}>{action.icon}</div>
        </a>
      ))}
    </div>
  )
}
