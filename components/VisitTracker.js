'use client'
import { useEffect } from 'react'

export default function VisitTracker() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const visitData = {
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        referrer: document.referrer,
        language: navigator.language
      }

      fetch('/api/track-visit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(visitData)
      }).catch(console.error)
    }
  }, [])

  return null
}
