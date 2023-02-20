import styled from 'styled-components';

export const StyledStatistics = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    max-width: 400px;
    background-color: ${props => { return `${props.theme.colors.white}` }};
    border-radius: 10px;
`

export const StyledStatsTitle = styled.h2`
color: ${props => { return `${props.theme.colors.gray}` }};
`

export const StyledStatList = styled.ul`
 display: flex;
 margin: 0;
 width: 100%;

 li {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    text-shadow: white 1px 0 10px;
 }

    li:first-child {
        border-bottom-left-radius: 10px;
    }
    
    li:last-child{
    border-bottom-right-radius: 10px;
    }

    & .percentage {
        font-weight: 700;
    }
`;