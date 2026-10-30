'use strict';

/* ==========================================================================
   Cristian M — Portfolio
   Base interactions: mobile menu, active section link and current year.
   ========================================================================== */

const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.getElementById('primary-nav');

function setMenuState(open) {
  if (!navToggle || !primaryNav) return;
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute(
    'aria-label',
    open
      ? navToggle.dataset.labelClose || 'Close menu'
      : navToggle.dataset.labelOpen || 'Open menu'
  );
  primaryNav.classList.toggle('is-open', open);
}

if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    setMenuState(!isOpen);
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
      setMenuState(false);
      navToggle.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (navToggle.getAttribute('aria-expanded') !== 'true') return;
    if (primaryNav.contains(event.target) || navToggle.contains(event.target)) return;
    setMenuState(false);
  });

  const desktopQuery = window.matchMedia('(min-width: 56.25rem)');
  desktopQuery.addEventListener('change', (event) => {
    if (event.matches) setMenuState(false);
  });
}

/* Highlight the nav link that matches the section in view. */
const navLinks = new Map(
  Array.from(document.querySelectorAll('.nav-list a')).map((link) => [
    link.getAttribute('href').replace('#', ''),
    link,
  ])
);

const observedSections = Array.from(navLinks.keys())
  .map((id) => document.getElementById(id))
  .filter(Boolean);

if (observedSections.length && 'IntersectionObserver' in window) {
  const clearCurrent = () => {
    navLinks.forEach((link) => link.removeAttribute('aria-current'));
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = navLinks.get(entry.target.id);
        if (!link) return;

        if (entry.isIntersecting) {
          clearCurrent();
          link.setAttribute('aria-current', 'location');
        } else if (link.getAttribute('aria-current') === 'location') {
          link.removeAttribute('aria-current');
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
  );

  observedSections.forEach((section) => observer.observe(section));
}

const year = document.getElementById('year');
if (year) {
  year.textContent = String(new Date().getFullYear());
}

/* ==========================================================================
   Language switcher
   English is the default. The selected language is saved in localStorage and
   updates every [data-i18n], image alt text, ARIA labels, metadata and the
   document language.
   ========================================================================== */

const DEFAULT_LANGUAGE = 'en';
const SUPPORTED_LANGUAGES = ['en', 'es'];
const LANGUAGE_STORAGE_KEY = 'cristian-m-language';
const languageButtons = Array.from(document.querySelectorAll('.lang-btn'));

function getTranslation(language, key) {
  const dictionary = window.translations;
  if (!dictionary) return null;

  const read = (lang) =>
    key.split('.').reduce(
      (value, part) => (value && typeof value === 'object' ? value[part] : undefined),
      dictionary[lang]
    );

  const value = read(language);
  if (typeof value === 'string') return value;

  const fallback = read(DEFAULT_LANGUAGE);
  return typeof fallback === 'string' ? fallback : null;
}

function getStoredLanguage() {
  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (SUPPORTED_LANGUAGES.includes(stored)) return stored;
  } catch (error) {
    /* localStorage may be unavailable (private mode or blocked storage). */
  }
  return DEFAULT_LANGUAGE;
}

function updateMetadata(language) {
  const title = getTranslation(language, 'meta.title');
  const description = getTranslation(language, 'meta.description');

  if (title) document.title = title;

  const metaDescription = document.getElementById('meta-description');
  if (metaDescription && description) metaDescription.setAttribute('content', description);

  const ogTitle = document.getElementById('og-title');
  if (ogTitle && title) ogTitle.setAttribute('content', title);

  const ogDescription = document.getElementById('og-description');
  if (ogDescription && description) ogDescription.setAttribute('content', description);

  const ogLocale = document.querySelector('meta[property="og:locale"]');
  const ogLocaleAlternate = document.querySelector('meta[property="og:locale:alternate"]');
  if (ogLocale) ogLocale.setAttribute('content', language === 'es' ? 'es_CO' : 'en_US');
  if (ogLocaleAlternate) {
    ogLocaleAlternate.setAttribute('content', language === 'es' ? 'en_US' : 'es_CO');
  }
}

function applyLanguage(language) {
  if (!SUPPORTED_LANGUAGES.includes(language)) return;

  document.documentElement.lang = language;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = getTranslation(language, element.dataset.i18n);
    if (value !== null) element.textContent = value;
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    const value = getTranslation(language, element.dataset.i18nAlt);
    if (value !== null) element.setAttribute('alt', value);
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    const value = getTranslation(language, element.dataset.i18nAriaLabel);
    if (value !== null) element.setAttribute('aria-label', value);
  });

  languageButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === language));
  });

  if (navToggle) {
    const openLabel = getTranslation(language, 'a11y.menuOpen') || 'Open menu';
    const closeLabel = getTranslation(language, 'a11y.menuClose') || 'Close menu';
    navToggle.dataset.labelOpen = openLabel;
    navToggle.dataset.labelClose = closeLabel;
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-label', isOpen ? closeLabel : openLabel);
  }

  updateMetadata(language);
}

function setLanguage(language, persist = true) {
  if (!SUPPORTED_LANGUAGES.includes(language)) return;

  applyLanguage(language);

  if (!persist) return;

  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch (error) {
    /* Keep the language for this visit even if storage is unavailable. */
  }
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setLanguage(button.dataset.lang);
  });
});

/* Apply the saved language (or English) once the deferred scripts have run. */
applyLanguage(getStoredLanguage());
