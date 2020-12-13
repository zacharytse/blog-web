import Categroy from '@/components/category.vue'
import Tag from '@/components/tag.vue'
import Archive from '@/components/archive.vue'
import Home from '@/components/home.vue'

export default [
    {path : '/category',component: Categroy},
    {path: '/tag',component: Tag},
    {path: '/archive',component: Archive},
    {path: '/home',component: Home},
]

