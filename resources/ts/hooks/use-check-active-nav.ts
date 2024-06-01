import { usePage } from "@inertiajs/react"

export default function useCheckActiveNav() {
  const { url } = usePage()

  const checkActiveNav = (nav: string) => {
    const pathArray = url.split('/').filter((item) => item !== '')

    if (nav === '/' && pathArray.length < 1) return true

    return pathArray.includes(nav.replace(/^\//, ''))
  }

  return { checkActiveNav }
}