export const getHttp = async(categoria) =>{
    const api = 'deOgmLVImnG5Fmj3Pjt3cYwdcrTkuZRy';
    const limit = 15;
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=${ limit }&api_key=${ api }`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}