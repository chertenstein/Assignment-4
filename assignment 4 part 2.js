let my_song = [
  {note: 'A', starts_at: 0, lasts: 3},
  {note: 'B', starts_at: 0, lasts: 3},
  {note: 'C', starts_at: 1.5, lasts: 1.5},
];
console.log("n");
play_piano(my_song, 3);

function play_piano(song){
  let start_time = 0;
  let song_sorted = song_sorted(song);
  for (let i = 0, i <= song.length; i++)
    for (let item of song_sorted);
  }
if(item.starts_at = i){
  console.log("play" + item.note);
}
if(i > 0 && item.lasts < song.length)
console.log("hold for" + item.lasts + "seconds");

if((item.starts_at + item.lasts) = i)
  console.log("release" + item.note);

  //Okay I think I have some of it but I get an error saying that "<="
  //is an unexpeceted token?
