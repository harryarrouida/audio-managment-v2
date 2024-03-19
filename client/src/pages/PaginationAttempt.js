import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { useNavigate } from 'react-router-dom';

const FEED_AUDIOS = gql`
  query FeedAudios($offset: Int!, $limit: Int!) {
    feedAudios(offset: $offset, limit: $limit) {
      _id
      title
      date_production
      productors
      nbr_invoice
      nbr_contract
      type_support
      nbr_support
      tech_comments
      quality
      language
      frequency
      synopsis
      type
      commentator
      event_location
      event_date
      sequence
      presenter
      preparation
      format
      version
      speaker
      causerie_reciter
      causerie_location
      quran_reciter
      recite_type
      singer
      interpreter
      composer
      music_writer
      musical_genre
      lyrics
      orchestra
      distribution
      author
      actor
      fiction_writer
      adaptation
    }
  }
`;

export default function PaginationAttempt() {
    const { data, error, loading, fetchMore } = useQuery(FEED_AUDIOS, {
        variables: {
            offset: 0,
            limit: 5
        }
    })

    const navigate = useNavigate()

    const fetch = () => {
        fetchMore({ 
            variables: { 
                offset: data.feedAudios.length,  
                limit: 5
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) return prev;
                return fetchMoreResult; 
            }
        })
    }

    if (error) return <p>Error: {error.message}</p>
    if (loading) return <p>Loading...</p>
    
    return (
        <div>
            {data.feedAudios.map(audio => <li key={audio._id}>{audio.title}</li>)}
            <button onClick={fetch}>Next Page</button>
            <button onClick={() => navigate(-1)}>Prev Page</button> 
        </div>
    )
}