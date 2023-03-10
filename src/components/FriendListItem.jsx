
export const FriendListItem = ({ friend: { avatar, name, isOnline, id } }) => {
    return (
        <li class="item" key={id}>
                <span class="status">{isOnline}</span>
                <img class="avatar" src={avatar} alt={name} width="48" />
                <p class="name">{name}</p>
        </li>
    )   
}
   