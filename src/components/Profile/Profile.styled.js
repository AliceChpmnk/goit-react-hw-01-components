import styled from 'styled-components';

export const StyledProfile = styled.div`
margin-bottom: 50px;
background-color: ${props => { return `${props.theme.colors.white}` }};
border-radius: 10px;
max-width: 250px;
margin-left: auto;
margin-right: auto;
color: ${props => { return `${props.theme.colors.black}` }};
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

& .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
}

& .avatar {
    width: 100px;
    margin-top: 30px;
    margin-bottom: 30px;
    border-radius: 50px;
    background-color: ${props => { return `${props.theme.colors.green}` }};
}

 p:not(:last-child) {
    margin-bottom: 8px;
 }

 & .name {
    font-size: 16px;
    font-weight: 700;
 }

 & .tag, & .location {
    color:  ${props => { return `${props.theme.colors.gray}` }};
 }
`;

export const StyledStats = styled.ul`
    display: flex;
    margin: 0;

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        padding: 20px 10px;
        background-color: ${props => { return `${props.theme.colors.lightGray}` }};
        border-top: solid 1px ${props => { return `${props.theme.colors.borderGray}` }};
    }

    li:not(:last-child) {
        border-right: solid 1px ${props => { return `${props.theme.colors.borderGray}` }};
    }

    li:first-child {
        border-bottom-left-radius: 10px;
    }
    
    li:last-child{
    border-bottom-right-radius: 10px;
}

    & .label {
        font-size: 12px;
        color:  ${props => { return `${props.theme.colors.gray}` }};
    }

    & .quantity {
        font-size: 16px;
        font-weight: 700;
        color:  ${props => { return `${props.theme.colors.black}` }};
    }
`;