import React from 'react';
import MusicPreview from './MusicPreview';

function Tocar() {
  const exampleTrackId = '5TxRUOsGeWeRl3xOML59Ai'; // Substitua por um ID de música válido do Spotify.

  return (
    <div>
      <h1>Prévia da Música</h1>
      <MusicPreview trackId={exampleTrackId} />
    </div>
  );
}

export default Tocar;
