import ListStyled from './styles'
import { todoMock } from '../../../data/todo_mock';
import Item from '../Item';

const List = () => {
  return (
    <ListStyled>
      {
        todoMock.length > 0 ? (
          todoMock.map(todoItem => <Item todo={todoItem} />)
        ) : <h1> No Data </h1>
      }
    </ListStyled>
  )
}

export default List;