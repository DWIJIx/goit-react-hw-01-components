import { FriendListItem } from "./FriendListItem"
import PropTypes from 'prop-types'


export const FriendList = ({ friends }) => {
    return (
        <ul class="friend-list">
            {friends.map(oneFriend => (
                <div key = {oneFriend.id}>
                    <FriendListItem friend={oneFriend} />
                </div>
                
                
            ))
            }
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    }))
}