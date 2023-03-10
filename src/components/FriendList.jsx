import { FriendListItem } from "./FriendListItem"

export const FriendList = ({ friends }) => {
    return (
        <ul class="friend-list">
            {friends.map(oneFriend => (
                
                <FriendListItem friend={oneFriend} />
                
            ))
            }
        </ul>
    )
}
