import styled from "styled-components";

export const Container = styled.div`
    .carousel-item {
        padding-right: 40px;
    }

    overflow-x: hidden;
    .react-multi-carousel-list{
        overflow: visible;
    }

        .react-multiple-carousel__arrow--right {
    right: 55px;
    top: 10px ;
}

        .react-multiple-carousel__arrow--left {
    left: 15px;
    top: 10px ;
}
    padding-left: 40px;
    padding-bottom: 40px;
       
`;

export const Title = styled.h2`
    font-size: 40px;
    font-weight: 600;
    color: #61a120;
    padding-bottom: 12px;
    position: relative;
    text-align: center ;
    margin-bottom: 80px;
    margin-top: 20px;

    &::after {
        content: '';
        width: 56px;
        height: 4px;
        background: #61a120;
        position: absolute;
        bottom: 0px;
        left: 50%;
        transform: translateX(-50%);
      
    }
`;

export const ContainerItens = styled.div`
    background: url(${props => props.imageUrl}) no-repeat center center;
    background-size: cover;
    flex-direction: column;
    padding: 20px 10px;
    align-items: center;
    width: 100%;
    height: 200px;
    border-radius: 8px;

    p {
        font-size: 18px;
        font-family: 'road rage', sans-serif;    
        color: #fff;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 5px 10px;
        border-radius: 4px;
        margin-top: auto;
    }
`;

