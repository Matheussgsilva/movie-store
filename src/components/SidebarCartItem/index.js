import * as C from './styles'
import { FaTrash } from 'react-icons/fa'

const SidebarCartItem = ({ movie }) => {
    return (
        <C.Container>
            <C.PosterArea src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <C.InfoArea>
                <C.MovieTitle>
                    {movie.title}
                </C.MovieTitle>
                <C.PriceInfoArea>
                    <C.MoviePrice>
                        R$ 12,50
                    </C.MoviePrice>
                    <C.RemoveMovie>
                        <FaTrash />
                    </C.RemoveMovie>
                </C.PriceInfoArea>
            </C.InfoArea>
        </C.Container>
    )
}

export default SidebarCartItem