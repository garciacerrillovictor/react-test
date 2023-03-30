import { MenuList } from "../types"
import ItemList from "./itemList"

interface Props {
    menuList: MenuList
}

const MenuApp = ({menuList} : Props) => {
    /*if (menuList.lista[0] == undefined){

    }*/
    const lista = menuList.lista[0]

        const renderList = () :JSX.Element[] => {

            const listkey = Object.keys(lista)
            return listkey.map((key, index) => {
                return (
                    <li key={index}><a href="#">{key}</a> {Array.isArray(lista[key]) && lista[key].length > 0 ? <ItemList children={lista[key]} />: ''}
                    </li>
                )
            })
            
        }

        return (
            <nav>
                <ul className="NavMenu">
                    {renderList()}
                </ul>
            </nav>
        )
}

export default MenuApp