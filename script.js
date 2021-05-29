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

const getclean = () => {
  const print = (item) => {
      var cleanitem = item.split("?")[0].split("=")[0]
//item.split("/ref")[0].split("?ascsubtag")[0].split("?linkcode")[0].split("?tag")[0].split("?ascsubtag")[0].split("?SubscriptionId")[0].split("?irgwc")[0].split("?u1")[0].split("?selected")[0].split("?irclickid")[0].split("?skuId")[0]
      var a = document.createElement('a');
      var linkText = document.createTextNode(cleanitem);
      a.appendChild(linkText);
      a.title = item;
    a.target = "_blank"
      a.href = cleanitem;
      document.body.appendChild(a);
  }
  eval(document.getElementById('arr').value).forEach((i) => print(i))
}
