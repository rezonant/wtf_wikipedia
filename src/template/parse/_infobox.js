const i18n = require('../../_data/i18n')
const infoboxes = require('../../infobox/_infoboxes')
const i18nReg = new RegExp('^(subst.)?(' + i18n.infoboxes.join('|') + ')[: \n]', 'i')
//some looser ones
const startReg = /^infobox /i
const endReg = / infobox$/i
const yearIn = /^year in [A-Z]/i

//some known ones from
//https://en.wikipedia.org/wiki/Wikipedia:List_of_infoboxes
//and https://en.wikipedia.org/wiki/Category:Infobox_templates
const isInfobox = function (name) {
  //known
  if (infoboxes.hasOwnProperty(name) === true) {
    return true
  }
  if (i18nReg.test(name)) {
    return true
  }
  if (startReg.test(name) || endReg.test(name)) {
    return true
  }
  //these are also infoboxes: 'Year in Belarus'
  if (yearIn.test(name)) {
    return true
  }
  return false
}

//turns template data into good infobox data
const fmtInfobox = function (obj = {}) {
  let m = obj.template.match(i18nReg)
  let type = obj.template
  if (m && m[0]) {
    type = type.replace(m[0], '')
  }
  type = type.trim()
  let infobox = {
    template: 'infobox',
    type: type,
    data: obj,
  }
  delete infobox.data.template //already have this.
  delete infobox.data.list //just in case!
  return infobox
}

module.exports = {
  isInfobox: isInfobox,
  format: fmtInfobox,
}
