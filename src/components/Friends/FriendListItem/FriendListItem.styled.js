import styled from 'styled-components';

export const StyledFriendListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: ${props => { return `${props.theme.colors.white}` }};
    border-radius: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    & .avatar {
        margin-right: 8px;
    }

    & .status {
        display: inline-block;
        margin-right: 8px;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        background-color: ${props => { return `${props.theme.colors.red}` }};
    }

    & .online {
            background-color: ${props => { return `${props.theme.colors.green}` }};
        }
`