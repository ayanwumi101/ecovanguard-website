import client from '@sanity/client'

export default client({
    projectId: 'vyd7qavh',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2022-07-29'
})