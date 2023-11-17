import { ProfileInterface } from 'src/app/shared/types/profile.interface'

export interface ArticleInterface {
  body: string
  title: string
  slug: string
  description: string
  tagList: string[]
  createdAt: string
  updatedAt: string
  favorited: boolean
  favoritesCount: number
  author: ProfileInterface
}
