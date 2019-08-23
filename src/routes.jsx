import React from 'react';
import { Route } from 'react-router';

import { generateRoute } from './utils/localized-routes';
import { isConnected } from './utils/routes-hooks';

/* Components */
import App from './app';
import Users from './components/users';
import Profile from './components/profile';

/* Pages */
import Accounts from './pages/account';
import Login from './pages/login';

import Home from './pages/home';
import Tag from './pages/tag';
import Playlist from './pages/playlist';
import Artists from './pages/artists';
import Music from './pages/music';
import DanceArtists from './pages/dance-artists';
import Videos from './pages/videos';


/* FOOTER */
import About from './pages/footer/about';
import Terms from './pages/footer/terms';
import Privacy from './pages/footer/privacy';
import Advertising from './pages/footer/advertising';
import Contact from './pages/footer/contact';

import Artist from './pages/artist';
import DanceArtist from './pages/dance-artist';
import MusicSong from './pages/music-song';
import Video from './pages/video';
import Staff from './pages/staff';
import NotFound from './pages/not-found';
/* Admin */
import AdminNotifications from './pages/admin/notifications';
import AdminPosts from './pages/admin/posts';
import AdminVideoBanners from './pages/admin/video-banners';
import AdminTags from './pages/admin/tags';
import AdminErrors from './pages/admin/errors';
import AdminPerformance from './pages/admin/performance';
import AdminPlaylists from './pages/admin/playlists';

export default function (flux) { /* eslint react/display-name: 0 */
  return (
    <Route component={App}>
      {generateRoute({
        paths: ['/'],
        component: Home,
      })}
      {generateRoute({
        paths: ['/en-US', '/home/'],
        component: Home,
        locale: 'en',
      })}
      {generateRoute({
        paths: ['/es-ES', '/inicio/'],
        component: Home,
        locale: 'es',
      })}
      {generateRoute({
        paths: ['/pl-PL', '/strona-domowa/'],
        component: Home,
        locale: 'pl',
      })}
      {generateRoute({
        paths: ['/account/', '/mon-compte/'],
        component: Accounts,
        onEnter: isConnected(flux),
      })}
      {generateRoute({
        paths: ['/profile/:seed', '/profil/:seed'],
        component: Profile,
      })}
      {generateRoute({
        paths: ['/login/', '/connection/'],
        component: Login,
      })}
      {generateRoute({
        paths: ['/users/', '/utilisateurs/'],
        component: Users,
      })}
      {generateRoute({
        paths: ['/en-US/dancers/', '/pl-PL/tancerze/', '/es-ES/bailar/'],
        component: DanceArtists,
      })}
      {generateRoute({
        paths: ['/en-US/videos/', '/pl-PL/filmy/', '/es-ES/videos/'],
        component: Videos,
      })}
      {generateRoute({
        paths: ['/en-US/staff/', '/pl-PL/ulubione/', '/es-ES/favorito/'],
        component: Staff,
      })}
      {generateRoute({
        paths: ['/en-US/artists/', '/pl-PL/artisci/', '/es-ES/artistas/'],
        component: Artists,
      })}
      {generateRoute({
        paths: ['/en-US/music/', '/pl-PL/muzyka/', '/pl-PL/piosenka/', '/es-ES/musica/'],
        component: Music,
      })}
      {generateRoute({
        paths: ['/en-US/artist/:artistid', '/pl-PL/artysta/:artistid', '/es-ES/artista/:artistid'],
        component: Artist,
      })}
      {generateRoute({
        paths: ['/en-US/dance/:artistid', '/pl-PL/tancerz/:artistid', '/es-ES/baila/:artistid'],
        component: DanceArtist,
      })}
      {generateRoute({
        paths: ['/en-US/music/:musicid', '/pl-PL/piosenka/:musicid', '/pl-PL/muzyka/:musicid', '/es-ES/canto/:musicid', '/es-ES/musica/:musicid'],
        component: MusicSong,
      })}
      {generateRoute({
        paths: ['/en-US/video/:videoid', '/pl-PL/film/:videoid', '/es-ES/video/:videoid'],
        component: Video,
      })}
      {generateRoute({
        paths: ['/tag/:tagname'],
        component: Tag,
      })}
      {generateRoute({
        paths: ['/en-US/playlist/:playlistname', '/pl-PL/lista/:playlistname', '/es-ES/playlist/:playlistname'],
        component: Playlist,
      })}
      {generateRoute({
        paths: ['/en-US/about/', '/pl-PL/onas/', '/es-ES/info/'],
        component: About,
      })}
      {generateRoute({
        paths: ['/en-US/terms/', '/pl-PL/warunki/', '/es-ES/condiciones/'],
        component: Terms,
      })}
      {generateRoute({
        paths: ['/en-US/privacy/', '/pl-PL/warunkikorzystania/', '/es-ES/privacidad/'],
        component: Privacy,
      })}
      {generateRoute({
        paths: ['/en-US/advertising/', '/pl-PL/reklama/', '/es-ES/publicidad/'],
        component: Advertising,
      })}
      {generateRoute({
        paths: ['/en-US/contact/', '/pl-PL/kontakt/', '/es-ES/contacto/'],
        component: Contact,
      })}
      {generateRoute({
        paths: ['/admin/notifications'],
        component: AdminNotifications,
        onEnter: isConnected(flux),
      })}
      {generateRoute({
        paths: ['/admin/posts'],
        component: AdminPosts,
        onEnter: isConnected(flux),
      })}
      {generateRoute({
        paths: ['/admin/banners/'],
        component: AdminVideoBanners,
        onEnter: isConnected(flux),
      })}
      {generateRoute({
        paths: ['/admin/tags/'],
        component: AdminTags,
        onEnter: isConnected(flux),
      })}
      {generateRoute({
        paths: ['/admin/playlists/'],
        component: AdminPlaylists,
        onEnter: isConnected(flux),
      })}
      {generateRoute({
        paths: ['/admin/errors/'],
        component: AdminErrors,
        onEnter: isConnected(flux),
      })}
      {generateRoute({
        paths: ['/admin/performance/'],
        component: AdminPerformance,
        onEnter: isConnected(flux),
      })}
      <Route path="*" component={NotFound} />
    </Route>
  );
}
