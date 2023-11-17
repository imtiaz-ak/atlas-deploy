import { MediaCard, VideoThumbnail } from '@shopify/polaris';
import { VerticalStack } from '@shopify/polaris';

import './EntityCard.css'




export default function EntityCard({ title, address, district, country }) {
    return (

        <MediaCard portrait className="mediaCardVideo">
            <VerticalStack gap="0" className="mediaCardVideo__text">
                <h1>{title}</h1>
                <h2>Address: {address}</h2>
                <h2>Operates in {district}</h2>
                <h2>Based in {country}</h2>
            </VerticalStack>
        </MediaCard>
    );
}

