// @flow
import axios from 'axios';
import { GDevelopGamesPreview } from './ApiConfigs';
import { getSignedUrl } from './Usage';

export type UploadedObject = {|
  Key: string,
  Body: string,
  ContentType: 'text/javascript' | 'text/html',
|};

export const uploadObject = (params: UploadedObject): Promise<any> => {
  return getSignedUrl({
    uploadType: 'preview',
    key: params.Key,
    contentType: params.ContentType,
  }).then(({ signedUrl }) =>
    axios.put(signedUrl, params.Body, {
      headers: {
        'Content-Type': params.ContentType,
      },
    })
  );
};

export const getBaseUrl = () => {
  return GDevelopGamesPreview.options.destinationBucketBaseUrl;
};
