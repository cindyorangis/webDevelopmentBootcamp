const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

const port = 3000;

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const articleSchema = {
  title: String,
  content: String,
};

const Article = mongoose.model("Article", articleSchema);

// Requests Targetting All Articles
app
  .route("/articles")

  .get((req, res) => {
    Article.find((err, foundArticles) => {
      if (err) {
        res.send(err);
      } else {
        res.send(foundArticles);
      }
    });
  })

  .post((req, res) => {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });

    newArticle.save((err) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Successfully added a new article");
      }
    });
  })

  .delete((req, res) => {
    Article.deleteMany((err) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Successfully deleted all articles");
      }
    });
  });

// Requests Targetting a Specific Article
app
  .route("/articles/:articleTitle")

  .get((req, res) => {
    Article.findOne({ title: req.params.articleTitle }, (err, foundArticle) => {
      if (foundArticle) {
        res.send(foundArticle);
      } else {
        res.send("No articles matching that title was found.");
      }
    });
  })

  .put((req, res) => {
    Article.update(
      { title: req.params.articleTitle },
      { title: req.body.title, content: req.body.content },
      { overwrite: true },
      (err) => {
        if (err) {
          res.send(err);
        } else {
          res.send("Successfully updated article");
        }
      }
    );
  })

  .patch((req, res) => {
    Article.update(
      { title: req.params.articleTitle },
      { $set: req.body },
      (err) => {
        if (err) {
          res.send(err);
        } else {
          res.send("Successfully updated article");
        }
      }
    );
  })

  .delete((req, res) => {
    Article.deleteOne({ title: req.params.articleTitle }, (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Successfully deleted the selected article");
      }
    });
  });

app.listen(port, () => {
  console.log("Server started on port " + port);
});
