---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<div class="container">
  <div class="jumbotron p-4 p-md-5 text-white rounded bg-dark">
    {% for post in site.posts limit: 1 %}
    <div class="col-md-6 px-0">
      <h1 class="display-4 font-italic">{{ post.title }}</h1>
      <p class="lead my-3">{% if post.description %}{{ post.description }}{% else %}{{ site.description }}{% endif %}</p>
      <p class="lead mb-0"><a href="{{ post.url }}" class="text-white font-weight-bold">Continue reading...</a></p>
    </div>
    {% endfor %}
  </div>

  <div class="row mb-2">
    {% for post in site.posts limit: 2 %}
    <div class="col-md-6">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">{{ post.categories[0] }}</strong>
          <h3 class="mb-0">{{ post.title }}</h3>
          <div class="mb-1 text-muted">{{ post.date | date: "%b %-d, %Y" }}</div>
          <p class="card-text mb-auto">{% if post.description %}{{ post.description }}{% else %}{{ site.description }}{% endif %}</p>
          <a href="{{ post.url }}" class="stretched-link">Continue reading</a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>

<main role="main" class="container">
  <div class="row">
    <div class="col-md-8 blog-main">
      <h3 class="pb-4 mb-4 font-italic border-bottom">
        Recent Posts
      </h3>
      {% for post in site.posts limit: 5 %}
          <div class="blog-post">
            <h1 class="blog-post-title"><a href="{{ post.url }}">{{ post.title }}</a></h1>
            <p class="blog-post-meta">{{ post.date | date: "%b %-d, %Y" }}{% if post.author %} • {{ post.author }}{% else %} • {{ site.author }}{% endif %}{% if post.meta %} • {{ post.meta }}{% endif %}</p>
            {{ post.content }}
          </div><!-- /.blog-post -->
      {% endfor %}
    </div><!-- /.blog-main -->
    {% include sidebar.html %}
  </div><!-- /.row -->
</main><!-- /.container -->