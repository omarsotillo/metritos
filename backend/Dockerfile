FROM ruby:2.7.2

RUN apt-get update && apt-get install -y apt-utils tzdata curl && \
    gem update --system && gem install bundler --version 2.1.4 && \
    apt-get install -y libpq-dev 

WORKDIR /app
ENTRYPOINT ["/app/entrypoint.sh"]
CMD ["bundle", "exec", "rackup", "--host", "0.0.0.0", "-p", "3000"]

ADD Gemfile Gemfile.lock .ruby-version ./
RUN bundle install --jobs 5 --frozen

COPY . ./
