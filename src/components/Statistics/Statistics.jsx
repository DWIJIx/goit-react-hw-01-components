import PropTypes from 'prop-types'
import { Card, Title, StatsList, StatsItem} from './Statistics.styled'

export const Statistics = ({ title, stats }) => {
    return (
        <Card class="statistics">
            <Title class="title">{title}</Title>

            <StatsList class="stat-list">
            {stats.map(stat => (
                <StatsItem class="item" key={stat.id}>
                    <span class="label">{stat.label}</span>
                    <span class="percentage">{stat.percentage}%</span>
                </StatsItem>
            ))}
            
          </StatsList>
        </Card>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }))
    
    
    
}