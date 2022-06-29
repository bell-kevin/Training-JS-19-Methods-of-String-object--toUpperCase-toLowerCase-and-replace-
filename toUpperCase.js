function alienLanguage(string){
  //coding here...
  string = string.toUpperCase();
  var words = string.split(' ');

  for (var i=0; i<words.length; i++)
    {
      var x = words[i];
      var y = x.length-1;
      words[i] = x.slice(0,y) + x[y].toLowerCase();
    }
  return words.join(' ');
}
