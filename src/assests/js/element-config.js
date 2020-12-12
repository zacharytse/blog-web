import {
    Row,
    Col,
    Menu,
    MenuItemGroup,
    MenuItem,
    Button
} from 'element-ui'


export default {
    install(V) {
        V.use(Row)
        V.use(Col)
        V.use(Menu)
        V.use(MenuItemGroup)
        V.use(MenuItem)
        V.use(Button)
    }
}