import { Form } from './components/Form'
import { TodoStateContextProvider } from './components/Form'
import styled from 'styled-components'

export const App = () => {
  return (
    <TodoStateContextProvider>
      <Div_ToDoWrapper>
        <H1_Heading>ToDo App</H1_Heading>
        <Div_TodoList>
          <Form />
        </Div_TodoList>
      </Div_ToDoWrapper>
    </TodoStateContextProvider>
  )
}

const Div_TodoList = styled.div`
  display: flex;
  align-items: center;
  color: ${p => p.theme.colors.black100};
  background-color: ${p => p.theme.colors.white};
  font-size: 1.5rem;
  font-weight: ${p => p.theme.fontWeights.light};
  width: 530px;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
`
const Div_ToDoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`
const H1_Heading = styled.h1`
  font-weight: ${p => p.theme.fontWeights.thin};
  margin: 20px;
  font-size: 6rem;
  color: ${p => p.theme.colors.white};
`
