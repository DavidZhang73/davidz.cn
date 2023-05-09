interface Site {
  id: string,
  title: string,
  url: string,
  logo: string,
  logoDark?: string,
  description: string,
}

const siteList: Array<Site> = [
  {
    id: 'blog',
    title: 'Blog',
    url: 'https://blog.davidz.cn/',
    logo: '/img/logo.svg',
    description: '个人博客'
  },
  {
    id: 'academic',
    title: 'Academic',
    url: 'https://academic.davidz.cn/',
    logo: '/img/academic.png',
    description: '个人主页'
  },
  {
    id: 'vidat2',
    title: 'Vidat2',
    url: 'https://vidat2.davidz.cn/',
    logo: '/img/vidat.svg',
    logoDark: '/img/vidat-dark.svg',
    description: '视频标注'
  },
  {
    id: 'iaw',
    title: 'IAW',
    url: 'https://iaw.davidz.cn/',
    logo: '/img/logo.svg',
    description: '数据集'
  },
  {
    id: 'umami',
    title: 'Umami',
    url: 'https://umami.davidz.cn/',
    logo: '/img/umami.svg',
    logoDark: '/img/umami-dark.svg',
    description: '访问统计'
  },
  {
    id: 'licaibu',
    title: '理财簿',
    url: 'https://licaibu.davidz.cn/',
    logo: '/img/licaibu.svg',
    description: '记录理财'
  },
  {
    id: 'git',
    title: 'Git',
    url: 'https://git.davidz.cn/',
    logo: '/img/gitea.svg',
    description: '代码托管'
  },
  {
    id: 'file',
    title: 'FileBrowser',
    url: 'https://file.davidz.cn/',
    logo: '/img/filebrowser.svg',
    description: '私有云'
  },
  {
    id: 'kms',
    title: 'KMS',
    url: 'https://kms.davidz.cn/',
    logo: '/img/kms.svg',
    description: '激活服务'
  },
  {
    id: 'mpusher',
    title: 'MPusher',
    url: 'https://mpusher.davidz.cn/',
    logo: '/img/mpusher.svg',
    description: '消息推送'
  },
  {
    id: 'docker',
    title: 'Docker',
    url: 'https://docker.davidz.cn/',
    logo: '/img/docker.svg',
    description: 'Docker 管理'
  },
  {
    id: 'netdata',
    title: 'Netdata',
    url: 'https://netdata.davidz.cn/',
    logo: '/img/netdata.svg',
    description: '服务器状态'
  }
]

export { Site }
export default siteList
