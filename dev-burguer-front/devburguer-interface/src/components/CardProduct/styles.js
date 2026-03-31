import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    padding: 20px;
    border-radius: 9px;
    background-color: #fff;
    cursor: grab;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    position: relative;

    div {
        width: 100%;
        height: 8-px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap: 5px;

        p{
            font-size: 18px;
            font-weight: 700;
            color: #ff8c05;
            line-height: 24px;
            margin-top: 40px;
        }

        strong{
            font-size: 22px;
            font-weight: 800;
            color: #363636;
            line-height: 24px;
        }
    }
`;

export const CardImage = styled.img`
    height: 100px;
   position: absolute;
   top: -40px;
`;
