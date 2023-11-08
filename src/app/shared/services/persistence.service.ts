import { Injectable } from '@angular/core'

@Injectable()
export class PersistenceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (e) {
      console.error('Error saving to localStorage', e)
    }
  }

  get(key: string): any {
    try {
      const result = localStorage.getItem(key)

      if (result) {
        return JSON.parse(result)
      }
    } catch (e) {
      console.error('Error gating from localStorage', e)

      return null
    }
  }
}
