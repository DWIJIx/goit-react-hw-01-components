import PropTypes from 'prop-types'
import { Card, Title, StatsList, StatsItem} from './Statistics.styled'

export const Statistics = ({ title, stats }) => {
    // console.log(title)
    return (
        <Card>
            {title && <Title>{title}</Title>}

            <StatsList>
            {stats.map(stat => (
                <StatsItem key={stat.id}>
                    <span>{stat.label}</span>
                    <span>{stat.percentage}%</span>
                </StatsItem>
            ))}
            
          </StatsList>
        </Card>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))
    
    
    
}