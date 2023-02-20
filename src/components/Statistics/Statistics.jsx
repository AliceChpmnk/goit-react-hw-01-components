import PropTypes from 'prop-types';
import { StyledStatistics, StyledStatsTitle, StyledStatList } from './Statistics.styled';

export function Statistics({ title = false, stats }) {

    const hasTitle = title !== false;
    
    return <StyledStatistics>
        {hasTitle ? (<StyledStatsTitle>{title}</StyledStatsTitle>) : null}
        <StyledStatList>
            {stats.map(({ id, label, percentage }) => {
                return (
                    <li key={id} style={{backgroundColor: `${getRandomColor()}`}}>
                        <span className="label">{label}</span>
                        <span className="percentage">{percentage}%</span>
                    </li>
                )
        })}
        </StyledStatList>
    </StyledStatistics>;
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
    })).isRequired,
}

function getRandomColor() {
    const r = Math.round(Math.random() * 256);
    const g = Math.round(Math.random() * 256);
    const b = Math.round(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}