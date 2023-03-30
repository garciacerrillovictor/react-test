
interface Props {
    children: Array<any>
}
const ItemList = ({children}: Props) => {
    const lista = children[0]
    const listkey = Object.keys(lista)
console.log(lista)
    const renderItems = () :JSX.Element[] => {
        return listkey.map((key, index) => {
            return (
                <li key={index}><a href="#">{ key }</a> {lista[key].length > 0 ? <ItemList children={lista[key]} />:''}</li>
            )
        })
    }

    return (
        <ul>
            {renderItems()}
        </ul>
    )
    
}

export default ItemList;