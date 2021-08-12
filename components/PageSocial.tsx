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
    title: `LinkedIn ${config.author}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z' />
      </svg>
    )
  },

  config.youtube && {
    name: 'youtube',
    href: `https://www.youtube.com/in/${config.youtube}`,
    title: `Youtube ${config.author}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
         <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,14.598V9.402c0-0.385,0.417-0.625,0.75-0.433l4.5,2.598c0.333,0.192,0.333,0.674,0,0.866l-4.5,2.598 C10.417,15.224,10,14.983,10,14.598z"/>
      </svg>
    )
  },

  config.discord && {
    name: 'discord',
    href: `https://www.discord.com/in/${config.discord}`,
    title: `Discord ${config.author}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d="M14,11.02c-0.52,0-0.94,0.53-0.94,1.18c0,0.65,0.42,1.18,0.94,1.18s0.94-0.53,0.94-1.18C14.94,11.55,14.52,11.02,14,11.02z M10,11.02c-0.52,0-0.94,0.53-0.94,1.18c0,0.65,0.42,1.18,0.94,1.18s0.94-0.53,0.94-1.18C10.94,11.55,10.52,11.02,10,11.02z M14,11.02c-0.52,0-0.94,0.53-0.94,1.18c0,0.65,0.42,1.18,0.94,1.18s0.94-0.53,0.94-1.18C14.94,11.55,14.52,11.02,14,11.02z M10,11.02c-0.52,0-0.94,0.53-0.94,1.18c0,0.65,0.42,1.18,0.94,1.18s0.94-0.53,0.94-1.18C10.94,11.55,10.52,11.02,10,11.02z M18,3H6	C4.34,3,3,4.34,3,6v12c0,1.66,1.34,3,3,3h11l-0.38-1.41l3.01,3.03c0.51,0.51,1.37,0.15,1.37-0.56V6C21,4.34,19.66,3,18,3z M17.57,14.74C16.2,15.99,14.41,16,14.41,16l-0.43-0.58c0.44-0.15,0.82-0.35,1.21-0.65l-0.09-0.24c-0.72,0.33-1.65,0.53-3.1,0.53	s-2.38-0.2-3.1-0.53l-0.09,0.24c0.39,0.3,0.77,0.5,1.21,0.65L9.59,16c0,0-1.79-0.01-3.16-1.26c-0.22-0.2-0.31-0.51-0.29-0.8	C6.39,11.05,7.28,9.3,7.6,8.76c0.07-0.13,0.17-0.23,0.29-0.32c0.38-0.25,1.33-0.81,2.5-0.93l0.3,0.61c0.43-0.08,0.9-0.14,1.31-0.14	c0.4,0,0.86,0.06,1.31,0.14l0.3-0.61c1.12,0.09,2.11,0.67,2.5,0.93c0.12,0.09,0.22,0.19,0.29,0.32c0.32,0.55,1.21,2.29,1.46,5.18	C17.88,14.23,17.79,14.54,17.57,14.74z M14,11.02c-0.52,0-0.94,0.53-0.94,1.18c0,0.65,0.42,1.18,0.94,1.18s0.94-0.53,0.94-1.18	C14.94,11.55,14.52,11.02,14,11.02z M10,11.02c-0.52,0-0.94,0.53-0.94,1.18c0,0.65,0.42,1.18,0.94,1.18s0.94-0.53,0.94-1.18	C10.94,11.55,10.52,11.02,10,11.02z"/>
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
