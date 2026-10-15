import academicLogo from './assets/academic.png'
import dockerLogo from './assets/docker.svg'
import filebrowserLogo from './assets/filebrowser.svg'
import giteaLogo from './assets/gitea.svg'
import kmsLogo from './assets/kms.svg'
import licaibuLogo from './assets/licaibu.svg'
import siteLogo from './assets/logo.svg'
import mpusherLogo from './assets/mpusher.svg'
import projectmayLogo from './assets/projectmay.svg'
import umamiDarkLogo from './assets/umami-dark.svg'
import umamiLogo from './assets/umami.svg'
import vidatDarkLogo from './assets/vidat-dark.svg'
import vidatLogo from './assets/vidat.svg'
import slidevLogo from './assets/slidev.svg'

interface Site {
  id: string
  title: string
  url: string
  logo: string
  logoDark?: string
  description: string
}

const siteList: Array<Site> = [
  {
    id: 'blog',
    title: 'Blog',
    url: 'https://blog.davidz.cn/',
    logo: siteLogo,
    description: '个人博客'
  },
  {
    id: 'academic',
    title: 'Academic',
    url: 'https://academic.davidz.cn/',
    logo: academicLogo,
    description: '个人主页'
  },
  {
    id: 'slidev',
    title: 'Slidev',
    url: 'https://notes.davidz.cn/',
    logo: slidevLogo,
    description: '演示文稿'
  },
  {
    id: 'projectmay',
    title: 'ProjectMay',
    url: 'https://projectmay.davidz.cn/',
    logo: projectmayLogo,
    description: '异步编排'
  },
  {
    id: 'licaibu',
    title: '理财簿',
    url: 'https://licaibu.davidz.cn/',
    logo: licaibuLogo,
    description: '记录理财'
  },
  {
    id: 'file',
    title: 'FileBrowser',
    url: 'https://file.davidz.cn/',
    logo: filebrowserLogo,
    description: '私有云'
  },
  {
    id: 'umami',
    title: 'Umami',
    url: 'https://umami.davidz.cn/',
    logo: umamiLogo,
    logoDark: umamiDarkLogo,
    description: '访问统计'
  },
  {
    id: 'git',
    title: 'Git',
    url: 'https://git.davidz.cn/',
    logo: giteaLogo,
    description: '代码托管'
  },
  {
    id: 'vidat2',
    title: 'Vidat2',
    url: 'https://vidat2.davidz.cn/',
    logo: vidatLogo,
    logoDark: vidatDarkLogo,
    description: '视频标注'
  },
  // {
  //   id: 'iaw',
  //   title: 'IAW',
  //   url: 'https://iaw.davidz.cn/',
  //   logo: siteLogo,
  //   description: '数据集'
  // },
  {
    id: 'kms',
    title: 'KMS',
    url: 'https://kms.davidz.cn/',
    logo: kmsLogo,
    description: '激活服务'
  },
  {
    id: 'mpusher',
    title: 'MPusher',
    url: 'https://mpusher.davidz.cn/',
    logo: mpusherLogo,
    description: '消息推送'
  },
  {
    id: 'docker',
    title: 'Docker',
    url: 'https://docker.davidz.cn/',
    logo: dockerLogo,
    description: 'Docker 管理'
  }
  // {
  //   id: 'netdata',
  //   title: 'Netdata',
  //   url: 'https://netdata.davidz.cn/',
  //   logo: '/img/netdata.svg',
  //   description: '服务器状态'
  // }
]

export { Site }
export default siteList
