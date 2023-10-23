import {MediaCard, VideoThumbnail} from '@shopify/polaris';
import {VerticalStack} from '@shopify/polaris';

import './MediaCard.css'




export default function MediaCardVideo({title ,district ,coutnry, entity, entityUrl, desc, thumbnailUrl}) {
  return (
    
    <MediaCard portrait className="mediaCardVideo">
        <VideoThumbnail videoLength={80} 
         thumbnailUrl={thumbnailUrl}
          onClick={() => console.log('clicked')}/>
        <VerticalStack gap="0" className="mediaCardVideo__text">
            <h1>{title}</h1>
            <h2>{district}, {coutnry} &bull; <a href={entityUrl}>{entity}</a>  </h2>
            <p>{desc}</p>
        </VerticalStack>
    </MediaCard>
  );
}

