import styled from "styled-components";

export const Container = styled.div`
 
    border-radius: 20px;

    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    flex-direction: column;
   

    * {
        color: #1f1f1f;
        font-size: 16px;
        font-weight: 600;
    }

    .resume {
        display: grid;
       grid-gap: 10px 30%;
        grid-template-areas: 
        "title title"
        "itens price"
        "delivery price-delivery"
        ;

        .title {
            grid-area: title;   
            font-size: 24px;
            font-weight: 700;
            background-color: #484848;
            color: #fff;
            padding: 10px;
            text-align: center;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;

        }

        .itens {
            grid-area: itens;
            padding-left: 20px;
        }

        .price {
            grid-area: price;
             padding-right: 20px;
        }

        .delivery {
            grid-area: delivery;
             padding-left: 20px;
        }

        .price-delivery {
            grid-area: price-delivery;
             padding-right: 20px;
        }

    }

    .total {
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #dddddd;
        padding: 20px;

          * {
        color: #1f1f1f;
        font-size: 16px;
        font-weight: 800;
        
    }
    }
`;