# Crafty Theme

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/wewillcraft/crafty-theme)

Clean hand-crafted theme for [Hugo](https://gohugo.io).

## Branch set up

```bash
$ git branch
main             # the main development branch where all pull requests will be merged to
gh-pages         # the branch that GitHub pages will serve the files from
id-your-feature  # additional development branches for new features
```

## Local Development

1.  Install [Hugo](https://gohugo.io/getting-started/installing/) on your machine.
2.  File a [new issue](https://github.com/wewillcraft/crafty-theme/issues) for the feature you want to work on.
3.  From the `main` branch, create a new branch for your feature, (ideally) using `id-your-feature` as the format.
4.  Work on your feature.
5.  Run `hugo server -D` to start the development server.
6.  Once everything is good, push your commits and create a new pull request to `main`.

## Gitpod Development

1.  Install the [Gitpod browser extension](https://chrome.google.com/webstore/detail/gitpod-dev-environments-i/dodmmooeoklaejobgleioelladacbeki).
2.  File a [new issue](https://github.com/wewillcraft/crafty-theme/issues) for the feature you want to work on.
3.  Click the newly added `Gitpod` button on the issue you created.
4.  Work on your feature.
5.  Local hugo server should be running on the background. Otherwise, run `hugo server --baseUrl $(gp url 1313) --appendPort=false`.
6.  Once everything is good, push your commits and create a new pull request to `main`.

## Comments

This theme uses [Utterances](https://utteranc.es/) for the comments.
Follow the [configuration instructions](https://utteranc.es/#configuration) to install the app to your repository.

Add the following to your `config.toml`:

```toml
[params.utterances]
  repo = "repo-owner/comments-repo-name"
  theme = "preferred-color-scheme"
  issueTerm = "pathname"
  issueNumber = ""
  issueLabel = ""
```

| attribute     | description                                                                                                                                           | choices                                                                                                                             | default          |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| `repo`        | The repository that Utterances will use.                                                                                                              |                                                                                                                                     | `""`             |
| `theme`       | Choose an Utterances theme that matches your blog.                                                                                                    | `"github-light"`, `"github-dark"`, `"github-dark-orange"`, `"icy-dark"`, `"dark-blue"`, `"photon-dark"`, `"preferred-color-scheme"` | `"github-light"` |
| `issueTerm`   | Choose the mapping between blog posts and GitHub issues. See description of each value below.                                                         | `"pathname"`, `"url"`, `"title"`, `"og:title"`, `"<CUSTOM TERM>"`                                                                   | `"pathname"`     |
| `issueNumber` | You configure Utterances to load a specific issue by number. You can use this instead of `issueTerm`. Note that issues are not automatically created. |                                                                                                                                     | `""`             |
| `issueLabel`  | The label that will be assigned to issues created by Utterances.                                                                                      |                                                                                                                                     | `""`             |

### Values for `issueTerm`

-   `"pathname"` - Utterances will search for an issue whose title contains the blog post's pathname URL component.
-   `"url"` - Utterances will search for an issue whose title contains the blog post's URL.
-   `"title"` - Utterances will search for an issue whose title contains the blog post's title.
-   `"og:title"` - Utterances will search for an issue whose title contains the page's [Open Graph](https://ogp.me) title meta.
-   `"<CUSTOM TERM>"` - You configure Utterances to search for an issue whose title contains a specific term of your choosing. The issue's title will be the term you chose.

If a matching issue is not found, Utterances will automatically create one the first time someone comments on your post.

### Disabling comments for a specific page

Add the following to your front matter:

```yaml
disableComments: true
```

## License

This releases under the [MIT License](./LICENSE.md).
