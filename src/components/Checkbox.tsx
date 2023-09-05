import circle from './circle.svg'
import styled from 'styled-components'

export const Checkbox = (p: { checked: boolean; onChange: () => void }) => (
  <Input_Checkbox id='check' type='checkbox' checked={p.checked} onChange={p.onChange} />
)

const Input_Checkbox = styled.input`
  appearance: none;
  border: 1px solid ${p => p.theme.colors.grey300};
  border-radius: 50%;
  cursor: default;
  width: 32px;
  height: 32px;
  margin: 0 1.5rem;
  &:checked {
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${circle});
  }
`
