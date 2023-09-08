import { TouchableOpacityProps } from 'react-native'
import { HandleIconContainer, AddIcon, EditIcon, DeleteIcon } from './HandleIcon.styles'

export type HandleIconType =  'add' | 'edit' | 'delete'

interface HandleIconProps extends TouchableOpacityProps{
    type: HandleIconType
}

export const HandleIcon = ({type, ...rest}:HandleIconProps) => {
  return (
    <HandleIconContainer {...rest}>
        {type === 'add' && <AddIcon />}
        {type === 'edit' && <EditIcon />}
        {type === 'delete' && <DeleteIcon />}
    </HandleIconContainer>
  )
}
