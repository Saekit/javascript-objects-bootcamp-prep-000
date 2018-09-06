var playlist = {
  Childish Gambino: 'This is America',
}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}
