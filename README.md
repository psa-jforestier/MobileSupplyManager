# Mobile Supply Manager

**A mobile web application to track your home supply consumption.**

This is a full static website, can be deployed in any static web server. No need for backend in Java, PHP, Python or NodeJS.

### Main features

* Manage any kind of supply (like wood pellet bag, oil of bottle, ...)
* Stock management : purchase (add) or consume (remove) item in the stock, keep track of purchase price and location
* See history of purchasing and consumption
* Work for mobile or desktop web brower
* Use local storage of your web browser to store your supply information
* import / export of your supply via a JSON file or a QR code

See [SPECS.md](SPECS.md) to see full functional and non functional requirements.

## How to run it localy

This application currently will not work by double clicking on the [index.html](index.html) page, because the browser local storage did not work with local file.

You have to use an http, or https web server.

**With python**, run `python -m http.server` from the main folder of the application, and open your browser to [http://localhost:8000](http://localhost:8000).

**With php**, run `php -S 0.0.0.0:8000` from the main folder of the application, and open your browser to [http://localhost:8000](http://localhost:8000).

If you have a **public S3 bucket**, copy all the files of the application to the S3 bucket, with a command like : `aws s3 sync ./ s3://yourbucketname/prefix/  --exclude ".git/*" --exclude ".vscode/*" --exclude ".github/*"`. 
If you have a CloudFront distribution in front of the S3 bucket, don't forget to flush the CloudFront cache with `aws cloudfront create-invalidation --distribution-id DISTRIBUTIONID --paths '/*'`

