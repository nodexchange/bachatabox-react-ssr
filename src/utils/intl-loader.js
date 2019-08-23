const loaders = {
  en: async () => {
    if (!window.Intl) {
      await require('promise?global!intl')()
      await require('promise?global!intl/locale-data/jsonp/en.js')()
    }
    return await require('promise?global!data/en')()
  },

  pl: async () => {
    if (!window.Intl) {
      await require('promise?global!intl')()
      await require('promise?global!intl/locale-data/jsonp/pl.js')()
    }
    return await require('promise?global!data/pl')()
  },

  es: async () => {
    if (!window.Intl) {
      await require('promise?global!intl')()
      await require('promise?global!intl/locale-data/jsonp/es.js')()
    }
    return await require('promise?global!data/es')()
  },
}

export default async (locale) => {
  if (process.env.NODE_ENV === 'test') return { messages: {} }

  const result = await loaders[locale]()
  if (process.env.BROWSER) {
    window.ReactIntl = require('react-intl')
    const { addLocaleData } = require('react-intl')
    addLocaleData(require(`react-intl/locale-data/${locale}.js`))
  }

  return result
}
