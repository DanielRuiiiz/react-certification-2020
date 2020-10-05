import React from 'react';
import { Grid } from '@material-ui/core';
import VideoList from '../../components/Videos';
import VideoDetails from '../../components/Videos/VideoDetails';

import styled from 'styled-components';

const SelectedVideo = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;
const VideoSelectedDetails = styled(Grid)`
  width: 30%;
  height: 100%;
  position: relative;
  overflow: scroll;
`;

const VideoSelected = ({
  videos,
  selectedVideo,
  handleFavoritesList,
  isFavorite,
  onVideoSelect,
}) => {
  return (
    <SelectedVideo>
      {videos.length > 0 && (
        <VideoDetails
          video={selectedVideo}
          handleFavoritesList={handleFavoritesList}
          isFavorite={isFavorite}
        />
      )}
      {videos.length > 0 ? (
        <VideoSelectedDetails item data-testid="video-selected-details">
          <VideoList videos={videos} onVideoSelect={onVideoSelect} isSelected={true} />
        </VideoSelectedDetails>
      ) : null}
    </SelectedVideo>
  );
};

export default VideoSelected;
