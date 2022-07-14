const linksSocialMedia = {
  github: 'zemendonca',
  youtube: 'UCQew-W0BAnmw44pHY9JEJ2A',
  facebook: 'ze.mendonca.1',
  instagram: 'ze_mendonca1',
  twitter: 'zemendonca'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()
