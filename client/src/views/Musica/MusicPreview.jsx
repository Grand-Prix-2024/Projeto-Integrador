import React, { useEffect, useState } from 'react';

const CLIENT_ID = '5d88238b5faa421fb6b5b548ebed7149'; // Substitua pelo seu client ID do Spotify
const REDIRECT_URI = 'http://localhost:3000/tocar'; // Substitua pelo URI de redirecionamento configurado no painel do Spotify
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'token';

const MusicPreview = ({ trackId }) => {
  const [trackData, setTrackData] = useState(null);
  const [token, setToken] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef(null);

  useEffect(() => {
    // Verifica se há um token no URL
    const hash = window.location.hash;
    let storedToken = localStorage.getItem('spotifyAccessToken');

    if (!storedToken && hash) {
      const tokenFromHash = hash
        .substring(1)
        .split('&')
        .find(elem => elem.startsWith('access_token'))
        .split('=')[1];

      window.location.hash = '';
      localStorage.setItem('spotifyAccessToken', tokenFromHash);
      storedToken = tokenFromHash;
    }

    setToken(storedToken);

    if (trackId && storedToken) {
      fetchTrackData(storedToken);
    }
  }, [trackId]);

  const fetchTrackData = async (token) => {
    try {
      const response = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setTrackData(data);
      } else {
        console.error('Erro ao buscar detalhes da música:', response.status);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        if (trackData.preview_url) {
          audioRef.current.src = trackData.preview_url;
          audioRef.current.play().catch(error => {
            console.error('Erro ao tentar reproduzir a prévia:', error);
          });
          setIsPlaying(true);
        } else {
          alert('A prévia da música não está disponível.');
        }
      }
    }
  };

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('spotifyAccessToken');
  };

  if (!token) {
    return (
      <div style={styles.authContainer}>
        <h2>Conecte-se ao Spotify</h2>
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          style={styles.loginButton}
        >
          Login com Spotify
        </a>
      </div>
    );
  }

  if (!trackData) {
    return <p>Carregando música...</p>;
  }

  return (
    <div style={styles.container}>
      <img
        src={trackData.album.images[0]?.url}
        alt={trackData.name}
        style={styles.thumbnail}
      />
      <div style={styles.details}>
        <h3>{trackData.name}</h3>
        <p>{trackData.artists.map(artist => artist.name).join(', ')}</p>
        <audio
          ref={audioRef}
          src={trackData.preview_url}
          onEnded={() => setIsPlaying(false)}
        />
        <button onClick={handlePlayPause} style={styles.button}>
          {isPlaying ? 'Pausar' : 'Tocar'}
        </button>
        <button onClick={handleLogout} style={styles.logoutButton}>
          Sair do Spotify
        </button>
      </div>
    </div>
  );
};

const styles = {
  authContainer: {
    textAlign: 'center',
    marginTop: '50px',
  },
  loginButton: {
    padding: '10px 20px',
    backgroundColor: '#1DB954',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '25px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    maxWidth: '400px',
    margin: '10px auto',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  thumbnail: {
    width: '80px',
    height: '80px',
    borderRadius: '8px',
    objectFit: 'cover',
    marginRight: '10px',
  },
  details: {
    flex: 1,
    textAlign: 'left',
  },
  button: {
    marginTop: '10px',
    padding: '5px 10px',
    backgroundColor: '#1DB954',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  logoutButton: {
    marginTop: '10px',
    padding: '5px 10px',
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default MusicPreview;
