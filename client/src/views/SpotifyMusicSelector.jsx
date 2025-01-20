import React, { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const SpotifyMusicSelector = ({ onMusicSelect, selectedTrack, defaultTrack }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [accessToken, setAccessToken] = useState(null);
    const [isSearching, setIsSearching] = useState(false);
    const id = localStorage.getItem("id_usuario");
  
    const CLIENT_ID = '429cb956ed234417b9a5bc3f34c69aa8'; // Substitua pelo seu Client ID
    const REDIRECT_URI = `http://localhost/perfil/${id}`;
  
    useEffect(() => {
      // Check for token in URL hash after Spotify auth
      const hash = window.location.hash;
      if (hash) {
        const token = hash
          .substring(1)
          .split('&')
          .find(elem => elem.startsWith('access_token'))
          ?.split('=')[1];
  
        if (token) {
          setAccessToken(token);
          window.location.hash = '';
        }
      }
    }, []);
  
    const handleSpotifyAuth = () => {
      const scope = 'user-read-private user-read-email';
      const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(scope)}`;
      window.location.href = authUrl;
    };
  
    const searchSpotify = async () => {
      if (!searchQuery.trim() || !accessToken) return;
  
      setIsSearching(true);
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/search?q=${encodeURIComponent(searchQuery)}&type=track&limit=5`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
  
        const data = await response.json();
        setSearchResults(data.tracks.items);
      } catch (error) {
        console.error('Erro na busca:', error);
      } finally {
        setIsSearching(false);
      }
    };
  
    // Determina qual track exibir - seja o selectedTrack do estado ou o defaultTrack do perfil
    const displayTrack = selectedTrack || defaultTrack;
  
    return (
      <Card style={{ width: '132px', height: '130px', padding: '10px' }}>
        {displayTrack ? (
          // Exibe a música selecionada
          <div className="d-flex flex-column align-items-center h-100">
            <img 
              src={displayTrack.album_image || displayTrack.album?.images[1]?.url} 
              alt={displayTrack.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div className="text-center mt-1" style={{ fontSize: '0.7rem' }}>
              <strong>{displayTrack.name}</strong>
              <div>{displayTrack.artist || (displayTrack.artists && displayTrack.artists[0].name)}</div>
            </div>
            {!accessToken && (
              <Button 
                variant="outline-success"
                onClick={handleSpotifyAuth}
                size="sm"
                className="mt-1"
                style={{ fontSize: '0.6rem', padding: '2px 4px' }}
              >
                Trocar música
              </Button>
            )}
          </div>
        ) : !accessToken ? (
          // Botão de conectar com Spotify
          <Button 
            variant="success" 
            onClick={handleSpotifyAuth}
            className="d-flex align-items-center justify-content-center"
            style={{ fontSize: '0.8rem', height: '100%' }}
          >
            <i className="bi bi-music-note" style={{ marginRight: '4px' }}></i>
            Conectar Spotify
          </Button>
        ) : (
          // Interface de busca
          <div className="d-flex flex-column h-100">
            <Form.Control
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && searchSpotify()}
              style={{ fontSize: '0.8rem', marginBottom: '5px' }}
            />
            <Button 
              variant="primary" 
              onClick={searchSpotify}
              disabled={isSearching}
              style={{ fontSize: '0.8rem' }}
            >
              {isSearching ? '...' : 'Buscar'}
            </Button>
            
            {searchResults.length > 0 && (
              <div className="position-absolute mt-2" style={{ 
                top: '100%', 
                left: 0, 
                width: '200px', 
                zIndex: 1000,
                backgroundColor: 'white',
                border: '1px solid #ddd',
                borderRadius: '4px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                {searchResults.map((track) => (
                  <div 
                    key={track.id}
                    className="d-flex align-items-center p-2"
                    style={{ 
                      cursor: 'pointer',
                      borderBottom: '1px solid #eee'
                    }}
                    onClick={() => onMusicSelect(track)}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                  >
                    <img 
                      src={track.album.images[2]?.url} 
                      alt={track.name}
                      style={{ width: '30px', height: '30px', marginRight: '8px' }}
                    />
                    <div style={{ fontSize: '0.8rem' }}>
                      <div style={{ fontWeight: 'bold' }}>{track.name}</div>
                      <div style={{ fontSize: '0.7rem', color: '#6c757d' }}>{track.artists[0].name}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </Card>
    );
  };
  
  export default SpotifyMusicSelector;