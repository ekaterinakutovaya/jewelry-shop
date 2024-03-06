export const GA_TRACKING_ID = 'G-V1HFD63R6T'

// Проверяет, определен ли объект window, т.е. код выполняется в браузере
export const existsGaId = GA_TRACKING_ID !== ''

// Функция для отправки события в Google Analytics
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}