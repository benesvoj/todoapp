import { Checkbox } from './Checkbox'
import { generateUuid } from '../utils/generateUuid'
import { genericHookContextBuilder } from './ContextBuilder'
import { useContext, useState } from 'react'
import { useLocalStorage } from '../utils/useLocalStorage'
import styled from 'styled-components'

type Task = {
  id: string
  name: string
  completed: boolean
}

const filterMap = {
  all: () => true,
  active: (task: Task) => !task.completed,
  completed: (task: Task) => task.completed,
}

const useTodoState = () => {
  const [name, setName] = useState('')
  const [tasks, setTasks] = useLocalStorage('tasks:list', [] as Task[])
  const [filter, setFilter] = useLocalStorage('task:filter', 'all' as keyof typeof filterMap)

  const itemsLeft = tasks.filter(task => !task.completed).length

  const handleDelete = (id: string) => setTasks(tasks.filter(task => task.id !== id))

  const handleDeleteChecked = () => setTasks(tasks.filter(task => !task.completed))

  const handleCheck = (id: string) =>
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)))

  const checkIfSelected = tasks.find(task => task.completed)

  const filterOptions = Object.keys(filterMap) as (keyof typeof filterMap)[]

  return {
    name,
    tasks,
    filter,
    itemsLeft,
    filterMap,
    checkIfSelected,
    filterOptions,
    setName,
    setTasks,
    setFilter,
    handleDelete,
    handleDeleteChecked,
    handleCheck,
  }
}

export const { ContextProvider: TodoStateContextProvider, Context: TodoStateContext } =
  genericHookContextBuilder(useTodoState)

export const Form = () => {
  const logic = useContext(TodoStateContext)
  return (
    <TodoStateContextProvider>
      <form
        onSubmit={e => {
          e.preventDefault()
          const newTask = {
            id: generateUuid(),
            name: logic.name,
            completed: false,
          }
          logic.setTasks(prevTasks => [...prevTasks, newTask])
          logic.setName('')
        }}
      >
        <Input_ToDo
          type='text'
          placeholder='What needs to be done?'
          autoFocus={true}
          required={true}
          maxLength={30}
          value={logic.name}
          onChange={e => logic.setName(e.target.value)}
        />
        <Hr_Divider />
        {logic.tasks.filter(logic.filterMap[logic.filter]).map(task => (
          <div key={task.id}>
            <Div_TaskContainer>
              <Checkbox
                checked={task.completed}
                onChange={() => {
                  logic.handleCheck(task.id)
                }}
              />
              {task.completed ? (
                <Div_Block>
                  <P_StrikeThrough>{task.name}</P_StrikeThrough>
                </Div_Block>
              ) : (
                <Div_Block>
                  <P_Styled>{task.name}</P_Styled>
                </Div_Block>
              )}
              <Button_DltTask type='button' onClick={() => logic.handleDelete(task.id)}>
                +
              </Button_DltTask>
            </Div_TaskContainer>
            <Hr_Divider />
          </div>
        ))}
        <Div_Footer>
          <div>{logic.itemsLeft !== 1 ? `${logic.itemsLeft} items left` : '1 item left'}</div>
          <Div_FilterBtnWrapper>
            {logic.filterOptions.map(option => (
              <Input_FilterBtn
                key={option}
                value={option.charAt(0).toUpperCase() + option.slice(1)}
                type='button'
                onClick={() => logic.setFilter(option)}
              />
            ))}
          </Div_FilterBtnWrapper>
          {logic.checkIfSelected ? (
            <Button_ClearCompleted type='button' onClick={logic.handleDeleteChecked}>
              Clear completed
            </Button_ClearCompleted>
          ) : null}
        </Div_Footer>
      </form>
    </TodoStateContextProvider>
  )
}

const Div_Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
`
const Input_FilterBtn = styled.input`
  color: ${p => p.theme.colors.grey200};
  font-size: inherit;
  text-align: right;
  font-weight: ${p => p.theme.fontWeights.light};
  background: none;
  cursor: pointer;
  border: 1px solid ${p => p.theme.colors.grey400};
  padding: 0.2rem 0.5rem;
  margin: 0.3rem;
  border-radius: 4px;
  &:hover {
    border: 1px solid #cc9a9a;
  }
`
const Button_ClearCompleted = styled.button`
  color: ${p => p.theme.colors.grey200};
  font-size: inherit;
  text-align: right;
  font-weight: ${p => p.theme.fontWeights.light};
  background: none;
  border: 0;
  cursor: pointer;
`
const P_StrikeThrough = styled.p`
  text-decoration: line-through;
`
const P_Styled = styled.p`
  align-items: flex-start;
`
const Button_DltTask = styled.button`
  color: #cc9a9a;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: ${p => p.theme.fontWeights.thin};
  transform: rotate(45deg);
  user-select: none;
  outline: none;
  width: 32px;
  height: 32px;
  font-size: 2.2rem;
  margin: 0 1rem 0.25rem 1rem;
`
const Div_TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  font-size: 1.5rem;
`
const Div_FilterBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Div_Footer = styled.div`
  height: 50px;
  display: grid;
  align-items: center;
  color: ${p => p.theme.colors.grey200};
  font-weight: ${p => p.theme.fontWeights.light};
  width: 500px;
  font-size: 1.5rem;
  margin: 0.9rem 1.3rem;
  grid-template-rows: 100%;
  grid-template-columns: 1fr 2fr 1fr;
  column-gap: 10px;
`
const Input_ToDo = styled.input`
  display: flex;
  align-items: center;
  font-weight: ${p => p.theme.fontWeights.light};
  height: 40px;
  border: none;
  width: 500px;
  margin: 1rem 0;
  font-size: 1.5rem;
  padding-left: 55px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-style: italic;
    color: ${p => p.theme.colors.grey400};
  }
`
const Hr_Divider = styled.hr`
  background-color: ${p => p.theme.colors.grey400};
  border: none;
  height: 1px;
`
