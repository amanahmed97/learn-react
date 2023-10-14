FROM node:10.16.3-slim as build

# Create a directory for our code
RUN mkdir /code
WORKDIR /code

# Important to copy package-lock.json as well
# The npm ci command depends on package-lock.json
COPY  package.json yarn.lock /code/

# Install dependencies
RUN yarn

# BEGIN: create react app section
COPY tsconfig.json /code/
COPY public /code/public/
# END: create react app section

# BEGIN Angular specific section
COPY tsconfig.json /code/
# END Angular 

COPY src /code/src/

# yarn run build works for both angular and react based projects
RUN yarn build

# This is the runtime image
# At runtime, we typically do not want nodejs
FROM nginx:1.17.4

EXPOSE 80

# This is the default base url for the backend API server
# You should change the default here
# At runtime, you can override by setting -e API_BASE_URL=<http://example.com/api> in docker run command 
ENV API_BASE_URL https://hiway.hashedin.com/api/v1


# By default, nginx will listen to all domain names
# If you only want nginx to respond to specific domain names, change it over here
ENV SERVER_NAME default_server

# Copy the template configuration for nginx
# This template is later changed to default.conf when the container is started
COPY nginx/default.conf.template /etc/nginx/conf.d/default.conf.template

# Copy the compiled static files from the build image
COPY --from=build /code/build/ /var/www/html

# envsubst takes default.conf.template, replaces environment variables and creates default.conf
# This lets us change the API URL or the server dynamically when we run the image
CMD /bin/bash -c "envsubst '\$API_BASE_URL \$SERVER_NAME' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'" 

