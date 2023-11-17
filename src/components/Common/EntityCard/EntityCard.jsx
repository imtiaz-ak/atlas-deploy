import { MediaCard, VideoThumbnail } from '@shopify/polaris';
import { VerticalStack } from '@shopify/polaris';

import './EntityCard.css'




export default function EntityCard({ title, district, country, thumbnailUrl }) {
    return (

        <MediaCard portrait className="mediaCardVideo">
            <VideoThumbnail videoLength={80}
                thumbnailUrl={thumbnailUrl}
                onClick={() => console.log('clicked')} />
            <VerticalStack gap="0" className="mediaCardVideo__text">
                <h1>{title}</h1>
                <h2>{district}, {country}</h2>
            </VerticalStack>
        </MediaCard>
    );
}

