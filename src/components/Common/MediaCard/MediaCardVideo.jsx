import { MediaCard, VideoThumbnail } from '@shopify/polaris';
import { VerticalStack } from '@shopify/polaris';

import './MediaCard.css'




export default function MediaCardVideo({ title, district, country, thumbnailUrl, url }) {
  return (
    <a href={url}>
      <MediaCard portrait className="mediaCardVideo">
        {/* <VideoThumbnail videoLength={80}
        thumbnailUrl={thumbnailUrl}
        onClick={() => console.log('clicked')} /> */}
        <img src={thumbnailUrl} width={'100%'} />
        <VerticalStack gap="0" className="mediaCardVideo__text">
          <h1>{title}</h1>
          <h2>{district}, {country}</h2>
        </VerticalStack>
      </MediaCard>
    </a>
  );
}

