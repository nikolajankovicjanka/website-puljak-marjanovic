import { createI18n } from 'vue-i18n'

import srLatinica from './sr-latinica'
import srCirilica from './sr-cirilica'
import en from './en'
import de from './de'

export const localeOptions = [
    {
        code: 'sr-lat',
        label: 'Srpski latinica',
        shortLabel: 'SR Lat',
        htmlLang: 'sr-Latn-BA',
    },
    {
        code: 'sr-cyrl',
        label: 'Српски ћирилица',
        shortLabel: 'СР Ћир',
        htmlLang: 'sr-Cyrl-BA',
    },
    {
        code: 'en',
        label: 'English',
        shortLabel: 'EN',
        htmlLang: 'en',
    },
    {
        code: 'de',
        label: 'Deutsch',
        shortLabel: 'DE',
        htmlLang: 'de',
    },
] as const

export type LocaleCode = (typeof localeOptions)[number]['code']

const DEFAULT_LOCALE: LocaleCode = 'sr-lat'

const messages = {
    'sr-lat': srLatinica,
    'sr-cyrl': srCirilica,
    en,
    de,
}

const isSupportedLocale = (value: string | null): value is LocaleCode => {
    return localeOptions.some((locale) => locale.code === value)
}

const savedLocale = localStorage.getItem('locale')

const activeLocale: LocaleCode = isSupportedLocale(savedLocale)
    ? savedLocale
    : DEFAULT_LOCALE

export const i18n = createI18n({
    legacy: false,
    locale: activeLocale,
    fallbackLocale: DEFAULT_LOCALE,
    messages,
})

export const setDocumentLanguage = (localeCode: LocaleCode) => {
    const selectedLocale = localeOptions.find((locale) => locale.code === localeCode)

    document.documentElement.lang = selectedLocale?.htmlLang ?? 'sr-Latn-BA'
}

setDocumentLanguage(activeLocale)