import * as C from './styles'
import Theme from '../../components/Theme'
import { useApp } from '../../provider/AppProvider'
import MovieCard from '../../components/MovieCard'

const FavoriteMovies = () => {
    const { favoriteMovies } = useApp()   

    return (
        <Theme>
            <C.Container>
            <C.Title>Lista de Favoritos</C.Title>
            <C.List>
                {favoriteMovies.map(( movie ) => (
                    <MovieCard 
                        key={movie.id} 
                        movie={movie}
                        favorite={true}
                    />
                ))}
            </C.List>
            </C.Container>
        </Theme>
    )
}

export default FavoriteMovies