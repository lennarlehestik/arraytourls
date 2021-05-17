const get = () => {
  const print = (item) => {
      var a = document.createElement('a');
      var linkText = document.createTextNode(item);
      a.appendChild(linkText);
      a.title = item;
    a.target = "_blank"
      a.href = item;
      document.body.appendChild(a);
  }
  eval(document.getElementById('arr').value).forEach((i) => print(i))
}