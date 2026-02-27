'use client'

import { useEffect } from 'react'

export function AntiCopy() {
  useEffect(() => {
    function handleContextMenu(e: MouseEvent) {
      e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextMenu)
    document.body.style.userSelect = 'none'
    document.body.style.webkitUserSelect = 'none'

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.body.style.userSelect = ''
      document.body.style.webkitUserSelect = ''
    }
  }, [])

  return null
}
