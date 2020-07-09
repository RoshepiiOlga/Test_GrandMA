//Exercise 1

function numberToEnglish(n) {
  var string = n.toString(),
      units,
      tens,
      scales,
      start,
      end,
      chunks,
      chunksLen,
      chunk,
      ints,
      i,
      word,
      words;
  string = string.replace(/[, ]/g,"");

  if( parseInt( string ) === 0 ) {
    return 'zero';
  }

  units = [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];
  tens = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];
  scales = [ '', 'thousand', 'million'];
  start = string.length;
  chunks = [];

  while( start > 0 ) {
    end = start;
    chunks.push( string.slice( ( start = Math.max( 0, start - 3 ) ), end ) );
  }

  chunksLen = chunks.length;

  if( chunksLen > scales.length ) {
    return '';
  }

  words = [];
  for( i = 0; i < chunksLen; i++ ) {
    chunk = parseInt( chunks[i] );
    if( chunk ) {
      ints = chunks[i].split( '' ).reverse().map( parseFloat );
      if( ints[1] === 1 ) {
        ints[0] += 10;
      }
      if( ( word = scales[i] ) ) {
        words.push( word );
      }
      if( ( word = units[ ints[0] ] ) ) {
        words.push( word );
      }
      if( ( word = tens[ ints[1] ] ) ) {
        words.push( word + " " + "-" );
      }
      if( ints[0] || ints[1] ) {
        if( ints[2] || ! i && chunksLen ) {
          words;
        }
      }
      if( ( word = units[ ints[2] ] ) ) {
        words.push( word + ' hundred' );
      }
    }
  }
  return words.reverse().join( ' ' );
}

document.getElementById('number').onkeyup = function () {
  document.getElementById('str').innerHTML = numberToEnglish(document.getElementById('number').value);
};
