

import { CategoryCarousel } from "../../components/CategoryCarousel"
import { OffersCarousel } from "../../components/OffersCarousel"
import { Containner, Banner } from "./styles"

export function Home() {
 
    return (
        <main>
            <Banner>
                <h1>Bem vindo(a)!</h1>
            </Banner>
            <Containner>
                <div>
                    <CategoryCarousel />
                    <OffersCarousel />
                </div>
            </Containner>

        </main>

    )
}