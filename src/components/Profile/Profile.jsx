import PropTypes from 'prop-types'
import { Card, Img, Description, Name, Tag, Location, StatsList, StatsItem } from './Profile.styled'

export const Profile = ({username, tag, location, avatar, stats}) => {
    // console.log(props)
    return (
        <Card>
            <Description>
                <Img
                    src={avatar}
                    alt={username}
                    class="avatar"
                />
                <Name>{username}</Name>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </Description>

            <StatsList>
                <StatsItem>
                    <span class="label">Followers</span>
                    <span class="quantity">{stats.followers}</span>
                </StatsItem>
                <StatsItem>
                    <span class="label">Views</span>
                    <span class="quantity">{stats.views}</span>
                </StatsItem>
                <StatsItem>
                    <span class="label">Likes</span>
                    <span class="quantity">{stats.likes}</span>
                </StatsItem>
            </StatsList>
        </Card>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,

    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views:PropTypes.number.isRequired,
        likes:PropTypes.number.isRequired,
    }),

}
