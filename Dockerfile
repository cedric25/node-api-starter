FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Installing all dependencies *before* copying your source code allows Docker to reuse the previously cached layer
# in case your list of dependencies doesn't change --> More efficient

# Bundle app source
COPY . .

EXPOSE 3001

# At the end, set the user to use when running this image
USER node

# Bypass NPM script, which reduces the number of processes running inside of your container.
# Secondly it causes exit signals such as SIGTERM and SIGINT to be received by the Node.js process instead of npm swallowing them.
CMD [ "node", "server" ]
