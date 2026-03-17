function BoardColumn({value , onClick}) {
    return(
    <>
<button onClick={onClick} className="board-colum">{value}</button>
    </>
    )
}

export default BoardColumn;