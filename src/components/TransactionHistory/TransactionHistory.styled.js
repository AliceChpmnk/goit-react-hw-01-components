import styled from 'styled-components';

export const StyledTable = styled.table`
  border-radius: 10px;
  margin-right: auto;
  margin-left: auto;
  width: 600px;

    td, th {
        padding: 8px;
    }

    tr:last-child td:first-child {
    border-bottom-left-radius: 10px;
    }
    
    tr:last-child td:last-child {
    border-bottom-right-radius: 10px;
    }

    tr:first-child th:first-child {
        border-top-left-radius: 10px;
    }

    tr:first-child th:last-child {
        border-top-right-radius: 10px;
    }
`

export const StyledTableHead = styled.thead`
    font-size: 18px;
    color: ${props => { return `${props.theme.colors.white}` }};
    background-color: ${props => { return `${props.theme.colors.purple}` }};

`

export const StyledTableBody = styled.tbody`
    background-color: ${props => { return `${props.theme.colors.white}` }};

    tr:nth-child(odd) {
    background-color: ${props => { return `${props.theme.colors.lightGray}` }};
  }
`