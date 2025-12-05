import { useState, useEffect, useCallback } from 'react';
import { getStoredToken } from '../utils/spotify';

declare global {
  interface Window {
    onSpotifyWebPlaybackSDKReady: () => void;
    Spotify: any;
  }
}

export const useSpotifyPlayer = () => {
  const [player, setPlayer] = useState<any>(null);
  const [deviceId, setDeviceId] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const token = getStoredToken();
    console.log('useSpotifyPlayer: Checking for token...', token ? 'Found' : 'Not found');
    if (!token) return;

    // Load Spotify Web Playback SDK
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;
    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      console.log('Spotify Web Playback SDK ready, initializing player...');
      const spotifyPlayer = new window.Spotify.Player({
        name: 'Carter Klein Portfolio Player',
        getOAuthToken: (cb: (token: string) => void) => {
          console.log('Player requesting OAuth token');
          cb(token);
        },
        volume: 0.8,
      });

      // Error handling
      spotifyPlayer.addListener('initialization_error', ({ message }: any) => {
        console.error('Initialization Error:', message);
      });

      spotifyPlayer.addListener('authentication_error', ({ message }: any) => {
        console.error('Authentication Error:', message);
      });

      spotifyPlayer.addListener('account_error', ({ message }: any) => {
        console.error('Account Error:', message);
      });

      spotifyPlayer.addListener('playback_error', ({ message }: any) => {
        console.error('Playback Error:', message);
      });

      // Ready
      spotifyPlayer.addListener('ready', ({ device_id }: any) => {
        console.log('Ready with Device ID', device_id);
        setDeviceId(device_id);
        setIsReady(true);
      });

      // Not Ready
      spotifyPlayer.addListener('not_ready', ({ device_id }: any) => {
        console.log('Device ID has gone offline', device_id);
        setIsReady(false);
      });

      // Player state changed
      spotifyPlayer.addListener('player_state_changed', (state: any) => {
        if (!state) return;
        setIsPlaying(!state.paused);
        setIsPaused(state.paused);
      });

      spotifyPlayer.connect();
      setPlayer(spotifyPlayer);
    };

    return () => {
      if (player) {
        player.disconnect();
      }
    };
  }, []);

  const play = useCallback(
    async (playlistUri?: string) => {
      const token = getStoredToken();
      if (!token || !deviceId) {
        console.log('Cannot play: missing token or device');
        return;
      }

      console.log('Starting playback...', { playlistUri, deviceId });

      const body = playlistUri
        ? {
            context_uri: playlistUri,
            offset: { position: Math.floor(Math.random() * 50) }, // Random starting track
          }
        : {};

      try {
        const response = await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
          method: 'PUT',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.error('Playback failed:', response.status, errorData);

          // If 403/404, the device might not be active. Try transferring playback first.
          if (response.status === 403 || response.status === 404) {
            console.log('Device not active, transferring playback...');
            await fetch(`https://api.spotify.com/v1/me/player`, {
              method: 'PUT',
              body: JSON.stringify({ device_ids: [deviceId], play: true }),
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
            });

            // Wait a moment for transfer, then try playing again
            await new Promise(resolve => setTimeout(resolve, 500));
            await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
              method: 'PUT',
              body: JSON.stringify(body),
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
            });
          }
        }

        // Enable shuffle
        await fetch(`https://api.spotify.com/v1/me/player/shuffle?state=true&device_id=${deviceId}`, {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('Playback started successfully');
      } catch (error) {
        console.error('Error starting playback:', error);
      }
    },
    [deviceId]
  );

  const pause = useCallback(async () => {
    if (player) {
      console.log('Pausing playback...');
      await player.pause();
    }
  }, [player]);

  const resume = useCallback(async () => {
    if (player) {
      console.log('Resuming playback...');
      await player.resume();
    }
  }, [player]);

  const togglePlay = useCallback(
    async (playlistUri?: string) => {
      console.log('Toggle play:', { isPlaying, isPaused });
      if (isPlaying) {
        await pause();
      } else if (isPaused) {
        // If paused, resume instead of starting fresh
        await resume();
      } else {
        // First time playing - use Web API to start context
        await play(playlistUri);
      }
    },
    [isPlaying, isPaused, play, pause, resume]
  );

  return {
    player,
    deviceId,
    isReady,
    isPlaying,
    isPaused,
    play,
    pause,
    togglePlay,
  };
};
