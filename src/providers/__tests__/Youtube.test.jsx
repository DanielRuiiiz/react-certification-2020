import getVideos from '../Youtube';

const mockVideo = {
  kind: 'mockedyoutube',
  etag: 'mockedetag',
  id: { kind: 'mockedVideo', videoId: '123' },
  snippet: { title: 'hi', description: 'hello', thumbnails: { medium: { url: 'url' } } },
};

describe('getVideos test', () => {
  jest.mock('../Youtube', () => {
    return {
      getVideos: jest.fn(() => {
        return [mockVideo];
      }),
    };
  });
  it('retrieves a list of videos', async () => {
    const res = await getVideos();
    expect(Array.isArray(res.data.items)).toBeTruthy();
  });
});
