import styled from 'styled-components'
import { PRIMARYCOLORS } from './PrimaryColors'

const MainContainer = styled.div `
    font-family: 'Montserrat';
    color: ${PRIMARYCOLORS.kasa};
    font-size: 16px;
    h2 {
        margin: 0;
        font-weight: 500;
        font-size: 26px;
    }
    h3 {
        margin: 0;
        font-weight: 400;
        font-size: 16px;
    }
    a {
        color: ${PRIMARYCOLORS.kasa};
        text-decoration: none;
    }
    span {
        color: ${PRIMARYCOLORS.white}
        
    }
    p {
        margin: 0;
    }
    ul {
        margin: 0;
        padding: 0;
    }
    li {
        list-style: none;
        margin: 0.5rem;
        padding: 0;
    }
`

export default MainContainer