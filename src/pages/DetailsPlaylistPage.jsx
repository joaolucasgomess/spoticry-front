
import { useParams } from "react-router-dom"

export const DetailsPlaylistPage = () => {

    const pathParams = useParams()

    return(
        <>
            <p>Aqui você vê os detalhes da playlist: {pathParams.playlistId}</p>
            {
                //TODO
            }
        </>
    )
}