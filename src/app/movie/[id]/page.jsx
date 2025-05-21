import Image from 'next/image';

const MoviePage = async ( { params} ) => {
    const { id } = await params;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`);
    const data = await res.json();

  return (
    <div className="w-full">
      <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6 '>
        <Image
          className="rounded-lg "
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path}`}
          alt={data.title}
          width={500}
          height={300}
          style={{ maxWidth: '100%', height: '100%' }}
        />
        <div className='p-2'>
            <h2 className="text-lg font-bold mb-3">{data.title ||  data.name}</h2>
            <p className='text-lg mb-3'>{data.overview}</p>
            <p className='mb-3'>
                <span className='font-semibold mr-1'>Date release: </span>
                {data.release_date || data.first_air_date}
            </p>
            <p className='mb-3 '>
                <span className='font-semibold mr-1'>Rating:</span>
                {data.vote_average}
            </p>
        </div>
      </div>
    </div>
  )
}

export default MoviePage
 