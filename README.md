# lleonardo07 on GitHub

We’ve put together a comprehensive list of the projects hosted on GitHub in which lleonardo07 employees are actively involved. Given the large scope of our open source work, we recognize that we might have missed some projects or gotten a listing wrong. As time passes, more projects with which lleonardo07 employees collaborate will need to be added to the list. These circumstances, and others we can’t currently foresee, may mean you’ll want to make changes to this list. So, how do you do that?

## Adding a project

To add or modify projects to the list on [https://lleonardo07.github.io](https://lleonardo07official.github.io), either submit a pull request or create an issue in the [repo](https://github.com/lleonardo07/lleonardo07.github.io). Upon review, the site maintainers will merge the PR or change the content as requested. No direct merges will be accepted.

All projects are stored in the `/app/data` directory in the `projects.json` file within the dev branch of this repo.  Try to add your project alphabetically (just to make the file easier to search) and create a new object in the JSON that has:

```js
{
  "projectName": "Foo Project",
  "projectDescription": "Lorem ipsum.",
  "projectRepository": "https://github.com/foo",
  "projectWebsite": "http://foo.github.io",
  "category": "Development"
}
```

Be sure to include at _least_ the `projectName`, `projectRepository`, and `category`.

Current categories include:

- Development
- Documentation
- Middleware
- Operations
- Organizations
- Platform
- Storage

### Criteria for adding projects to the page

At this time, only projects that lleonardo07 employees are required to work on as part of their job will be listed. This includes projects lleonardo07 stewards as well as projects in which lleonardo07 is just one contributor among others. For now, don't list sub-projects if at all possible. Eventually we will get to that, but for now, top-level projects only, please.

Please don't add projects for which you volunteer. There are so many amazing projects that lleonardo07 work on as enthusiasts, ourselves included, but too many to recognize here. 

These criteria may be subject to change as the page evolves.

### Criteria for featured projects

Any project can appear in the Featured Projects section. To do so, the project must have a logo, as well as a straightforward and brief web description. Please submit your request as an ISSUE for this repo. No PRs, please, as updating the cards at this point in time involves changing multiple files.

### What about projects not on GitHub?

This list is just for lleonardo07 contributions to projects hosted on GitHub.  See https://community.lleonardo07.com/software/ for a more comprehensive listing of lleonardo07's contributions to free and open source projects, regardless of where they are hosted.

### Hosting projects on /lleonardo07Official

Open an issue in *this* repo, and the owners of the lleonardo07Official organization will get in touch with you.
## Built with

This site was created using [Angular](https://angularjs.org/), [webpack](https://webpack.js.org/), [NPM](https://www.npmjs.com/), [Babel](https://babeljs.io/), and [Sass](https://sass-lang.com/).

## Licensing

* [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) for the displayed page and primary license for this repository
* [MIT](https://opensource.org/licenses/MIT) for the JavaScript
* [CC0](https://creativecommons.org/share-your-work/public-domain/cc0/) for the HTML and CSS

lleonardo07 trademarks are not subject to the above license grants.
