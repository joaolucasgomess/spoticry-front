import { getArtistById } from '../../services/artist'
import { useState, useEffect } from 'react'
import { Loading } from '../Loading/Loading'
import { TableListSong, Title, LineTitle, ContainerTable } from './Styles'
import { urlImage } from '../../constants/urls'

export const ListSong = (props) => {
    const [artist, setArtist] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        getArtistsFromTracks()
    },[])

    const getArtistsFromTracks = async () => {
        const artistPromises = []

        for(const track of props.playlistTracks){
            artistPromises.push(getArtistById(track._idArtist))
        }

        const result = await Promise.all(artistPromises)
        const dataFromResult =  result.map((res) => res.data)

        setArtist(dataFromResult)
        console.log(artist)
        setLoading(false)
    }

    return(
        <ContainerTable>
            {!isLoading? 
                <>
                    <TableListSong>
                        <tr>
                            <Title index="true"><p>#</p></Title>
                            <Title><p>Título</p></Title>
                            <Title><p>Artista</p></Title>
                            <Title><p>URL</p></Title>
                        </tr>
                        {
                            props.playlistTracks.map((track) => (
                                <tr key={track._url}>
                                    <td><p>1</p></td>
                                    <LineTitle>
                                        <img src={urlImage} alt="song-icon" width="50vw"/>
                                        <p>{track._name}</p>
                                    </LineTitle>
                                    <td><p>{artist._name}</p></td>
                                    <td><a href={track._url}>{track._url}</a></td>
                                </tr>  
                            ))
                        }
                    </TableListSong>
                </>
            : <Loading/>}
        </ContainerTable>
    )
}