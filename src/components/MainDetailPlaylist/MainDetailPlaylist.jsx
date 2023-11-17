import { urlImage } from '../../constants/urls'
import { ContainerTitle, ContainerNavBar } from './Styles'

export const MainDetailPlaylist = () => {
    
    return(
        <>  
            <ContainerTitle>
                <div>
                    <img src={urlImage} alt="icon-playlist" />
                </div>
                <div>
                    <p>Playlist</p>
                    <h1>My Playlist</h1>
                </div>
            </ContainerTitle>
            <ContainerNavBar>
                <div>
                    <button>Player</button>
                    <button>Download</button>
                    <button>Mais</button>
                </div>
                <div>
                    <input type="text" placeholder="Pesquisa" />
                </div>
            </ContainerNavBar>
        </>
    )
}