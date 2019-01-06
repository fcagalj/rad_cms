exports = module.exports = function (app) {


  app.get('/index.html', function (req, res) {
    // Render some simple boilerplate html
    function renderFullPage() {
      // Note the div class name here, we will use that as a hook for our React code
      return `
		<!doctype html>
		<html>
			<head>
				<title>Keystone CMS With React And Redux</title>
			</head>
      <body>
        <div class="react-container">
        </div>
				<script src="bundle.js"></script>
			</body>
		</html>
		`;
    }
    // Send the html boilerplate
    res.send(renderFullPage());
  });
};
