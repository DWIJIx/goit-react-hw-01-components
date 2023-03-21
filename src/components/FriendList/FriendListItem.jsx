import PropTypes from 'prop-types'
import {Item, Name, Status} from './Friend.styled'

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
    return (
        <Item>
                <Status isOnline={isOnline}></Status>
                <img src={avatar} alt={name} width="48" />
                <Name>{name}</Name>
        </Item>
    )   
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    })
}