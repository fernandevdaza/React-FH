

export const getImagen = async() => {

    try {

        const apiKey = '';
        //const apiKey = 'ENzYaWitLCSo88t0G9yhoNgZjHROmDHa';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;
        return url;

    } catch (error) {
        // manejo del error
        //console.error(error)
        return 'No se encontró la imagen';
    }
    
    
    
}



