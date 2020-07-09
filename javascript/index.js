//Exercise 2

function findSource(){
  // Create random array of numbers
  let ground = createFrame();
  // Show origin array
  document.getElementById("resultBlack").innerHTML = ground.join('<br>');
  // Find and move inner picture
  movePicture(ground);
};

function movePicture(ground){
  const picWidth = parseInt(document.getElementById('pic_width').value),
        picheight = parseInt(document.getElementById('pic_height').value),
        pic_x = parseInt(document.getElementById('pic_x').value),
        pic_y = parseInt(document.getElementById('pic_y').value);

  for (var j = pic_y; j < picheight+1; j++) {
    let picRow = ground[j].slice(pic_x, picWidth + 1);
    ground[j - pic_y].splice(0, picWidth, ...picRow);
  }
  document.getElementById("resultGreen").innerHTML = ground.join('<br>');
}

function createFrame(){
  const frame_width = document.getElementById('frame_width').value,
        frame_height = document.getElementById('frame_height').value;
  let ground = [];

  for (var i = 0 ; i < frame_width; i++) {
    ground[i] = [];
    for (var j = 0; j < frame_height; j++) {
      ground[i][j] = (Math.random() * 5 | 0) + 6;
    }
  }
  return ground;
};

