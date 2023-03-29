import { MenuList } from "../types"

interface Props {
    menuList: MenuList
}

const MenuApp = ({menuList} : Props) => {

    const lista = menuList.lista[0]
    
    if(lista != undefined){

        const renderList = () :JSX.Element[] => {

            const listkey = Object.keys(lista)
            return listkey.map((key, index) => {
                return (
                    <li>{key} --- 
                        {Array.isArray(lista[key]) && lista[key].length > 0 ? key: ''}
                    </li>
                )
            })
            
        }

        return (
            <nav>
                <ul className="menus">
                    {renderList()}
                </ul>
            </nav>
        )
    }else{
        return (
            <nav></nav>
        )
    }
}

export default MenuApp