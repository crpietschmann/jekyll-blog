---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

<!-- Carousel -->
<div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
  <div class="carousel-indicators">
    {% for post in site.posts limit:3 %}
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="{{ forloop.index0 }}" {% if forloop.first %}class="active" aria-current="true"{% endif %} aria-label="Slide {{ forloop.index }}"></button>
    {% endfor %}
  </div>
  <div class="carousel-inner">
    {% for post in site.posts limit:3 %}
    <div class="carousel-item {% if forloop.first %}active{% endif %}">
      <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
      <div class="container">
        <div class="carousel-caption {% if forloop.index == 1 %}text-start{% elsif forloop.index == 3 %}text-end{% endif %}">
          <h1>{{ post.title }}</h1>
          <p class="opacity-75">{% if post.excerpt %}{{ post.excerpt | strip_html | truncate: 150, "..." }}{% endif %}</p>
          <p><a class="btn btn-lg btn-primary" href="{{ post.url | prepend: site.baseurl }}">Read more</a></p>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<!-- Marketing messaging and featurettes
================================================== -->
<!-- Wrap the rest of the page in another container to center all the content. -->

<div class="container marketing">

  <!-- Three columns of text below the carousel -->
  <div class="row">
    {% for post in site.posts offset:3 limit:3 %}
    <div class="col-lg-4">
      <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/></svg>
      <h2 class="fw-normal">{{ post.title | truncate: 40 }}</h2>
      <p>{% if post.excerpt %}{{ post.excerpt | strip_html | truncate: 120, "..." }}{% endif %}</p>
      <p><a class="btn btn-secondary" href="{{ post.url | prepend: site.baseurl }}">View details &raquo;</a></p>
    </div><!-- /.col-lg-4 -->
    {% endfor %}
  </div><!-- /.row -->

  <!-- START THE FEATURETTES -->

  <hr class="featurette-divider">

  {% assign featurette_posts = site.posts | offset: 6 | limit: 3 %}
  {% for post in featurette_posts %}
  <div class="row featurette">
    <div class="col-md-7 {% if forloop.index == 2 %}order-md-2{% endif %}">
      <h2 class="featurette-heading fw-normal lh-1">{{ post.title }} <span class="text-body-secondary">{% if post.categories[0] %}{{ post.categories[0] | capitalize }}{% endif %}</span></h2>
      <p class="lead">{% if post.excerpt %}{{ post.excerpt | strip_html | truncate: 200, "..." }}{% endif %}</p>
      <p><a class="btn btn-primary" href="{{ post.url | prepend: site.baseurl }}">Read full article</a></p>
    </div>
    <div class="col-md-5 {% if forloop.index == 2 %}order-md-1{% endif %}">
      <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
    </div>
  </div>

  {% unless forloop.last %}
  <hr class="featurette-divider">
  {% endunless %}
  {% endfor %}

  <hr class="featurette-divider">

  <!-- /END THE FEATURETTES -->

</div><!-- /.container -->