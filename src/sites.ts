import onePanelLogo from './assets/1panel.svg'
import onePanelOverseasLogo from './assets/1panel-overseas.svg'
import academicLogo from './assets/academic.png'
import filebrowserLogo from './assets/filebrowser.svg'
import filebrowserOverseasLogo from './assets/filebrowser-overseas.svg'
import kmsLogo from './assets/kms.svg'
import licaibuLogo from './assets/licaibu.svg'
import siteLogo from './assets/logo.svg'
import mpusherLogo from './assets/mpusher.svg'
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
    description: '私有云 (CN)'
  },
  {
    id: 'file-overseas',
    title: 'FileBrowser',
    url: 'https://file.sf.davidz.cn/',
    logo: filebrowserOverseasLogo,
    description: '私有云 (US)'
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
    id: '1panel',
    title: '1Panel',
    url: 'https://1panel.davidz.cn/',
    logo: onePanelLogo,
    description: '服务器管理 (CN)'
  },
  {
    id: '1panel-overseas',
    title: '1Panel',
    url: 'https://1panel.sf.davidz.cn/',
    logo: onePanelOverseasLogo,
    description: '服务器管理 (US)'
  },
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
