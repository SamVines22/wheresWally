function getImageUrl(name) {
    const gimp = new URL(name, import.meta.url).href;

    
    return gimp;
}

export default getImageUrl;