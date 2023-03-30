
interface Props {
    children: Array<any>
}
const ItemList = ({children}: Props) => {
    const lista = children[0]
    const listkey = Object.keys(lista)

    const renderItems = () :JSX.Element[] => {
        return listkey.map((key, index) => {
            return (
                <li key={index}>{ key } {lista[key] > 0 ? <ItemList children={lista[key]} />:''}</li>
            )
        })
    }

    return (
        <ul className="subMenus">
            {renderItems()}
        </ul>
    )
    
}

export default ItemList;