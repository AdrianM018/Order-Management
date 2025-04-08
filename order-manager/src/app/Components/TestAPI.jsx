async function getArtworks() {
  const res = await fetch('https://api.artic.edu/api/v1/artworks');
  
  if (!res.ok) {
    throw new Error('Failed to fetch artworks');
  }
  
  return res.json();
}

export default async function ArtworksPage() {
  const data = await getArtworks();
  const artworks = data.data || [];
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Art Institute of Chicago Artworks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artworks.map(artwork => (
          <div key={artwork.id} className="border rounded-lg p-4 shadow-sm">
            <h2 className="text-xl font-semibold">{artwork.title}</h2>
            <p>Artist: {artwork.artist_title || 'Unknown'}</p>
            <p>Date: {artwork.date_display || 'Unknown'}</p>
            {artwork.image_id && (
              <img 
                src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`}
                alt={artwork.title}
                className="mt-3 w-full rounded"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}