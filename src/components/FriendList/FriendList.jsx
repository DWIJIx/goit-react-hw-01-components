import { FriendListItem } from "./FriendListItem"
import PropTypes from 'prop-types'
import {List} from './Friend.styled'


export const FriendList = ({ friends }) => {
    return (
        <List>
            {friends.map(oneFriend => (
                <div key = {oneFriend.id}>
                    <FriendListItem friend={oneFriend} />
                </div>
            ))
            }
        </List>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    }))
}