import {createClient} from '@sanity/client';
import imagUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: '2n9sa5mu',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-05-03',
  })

  const builder = imagUrlBuilder(client);
  export const urlFor = (source) => builder.image(source);

  export default client;