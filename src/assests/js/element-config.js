import {
    Row,
    Col,
    Menu,
    MenuItemGroup,
    MenuItem,
    Button,
    Link,
    Pagination,
    Timeline,
    TimelineItem
} from 'element-ui'


export default {
    install(V) {
        V.use(Row)
        V.use(Col)
        V.use(Menu)
        V.use(MenuItemGroup)
        V.use(MenuItem)
        V.use(Button)
        V.use(Link)
        V.use(Pagination)
        V.use(Timeline)
        V.use(TimelineItem)
    }
}