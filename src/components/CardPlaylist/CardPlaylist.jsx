import { Card, CardImage } from './Styles'
import { useNavigate } from "react-router-dom";
import { goToDetailsPlaylistPage } from '../../routes/Coordinator';

export const CardPlaylist = (props) => {

    const urlImage = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgDcn1wSszi1yo3T2ublYsIGNPQ8qKNUuUeioUtfhb9wfvTXsn_hj4OI97xbZ3ykuVs9-FtdqnVS0_wUbA8awyKWTkMcuJKd7IEOZDNFBrCWIakgAxe6gebODARGYfbE31sZWVPkMzZC6NIekQwgFXkVbYjvE0SUtZirxGta_SVs584EU4K2D5ndY8Yw/s3000/EK_Album%20Capa.jpg'
    const navigate = useNavigate()

    const goPlaylistDetails = () => {
        goToDetailsPlaylistPage(navigate, props.infoPlaylist._id)
    }
    
    return(
        <Card onClick={goPlaylistDetails}>
            <CardImage>
                <img src={urlImage} alt="Icon" />
            </CardImage>
            <h2><b>{props.infoPlaylist._name}</b></h2>
            <h3>{props.infoPlaylist._description}</h3>
        </Card>
    )
}