import styled from 'styled-components/macro';

export const Info = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h2 {
        justify-self: center;
        align-self: center;
    }
    ol {
        list-style: decimal;
        margin-left: 3rem;
        padding-right: 3.5rem;
        li {
            margin-bottom: 0.5rem;
        }
    }
`;
