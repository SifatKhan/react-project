import ItemList from './ItemList'

export const Content = ({items, handleCheck, handleDelete}) => {
    
    return (
        <main>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
        )
            : (<p>The list is empty</p>)}
        </main>
    )
}

export default Content